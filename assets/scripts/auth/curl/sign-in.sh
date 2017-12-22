#!/bin/bash

# sh assets/scripts/auth/curl/sign-in.sh
# EMAIL=wb PASSWORD=wb1

curl "http://tic-tac-toe.wdibos.com/sign-in" \
  --include \
  --request POST \
  --header "Content-Type: application/json" \
  --data '{
  "credentials": {
    "email": "'"${EMAIL}"'",
    "password": "'"${PASSWORD}"'"
  }
}'

echo
