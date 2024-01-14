import React, { useCallback } from 'react'
import { EmblaOptionsType, EmblaCarouselType } from 'embla-carousel'
import useEmblaCarousel from 'embla-carousel-react'
import { DotButton, useDotButton } from './emblaDot'
import Autoplay from 'embla-carousel-autoplay'
import { reviewByIndex } from '@/config/review'
import "./reviewEmbla.css"

type PropType = {
    slides: number[]
    options?: EmblaOptionsType
}

const EmblaCarousel: React.FC<PropType> = (props) => {
    const { slides, options } = props
    const [emblaRef, emblaApi] = useEmblaCarousel(options, [Autoplay()])

    const onButtonClick = useCallback((emblaApi: EmblaCarouselType) => {
        const { autoplay } = emblaApi.plugins()
        if (!autoplay) return
        // if (autoplay.options.stopOnInteraction !== false) autoplay.stop()
    }, [])

    const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(
        emblaApi,
        onButtonClick
    )

    return (
        <div className="Rembla">
            <div className="Rembla__viewport" ref={emblaRef}>
                <div className="Rembla__container">
                    {slides.map((index) => (
                        <div className="Rembla__slide" key={index}>
                            <div className="Rembla__slide__number">
                                <span>{index + 1}</span>
                            </div>

                            <p className="mt-8 font-sen font-light text-clip max-w-5xl text-center text-2xl ">
                                {reviewByIndex(index)}
                            </p>
                        </div>
                    ))}
                </div>
            </div>

            <div className="Rembla__dots">
                {scrollSnaps.map((_, index) => (
                    <DotButton
                        key={index}
                        onClick={() => onDotButtonClick(index)}
                        className={'Rembla__dot'.concat(
                            index === selectedIndex ? ' Rembla__dot--selected' : ''
                        )}
                    />
                ))}
            </div>
        </div>
    )
}

export default EmblaCarousel
