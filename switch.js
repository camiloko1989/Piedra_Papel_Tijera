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

function ppt (a,b){
    switch (numero){
        case a == b:
            console.log("Empate, intenta de nuevo");
            break;
        case a == 1 && b == 2:
            console.log("Usuario Gana");
            break;
            case a == 1 && b == 3:
                console.log("CPU Gana");
                break;
            case (a == 2 && b == 1):
                console.log("CPU Gana");
                break;
            case (a == 2 && b == 3):
                console.log("Usuario Gana");
                break;
            case (a == 3 && b == 1):
                console.log("Usuario Gana");
                break;
            case (a == 3 && b == 2):
                console.log("CPU Gana");
                break;
    }
}