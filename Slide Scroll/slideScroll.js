const debounce = (func, wait = 20, immediate = true) => {
  
  let timeout;
  
  return function() {
    
    let context = this, args = arguments;
    const later = () => {
      
      timeout = null;
      
      if (!immediate) func.apply(context, args);
    };

    let callNow = immediate && !timeout;
    
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    
    if (callNow) func.apply(context, args);
  };
}

const slider = document.querySelectorAll('.slide-in');

const checkSlide = (e) => {
  
  slider.forEach(slider => {
        
    const slideInAt = (window.scrollY + window.innerHeight) - (slider.height / 2);
    const imageBottom = slider.offsetTop + slider.height;
    const halfShown = slideInAt > slider.offsetTop;
    const notScrolledPast = window.scrollY < imageBottom;

    (halfShown && notScrolledPast) ? slider.classList.add('active') : slider.classList.remove('active');
  });

  // console.count(e);
}

window.addEventListener('scroll', debounce(checkSlide));