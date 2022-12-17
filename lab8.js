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
window.addEventListener('load', showDate);