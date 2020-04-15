// var my_dudes = [
//     'Chinmayi',
//     'Kamath',
//     'Accamma',
//     'Nithin',
//     'Shailesh',
//     'Bhavin',
//     'Nataraja',
//     'Srihari',
//     'Raghavendra',
//     'Chinmai',
//     'Sherrie'
// ];

// function randomWord(){
//     return my_dudes[Math.floor(Math.random() * my_dudes.length)].toLowerCase();
// }

//export {randomWord};

const arr = [
    {name: "chinmayi", description: "Most calm person of Vodafone", hint: "Also a good cook"},
    {name: "kamath", description: "Wants to die", hint: "Master of jokes"},
    {name: "nithin", description: "Person with best hair", hint: "Also a master of jokes"},
    {name: "accamma", description: "Biggest Fraud of Vodafone", hint: "Consumes most of the jokes"},
    {name: "bhavin", description: "Performer of his team", hint: "Jokes about the joke master's being single"},
    {name: "shailesh", description: "Best helper in problems", hint: "Consumes lot of alcohol"},
    {name: "raghavendra", description: "A bro and also a dancer", hint: "Hits on the eunuch"},
    {name: "chandan", description: "Does this person know the bros exist?", hint: "Dead to us"},
    {name: "mamatha", description: "Most talkative", hint: "Was in joke master's cab"},
    {name: "rithu", description: "Sunshine", hint: "It's very very complicated"},
    {name: "nataraja", description: "The biggest bro", hint: "The Joke Master's Guru"},
    {name: "srihari", description: "Supports Arsenal", hint: "Fraud. Also plays PUBG"},
    {name: "vedavyas", description: "Only guy who does something similar to me", hint: "Have done face swap"},
    {name: "liz", description: "Heavy accent", hint: "Did the British even leave India?"},
    {name: "ravi", description: "Handsome dude", hint: "Don't know much"},
    {name: "keerthi", description: "Bro from a different team", hint: "Also watches South Park"}
];


function randomWord(){
    const names = arr.map(el => el.name);
    return names[Math.floor(Math.random() * arr.length)].toLowerCase();
    //my_dudes[Math.floor(Math.random() * my_dudes.length)].toLowerCase();
}
function generateHint(name){
    const elem = arr.filter(el => el.name === name);
    return elem[0].hint;
}
function generateDescription(name){
    const elem = arr.filter(el => el.name === name);
    return elem[0].description;
}


export{randomWord, generateHint, generateDescription};