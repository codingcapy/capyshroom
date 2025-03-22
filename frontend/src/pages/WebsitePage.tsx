import weddingImg from "/wedding_img.png";
import imgTitle from "/image_title.png";
import Header from "../components/Header";

export default function WebsitePage() {
    return (
        <div>
            <img src={weddingImg} alt="" className="mx-auto pt-20" />
            <div className="w-[600px] mx-auto">
                <Header />
            </div>
        </div>
    );
}
