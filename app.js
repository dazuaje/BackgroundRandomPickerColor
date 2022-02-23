//Selection of html
const btn = document.querySelector('#btn');
const text = document.querySelector('.textRGB');
const backgroundcolor = document.querySelector('.backgroundAllPage');

btn.addEventListener('click', (e) => {
    const red = Math.floor(Math.random() * 255);
    const blue = Math.floor(Math.random() * 255);
    const green = Math.floor(Math.random() * 255);

    const fullColor =  `RGB(${red},${green},${blue})`

    backgroundcolor.style.backgroundColor = fullColor;
    text.textContent = fullColor;
    text.style.color = fullColor
    
    
});


const copy = document.querySelector("#copy").addEventListener("click", (e) => {
   
        const useRange = document.createRange();
        const useSelection = window.getSelection();
        useRange.selectNodeContents(text);
        useSelection.removeAllRanges();
        useSelection.addRange(useRange);
        document.execCommand("copy");
        alert(`Copiado`)
})

