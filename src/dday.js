const remainTime = document.querySelector("#dday");

function diffDay() {
    const masTime   = new Date("2022-11-13");
    const todayTime = new Date();
    const diff      = masTime - todayTime;
    
    const diffDay  = Math.floor(diff / (1000*60*60*24));
    const diffHour = Math.floor((diff / (1000*60*60)) % 24);
    const diffMin  = Math.floor((diff / (1000*60)) * 60);
    const diffSec  = Math.floor(diff / 1000 % 60);
    
    remainTime.innerText = `D-${diffDay} Day`;
}
diffDay()
setInterval(diffDay, 1000);