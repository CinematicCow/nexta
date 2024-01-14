import React from 'react'
import { EmblaOptionsType } from 'embla-carousel'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import { imageByIndex } from '@/config/carousel'

type PropType = {
    slides: number[]
    options?: EmblaOptionsType
}

const EmblaCarousel: React.FC<PropType> = (props) => {
    const autoplayOptions = { delay: 3000, rootNode: (emblaRoot: any) => emblaRoot.parentElement }
    const { slides, options } = props
    const [emblaRef, emblaApi] = useEmblaCarousel(options, [Autoplay(autoplayOptions)])

    return (
        <div className="embla">
            <div className="embla__viewport" ref={emblaRef}>
                <div className="embla__container">
                    {slides.map((index) => (
                        <div className="embla__slide" key={index}>
                            <div className="embla__slide__number">
                                <span>{index + 1}</span>
                            </div>
                            <img
                                className="embla__slide__img"
                                src={imageByIndex(index)}
                                alt="Your alt text"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default EmblaCarousel
