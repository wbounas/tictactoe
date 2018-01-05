# Will's Tic-Tac-Toe Project

## About
Tic-Tac-Toe, a game believed to have been played as far back as Ancient Egypt, was the goal of our first project in WDI-22 in General Assembly Boston. We were tasked with connecting to a back-end Rails API where a user can create an account to then sign in, play games, or change their password, all while saving their statistics (games won, lost, or tied).

## Technologies Used
- HTML5
- CSS3
- JavaScript
- jQuery
- AJAX
- Sass
- Bootstrap

## Planning
__Wireframes__:
- [Version 1](https://i.imgur.com/ZOyFUMz.jpg)
- [Version 2a](https://i.imgur.com/vSKeZwh.jpg)
- [Version 2b](https://i.imgur.com/xsOJZyZ.jpg)

Originally, I had wanted my project to be very easy to understand for the end user. On the left side, you log in; on the right side, you play the game and have information about the game. Under the game board itself, there would be information about the game as it is being played.

As the development of the game continued, some changes were made to the original design, but the main design remained mostly unchanged.

## User Stories
- As a user, I want to see whose turn it is in the game at any point.
- As a user, I don’t want to be able to make invalid moves at any point.
- As a power user, I would like to see past stats from older games.
- As a curious user, I would like to see a README that features good documentation.
- As a casual user, I would like to clearly see who won or tied a game once it’s over.
- As an addicted user, I would like to play multiple games in a row.
- As a newbie user, I would like the page to never fully refresh, giving me an immersive user experience.

## Action Plan (Development Schedule)
1. Finish Planning
  - Wireframes
  - User Stories

1. Preliminary Set Up
    - Download and Edit Browser Template
    - Create Github Repo
    - Deploy to GH Pages

1. Game Engine
    - Create Empty Board in JS
    - Add to Board Logic
    - Turn rotates between X and O
    - Game always starts with X
    - Cannot choose already occupied space
    - Check board for winner

1. Authentication
    - Sign Up
      - CURL
      - AJAX
      - Success / Failure Messages
    - Sign In
      - CURL
      - AJAX
      - Success / Failure Messages
    - Change Password
      - CURL
      - AJAX
      - Success / Failure Messages
    - Sign Out
      - CURL
      - AJAX
      - Success / Failure Messages

1. Game UI
  - Design Game Board
  - Add click handler when space is clicked on board
    - If valid space, add player’s X or O
    - DO not allow adding to invalid space
    - Do not allow adding X or O after game is over
  - Update game engine when board is updated
  - Add messaging for turn changes
  - Add messaging for invalid space selection
  - Add messaging for game over state (win or draw)

1. Game API
  - Create Game, Start New Game
    - CURL
    - AJAX
  - Update Game, Play the Game
    - CURL
    - AJAX
  - Get Games
    - CURL
    - AJAX

1. Final Touches
  - README
  - Troubleshoot / Debug
  - Style

- Stretch Goals
    - Online Multiplayer Support
    - Table-side Chat

## Development
### Game Logic

The first thing that I set out to tackle for this project was actually creating the game inside of JavaScript. So, I created a game-engine.js file and started with an empty array that matched what I had seen from the Game API documentation (however, not inside of an object!). Using this single array, I built functions that changed players, changed turns, set markers inside of the array, checked for winning combinations, and even created a mock "game" where based on the turn number, a player would set a marker inside of the array.

I thought at first, that this was working wonderfully (which it was, in the very limited scope I unknowingly defined). I then created my baseline design in HTML and CSS, and then my problems started.

I was at the time sharing a global variable turnNumber in my game-engine.js file with my game/events.js file. For a while, I could not figure out why I could only mark an X onto the board that I had built in HTML/CSS. After many console.logs, I realized that while the turnNumber in game-engine.js was changing, the shared variable inside of game/events.js was remanining the same throughout. Then, it hit me. This variable turnNumber inside of game/events.js was actually a seperate value than the one inside of game-engine.js. Instead, I would need to use a reference-type of data, versus a primitive. I then made the decision, I will scrap all of my game logic and start fresh with a 'game' object that resembles exactly (with some additions) that which the API returns to you.

This new 'game' object features methods that I utilize throughout my code to determine things such as the current player whose turn it is, who has won, testing to determine if a cell on the board is currently empty, as well as setting game status, which I have locally expanded to include a winner property and a draw property.

### Communicating with the API

After successfully testing each API call with a curl script, I built all of my AJAX calls inside of independent JavaScript files relative to their purpose (auth or game). This enabled me to be assured that the API was functioning properly, and that I can expect my AJAX calls to work correctly.

## Future Iterations
In the future, I would like to incorporate the following features or changes to this project:

- Feature Online Multiplayer Support
- Feature Table-Side Chat for Multiplayer Users
- Allow Users to Complete Past Games
- Allow Users to Play Offline
- Improve UX/UI for Game
  - I do not like that the entire SPA is not viewable without scrolling, I would like to re-design the game to be playable without the need to scroll up or down.
