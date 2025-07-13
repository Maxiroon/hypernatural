var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("topnav").style.top = "0";
    document.getElementById("scrolldown").style.top = "50px";
  } else {
    document.getElementById("topnav").style.top = "-50px";
    document.getElementById("scrolldown").style.top = "-65px";
  }
  prevScrollpos = currentScrollPos;
}