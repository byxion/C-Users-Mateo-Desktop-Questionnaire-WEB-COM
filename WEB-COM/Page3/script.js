let element = 1
document.querySelectorAll('.page button:not(.final-submit)').forEach((elem)=>{
    elem.addEventListener('click',(event)=>{
        const currentPage =  event.target.closest('.page')
        const element =  Number.parseInt(currentPage.classList[1].split('-')[1])  +1
        const currentZIndex = getStyle(currentPage,'z-index')
        document.querySelector(`.page.page-${element}`).style.zIndex = currentZIndex + 1
    })
    
})

function getStyle(el,styleProp)
{
    if (window.getComputedStyle)
    {
        var y = document.defaultView.getComputedStyle(el,null).getPropertyValue(styleProp); 
    }  
    else if (el.currentStyle)
    {
        var y = el.currentStyle[styleProp];
    }                     

    return y;
}

