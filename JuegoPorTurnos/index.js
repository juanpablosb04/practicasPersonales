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