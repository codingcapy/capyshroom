import Header from "../components/Header";
import sorry from "/website_sorry.svg";

export default function DeclinePage() {
    return (
        <>
            <Header />
            <div className="py-10">
                <img src={sorry} alt="" className="mx-auto" />
            </div>
            <div className="font-bold xl:text-xl mb-5 text-center">
                We’re sorry you can’t make it! We will eat a bowl of poke and
                lay on the beach on your behalf.
            </div>
        </>
    );
}
