function ma(a) {
    a.classList.toggle("change");

    document.getElementById("sidenav").style.width = "18%";
    document.getElementById("contain").style.left = "50px";

    var b = document.getElementById("sidenav");
    var c = document.getElementById("hr1");
    var d = document.getElementById("hr2");
    if (b.style.display === "block") {
        b.style.display = "none";
    } else {

        b.style.display = "block";
    }


} /*This function does not work under the jqeury library*/

function closebtn() {

    document.getElementById("sidenav").style.width = "0%";
    document.getElementById("contain").classList.remove("change");
}