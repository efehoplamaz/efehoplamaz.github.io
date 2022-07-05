
function test_js(){
    window.alert(5 + 6);
}


function getWindowWidth(){

var w = window.innerWidth;

var cols = document.getElementsByClassName('topnav_buttons');
for(i = 0; i < cols.length; i++) {
  cols[i].style.width = (w-128)/4 + 'px';
}
}

getWindowWidth();