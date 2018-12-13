let arrObj = ["bomb1.jpg", "bomb2.jpg", "bomb3.jpg", "bomb4.jpg"];

let imag = document.getElementById('ima');
var i = 0;


document.getElementById('plus').addEventListener('click', function () {
    i++;
    if (i === arrObj.length) {
        i = 0;
    }
    imag.src = arrObj[i];
});


document.getElementById('moins').addEventListener('click', function () {

    if (i === 0) {
        i = arrObj.length;
    }

    if (i > 0) {
        i--;
    }

    imag.src = arrObj[i];

});


