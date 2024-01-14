// @ts-nocheck
"use client"
import React, { useState, useCallback, FC } from "react";
import Gallery, { PhotoProps } from "react-photo-gallery";
import Carousel, { Modal, ModalGateway, ViewType } from "react-images";
import { photos } from "@/config/photos";

interface GalleryProps {
    photos: PhotoProps[];
}

const Gaallery: FC = () => {
    const [currentImage, setCurrentImage] = useState<number>(0);
    const [viewerIsOpen, setViewerIsOpen] = useState<boolean>(false);

    const openLightbox = useCallback(
        (event: React.MouseEvent, { photo, index }: { photo: PhotoProps; index: number }) => {
            setCurrentImage(index);
            setViewerIsOpen(true);
        },
        []
    );

    const closeLightbox = () => {
        setCurrentImage(0);
        setViewerIsOpen(false);
    };

    return (
        <div className="container mx-auto h-screen mt-52">
            <Gallery photos={photos} onClick={openLightbox} />
            <ModalGateway>
                {viewerIsOpen ? (
                    <Modal onClose={closeLightbox}>
                        <Carousel
                            currentIndex={currentImage}
                            views={photos.map((x: PhotoProps): ViewType => ({
                                ...x,
                                srcset: x.srcSet,
                                caption: x.title,
                            }))}
                        />
                    </Modal>
                ) : null}
            </ModalGateway>
        </div>
    );
};

export default Gaallery;
