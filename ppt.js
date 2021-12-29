function opcion(min, max){
    min = Math.ceil(1);
    max = Math.floor(4);
    return Math.floor(Math.random()*(max-min)+min);
}

var cpu = opcion(1,4);
if (cpu == 1){
    console.log("CPU = Piedra");
} else if (cpu == 2){
    console.log("CPU = Papel");
} else if (cpu == 3){
    console.log("CPU = Tijeras");
}

var jugador = opcion(1,4);
if (jugador == 1){
    console.log("Jugador = Piedra");
} else if (jugador == 2){
    console.log("Jugador = Papel");
} else if (jugador == 3){
    console.log("Jugador = Tijeras");
}

function ppt(a,b){
    if (a == b){
        console.log("Empate, intenta de nuevo")
    } else if (a == 1 && b == 2){
        console.log("Usuario Gana")
    } else if (a == 1 && b == 3){
        console.log("CPU Gana")
    } else if (a == 2 && b == 1){
        console.log("CPU Gana")
    } else if (a == 2 && b == 3){
        console.log("Usuario Gana")
    } else if (a == 3 && b == 1){
        console.log("Usuario Gana")
    } else if (a == 3 && b == 2){
        console.log("CPU Gana")
    }
}
ppt(cpu,jugador)

// 1=Piedra, 2=Papel, 3=Tijeras