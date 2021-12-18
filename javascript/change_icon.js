var ic1 = "https://img.icons8.com/stickers/2x/windows-10.png";
var ic2 = "https://img.icons8.com/stickers/2x/mac-os.png";
var ic3 = "https://img.icons8.com/stickers/2x/google-logo.png";
var ic4 = "https://img.icons8.com/stickers/2x/youtube.png";
var ic5 = "https://img.icons8.com/stickers/2x/airport.png";
var ic6 = "https://img.icons8.com/stickers/2x/america.png";
var icc = 1;

var inhtml = document.innerHTML
var count = 0;
function add_count() {
    count += 1;
    document.getElementById("secret_button").innerHTML = count;
    if(count == 1000) {
        alert(inhtml)
    }
}

function switch_icon(icon) {
    document.getElementById("title_icon").href = icon;
}

function next_ic() {
    icc += 1
    if(icc > 6){
        icc = 1;
    }
    if(icc == 1) {
        switch_icon(ic1);
    }
    if(icc == 2) {
        switch_icon(ic2);
    }
    if(icc == 3) {
        switch_icon(ic3);
    }
    if(icc == 4) {
        switch_icon(ic4);
    }
    if(icc == 5) {
        switch_icon(ic5);
    }
    if(icc == 6) {
        switch_icon(ic6);
    }
}

function lp1(){
    lp2();
}

function lp2(){
    next_ic();
    setTimeout(lp1, 500);
}
lp1();