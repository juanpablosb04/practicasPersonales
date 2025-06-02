/*
 * EJERCICIO:
 * ¡Deadpool y Wolverine se enfrentan en una batalla épica!
 * Crea un programa que simule la pelea y determine un ganador.
 * El programa simula un combate por turnos, donde cada protagonista posee unos
 * puntos de vida iniciales, un daño de ataque variable y diferentes cualidades
 * de regeneración y evasión de ataques.
 * Requisitos:
 * 1. El usuario debe determinar la vida inicial de cada protagonista.
 * 2. Cada personaje puede impartir un daño aleatorio:
 *    - Deadpool: Entre 10 y 100.
 *    - Wolverine: Entre 10 y 120.
 * 3. Si el daño es el máximo, el personaje que lo recibe no ataca en el
 * siguiente turno, ya que tiene que regenerarse (pero no aumenta vida).
 * 4. Cada personaje puede evitar el ataque contrario:
 *    - Deadpool: 25% de posibilidades.
 *    - Wolverine: 20% de posibilidades.
 * 5. Un personaje pierde si sus puntos de vida llegan a cero o menos.
 * Acciones:
 * 1. Simula una batalla.
 * 2. Muestra el número del turno (pausa de 1 segundo entre turnos).
 * 3. Muestra qué pasa en cada turno.
 * 4. Muestra la vida en cada turno.
 * 5. Muestra el resultado final.
 */



document.addEventListener("DOMContentLoaded", function () {

  const DPjugada = document.getElementById('DPjugada');
  const Wjugada = document.getElementById('Wjugada');
  const btnDPTurno = document.getElementById('btnDPTurno');
  const btnWTurno = document.getElementById('btnWTurno');
  const vidaDeadpool = document.getElementById('deadpoolHp');
  const vidaWolverine = document.getElementById('wolverineHp');
  const informador = document.getElementById("informador");

  let danoAcumuladoDP = 600;
  let danoAcumuladoW = 600;
  let turno = 1;

  btnDPTurno.addEventListener('click', function () {

    let evasion = Math.floor(Math.random() * 3)


    if (DPjugada.value.trim() === "1") {

      if (evasion === 3) {
        turno++;
        informador.innerText = "Wolverine esquiva!";
        document.getElementById("turno").innerHTML = "Turno " +`${turno}`;
      } else {
        let cantidadDano = Math.floor(Math.random() * 201);
        danoAcumuladoW -= cantidadDano;
        if (danoAcumuladoW <= 0) {
          informador.innerText = "¡Deadpool le hace " + `${cantidadDano}` + " de daño a Wolverine!";
          setTimeout(() => {
            informador.innerText = "Deadpool es el vencedor! Se jugaron un total de "+`${turno}`+" turnos";
            vidaWolverine.style.width = "0px";
          }, 2000);

        } else {
          turno++;
          informador.innerText = "¡Deadpool le hace " + `${cantidadDano}` + " de daño a Wolverine!";
          setTimeout(() => {
            vidaWolverine.style.width = `${danoAcumuladoW}px`;
            document.getElementById("turno").innerHTML = "Turno " +`${turno}`;
          }, 3000);
          DPjugada.value = "";
          DPjugada.disabled = true;
          Wjugada.disabled = false;
        }
      }

    } else if (DPjugada.value.trim() === "2") {
      if (danoAcumuladoDP === 200) {
        turno++;
        informador.innerText = "¡Deadpool decide intentar regenerar su salud pero esta al maximo!";
        document.getElementById("turno").innerHTML = "Turno " +`${turno}`;
        DPjugada.value = "";
        DPjugada.disabled = true;
        Wjugada.disabled = false;
      } else {
        turno++;
        danoAcumuladoDP += 25;
        vidaDeadpool.style.width = `${danoAcumuladoDP}px`;
        informador.innerText = "¡Deadpool decide regenerar 25 de Salud!";
        document.getElementById("turno").innerHTML = "Turno " +`${turno}`;
        DPjugada.value = "";
        DPjugada.disabled = true;
        Wjugada.disabled = false;
      }
    }

  });

  btnWTurno.addEventListener('click', function () {

    let evasion = Math.floor(Math.random() * 3)

    if (Wjugada.value.trim() === "1") {

      if (evasion === 3) {
        turno++;
        informador.innerText = "Deapool esquiva!";
        document.getElementById("turno").innerHTML = "Turno " +`${turno}`;

      } else {
        
        let cantidadDano = Math.floor(Math.random() * 201);
        danoAcumuladoDP -= cantidadDano;
        if (danoAcumuladoDP <= 0) {
          informador.innerText = "Wolverine le hace " + `${cantidadDano}` + " de daño a Deapool!";
          setTimeout(() => {
            informador.innerText = "Wolverine es el vencedor! Se jugaron un total de "+`${turno}`+" turnos";
            vidaDeadpool.style.width = "0px";
          }, 3000);

        } else {
          turno++;
          informador.innerText = "Wolverine le hace " + `${cantidadDano}` + " de daño a Deapool!";
          setTimeout(() => {
            vidaDeadpool.style.width = `${danoAcumuladoDP}px`;
            document.getElementById("turno").innerHTML = "Turno " +`${turno}`;
          }, 3000);
          Wjugada.value = "";
          Wjugada.disabled = true;
          DPjugada.disabled = false;
        }
      }

    } else if (Wjugada.value.trim() === "2") {
      if (danoAcumuladoW === 200) {
        turno++;
        informador.innerText = "Wolverine decide intentar regenerar su salud pero esta al maximo!";
        document.getElementById("turno").innerHTML = "Turno " +`${turno}`;
        Wjugada.value = "";
        Wjugada.disabled = true;
        DPjugada.disabled = false;
      } else {
        turno++;
        danoAcumuladoW += 25;
        vidaWolverine.style.width = `${danoAcumuladoW}px`;
        informador.innerText = "Wolverine decide regenerar 25 de Salud!";
        document.getElementById("turno").innerHTML = "Turno " +`${turno}`;
        Wjugada.value = "";
        Wjugada.disabled = true;
        DPjugada.disabled = false;
      }
    }

  });



});