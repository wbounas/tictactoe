#!/bin/bash

# sh scripts/auth/sign-in.sh
# EMAIL=wb PASSWORD=wb1
# sh scripts/game-api/get-game-id.sh
# ID=id of game TOKEN="token"

curl "http://tic-tac-toe.wdibos.com/games/${ID}" \
  --include \
  --request GET \
  --header "Content-Type: application/json" \
  --header "Authorization: Token token=${TOKEN}" \

echo
