let raceNumber = Math.floor(Math.random() * 1000);

const registered = false;

const runnersage = 21;

if (runnersage > 18 && registered){
    raceNumber+=1000
}
if (runnersage > 18 && registered){
    console.log(`you will race at 9:30am and your racename is ${raceNumber}`);
}
else if (runnersage >18 && !registered){
    console.log(`you will race at 11:00am and your racenumber is ${raceNumber}`);
}
else if (runnersage <18){
    console.log(`you will race at 12:30and your racenumber is ${racenumber}`);
}
else if(runnersage ===18){
    console.log(`please see registration desk`);
}










