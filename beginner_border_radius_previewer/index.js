document.addEventListener('DOMContentLoaded', function() {
    const boxDiv = document.getElementById('box');

    const inputTopLeft = document.getElementById('radius-top-left');
    const inputTopRight = document.getElementById('radius-top-right');
    const inputBottomLeft = document.getElementById('radius-bottom-left');
    const inputBottomRight = document.getElementById('radius-bottom-right');

    function setBoxRadius(e) {
        e.preventDefault();
        boxDiv.style.setProperty('border-radius', `${inputTopLeft.value || 0}px ${inputTopRight.value || 0}px ${inputBottomRight.value || 0}px ${inputBottomLeft.value || 0}px`);
    }

    inputTopLeft.addEventListener('change', setBoxRadius);
    inputTopRight.addEventListener('change', setBoxRadius);
    inputBottomLeft.addEventListener('change', setBoxRadius);
    inputBottomRight.addEventListener('change', setBoxRadius);
})
