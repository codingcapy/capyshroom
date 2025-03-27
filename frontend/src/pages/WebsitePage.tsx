import weddingImg from "/wedding_img.png";
import Header from "../components/Header";
import itinary from "/website_itinerary.svg";
import timeline from "/website_timeline.svg";
import travel from "/icon_travel.svg";
import activities from "/icon_activities.svg";
import toTopIcon from "/icon_to_top.svg";
import eat from "/website_eat.svg";

export default function WebsitePage() {
    return (
        <div>
            <img src={weddingImg} alt="" className="mx-auto pt-10" />
            <div className="md:w-[600px] mx-auto">
                <Header />
            </div>
            <p className="text-center italic pt-5 pb-10">8888 days to go!</p>
            <div className="flex flex-col max-w-[1000px] mx-auto">
                <div className="md:flex mx-auto font-bold">
                    <div className="px-5">Our Story</div>
                    <div className="px-5">Itinerary</div>
                    <div className="px-5">Travel</div>
                    <div className="px-5">Things to do</div>
                    <div className="px-5">Photo Gallery</div>
                    <div className="px-5">RSVP</div>
                </div>
                <div className="text-xl font-bold py-5">Our Story</div>
                <p>
                    <span className="font-bold">Her</span>: December 2020, I
                    just deleted and remade my Tinder account because I managed
                    to left-swipe all the single men of Vancouver, and there
                    were no more profiles left. Tinder boosts new profiles to
                    the top of the list, so a new “Paul” popped up on my feed.
                    He had decent photos along with the obligatory
                    man-in-bathroom-mirror-with-toilet-reflection selfie. His
                    bio didn’t have much except for his Instagram handle, which
                    I obviously immediately stalked. His Instagram photos
                    confirmed that he wasn’t a scammer nor a weirdo. A few weeks
                    later in January, I received a notification that we matched.
                    We had a brief but fun chat about food, including where to
                    find ostrich eggs in Vancouver (you can’t find them in
                    Vancouver). But after talking for a day, the conversation
                    abruptly stopped and he never responded to me! I figured he
                    lost interest and found someone else to talk to. Normally I
                    delete dead conversations, but because our fun chat ended so
                    abruptly, I thought maybe there’s a slim chance he’ll reply,
                    so I left it. Fast forward to April and suddenly I get a
                    message from him, apologizing and saying he took a break
                    from the app! The rest is history. My hunch was right, if I
                    had deleted our conversation, I wouldn’t be here writing
                    this.{" "}
                </p>
                <p className="py-10">
                    <span className="font-bold">Him</span>: On a fateful evening
                    sometime back in December 2020, I was sitting in my couch,
                    minding my own business on Tinder and came across this girl
                    who was holding a baby. I thought “is this her baby?”
                    because I get curious when someone is holding a baby as
                    picture on their Tinder profile. Then I see that she wrote
                    “By the way, this is not my baby”. She also wrote “I don’t
                    know how to hold a baby”. So I swiped and we matched. I sent
                    her a message saying “I don’t know how to hold a baby
                    either!” and she replied “I think you’re supposed to hold it
                    either like an egg or a football”. Upon reading that, I
                    immediately knew she was the one. And what does someone do
                    when they knew she is the one? They get COVID depression and
                    hide in their cave for months. Until she wrote “If you’re no
                    longer interested you can tell me like an adult”, which
                    jolted me back and continued our journey to the present day.
                </p>
                <div className="text-xl font-bold py-5 italic">
                    How did you first meet?
                </div>
                <p className="pb-10">
                    Tinder. Yes it IS possible to find love in a dumpster fire.
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
                    He initiated the conversation, asked her out for sushi in
                    the park, since dining in wasn’t an option during peak covid
                    era.
                </p>
                <div className="text-xl font-bold py-5 italic">
                    What's the best meal you have eaten together?
                </div>
                <p className="pb-10">
                    Shake Shack, we're simple folk. Or anything after a 24 hour
                    fast together, because EVERYTHING tastes great after not
                    eating for 24 hours. But we never say no to Korean food,
                    either.
                </p>
                <div className="text-xl font-bold py-5 italic">
                    What's the most memorable trip you have taken together?
                </div>
                <p className="pb-10">
                    Busan for 10 hours! We took the bullet train in, spent the
                    afternoon at an illustration fair, then explored the famous
                    Haeundae beach at the end of the day. We took the train back
                    to Seoul in the evening.
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
                <img src={itinary} alt="" className="mx-auto" />
                <div className="header-font text-center text-2xl">
                    itinerary
                </div>
                <div className="p-5 text-center">
                    <p className="italic">Monday, September 29, 2025</p>
                    <p className="pt-5 italic">Ceremony at:</p>
                    <p className="font-bold py-2">St. Augustine by the Sea</p>
                    <p>130 ʻŌhua Ave, Honolulu, HI 96815</p>
                    <p className="pt-10 italic">Reception at:</p>
                    <p className="font-bold py-2">Moana Surfrider</p>
                    <p>2365 Kalākaua Ave, Honolulu, HI 96815</p>
                </div>
                <div className="flex justify-between text-center pt-5">
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
                <img src={travel} alt="" className="mx-auto" />
                <p className="header-font text-center py-10 text-2xl">travel</p>
                <div>
                    <div className="text-xl font-bold pb-2">
                        Preparing for your trip
                    </div>
                    <div>
                        Hawaii is hot all year round (duh it’s a tropical
                        island). Late September is on average 22°C to 32°C with
                        a low chance of heavy rain, so dress accordingly!{" "}
                    </div>
                    <div className="py-5">
                        <span className="font-bold italic">Important</span>: For
                        guests without Canadian citizenship, entering the US
                        requires an ESTA visa which you can apply for here. It
                        takes up to 72 hours to receive the visa.{" "}
                    </div>
                    <div>
                        If you have applied for an ESTA in the past, the visa is
                        generally valid for 2 years, or until your passport
                        expires. Please check if your existing ESTA is still
                        valid.
                    </div>
                    <div className="font-bold italic underline">
                        Without an ESTA, non-Canadians cannot enter the US.{" "}
                    </div>
                    <div className="text-xl font-bold pt-10">
                        Where to stay?
                    </div>
                    <div className="pt-2">
                        AirBnB tends to be a more budget friendly option than
                        hotels, so we recommend checking out AirBnB listings if
                        you’re looking for reasonably priced accommodations.{" "}
                    </div>
                    <div className="text-xl font-bold pt-10">
                        How to get to the venue?
                    </div>
                    <p className="py-2">
                        St. Augustine by the Sea is within walking distance of
                        most of the Waikiki area. If you are coming from outside
                        of Waikiki, there is the #13 bus that stops outside the
                        church.
                    </p>
                    <p>
                        The reception is being held at Moana Surfrider, which is
                        also within walking distance of the Waikiki area. There
                        is paid parking available on-site
                    </p>
                </div>
                <img src={activities} alt="" className="mx-auto" />
                <p className="header-font text-center py-10 text-2xl">
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
                <ul className="pl-5">
                    <li className="list-disc">
                        <span className="font-bold underline">
                            Bishop Museum
                        </span>
                        : Interested in learning more about native Hawaiian
                        culture? Here you can learn about the history of Hawaii
                        and its indigenous peoples.
                    </li>
                    <li className="list-disc">
                        <span className="font-bold underline">
                            Pearl Harbor Museum
                        </span>
                        : Learn more about the pivotal moment the US joined
                        WWII. The museum commemorates the attack on Pearl Harbor
                        and U.S.’s entry into the war. Entry to the museum is
                        free, but not the USS Arizona Memorial.
                    </li>
                </ul>
                <div className="text-2xl font-bold pt-10 italic">Hiking</div>
                <p className="py-5">
                    There are plenty of trails throughout the island. Our
                    favourite trails are:
                </p>
                <ul className="pl-5">
                    <li className="list-disc">
                        <span className="font-bold underline">
                            Makapu’u Lighthouse Point
                        </span>{" "}
                        (Difficulty: Easy. Paved trail, amazing ocean views.
                        We’re heading here the day after the wedding, come join
                        us if you’re interested!)
                    </li>
                    <li className="list-disc">
                        <span className="font-bold underline">
                            Diamond Head
                        </span>{" "}
                        (Difficulty: Medium. Amazing view of the city)
                    </li>
                    <li className="list-disc">
                        <span className="font-bold underline">Moana Falls</span>{" "}
                        (Difficulty: Easy. Watch out for mosquitos)
                    </li>
                    <li className="list-disc">
                        <span className="font-bold underline">Koko Head</span>{" "}
                        (Difficulty: HARD! Not for the faint. Navy seals train
                        here)
                    </li>
                </ul>
                <div className="text-2xl font-bold pt-10 italic">Surfing</div>
                <div className="pt-5">
                    We highly recommend surfing while in Hawaii! We suggest
                    lessons to learn the basics. There are many surf schools
                    around the island, but we had a great experience at{" "}
                    <span className="font-bold underline">Stoke Drift</span>. If
                    you’re lucky, you might even spot a turtle in the water!
                </div>
                <div className="text-2xl font-bold pt-10 italic">
                    Catamaran sail
                </div>
                <div className="pt-5">
                    For those who want to see the island from a different angle!
                    For the best ambiance, we recommend booking a sail for the
                    end of the day. We had a great experience with{" "}
                    <span className="font-bold underline">
                        Catamaran Kepoikai
                    </span>
                    .
                </div>
                <div className="text-2xl font-bold pt-10 italic">
                    Swim & Beach
                </div>
                <div className="pt-5">
                    Cool down and relax on the beach instead
                </div>
                <ul className="pl-5">
                    <li className="list-disc">
                        <span className="font-bold underline">
                            Waikiki Beach
                        </span>{" "}
                        (Most iconic beach on the island, with views of Diamond
                        Head. Very touristy if that’s your thing.)
                    </li>
                    <li className="list-disc">
                        <span className="font-bold underline">Hanauma Bay</span>{" "}
                        (DProtected marine life conservation area for snorkeling
                        )
                    </li>
                </ul>
                <div className="text-2xl font-bold pt-10 italic">Shopping</div>
                <ul className="pl-5 pt-5">
                    <li className="list-disc">
                        <span className="font-bold underline">
                            Ala Moana Mall
                        </span>{" "}
                        (The largest open-air shopping mall in the country! )
                    </li>
                    <li className="list-disc">
                        <span className="font-bold underline">
                            Kalākaua Ave
                        </span>{" "}
                        (Long street in the heart of Waikiki’s tourist area.
                        Lots of shops and restaurants to check out.)
                    </li>
                </ul>
                <img src={eat} alt="" className="mx-auto" />
            </div>
            <img
                src={toTopIcon}
                alt=""
                className="fixed w-[25px] bottom-5 right-5 2xl:w-auto 2xl:bottom-10 2xl:right-10"
            />
            <div className="header-font text-center text-2xl">
                eat and drink
            </div>
            <div className="flex flex-col max-w-[1000px] mx-auto pt-10 pb-32">
                <div>
                    Hawaiian cuisine is very diverse and reflects the different
                    cultures that live on the island. It’s a fusion of
                    Polynesian, Asian, and North American cuisine. Here are a
                    few of our favourite spots around the island to eat at!
                </div>
                <ul className="pl-5 pt-5">
                    <li className="list-disc">
                        <span className="font-bold underline">Maguro Spot</span>{" "}
                        (Corner store serving up fresh Japanese-style poke)
                    </li>
                    <li className="list-disc">
                        <span className="font-bold underline">
                            Eggs n Things
                        </span>{" "}
                        (Serving fluffy pancakes and loco mocos all day. There
                        are two locations but we prefer the location at 339
                        Saratoga Road for the ambiance.)
                    </li>
                    <li className="list-disc">
                        <span className="font-bold underline">
                            Waiola Shaved Ice
                        </span>{" "}
                        (Counter-served corner store serving all kinds of shaved
                        ice )
                    </li>
                    <li className="list-disc">
                        <span className="font-bold underline">Lūʻau</span> (A
                        traditional Hawaiian dinner feast with fire shows and
                        traditional dance and music. There are many locations
                        that offer lūʻ’aus)
                    </li>
                    <li className="list-disc">
                        <span className="font-bold underline">
                            Koko Head Cafe
                        </span>{" "}
                        (Cozy cafe location serving asian fusion brunch)
                    </li>
                </ul>
            </div>
        </div>
    );
}
