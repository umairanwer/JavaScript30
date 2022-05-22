function setTime(){
    const now = new Date();
    const [sec, min, hour] = [now.getSeconds(), now.getMinutes(), now.getHours()];
    const secDeg = (sec/60) * 360;
    const minDeg = (min/60) * 360;
    const hourDeg = (hour/12) * 360;
    document.querySelector('.second-hand').style.transform = `rotate(${secDeg}deg)`;
    document.querySelector('.min-hand').style.transform = `rotate(${minDeg}deg)`;
    document.querySelector('.hour-hand').style.transform = `rotate(${hourDeg}deg)`;

}

setInterval(setTime, 1000);