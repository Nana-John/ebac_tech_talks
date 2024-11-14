AOS.init();

const dataDoEvento = new Date("Apr 17, 2025 15:00:00");
const timeStampDoEvento = dataDoEvento.getTime();

const contaAsHoras = setInterval(function(){
    const agora = new Date();
    const timeStampAtual = agora.getTime();

    const distanciaAteOEvento = timeStampDoEvento - timeStampAtual;

    const diaEmMS = 1000 * 60 * 60 * 24;
    const horaEmMS = 1000 * 60 * 60;
    const minutoEmMS = 1000 * 60;
    const segundoEmMS = 1000;


    const diasAteOEvento = Math.floor (distanciaAteOEvento / diaEmMS);
    const horasAteOEvento = Math.floor ((distanciaAteOEvento % diaEmMS) / horaEmMS);
    const minutosAteOEvento = Math.floor ((distanciaAteOEvento % horaEmMS) / minutoEmMS);
    const segundoAteOEvento = Math.floor ((distanciaAteOEvento % minutoEmMS) / segundoEmMS);


    console.log(diasAteOEvento);
    console.log(horasAteOEvento);
    console.log(minutosAteOEvento);
    console.log(segundoAteOEvento);

    document.getElementById('contador').innerHTML = `${diasAteOEvento}d ${horasAteOEvento}h ${minutosAteOEvento}m ${segundoAteOEvento}s`;

if (distanciaAteOEvento < 0) {
    clearInterval(contaAsHoras);
    document.getElementById('contador').innerHTML = 'Evento acabou!'
}

}, 1000)