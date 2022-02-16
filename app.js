//Selection of html
const btn = document.querySelector('#btn');
const text = document.querySelector('.textRGB');
const backgroundcolor = document.querySelector('.backgroundAllPage');

btn.addEventListener('click', (e) => {
    backgroundcolor.style.backgroundColor = changeColor();
    text.textContent = changeColor(); 
    
    
});

//Ramdom number
const RGB = () => {return Math.floor(Math.random() * 255)};



//Create RGB 
const changeColor = () => {
    const red = RGB();
    const blue = RGB();
    const green = RGB();
    const fullColor = `RGB(${red},${green},${blue})`;
    return fullColor
}






    
