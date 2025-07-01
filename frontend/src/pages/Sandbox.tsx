import weddingImg from "/wedding_img.svg";
import Header from "../components/Header";
import itinary from "/website_itinerary.svg";
import timeline from "/website_timeline.svg";
import travel from "/icon_travel.svg";
import activities from "/icon_activities.svg";
import toTopIcon from "/icon_to_top.svg";
import eat from "/website_eat.svg";
import photos from "/image_photos.svg";
import { useEffect, useRef, useState } from "react";
import GoogleMap from "../components/GoogleMap";
import Countdown from "../components/countdown";
import MyIcon from "../components/MyIcon";
import food1 from "/food1.jpg";
import food2 from "/food2.jpg";
import food3 from "/food3.jpg";
import "yet-another-react-lightbox/styles.css";
import Lightbox from "yet-another-react-lightbox";
import mobileSchedule1 from "/mobile_schedule_01.svg";
import mobileSchedule2 from "/mobile_schedule_02.svg";
import image1 from "/JEJ_1653.jpg";
import image2 from "/HTS02197.jpg";
import image3 from "/JEJ_0344.jpg";
import image4 from "/HTS00171.jpg";
import image5 from "/HTS00124.jpg";
import image6 from "/HTS02515.jpg";
import image7 from "/JEJ_0197 1.png";
import image8 from "/JEJ_2347 1.png";
import image9 from "/JEJ_1505 1.png";
import image10 from "/JEJ_1576 1.png";
import image11 from "/HTS02269 1.png";
import image12 from "/HTS00219 1.png";
import image13 from "/JEJ_0932 1.png";
import image14 from "/JEJ_2223 1.png";
import image15 from "/HTS01964 1.png";
import image16 from "/HTS00256 1.png";
import image17 from "/JEJ_1517 1.png";
import image18 from "/HTS00031 1.png";
import Masonry from "react-masonry-css";

const galleryImages = [
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
    image7,
    image8,
    image9,
    image10,
    image11,
    image12,
    image13,
    image14,
    image15,
    image16,
    image17,
    image18,
];

function ImageGallery(props: { images: string[] }) {
    const { images } = props;
    const [open, setOpen] = useState(false);
    const [index, setIndex] = useState(0);

    return (
        <div className="pb-10">
            <div className="md:flex gap-4">
                {images.map((src, i) => (
                    <img
                        key={i}
                        src={src}
                        alt=""
                        className="rounded-xl w-[325px] h-[200px] object-cover object-center cursor-pointer hover:scale-105 transition-all ease-in-out duration-300 my-2 md:my-0"
                        onClick={() => {
                            setIndex(i);
                            setOpen(true);
                        }}
                    />
                ))}
            </div>

            <Lightbox
                open={open}
                close={() => setOpen(false)}
                index={index}
                slides={images.map((src) => ({ src }))}
            />
        </div>
    );
}

export default function Sandbox() {
    const [navVisible, setNavVisible] = useState(false);
    const breakpointColumnsObj = {
        default: 3,
        1100: 3,
        700: 2,
        500: 1,
    };
    const [open, setOpen] = useState(false);
    const [index, setIndex] = useState(0);
    return (
        <>
            <div className="p-10 sm:p-0">
                <div className="pb-10">
                    <ImageGallery images={[food1, food2, food3]} />
                </div>
                <div className="w-[75%] mx-auto">
                    <Masonry
                        breakpointCols={breakpointColumnsObj}
                        className="my-masonry-grid"
                        columnClassName="my-masonry-grid_column"
                    >
                        {galleryImages.map((src, idx) => (
                            <img key={idx} src={src} className="w-full" />
                        ))}
                    </Masonry>
                </div>
            </div>
        </>
    );
}
