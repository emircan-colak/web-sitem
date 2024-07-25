
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

// Ana checkbox
var masterCheckbox = document.getElementById("masterCheckbox");

// Altındaki checkbox'lar
var childCheckboxes = document.querySelectorAll(".childCheckbox");

masterCheckbox.addEventListener("change", function() {
    if (masterCheckbox.checked) {
        
        childCheckboxes.forEach(function(checkbox) {
            checkbox.checked = true;
        });
    } else {
        childCheckboxes.forEach(function(checkbox) {
            checkbox.checked = false;
        });
    }
});





