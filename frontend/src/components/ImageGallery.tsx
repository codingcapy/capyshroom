import { useState } from "react";

type ImageGalleryProps = {
    images: string[];
};

export default function ImageGallery({ images }: ImageGalleryProps) {
    const [lightboxImg, setLightboxImg] = useState<string | null>(null);

    const handleImageClick = (src: string) => {
        setLightboxImg(src);
    };

    const closeLightbox = () => {
        setLightboxImg(null);
    };

    return (
        <div className="pb-10">
            {/* Image Grid */}
            <div className="flex gap-4">
                {images.map((src, i) => (
                    <img
                        key={i}
                        src={src}
                        alt=""
                        className="rounded-xl w-[200px] h-[150px] object-cover object-center cursor-pointer"
                        onClick={() => handleImageClick(src)}
                    />
                ))}
            </div>

            {/* Lightbox Overlay */}
            {lightboxImg && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
                    onClick={closeLightbox}
                >
                    <img
                        src={lightboxImg}
                        alt=""
                        className="max-w-[90%] max-h-[90%] rounded-xl shadow-lg"
                        onClick={(e) => e.stopPropagation()} // Prevent close when clicking image
                    />
                </div>
            )}
        </div>
    );
}
