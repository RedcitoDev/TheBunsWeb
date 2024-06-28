import React, { useCallback, useEffect, useState } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import {
  NextButton,
  PrevButton,
  usePrevNextButtons
} from './EmblaCarouselArrowButtons'

const EmblaCarousel = (props) => {
  const { slides, options } = props
  const [emblaRef, emblaApi] = useEmblaCarousel(options)
  const [scrollProgress, setScrollProgress] = useState(0)

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick
  } = usePrevNextButtons(emblaApi)

  const onScroll = useCallback((emblaApi) => {
    const progress = Math.max(0, Math.min(1, emblaApi.scrollProgress()))
    setScrollProgress(progress * 100)
  }, [])

  useEffect(() => {
    if (!emblaApi) return

    onScroll(emblaApi)
    emblaApi
      .on('reInit', onScroll)
      .on('scroll', onScroll)
      .on('slideFocus', onScroll)
  }, [emblaApi, onScroll])


  const images = [
    { url: 'https://thebunsnfts.com/assets/tshirts-banner.png' },
    { url: 'https://thebunsnfts.com/assets/plush-banner.png' },
    { url: 'https://thebunsnfts.com/assets/coloring-book-banner.png' },
    { url: 'https://thebunsnfts.com/assets/bunstore.png' },
  ];

  return (
    <div className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {images.map((image, index) => (
            <div className="embla__slide" key={index}>
              <img src={image.url} alt={`Slide ${index + 1}`} className="w-full h-full object-cover rounded-xl" />
            </div>
          ))}
        </div>
      </div>

      <div className="embla__controls">
        <div className="embla__buttons">
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div>

        <div className="embla__progress">
          <div
            className="embla__progress__bar"
            style={{ transform: `translate3d(${scrollProgress}%,0px,0px)` }}
          />
        </div>
      </div>
    </div>
  )
}

export default EmblaCarousel
