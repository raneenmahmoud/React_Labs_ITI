import { Component } from "react";
import './slide.css';

class SlideShow extends Component{

    currentSlideIndex = 0;
    timer ;
    showNextImage = () => {
      this.currentSlideIndex++;
      const slides = document.querySelectorAll(".slide");
      if (this.currentSlideIndex >= slides.length) {
        this.currentSlideIndex = slides.length - 1;
      }
      slides.forEach((slide, index) => {
        if (index === this.currentSlideIndex) {
          slide.classList.add("active");
        } else {
          slide.classList.remove("active");
        }
      });
    }
  
  showPrevImage = () => {
    
      this.currentSlideIndex--;
      const slides = document.querySelectorAll(".slide");
      if (this.currentSlideIndex < 0) {
        this.currentSlideIndex = 0;
      }
      slides.forEach((slide, index) => {
        if (index === this.currentSlideIndex) {
          slide.classList.add("active");
        } else {
          slide.classList.remove("active");
        }
      });
  }
  startSlide = () => {
      this.timer = setInterval(() => {
        this.currentSlideIndex++;
      const slides = document.querySelectorAll(".slide");
      if (this.currentSlideIndex >= slides.length) {
        this.currentSlideIndex = 0;
      }
      slides.forEach((slide, index) => {
        if (index === this.currentSlideIndex) {
          slide.classList.add("active");
        } else {
          slide.classList.remove("active");
        }
      });
      }, 2000);
    }
    stopSlide = () => {
      clearInterval(this.timer);
    }

    render(){
        return(
            <div>
  <div className="container">
    <div class="slidercontainer">
      <div className="slide active">
        <img
          src="./Images/pict1.jpg"
          alt="Imagen 1"
        />
      </div>
      <div className="slide">
        <img src="./Images/pict2.jpg" alt="Imagen 2" />
      </div>
      <div className="slide">
        <img src="./Images/pict3.jpg" alt="Imagen 3" />
      </div>
    </div>
    <div>
      <button onClick={this.showPrevImage}>Prev</button>
      <button onClick={this.showNextImage}>Next</button>
      <button onClick={this.startSlide} >Slide</button>
      <button onClick={this.stopSlide} >Stop</button>
    </div>
  </div>
              </div>
        )
    }
}

export default SlideShow;