var football_players = [
    'messi',
    'ronaldo',
    'bissakka',
    'bruno',
    'adebayor',
    'tevez',
    'nasri',
    'fabregas'
];

function randomWord(){
    console.log(football_players[Math.floor(Math.random() * football_players.length)]);
    return football_players[Math.floor(Math.random() * football_players.length)];
}

export {randomWord};