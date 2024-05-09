
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

// Altındaki çocuk checkbox'lar
var childCheckboxes = document.querySelectorAll(".childCheckbox");

// Ana checkbox değişikliğinde
masterCheckbox.addEventListener("change", function() {
    // Ana checkbox işaretlendiğinde
    if (masterCheckbox.checked) {
        // Tüm altındaki checkbox'ları işaretle
        childCheckboxes.forEach(function(checkbox) {
            checkbox.checked = true;
        });
    } else {
        // Ana checkbox işaretlenmediğinde
        // Tüm altındaki checkbox'ları işaretsiz bırak
        childCheckboxes.forEach(function(checkbox) {
            checkbox.checked = false;
        });
    }
});





