"use strict";
var showBtn = document.getElementById('showBtn');
var greeting = document.getElementById('greeting');
if (showBtn && greeting) {
    showBtn.addEventListener('click', function () {
        greeting.style.display = 'block';
        showBtn.style.display = 'none';
    });
}
