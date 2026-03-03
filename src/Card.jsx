import { useState } from "react"
import Controls from "./Controls"
import { testimonialData } from "./data"

function Card(){
const [currentIndex, setCurrentIndex] = useState(0)

const nextSlide = () => {
    setCurrentIndex((prev) => (
      prev === testimonialData.length - 1 ? 0 : prev + 1)
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (
      prev === 0 ? testimonialData.length - 1 : prev - 1)
    );
  };

  // Extract the current person's data based on the index
  const { name, role, image, text } = testimonialData[currentIndex];



return(

  <main className="slider-container"> 
    <figure className="testimonial-card"> 
            <div className="img-container"> 
            <img className="testimonial-img" src={image} alt={name}/>

             {/* pass functions to controls */}
             <Controls onNext={nextSlide} onPrev={prevSlide}/>
            </div>
      <div className="testimonial-text-section"> 
            <blockquote>
               <p className="testimonial-text">{text}</p>
             </blockquote>
             <figcaption> 
                 <cite>{name}</cite>
                 <span>{role}</span>
             </figcaption>
        </div>
    </figure>
    
</main>


)

}

export default Card