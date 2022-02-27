let imDead = true;
let imALive = !imDead;

let deadOrAlive = imDead || imALive;

let deadAndALive = imDead && imALive;

let ALiveAndNotDead = imALive && !imDead;

let aLiveMessage = imALive ? "estoy vivo" : "estoy muerto";

console.log(deadOrAlive, deadAndALive, ALiveAndNotDead, aLiveMessage);
