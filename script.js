function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}
var icon = document.getElementById("dark-toggle");
var mode = false;
icon.onclick = function(){
     mode = !mode;
    document.body.classList.toggle("dark-mode");
    if(document.body.classList.contains("dark-mode")){
        document.getElementById("dark-toggle").className="fa-solid fa-sun";
    }else{
        document.getElementById("dark-toggle").className="fa-solid fa-moon";
    }
    document.getElementById("github-streak-1").src=`https://github-readme-streak-stats.herokuapp.com?user=kajalyadav04&theme=${mode?"dark":"light"}`;
    // document.getElementById("github-streak-2").src=`https://github-readme-stats.vercel.app/api?username=kajalyadav04&show_icons=true&theme=${mode?"dark":"light"}`;
    document.getElementById("github-streak-3").src=`https://github-readme-stats.vercel.app/api/top-langs/?username=kajalyadav04&layout=compact&theme=${mode?"dark":"light"}`;
    document.getElementById("github-streak-4").src=`https://github-profile-summary-cards.vercel.app/api/cards/profile-details?username=kajalyadav04${mode?"&theme=github_dark":""}`;
    document.getElementsByClassName("section__pic-container").src=`./assets/kajal_kumar_pic_01_round_dark.png`;
}
var icon = document.getElementById("dark-toggle-2");
var mode = false;
icon.onclick = function(){
     mode = !mode;
    document.body.classList.toggle("dark-mode");
    if(document.body.classList.contains("dark-mode")){
        document.getElementById("dark-toggle-2").textContent="Light";
    }else{
        document.getElementById("dark-toggle-2").textContent="Dark";
    }
    document.getElementById("github-streak-1").src=`https://github-readme-streak-stats.herokuapp.com?user=kajalyadav04&theme=${mode?"dark":"light"}`;
    // document.getElementById("github-streak-2").src=`https://github-readme-stats.vercel.app/api?username=kajalyadav04&show_icons=true&theme=${mode?"dark":"light"}`;
    document.getElementById("github-streak-3").src=`https://github-readme-stats.vercel.app/api/top-langs/?username=kajalyadav04&layout=compact&theme=${mode?"dark":"light"}`;
    document.getElementById("github-streak-4").src=`https://github-profile-summary-cards.vercel.app/api/cards/profile-details?username=kajalyadav04${mode?"&theme=github_dark":""}`;
    document.getElementsByClassName("section__pic-container").src=`./assets/kajal_kumar_pic_01_round_dark.png`;
}