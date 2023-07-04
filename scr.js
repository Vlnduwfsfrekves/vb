function handleSliderChange(){
    const sliderValue=parseInt(document.querySelector('.slider__input').value)
    const image=document.querySelector('.slider__image')
    image.style.width=`${sliderValue}%`
}
const debouncedSliderChange=_.debounce(handleSliderChange,200)
document.querySelector('.slider__input').addEventListener('input',debouncedSliderChange)