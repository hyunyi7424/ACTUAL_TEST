const backtotop = document.getElementById('backtotop');

const checkScroll=() =>{
    let pageYOffset = window.pageYOffset;
    if (pageYOffset !== 0){
        backtotop.classList.add('show');
    }
    else{
        backtotop.classList.remove('show');
    }
}
const moveBackToTop=() =>
{
    if (window.pageYOffset > 0){
     window.scrollTo({top: 0, behavior: "smooth"})
    }

}

window.addEventListener('scroll',checkScroll);
backtotop.addEventListener('click',moveBackToTop);

function transformPrev(event){
    const slidePrev = event.target;
    const slideNext = slidePrev.nextElementSibling;

    //ul태그선택
    const classList = slidePrev.parentElement.parentElement.nextElementSibling;
    let activeLi = classList.getAttribute('data-position');
    const liList = classList.getElementsByTagName('li');
}
const slidePrevList = document.getElementsByClassName('slide-prev');
for (let i = 0; i < slidePrevList.length; i++){
    //ul태그선택
    let classList = slidePrevList[i].parentElement.parentElement.nextElementSibling;
    //카드가 ul태그 너비보다 넘치면 왼쪽버튼은 활성화되고 
    let liList = classList.getElementsByTagName('li');
    if(classList.clientWidth <(liList.length*260)){
        slidePrevList[i].classList.add('slide-prev-hover');
        slidePrevList[i].addEventListener('click',transformPrev);

    }
    else{
        const arrowContainer = slidePrevList[i].parentElement;
        arrowContainer.removeChild(slidePrevList[i].nextElementSibling);
        arrowContainer.removeChild(slidePrevList[i]);
    }
}