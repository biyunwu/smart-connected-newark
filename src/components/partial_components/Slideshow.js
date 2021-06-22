import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

class Slideshow extends Component {
    render() {
        return (
            <Carousel
                dynamicHeight={false}
                infiniteLoop={true}
                useKeyboardArrows={true}
                showThumbs={false}
                centerMode={true}
                centerSlidePercentage={100}
                autoPlay={true}
                emulateTouch={true}
                // swipeable={true}
            >
                <div>
                    <img src="/homepage_slideshow/slideshow1.webp" />
                    <p className="legend">Image description</p>
                </div>
                <div>
                    <img src="/homepage_slideshow/slideshow2.png" alt={"Best Paper Award"}/>
                    <p className="legend">ICCPS 2021 Best Paper Award</p>
                </div>
                <div>
                    <img src="/homepage_slideshow/slideshow3.png" />
                    <p className="legend">Image description</p>
                </div>
                <div>
                    <img src="/homepage_slideshow/slideshow4.png" />
                    <p className="legend">Image description</p>
                </div>
            </Carousel>
        );
    }
}

export default Slideshow;
