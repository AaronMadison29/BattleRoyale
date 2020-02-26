var player = {
    name: "Player ",
    score: 0,
}
var players = [];
var round = 1;
    
for(let x = 1; x < 11; x++)
{
    var thisPlayer = Object.create(player);
    thisPlayer.name += x;
    thisPlayer.score = 0;
    players.push(thisPlayer);
}

function RunRound(){
    document.getElementById("winner").style.display = "none";
    document.getElementById("PlayButton").innerHTML = "Next Round";
    document.getElementById("output").style.visibility = "visible";
    document.getElementById("output").innerHTML = "<tr>" + "<th>" + "Round " + round + "</th>" + "</tr>";
    document.getElementById("output").innerHTML = "<tr>" + "<th>" + "Player" + "</th>" + "<th>" + "Score" + "</th>" + "</tr>";
    switch(round)
    {
        case 1:
            players = EarlyGame(players);
            break;
        case 2:
            players = EarlyGame(players);
            break;
        case 3:
            players = EarlyGame(players);
            break;
        case 4:
            players = MidGame(players);
            break;
        case 5:
            players = MidGame(players);
            break;
        case 6:
            players = FinalShootout(players);
            break;
    }
    round++;
    if(round === 7)
    {
        ResetGame();
    }
}

function EarlyGame(players)
{
    for(player in players)
    {
        RollDice(players[player]);
    }
    players.sort(function(a, b){return b.score - a.score});
    for(player in players)
    {
        document.getElementById("output").innerHTML += "<tr class:bg-dark;>" + "<td>" + players[player].name + "</td>"  + "<td>" + players[player].score + "</td>"  +  "</tr>";
    }
    players.pop();
    players.pop();
    for(player in players)
    {
        players[player].score = 0;
    }
    return players;
}

function MidGame(players)
{
    for(player in players)
    {
        RollDice(players[player]);
    }
    players.sort(function(a, b){return b.score - a.score});
    for(player in players)
    {
        document.getElementById("output").innerHTML += "<tr>" + "<td>" + players[player].name + "</td>"  + "<td>" + players[player].score + "</td>"  +  "</tr>";
    }
    players.pop();
    for(player in players)
    {
        players[player].score = 0;
    }
    return players;
}

function FinalShootout(players)
{
    document.getElementById("output").innerHTML = "<tr>" + "<th>" + "Player" + "</th>" + "<th>" + "Rolls" + "</th>" + "</tr>";
    players[0].score = FinalDice(players[0]);
    players[1].score = FinalDice(players[1]);
    document.getElementById("winner").style.display = "inline";
    if(players[0].score > players[1].score)
    {
        document.getElementById("winner").innerHTML = "<strong>" + players[0].name + " Wins!" + "<strong>";
        return players[0].name;
    }
    else{
        document.getElementById("winner").innerHTML =  "<strong>" + players[1].name + " Wins!" + "<strong>";
        return players[1].name;
    }
}

function RollDice(player)
{
    player.score += Math.floor(Math.random() * 4) + 1;
    player.score += Math.floor(Math.random() * 6) + 1;
    player.score += Math.floor(Math.random() * 8) + 1;
    player.score += Math.floor(Math.random() * 10) + 1;
    player.score += Math.floor(Math.random() * 12) + 1;
    player.score += Math.floor(Math.random() * 20) + 1;
}

function FinalDice(player)
{
    let rolls = [];

    rolls.push(Math.floor(Math.random() * 20) + 1);
    rolls.push(Math.floor(Math.random() * 20) + 1);
    rolls.push(Math.floor(Math.random() * 20) + 1);
    rolls.push(Math.floor(Math.random() * 20) + 1);
    var choice = Math.floor(Math.random() * 4)
    var rollsString = "";
    for(let x = 0; x < 4; x++)
    {
        if(x == choice){
            rollsString += "(" + rolls[x] + ")" + " ";
        }
        else{
            rollsString += rolls[x] + " ";
        }
    }
    document.getElementById("output").innerHTML += "<tr>" + "<td>" + player.name + "</td>" + "<td>" + rollsString + "</td>" + "</tr>";
    return rolls[choice];
}

function ResetGame()
{
    var player = {
        name: "Player ",
        score: 0,
    }
    round = 1;
    document.getElementById("PlayButton").innerHTML = "Play Again?";
    players = [];
    for (let x = 1; x < 11; x++) {
        var thisPlayer = Object.create(player);
        thisPlayer.name += x;
        thisPlayer.score = 0;
        players.push(thisPlayer);
    }
}
