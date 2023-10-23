import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import image1 from '../../../../src/assets/BannerImage/1.jpg'
import image2 from '../../../../src/assets/BannerImage/2.jpg'
import image3 from '../../../../src/assets/BannerImage/3.jpg'
import image4 from '../../../../src/assets/BannerImage/4.jpg'
import image5 from '../../../../src/assets/BannerImage/5.jpg'
import image6 from '../../../../src/assets/BannerImage/6.jpg'


const Banner = () => {
    return (
        <Carousel showThumbs={false} infiniteLoop={true} autoPlay={true} stopOnHover={true} showStatus={false} showArrows={true}>
            <div>
                <img src={image1} className="w-full h-[80vh] object-cover rounded-md brightness-90" alt="Slide 1" />
            </div>
            <div>
                <img src={image2} className="w-full h-[80vh] object-cover rounded-md brightness-90" alt="Slide 2" />
            </div>
            <div>
                <img src={image3} className="w-full h-[80vh] object-cover rounded-md brightness-90" alt="Slide 3" />
            </div>
            <div>
                <img src={image4} className="w-full h-[80vh] object-cover rounded-md brightness-90" alt="Slide 4" />
            </div>
            <div>
                <img src={image5} className="w-full h-[80vh] object-cover rounded-md brightness-90" alt="Slide 5" />
            </div>
            <div>
                <img src={image6} className="w-full h-[80vh] object-cover rounded-md brightness-90" alt="Slide 6" />
            </div>
        </Carousel>
    );
};

export default Banner;