#!/bin/bash
# Monitor redirect chains for fundaciontalentodivergente.org
# Run periodically to verify all URL variants resolve correctly
# Usage: ./scripts/monitor-redirects.sh

DOMAIN="fundaciontalentodivergente.org"
CANONICAL="https://$DOMAIN"
ERRORS=0
TESTS=0

check_url() {
  local url="$1"
  local expected_final="$2"
  local expected_code="$3"
  TESTS=$((TESTS + 1))

  result=$(curl -sIL -o /dev/null -w "%{http_code} %{url_effective}" "$url" 2>/dev/null)
  final_code=$(echo "$result" | awk '{print $1}')
  final_url=$(echo "$result" | awk '{print $2}')

  if [ "$final_code" != "$expected_code" ]; then
    echo "FAIL: $url -> HTTP $final_code (expected $expected_code)"
    ERRORS=$((ERRORS + 1))
  elif [ "$final_url" != "$expected_final" ]; then
    echo "FAIL: $url -> $final_url (expected $expected_final)"
    ERRORS=$((ERRORS + 1))
  else
    echo "PASS: $url -> $final_code $final_url"
  fi
}

echo "=== Redirect Monitor — $(date -u +%Y-%m-%dT%H:%M:%SZ) ==="
echo ""

# Core redirects
check_url "https://$DOMAIN/"                          "$CANONICAL/"              "200"
check_url "http://$DOMAIN/"                           "$CANONICAL/"              "200"
check_url "https://www.$DOMAIN/"                      "$CANONICAL/"              "200"
check_url "http://www.$DOMAIN/"                       "$CANONICAL/"              "200"
check_url "https://$DOMAIN/index.html"                "$CANONICAL/"              "200"
check_url "https://www.$DOMAIN/index.html"            "$CANONICAL/"              "200"

# .html extension redirects
check_url "https://$DOMAIN/quienes-somos.html"        "$CANONICAL/quienes-somos" "200"
check_url "https://$DOMAIN/servicios.html"            "$CANONICAL/servicios"     "200"
check_url "https://$DOMAIN/empresas.html"             "$CANONICAL/empresas"      "200"
check_url "https://$DOMAIN/neurodiversidad.html"      "$CANONICAL/neurodiversidad" "200"
check_url "https://$DOMAIN/aviso-legal.html"          "$CANONICAL/aviso-legal"   "200"
check_url "https://$DOMAIN/politica-privacidad.html"  "$CANONICAL/politica-privacidad" "200"

# Clean URLs
check_url "https://$DOMAIN/quienes-somos"             "$CANONICAL/quienes-somos" "200"
check_url "https://$DOMAIN/servicios"                 "$CANONICAL/servicios"     "200"

# www + page
check_url "https://www.$DOMAIN/quienes-somos"         "$CANONICAL/quienes-somos" "200"

# 404
check_url "https://$DOMAIN/pagina-que-no-existe"      "$CANONICAL/pagina-que-no-existe" "404"

# SSL check
echo ""
echo "=== SSL Check ==="
ssl_expiry=$(echo | openssl s_client -servername "$DOMAIN" -connect "$DOMAIN:443" 2>/dev/null | openssl x509 -noout -enddate 2>/dev/null | cut -d= -f2)
if [ -n "$ssl_expiry" ]; then
  echo "PASS: SSL cert expires $ssl_expiry"
else
  echo "FAIL: Could not retrieve SSL certificate"
  ERRORS=$((ERRORS + 1))
fi

# HSTS check
echo ""
echo "=== HSTS Check ==="
hsts=$(curl -sI "https://$DOMAIN/" | grep -i strict-transport-security)
if echo "$hsts" | grep -q "max-age="; then
  echo "PASS: $hsts"
else
  echo "FAIL: HSTS header missing"
  ERRORS=$((ERRORS + 1))
fi

echo ""
echo "=== Results: $((TESTS - ERRORS))/$TESTS passed, $ERRORS failures ==="
exit $ERRORS
