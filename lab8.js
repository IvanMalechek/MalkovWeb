function showDate(params){
    let out =document.getElementById('today');
    let today =new Date();
    out.innerHTML=today.toLocaleDateString();
}

function ShowDaysCount(params){
    let today = new Date();
    let inputDate = document.getElementById('countdays');
    let birthday=new Date(inputDate.value);
    let daysCount=(today-birthday)/1000/60/60/24;
    let result = document.getElementById('result');
    daysCount=Math.floor(daysCount);
    result.innerHTML='С даты моего рождения прошло '+daysCount+' долгих дней'; 
}

function showTime(){
    let outTime=document.getElementById('time');
    let currentTime= new Date();
    outTime.innerHTML=currentTime.toLocaleTimeString('ru');
}

function KruglayData(params){
    let days=document.getElementById('days');
    days=days.value;
    let inputDate=document.getElementById('countdays');
    let birthday=new Date(inputDate.value);
    let HZ=(birthday.getTime()+days*1000*60*60*24);
    HZ=new Date(HZ);
    let result2 = document.getElementById('result2');
    result2.innerHTML='Вот вам кругла дата '+HZ;
}
window.addEventListener('load', showDate);
setInterval(showTime, 1000);