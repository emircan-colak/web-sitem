
function openRightbar() {
    document.querySelector(".rightbar").style.width = "450px";
    document.querySelector(".content2").style.marginRight = "250px";
}

function closeRightbar() {
    document.querySelector(".rightbar").style.width = "0";
    document.querySelector(".content2").style.marginRight= "0";
}

document.querySelector('.menu-icon').addEventListener('click', function() {
    document.querySelector('.sidebar').classList.toggle('sidebar-open');
});






