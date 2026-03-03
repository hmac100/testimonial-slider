function Controls({onNext, onPrev}){
return(
  <div className="controls">
          <button className="prev" onClick={onPrev} aria-label="prevous-slide"> <img className="slider-prev" src="src/assets/icon-prev.svg" alt="previous slider "/> </button>  
          <button className="next" onClick={onNext} aria-label="next-slide"><img className="slider-next" src="src/assets/icon-next.svg" alt="next slider"/> </button> 
        </div>

)
}

export default Controls