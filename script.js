let button = document.querySelector('.share-button');
button.addEventListener('click', function(){
    let test = getComputedStyle(button).backgroundColor;
    let socialActive = document.querySelector('.icon-social');
    let buttonShare = document.querySelector('.share-button > svg > path');
    if(test === "rgb(236, 242, 248)") {
        button.style.backgroundColor = "rgb(109,127,151)";
        socialActive.classList.add("icon-social--active");
        buttonShare.style.fill = "white";
    } else {
        button.style.backgroundColor = "rgb(236, 242, 248)";
        socialActive.classList.remove("icon-social--active");
        buttonShare.style.fill = "rgb(110,128,152)";
    }
})
