let h__top = document.getElementById("hamburger-top"),
h__mid = document.getElementById("hamburger-middle"),
h__bot = document.getElementById("hamburger-bottom"),
[gam] = document.getElementsByClassName("hamburger__menu"),
[h__list] = document.getElementsByClassName("h-menu__list"),
state = false;

gam.addEventListener("click", () => {
    if(!state){
        h__top.style.transform = "translateY(0px) rotate(135deg)";
        h__mid.style.transform = "scale(0)";
        h__bot.style.transform = "translateY(-11px) rotate(-135deg)";
        gam.style.transform = "translateY(8px)";
        gam.style.marginBottom ="30px";
        h__list.style.display = "flex";
        state = !state;
    }
    else{
        h__top.style.transform = "translateY(0px) rotate(0deg)";
        h__mid.style.transform = "scale(1)";
        h__bot.style.transform = "translateY(0px) rotate(0deg)";
        gam.style.transform = "translateY(11px)";
        h__list.style.display = "none";
        state = !state;
    }
})