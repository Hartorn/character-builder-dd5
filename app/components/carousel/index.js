import React, { PropTypes } from 'react'
import Slider from 'react-slick'

const buildCarouselEltList = (nbElts, type) => {
    return [...Array(nbElts).keys()].map((item) => {
        return (
            {
                type: type,
                idx: item + 1
            }
        )
    })
};

const correctClass = (classElt) => {
    switch (classElt) {
        case 'halfOrc':
            return 'orc';
        case 'halfElf':
            return 'half-elf';
        default:
            return classElt;
    }
}
/**
 * Shuffles array in place. ES6 version
 * @param {Array} a items The array containing the items.
 */
// see http://stackoverflow.com/questions/6274339/how-can-i-shuffle-an-array-in-javascript
const shuffle = (a) => {
    for (let i = a.length; i; i--) {
        let j = Math.floor(Math.random() * i);
        [a[i - 1], a[j]] = [a[j], a[i - 1]];
    }
    return a;
}

const buildAndRandomize = (typesArray) => {
    return shuffle(typesArray.reduce((acc, {nbElts, type}) => {
        return acc.concat(buildCarouselEltList(nbElts, type));
    }, []))
        .map(({type, idx}, idxTotal) => {
            return (
                <div key={idxTotal} className={`classImg ${correctClass(type)} item-${idx}`} />
            );
        })
}

const Carousel = ({typesArray}) => {
    const settings = {
        draggable: false,
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        swipeToSlide: true,
        swipe: true,
        autoplay: true,
        arrows: false,
        adaptiveHeight: false,
        fade: true
    };
    return (
        <div className={'slider-container'}>
            {typesArray.length > 0 &&
                <Slider {...settings}>
                    {buildAndRandomize(typesArray)}
                </Slider>
            }
        </div>
    );
}

Carousel.displayName = 'Carousel';
Carousel.propsTypes = {
    nbElts: PropTypes.number.isRequired,
    type: PropTypes.string.isRequired
};
Carousel.defaultProps = {
};

export default Carousel;