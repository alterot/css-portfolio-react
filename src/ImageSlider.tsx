import { useState } from "react";
import { ChevronsLeft, ChevronsRight } from "lucide-react";
import "./image-slider.css";

type ImageSliderProps = { 
    imageUrls: string[],
    imagesText: JSX.Element[]
}

export function ImageSlider({ imageUrls, imagesText}: ImageSliderProps) {
  const [imageIndex, setImageIndex] = useState(0);

  function showNextImage() {
    setImageIndex(index => {
      if (index === imageUrls.length - 1) return 0;
      return index + 1;
    })
  }

  function showPrevImage() {
    setImageIndex(index => {
      if (index === 0) return imageUrls.length - 1;
      return index - 1;
    })
  }

  return (
    <div style = {{ width: "100%", height: "100%", position: "relative"}}>
      <div style = {{ width: "100%", height: "100%", display: "flex", overflow: "hidden" }}>
        {imageUrls.map((url) => (
          <img key={url} src={url} className="img-slider__img" style={{ translate: `${-100 * imageIndex}%`}} />
        ))}
      </div>

      {imagesText.map((text, index) => {
      if (index === imageIndex) {
        return (
          <div key={index} className="portfolio-gallery__text">
            {text}
          </div>
        );
      }
      return null;
     })}

      <button onClick={showPrevImage} className="img-slider__btn" style={{ left: 0 }}>
        <ChevronsLeft />
      </button>
      <button onClick={showNextImage}  className="img-slider__btn" style={{ right: 0}}>
        <ChevronsRight />
      </button>
    </div>
  );
}