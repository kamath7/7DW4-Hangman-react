var my_dudes = [
    'Chinmayi',
    'Kamath',
    'Accamma',
    'Nithin',
    'Shailesh',
    'Bhavin',
    'Nataraja',
    'Srihari',
    'Raghavendra',
    'Chinmai',
    'Sherrie'
];

function randomWord(){
    return my_dudes[Math.floor(Math.random() * my_dudes.length)].toLowerCase();
}

export {randomWord};