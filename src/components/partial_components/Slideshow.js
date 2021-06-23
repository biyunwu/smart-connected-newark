import React, { Component } from 'react';
import { withPrefix } from "gatsby";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import {homeData} from "../../data/home/homeData";

class Slideshow extends Component {
    render() {
        const baseDirectory = homeData.imageDirectory
        const imgObjs = homeData.imageObjects
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
                {imgObjs.map((imgObj, idx) =>
                    <div key={imgObj.desc} style={{width: "100%", height: "100%", objectFit: "cover"}}>
                        {/*<img src="/homepage_slideshow/slideshow1.webp" />*/}
                        <img src={withPrefix(baseDirectory + imgObj.fileName)} alt={imgObj.desc} style={{height: "100%"}}/>
                        <p className="legend" style={{fontSize: "16px", borderRadius: "0"}}>{imgObj.desc}</p>
                    </div>
                )}
            </Carousel>
        );
    }
}

export default Slideshow;
