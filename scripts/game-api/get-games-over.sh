#!/bin/bash

# sh scripts/auth/sign-in.sh
# EMAIL=wb PASSWORD=wb1
# sh scripts/game-api/get-games-over.sh
# TOKEN="token"

curl "http://tic-tac-toe.wdibos.com/games?over=true" \
  --include \
  --request GET \
  --header "Content-Type: application/json" \
  --header "Authorization: Token token=${TOKEN}" \

echo
