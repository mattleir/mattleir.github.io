
  function hidePopup(popupId,buttonID) {
    var div = document.getElementById(popupId);
    var button = document.getElementById(buttonID)
    div.style.display = 'none';
    button.disabled = false;
    }


function unhidePopup(popupId,buttonID) {
    var div = document.getElementById(popupId);
    var button = document.getElementById(buttonID)
    div.style.display = '';
    button.disabled = true;

    
}



/* function checkButton(popupId,buttonID) {
    var div = document.getElementById(popupId);
    var button = document.getElementById(buttonID);

    if (div && button) {
        var computedStyle = window.getComputedStyle(div);

        if (computedStyle.display === 'none') {
            // If the div is hidden, disable the button
            button.disabled = true;
        } else {
            // If the div is visible, enable the button
            button.disabled = false;
        }
    }
}
 */
/* function checkButton(popupId,buttonID) {
    var div = document.getElementById(popupId)
    var button = document.getElementById(buttonID)
        if (div && button) {
            if (div.style.display === 'none') {
                // If the div is hidden, disable the button
                button.disabled = true;
            } else {
                // If the div is visible, enable the button
                button.disabled = false;
        }
    }  
}  */