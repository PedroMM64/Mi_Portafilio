(function(){
    const sliders = [...document.querySelectorAll('.slider-contenido')];
    const arrowNext = document.querySelector('#despues');
    const arrowBefore= document.querySelector('#antes');
    let value;

    arrowNext.addEventListener('click', () => changePosition(1));

    arrowBefore.addEventListener('click', () => changePosition(-1));

    function changePosition(change){
        const currentElement = Number(document.querySelector('.slider-contenido--show').dataset.id);
        
        value = currentElement;
        value += change;
        if(value === 0 || value == sliders.length+1){
            value = value === 0 ? sliders.length : 1;
        }
        
        sliders[currentElement-1].classList.toggle('slider-contenido--show');
        sliders[value-1].classList.toggle('slider-contenido--show');
    }
})()