import { useState} from 'react';
import Arrow from '../../assets/images/next.png';

// eslint-disable-next-line react/prop-types
const Slider = ({pictures}) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const currentSlide = pictures[currentIndex];
    const PagninationSideCurrent = currentIndex + 1;


    // eslint-disable-next-line react/prop-types
    const maxSlide = pictures.length;

    const slideLeft = () => { 
        setCurrentIndex(currentIndex === 0 ? maxSlide - 1 : currentIndex - 1);
    }

    const slideRight = () => {
        setCurrentIndex(currentIndex === maxSlide - 1 ? 0 : currentIndex + 1);

    }
    return (
        <div id="caroussel_container">
            <div className="sliders">
                {pictures.map((slide, index) => (
                <div
                    key={index}
                    className={
                    index === currentIndex ? "active" : "inactive"
                    }
                >
                    <img src={currentSlide} alt={slide.title} className='sliders-img'/>
                </div>
                ))}
            </div>
            <div className="caroussel_navigation_container">
                <img 
                    onClick={slideLeft}
                    src={Arrow}
                    className='arrowLeft NavigationSlider'/>

                <img 
                    onClick={slideRight}
                    src={Arrow}
                    className='arrowRight NavigationSlider'/>

            </div>
            <div className="pagination">
                 <h5>{PagninationSideCurrent}/{maxSlide}</h5>
            </div>
        </div>
  );
};

export default Slider;