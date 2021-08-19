var currentTime = new Date().getHours(), currentImg="";

if (currentTime>=6.00 && currentTime<9.00){ currentImg="assets/Hateno_Village/Hateno_Village_1.jpg"; }
else if (currentTime>=9.00 && currentTime<2.00){ currentImg="assets/Hateno_Village/Hateno_Village_2.jpg"; }
else if (currentTime>=2.00 && currentTime<5.00){ currentImg="assets/Hateno_Village/Hateno_Village_3.jpg"; }
else if (currentTime>=5.00 && currentTime<6.30){ currentImg="assets/Hateno_Village/Hateno_Village_4.jpg"; }
else if (currentTime>=6.30 && currentTime<8.00){ currentImg="assets/Hateno_Village/Hateno_Village_5.jpg"; }
else { currentImg="assets/Hateno_Village/Hateno_Village_6.jpg"; }

document.body.style.backgroundImage = "url("+currentImg+")";
document.body.style.backgroundSize = "100%";
// document.body.style.backgroundOrigin = "content-box";