import weddingImg from "/wedding_img.png";
import Header from "../components/Header";
import itinary from "/website_itinerary.svg";

export default function WebsitePage() {
    return (
        <div>
            <img src={weddingImg} alt="" className="mx-auto pt-10" />
            <div className="w-[600px] mx-auto">
                <Header />
            </div>
            <p className="text-center italic pt-5 pb-10">8888 days to go!</p>
            <div className="flex flex-col max-w-[1000px] mx-auto">
                <div className="flex mx-auto font-bold">
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
            </div>
        </div>
    );
}
