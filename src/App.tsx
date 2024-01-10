import { ImageSlider } from "./ImageSlider"
import "./app.css"

import potly0 from "./images/potly-orig.png"
import potly1 from "./images/potly-ma.png"
import askall0 from "./images/askall-orig.png"
import askall1 from "./images/askall-ma.png"

const IMAGES = [potly1, potly0, askall1, askall0]
const IMAGES_TEXT = [
  <p>My version of the Potly Sign Up page. See <a href="https://alterot.github.io/css-portfolio/potly/potly-ma.html" target="_blank">here</a> for more details.</p>,
  <p>And <a href="https://dribbble.com/shots/16400299-Potly-Sign-Up-page/attachments/10079424?mode=media" target="_blank">here</a> is the original by Bojan Oreskovic.</p>,
  <p>My version of the Askall Landing Page. See <a href="https://alterot.github.io/css-portfolio/askall/askall-ma.html" target="_blank">here</a> for details (and apologies in advance for bad image resolution).</p>,
  <p>Here is the original by Odama Studio. More details <a href="https://dribbble.com/shots/16118501/attachments/7978259?mode=media" target="_blank">here</a>.</p>
];

export default function App() {
  return (
    <div style={{ 
      maxWidth: "1200px", 
      width: "100%", 
      height: "700px", 
      margin: "0 auto"
    }}>
    <h1>copying popular designs from Dribble</h1>
     <div className="portfolio-container">
      <div className="portfolio">
       <ImageSlider imageUrls={IMAGES} imagesText={IMAGES_TEXT} />
      </div>
    </div> 
  </div>
  )
}