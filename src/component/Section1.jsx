import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

AOS.init({

    disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
    startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
    initClassName: 'aos-init', // class applied after initialization
    animatedClassName: 'aos-animate', // class applied on animation
    useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
    disableMutationObserver: false, // disables automatic mutations' detections (advanced)
    debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
    throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
    offset: 120, // offset (in px) from the original trigger point
    delay: 200, // values from 0 to 3000, with step 50ms
    duration: 2000, // values from 0 to 3000, with step 50ms
    easing: 'ease', // default easing for AOS animations
    once: false, // whether animation should happen only once - while scrolling down
    mirror: false, // whether elements should animate out while scrolling past them
    anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

});


const Section1 = () => {
    return (
        <div className="bg-black p-14 ">
            <div  className="max-w-4xl mx-auto space-y-7">
                <h1 data-aos="fade-right"  className="text-orange-400 text-center text-4xl ">Video Game Event Production</h1>
                <p data-aos="fade-left" className="text-white"><span className="text-lg text-red-500">Triggered</span> by the reveal of unique industry needs and a myriad of opportunities, GPJ has banded together a specialized squad of experienced gaming personnel. Our mission: conquer the greatest gaming experiential challenges across the globe. Members of this team have been hand-selected based on their award-winning industry track records and their unequaled passion and immersion within the gaming world.
                We will continue to set a new standard for what experiential activations and esports events can be, now and into the future.</p>

              <h1 data-aos="fade-right" className="text-red-600 text-center text-4xl">Esports Event Management</h1>
              <p data-aos="fade-left" className="text-white"><span className="text-lg text-orange-400 ">We’ve created</span> interactive experiences at some of the largest <span className="text-teal-400">Esports Event</span>, video game competitions, trade shows, and gaming conventions, including event management and event production at E3 and CES. We strive to provide fans and influencers with memories they won’t soon forget through experience marketing. Our unique and creative photo ops, game demos, competitive game tournament organization, broadcast streaming, product launches and more, bring fans together for amazing gaming experiences while serving as successful game promotion.  <span className="text-base text-blue-600">see more.....</span></p>
            </div>
        </div>
    );
};

export default Section1;