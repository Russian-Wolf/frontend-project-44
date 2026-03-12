
# Brain Games

## Student's project by Russian_Wolf

## Description

A few games that can be played inside of a terminal. Each game lasts for up to 3 rounds, if answered correctly.

### Games list:
- brain-even: *Answer if given random numbers are even or not.*
- brain-calc *Calculate results of given expressions.*
- brain-gcd *Calculate the greatest common divider for given pairs of numbers.*
- brain-progression *Guess what number is hidden, given a few numbers of progression.*
- brain-prime *Answer if given numbers are prime or not.*

## System requirements

  

- [Git](https://git-scm.com/)

- [Node.js](https://nodejs.org/)

- Make (optional)
  

## *Installation*

1) Clone project from github. This can be done in multiple ways, use your preferred method.

- Using `git clone` console command with SSH (if configured) or HTTPS link provided.

- [GitHub Desktop](https://desktop.github.com/download/) (or similar)

I use the latter, so here are a few screenshots for that process:

![GitHub Desktop Installation Image 1](https://raw.githubusercontent.com/Russian-Wolf/frontend-project-44/de4987117bf0e6536cc70d508d6d9061a0538e71/screenshots/GitHubDesktop_clone_1.png)
![GitHub Desktop Installation Image 2](https://github.com/Russian-Wolf/frontend-project-44/blob/de4987117bf0e6536cc70d508d6d9061a0538e71/screenshots/GitHubDesktop_clone_2.png?raw=true)
  
 2) Install necessary npm modules. Open terminal inside working directory, where you've cloned this project. If you have Make installed type `make install`, alternatively you can use `npm ci` command.

3) (Optional) You can link this project, making it globally usable with simple commands, typing `npm link`. After that step you will be able to run games like this: `brain-even`.

## Usage

- If you've done all steps of installation, just type any game from the games list, and it should work.
- If you've skipped step 3, you can run games using node on any files located inside bin/ folder, like this: `node bin/brain-even.js`.
- Also, if you have Make installed, you can use make commands instead: `make brain-even`.

## Game example:
1) Here's the start of the game, it will ask your name, you can type anything you want there. It will be used at welcome and end portions of any game.
![Game example start screenshot 1](https://github.com/Russian-Wolf/frontend-project-44/blob/82f08c0d07c29d86c477c49270d1a42705889c35/screenshots/Game_Example_1.png?raw=true)

2) I've answered here with my nickname, and, after greeting us, game question is shown along with first round data provided and awaits our input:
![Game example start screenshot 2](https://github.com/Russian-Wolf/frontend-project-44/blob/82f08c0d07c29d86c477c49270d1a42705889c35/screenshots/Game_Example_2.png?raw=true)
3) If you fail, you will get failure message (it will contain correct answer) and the game will end. Here's my game failed:
![Game example fail screenshot](https://github.com/Russian-Wolf/frontend-project-44/blob/82f08c0d07c29d86c477c49270d1a42705889c35/screenshots/Game_Example_Fail.png?raw=true)

4) If you answer correctly, you will get confirmation and next game data, question remains the same. If you answer all 3 rounds correctly, you will get win message and the game will end. Here, I've restarted the same game and won it:
![Game example win screenshot](https://github.com/Russian-Wolf/frontend-project-44/blob/82f08c0d07c29d86c477c49270d1a42705889c35/screenshots/Game_Example_Win.png?raw=true)

### Hexlet tests and linter status:

[![Actions Status](https://github.com/Russian-Wolf/frontend-project-44/actions/workflows/hexlet-check.yml/badge.svg)](https://github.com/Russian-Wolf/frontend-project-44/actions)

  

### SonarQube quality gate status:

[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=Russian-Wolf_frontend-project-44&metric=alert_status)](https://sonarcloud.io/summary/new_code?id=Russian-Wolf_frontend-project-44)
