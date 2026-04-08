var tabNav = "AboutSideNav";
var nbControl = 1;

function openPage(pageName, elmnt){
    closeNav();
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].style.backgroundColor = "";
    tablinks[i].style.pointerEvents = "";
  }
  elmnt.style.backgroundColor = "light-dark(#eceaea, #252525)";
  elmnt.style.pointerEvents = "none";

    tabNav = pageName + "SideNav"
    if(nbControl == 0){
        nbControl = 1;
    }
    else{
        nbControl = 0;
    }

    document.getElementById(pageName).style.display = "block";
}

document.getElementById("defaultOpen").click();

function navVis(){
    console.log(nbControl);
    var navBox = document.getElementsByClassName("navbox")[nbControl];
    navBox.style.opacity = "1"
}

function openNav() {
    var sideNav = document.getElementById(tabNav)
    sideNav.style.width = "250px";
    document.getElementsByClassName("NavOpen")[0].style.marginLeft = "-100px";   
    document.getElementsByClassName("homebtn")[0].style.opacity = "0";
    setTimeout(navVis, 150);
    isNavOpen = true;
}

function delayClose(){
    var sideNav = document.getElementById(tabNav);
    sideNav.style.width = "0";
    document.getElementsByClassName("NavOpen")[0].style.marginLeft = "";
    document.getElementsByClassName("homebtn")[0].style.opacity = "";
}

function closeNav() {
    var navBox = document.getElementsByClassName("navbox")[nbControl];
    navBox.style.opacity = "0";
    setTimeout(delayClose, 100);
    isNavOpen = false;
}