'use strict'

# sh scripts/auth/sign-in.sh
# EMAIL=wb PASSWORD=wb1 or wb2
# sh scripts/game-api/create-game.sh
# TOKEN="token"
# sh scripts/game-api/update-game.sh
# ID=id of game TOKEN="token"

curl "http://tic-tac-toe.wdibos.com/games/${ID}" \
  --include \
  --request PATCH \
  --header "Content-Type: application/json" \
  --header "Authorization: Token token=${TOKEN}" \
  --data '{
    "game": {
      "cell": {
        "index": 0,
        "value": "x"
      },
      "over": false
    }
  }'

echo
