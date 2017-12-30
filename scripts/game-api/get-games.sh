#!/bin/bash

# sh scripts/game-api/get-games.sh
# TOKEN="token"

curl "http://tic-tac-toe.wdibos.com/games" \
  --include \
  --request GET \
  --header "Content-Type: application/json" \
  --header "Authorization: Token token=${TOKEN}" \

echo
