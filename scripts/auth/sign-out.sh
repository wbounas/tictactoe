#!/bin/bash

# sh assets/scripts/auth/curl/sign-out.sh
# ID=1791 TOKEN="token"

curl "http://tic-tac-toe.wdibos.com/sign-out/${ID}" \
  --include \
  --request DELETE \
  --header "Content-Type: application/json" \
  --header "Authorization: Token token=${TOKEN}"

echo
