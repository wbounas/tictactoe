#!/bin/bash

# sh scripts/auth/sign-in.sh
# EMAIL=wb PASSWORD=wb1 or wb2
# sh scripts/game-api/create-game.sh
# TOKEN="token"

curl "http://tic-tac-toe.wdibos.com/games" \
  --include \
  --request POST \
  --header "Content-Type: application/json" \
  --header "Authorization: Token token=${TOKEN}" \
  --data '{}'

echo
