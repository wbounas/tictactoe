#!/bin/bash

# sh assets/scripts/auth/curl/change-pw.sh
# ID=1791 TOKEN="token" OLD=old_password NEW=new_password

curl "http://tic-tac-toe.wdibos.com/change-password/${ID}" \
  --include \
  --request PATCH \
  --header "Content-Type: application/json" \
  --header "Authorization: Token token=${TOKEN}" \
  --data '{
    "passwords": {
      "old": "'"${OLD}"'",
      "new": "'"${NEW}"'"
    }
  }'

echo
