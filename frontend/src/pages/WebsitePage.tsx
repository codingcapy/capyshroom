import weddingImg from "/wedding_img.svg";
import Header from "../components/Header";
import itinary from "/website_itinerary.svg";
import timeline from "/website_timeline.svg";
import travel from "/icon_travel.svg";
import activities from "/icon_activities.svg";
import toTopIcon from "/icon_to_top.svg";
import eat from "/website_eat.svg";
import photos from "/image_photos.svg";
import imageUnderline from "/image_underline.svg";
import React, { useEffect, useState } from "react";
import GoogleMap from "../components/GoogleMap";
import countdown from "../components/countdown";
import Countdown from "../components/countdown";

export default function WebsitePage() {
    const [navVisible, setNavVisible] = useState(false);

    useEffect(() => {
        function handleResize() {
            if (window.innerWidth > 767.5) {
                setNavVisible(true);
            } else {
                setNavVisible(false);
            }
        }

        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, [setNavVisible]);

    function slideToggle() {
        if (window.innerWidth < 768) setNavVisible(!navVisible);
    }

    return (
        <>
            <header className="md:hidden sticky left-0 top-0 z-[999] bg-[#FFF7EE]">
                <div className="flex justify-between">
                    <div></div>
                    <button
                        id="hamburger-menu"
                        className="text-3xl text-[#637CC6] md:hidden"
                        onClick={slideToggle}
                    >
                        &#x2630;
                    </button>
                </div>
                <div
                    id="main-nav"
                    className={`${
                        navVisible ? "visible" : ""
                    } flex flex-col mx-auto text-center`}
                >
                    {[
                        "Our Story",
                        "Itinerary",
                        "Travel",
                        "Things to do",
                        "Photo Gallery",
                    ].map((text) => {
                        // Custom ID mapping
                        let id;
                        if (text === "Photo Gallery") id = "photos";
                        else if (text === "Things to do") id = "things";
                        else if (text === "Our Story") id = "story";
                        else id = text.toLowerCase().replace(/\s+/g, "-");

                        return (
                            <div
                                key={text}
                                onClick={() => {
                                    document
                                        .getElementById(id)
                                        ?.scrollIntoView({
                                            behavior: "smooth",
                                        });
                                    setNavVisible(false);
                                }}
                                className="px-5 cursor-pointer group inline-flex items-center hover:text-[#637CC6] transition-colors mx-auto py-2"
                            >
                                {text}
                                {}
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    className="w-4 h-4 ml-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                                >
                                    <path d="M5 12h14M12 5l7 7-7 7" />
                                </svg>
                            </div>
                        );
                    })}
                </div>
            </header>
            <div className="p-10 sm:p-0">
                <img
                    src={weddingImg}
                    alt=""
                    className="mx-auto pt-10 pb-5 w-[225px]"
                    id="top"
                />
                <div className="md:w-[600px] mx-auto">
                    <Header />
                </div>
                <p className="text-center italic pt-5 pb-10 text-lg">
                    {" "}
                    <Countdown />{" "}
                </p>
                <div className="flex flex-col max-w-[1000px] mx-auto">
                    <div className="hidden md:flex mx-auto font-bold text-lg pb-10">
                        {[
                            "Our Story",
                            "Itinerary",
                            "Travel",
                            "Things to do",
                            "Photo Gallery",
                        ].map((text) => {
                            // Custom ID mapping
                            let id;
                            if (text === "Photo Gallery") id = "photos";
                            else if (text === "Things to do") id = "things";
                            else id = text.toLowerCase().replace(/\s+/g, "-");

                            return (
                                <div
                                    key={text}
                                    onClick={() =>
                                        document
                                            .getElementById(id)
                                            ?.scrollIntoView({
                                                behavior: "smooth",
                                            })
                                    }
                                    className="px-5 cursor-pointer group inline-flex items-center hover:text-[#637CC6] transition-colors"
                                >
                                    {text}
                                    {}
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        className="w-4 h-4 ml-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                                    >
                                        <path d="M5 12h14M12 5l7 7-7 7" />
                                    </svg>
                                </div>
                            );
                        })}
                        <a
                            href="https://rsvplinkhere.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-5 cursor-pointer group relative inline-flex items-center hover:text-[#637CC6] transition-colors"
                        >
                            RSVP
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                className="w-4 h-4 ml-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                            >
                                <path d="M5 12h14M12 5l7 7-7 7" />
                            </svg>
                        </a>
                    </div>
                    <div className="text-xl font-bold py-5" id="story">
                        Aloha!
                    </div>
                    <p>
                        Welcome to our wedding site! Here you’ll find all the
                        info you need for the big day, including the schedule,
                        and suggestions for what to do, see, and eat on the
                        island!{" "}
                    </p>
                    <div className="flex items-center justify-center gap-0 py-10">
                        <div className="rounded-full h-[4px] w-[4px] bg-[#637CC6]"></div>
                        <div className="h-[1px] w-[400px] bg-[#637CC6]"></div>
                        <div className="rounded-full h-[4px] w-[4px] bg-[#637CC6]"></div>
                    </div>
                    <div className="text-xl font-bold py-5 italic">
                        How did you first meet?
                    </div>
                    <p className="pb-10">
                        Tinder. Yes it IS possible to find love in a dumpster
                        fire.
                    </p>
                    <div className="text-xl font-bold py-5 italic">
                        Who swiped right first?
                    </div>
                    <p className="pb-10">
                        She did! No, he did! Actually, she swiped first.
                    </p>
                    <div className="text-xl font-bold py-5 italic">
                        Who made the first move? How?
                    </div>
                    <p className="pb-10">
                        He initiated the conversation, asked her out for sushi
                        in the park, since dining in wasn’t an option during
                        peak covid era.
                    </p>
                    <div className="text-xl font-bold py-5 italic">
                        What's the best meal you have eaten together?
                    </div>
                    <p className="pb-10">
                        Shake Shack, we're simple folk. Or anything after a 24
                        hour fast together, because EVERYTHING tastes great
                        after not eating for 24 hours. But we never say no to
                        Korean food, either.
                    </p>
                    <div className="text-xl font-bold py-5 italic">
                        What's the most memorable trip you have taken together?
                    </div>
                    <p className="pb-10">
                        Busan for 10 hours! We took the bullet train in, spent
                        the afternoon at an illustration fair, then explored the
                        famous Haeundae beach at the end of the day. We took the
                        train back to Seoul in the evening.
                    </p>
                    <div className="text-xl font-bold py-5 italic">
                        Who is more likely to get lost?
                    </div>
                    <p className="pb-10">Paul. She meant Stephanie.</p>
                    <div className="text-xl font-bold py-5 italic">
                        Where are you going for your honeymoon?
                    </div>
                    <p className="pb-10">
                        Japan next year, to the capybara hotel in Shizuoka.
                    </p>
                    <img
                        src={itinary}
                        alt=""
                        className="mx-auto w-[120px] pt-40 pb-5"
                        id="itinerary"
                    />
                    <div className="header-font text-center text-2xl pb-5">
                        itinerary
                    </div>
                    <div className="p-5 text-center pb-20">
                        <p className="italic">Monday, September 29, 2025</p>
                        <p className="pt-5 italic">Ceremony at:</p>
                        <p className="font-bold py-0">
                            St. Augustine by the Sea
                        </p>
                        <p className="pt-0">
                            130 ʻŌhua Ave, Honolulu, HI 96815
                        </p>
                        <p className="pt-10 italic">Reception at:</p>
                        <p className="font-bold py-0">Moana Surfrider</p>
                        <p className="pt-0">
                            2365 Kalākaua Ave, Honolulu, HI 96815
                        </p>
                    </div>
                    <div className="flex justify-between text-center py-5">
                        <div>
                            <div className="font-bold">THE WEDDING DAY</div>
                            <div>
                                St. Augustine by the Sea, Reception at Moana
                                Surfrider
                            </div>
                        </div>
                        <div>
                            <div className="font-bold">
                                THE DAY AFTER (OPTIONAL)
                            </div>
                            <div>Hike Makapu’u point</div>
                        </div>
                    </div>
                    <img src={timeline} alt="" />
                    <img
                        src={travel}
                        alt=""
                        className="mx-auto w-[120px] py-5 pt-40"
                        id="travel"
                    />
                    <p className="travel header-font text-center py-5 text-2xl">
                        travel
                    </p>
                    <div>
                        <div className="text-xl font-bold pb-2">
                            Preparing for your trip
                        </div>
                        <div className="pb-10">
                            Hawaiʻi is hot all year round (duh it’s a tropical
                            island). Late September is on average 22°C to 32°C
                            with a low chance of heavy rain, so dress
                            accordingly!{" "}
                        </div>

                        <div className="text-xl font-bold pt-10">
                            Visa requirements
                        </div>
                        <div className="py-5">
                            There are no requirements for Canadians entering the
                            U.S. unless you plan to stay longer than 30 days.
                        </div>
                        <div className="pb-5">
                            For guests{" "}
                            <span className="underline">without</span> Canadian
                            or American citizenship, entering the U.S. requires
                            a visa. The visa type depends on which passport you
                            hold. Please check the{" "}
                            <a
                                href="https://travel.state.gov/content/travel/en/us-visas/tourism-visit/visitor.html"
                                className="font-bold underline"
                                target="_blank"
                            >
                                U.S. department of State website
                            </a>{" "}
                            for the type of visa you will need to travel.{" "}
                        </div>
                        <div className="font-bold italic underline pb-10">
                            Without a visa, non-Canadians cannot enter the US.{" "}
                        </div>
                        <div className="text-xl font-bold pt-10">
                            Where to stay?
                        </div>
                        <div className="pt-5">
                            <a
                                href="https://airbnb.com/"
                                className="font-bold underline"
                                target="_blank"
                            >
                                AirBnB
                            </a>{" "}
                            is the most budget friendly option on the island,
                            but there are plenty of hotels too. A quick search
                            or{" "}
                            <a
                                href="https://hotels.com/"
                                className="font-bold underline"
                                target="_blank"
                            >
                                Hotels.com
                            </a>{" "}
                            or{" "}
                            <a
                                href="https://expedia.com/"
                                className="font-bold underline"
                                target="_blank"
                            >
                                Expedia.ca
                            </a>{" "}
                            will show you many hotel options.
                        </div>
                        <div className="pt-5 pb-10">
                            Booking in the Waikīkī neighbourhood is the most
                            convenient since it’s close to shops, beaches, and
                            tourist activities.{" "}
                        </div>
                        <div className="text-xl font-bold pt-10">
                            How to get to the venue?
                        </div>
                        <p className="py-2">
                            <a
                                href="https://staugustinebythesea.com/"
                                className="font-bold underline"
                                target="_blank"
                            >
                                St. Augustine by the Sea
                            </a>{" "}
                            is within walking distance of most of the Waikīkī
                            area. Access to the church is located through
                            the Brown Gate in the Church Parking Lot. Free
                            parking is located through the black iron gates
                            before the brown two story building on Ohua Avenue,
                            behind the church.
                        </p>
                        <div>
                            <main className="p-4 pb-10">
                                <GoogleMap mapSrc="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3717.944117963187!2d-157.8230905!3d21.2736795!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7c007277363c0cb5%3A0xf722baa0bc4ce421!2sSt.%20Augustine%20by%20the%20Sea!5e0!3m2!1sen!2sca!4v1743219927198!5m2!1sen!2sca&output=embed&hl=en" />{" "}
                            </main>
                        </div>
                        <p>
                            The reception is being held at{" "}
                            <a
                                href="https://www.marriott.com/en-us/hotels/hnlwi-moana-surfrider-a-westin-resort-and-spa-waikiki-beach/overview/"
                                className="font-bold underline"
                                target="_blank"
                            >
                                Moana Surfrider
                            </a>
                            , which is also within walking distance of the
                            Waikīkī area. There is paid parking available
                            on-site
                        </p>
                        <div>
                            <main className="p-4 pb-10">
                                <GoogleMap mapSrc="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3717.871594128856!2d-157.8266319!3d21.276549799999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7c007276865a25cf%3A0x98f7cfcfac6fec49!2sMoana%20Surfrider%2C%20A%20Westin%20Resort%20%26%20Spa%2C%20Waikiki%20Beach!5e0!3m2!1sen!2sca!4v1743220602041!5m2!1sen!2sca&output=embed&hl=en" />{" "}
                            </main>
                        </div>
                    </div>
                    <img
                        src={activities}
                        alt=""
                        className="mx-auto w-[100px] py-0 pt-40"
                        id="things"
                    />
                    <p className=" header-font text-center py-10 text-2xl">
                        things to do
                    </p>
                    <p>
                        Not sure what to do or where to go? Here are some of our
                        favourite things to see, experience, and eat around the
                        island
                    </p>
                    <div className="text-2xl font-bold pt-10 pb-2 italic">
                        Learning
                    </div>
                    <ul className="pl-5 pb-10">
                        <li className="list-disc">
                            <a
                                href="https://www.bishopmuseum.org/"
                                className="font-bold underline"
                                target="_blank"
                            >
                                Bishop Museum
                            </a>
                            : Interested in learning more about native Hawaiian
                            culture? Here you can learn about the history of the
                            islands and its indigenous peoples.
                        </li>
                        <li className="list-disc">
                            <a
                                href="https://www.nps.gov/perl/index.htm"
                                className="font-bold underline"
                                target="_blank"
                            >
                                Pearl Harbor Museum
                            </a>
                            : Learn more about the U.S.’s role in WWII. The
                            museum commemorates the attack on Pearl Harbor and
                            U.S.’s entry into the war. Entry to the museum is
                            free, but not the USS Arizona Memorial.
                        </li>
                    </ul>
                    <div className="text-2xl font-bold pt-10 italic">
                        Hiking
                    </div>
                    <p className="py-5">
                        There are plenty of trails throughout the island. Our
                        favourite trails are:
                    </p>
                    <ul className="pl-5 pb-10">
                        <li className="list-disc">
                            <a
                                href="https://dlnr.hawaii.gov/dsp/hiking/oahu/makapuu-point-lighthouse-trail/"
                                className="font-bold underline"
                                target="_blank"
                            >
                                Makapu’u Lighthouse Point
                            </a>{" "}
                            (Difficulty: Easy. Paved trail, amazing ocean views.
                            We’re heading here the day after the wedding, come
                            join us if you’re interested!)
                        </li>
                        <li className="list-disc">
                            <a
                                href="https://dlnr.hawaii.gov/dsp/hiking/oahu/diamond-head-summit-trail/"
                                className="font-bold underline"
                                target="_blank"
                            >
                                Diamond Head
                            </a>{" "}
                            (Difficulty: Medium. Amazing view of the city)
                        </li>
                        <li className="list-disc">
                            <a
                                href="https://www.alltrails.com/trail/hawaii/oahu/manoa-falls-trail"
                                className="font-bold underline"
                                target="_blank"
                            >
                                Mānoa Falls
                            </a>{" "}
                            (Difficulty: Easy. Watch out for mosquitos)
                        </li>
                        <li className="list-disc">
                            <a
                                href="https://www.alltrails.com/trail/hawaii/oahu/koko-head-crater-trail"
                                className="font-bold underline"
                                target="_blank"
                            >
                                Koko Head
                            </a>{" "}
                            (Difficulty: HARD! Not for the faint. Navy seals
                            train here)
                        </li>
                    </ul>

                    <div className="text-2xl font-bold pt-10 italic">
                        Surfing
                    </div>
                    <div className="pt-5 pb-10">
                        We highly recommend surfing while in Hawaiʻi! We suggest
                        lessons to learn the basics. There are many surf schools
                        around the island, but we had a great experience at{" "}
                        <a
                            href="https://stokedrift.com/"
                            className="font-bold underline"
                            target="_blank"
                        >
                            Stoke Drift
                        </a>
                        . If you’re lucky, you might even spot a turtle in the
                        water!
                    </div>
                    <div className="text-2xl font-bold pt-10 italic">
                        Catamaran sail
                    </div>
                    <div className="pt-5 pb-10">
                        For those who want to see the island from a different
                        angle! For the best ambiance, we recommend booking a
                        sail for the end of the day. We had a great experience
                        with{" "}
                        <a
                            href="https://www.kepoikai.com/"
                            className="font-bold underline"
                            target="_blank"
                        >
                            Catamaran Kepoikai
                        </a>
                        .
                    </div>
                    <div className="text-2xl font-bold pt-10 italic">
                        Swim & Beach
                    </div>
                    <div className="pt-5">
                        Cool down and relax on the beach instead
                    </div>
                    <ul className="pl-5 pb-10">
                        <li className="list-disc">
                            <a
                                href="https://www.gohawaii.com/islands/oahu/things-to-do/beaches/waikiki-beach"
                                className="font-bold underline"
                                target="_blank"
                            >
                                Waikīkī Beach
                            </a>
                            : Most iconic beach on the island, with views of
                            Diamond Head. Very touristy if that’s your thing.
                        </li>
                        <li className="list-disc">
                            <a
                                href="https://hanaumabaystatepark.com/"
                                className="font-bold underline"
                                target="_blank"
                            >
                                Hanauma Bay
                            </a>
                            : Protected marine life conservation area for
                            snorkeling
                        </li>
                    </ul>
                    <div className="shopping text-2xl font-bold pt-10 italic">
                        Shopping
                    </div>
                    <ul className="pl-5 pt-5">
                        <li className="list-disc">
                            <a
                                href="https://www.alamoanacenter.com/en/"
                                className="font-bold underline"
                                target="_blank"
                            >
                                Ala Moana Mall
                            </a>
                            : The largest open-air shopping mall in the country!
                        </li>
                        <li className="list-disc">
                            <a
                                href="https://www.hawaiiactivities.com/travelguide/kalakaua-avenue/"
                                className="font-bold underline"
                                target="_blank"
                            >
                                Kalākaua Ave
                            </a>
                            : Long street in the heart of Waikīkī ’s tourist
                            area. Lots of shops and restaurants to check out.
                        </li>
                    </ul>
                    <img src={eat} alt="" className="mx-auto w-[120px] pt-60" />
                </div>
                <img
                    src={toTopIcon}
                    alt=""
                    className="fixed w-[25px] bottom-5 right-5 2xl:w-[50px] 2xl:bottom-10 2xl:right-10"
                    onClick={() =>
                        document
                            .getElementById("top")
                            ?.scrollIntoView({ behavior: "smooth" })
                    }
                />
                <div className=" eat header-font text-center text-2xl pt-10">
                    eat and drink
                </div>
                <div className="flex flex-col max-w-[1000px] mx-auto pt-10">
                    <div>
                        Hawaiian cuisine is very diverse and reflects the
                        different cultures that live on the island. It’s a
                        fusion of Polynesian, Asian, and North American cuisine.
                        Here are a few of our favourite spots around the island
                        to eat at!
                    </div>
                    <ul className="pl-5 pt-5">
                        <li className="list-disc">
                            <a
                                href="https://magurospot.com/"
                                className="font-bold underline"
                                target="_blank"
                            >
                                Maguro Spot
                            </a>
                            : Corner store serving up fresh Japanese-style poke
                        </li>
                        <li className="list-disc">
                            <a
                                href="https://eggsnthings.com/"
                                className="font-bold underline"
                                target="_blank"
                            >
                                Eggs n Things
                            </a>
                            : Serving fluffy pancakes and loco mocos all day.
                            There are two locations but we prefer the location
                            at 339 Saratoga Road for the ambiance.
                        </li>
                        <li className="list-disc">
                            <a
                                href="https://www.waiolashaveice.co/"
                                className="font-bold underline"
                                target="_blank"
                            >
                                Waiola Shaved Ice
                            </a>
                            : Counter-served corner store serving all kinds of
                            shaved ice
                        </li>
                        <li className="list-disc">
                            <a
                                href="https://www.gohawaii.com/hawaiian-culture/luau"
                                className="font-bold underline"
                                target="_blank"
                            >
                                Lūʻau
                            </a>
                            : A traditional Hawaiian dinner feast with fire
                            shows and traditional dance and music. There are
                            many locations that offer lūʻ’aus
                        </li>
                        <li className="list-disc pb-40">
                            <a
                                href="https://www.kokoheadcafe.com/"
                                className="font-bold underline"
                                target="_blank"
                            >
                                Koko Head Cafe
                            </a>
                            : Cozy cafe location serving asian fusion brunch
                        </li>
                    </ul>
                </div>
                <img
                    src={photos}
                    alt=""
                    className="mx-auto w-[100px] pt-30"
                    id="photos"
                />
                <div className=" photos header-font text-center text-2xl pt-10">
                    photo gallery
                </div>
                <div className="flex flex-col max-w-[1000px] mx-auto pt-10 pb-60">
                    <div className="align-content: text-center">
                        Coming soon ʕ•ᴥ•ʔ
                    </div>
                </div>
            </div>
        </>
    );
}
