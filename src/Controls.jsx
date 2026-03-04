import iconPrev from './assets/icon-prev.svg';
import iconNext from './assets/icon-next.svg';

function Controls({onNext, onPrev}){
return(
  <div className="controls">
          <button className="prev" onClick={onPrev} aria-label="prevous-slide"> <img className="slider-prev" src={iconPrev} alt="previous slider "/> </button>  
          <button className="next" onClick={onNext} aria-label="next-slide"><img className="slider-next" src={iconNext} alt="next slider"/> </button> 
        </div>

)
}

export default Controls