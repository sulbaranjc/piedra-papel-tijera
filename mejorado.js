var opciones = {
  "Piedra": {"Piedra": "Empate", "Papel": "La CPU Gano!!", "Tijera": "El usuario GANO con Piedra"},
  "Papel": {"Piedra": "El usuario GANO con Papel", "Papel": "Empate", "Tijera": "La CPU Gano!!"},
  "Tijera": {"Piedra": "La CPU Gano!!", "Papel": "El usuario GANO con Tijera", "Tijera": "Empate"}
};

var resultado = function(user, cpu){
  console.log(opciones[user][cpu]);
};

resultado("Piedra", "Tijera"); //el usuario GANO con Piedra
resultado("Papel", "Piedra"); //el usuario GANO con Papel
resultado("Tijera", "Papel"); //el usuario GANO con Tijera
