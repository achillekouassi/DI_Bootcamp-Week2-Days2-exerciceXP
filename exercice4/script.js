const users = ["Lea123", "Princess45", "cat&doglovers", "helooo@000"];

if (users.length === 0){
    console.log("personne n'est en ligne")
}
else if (users.length === 1){
    console.log(users[0] + "il y une personne en ligne ")
}
else if (users.length === 2){
    console.log( users[0] + "et" + users[1] + "il y'a deux personnes en ligne")
}
else if(users.length > 2){
    console.log( `${users[0]} , ${users[1]} 3 autres sont en ligne` )
}
