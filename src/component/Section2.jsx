import img1 from "../assets/1444082-large-4k-games-wallpaper-3840x2160-for-ios.jpg"
import img2 from "../assets/hd-assassin-s-creed-gaming-cover-h3zgkk83v6fimy4j.jpg"
import img3 from "../assets/live-gaming-bcs2rtkrdnvrq8mw.jpg"
import img4 from "../assets/7445.webp"
import img5 from "../assets/1f71e64d2805e8f78ffd8dd7f4be23ed--news-games-pc-games.jpg"
import img6 from "../assets/3034612.jpg"
import img7 from "../assets/call-of-duty-modern-warfare-3-26830-1920x1080.jpg"
import img8 from "../assets/3594a4db49d57475fbdece89d5a51096.jpg"

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


const Section2 = () => {
    return (
        <div className="bg-black ">
            <div className="">
                <p className="text-center text-3xl text-green-500 pt-9 ">Tournaments by game</p>
            </div>

            <div className="grid gap-5 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 p-16 ">

                <div data-aos="fade-down-right"><img className="border p-4" src={img4} alt="" /></div>
                <div data-aos="zoom-out"><img className="border p-4" src={img2} alt="" /></div>
                <div data-aos="zoom-out"><img className="border p-4" src={img3} alt="" /></div>
                <div data-aos="fade-down-left"><img className="border p-4" src={img1} alt="" /></div>

                <div data-aos="fade-right"><img className="border p-4" src={img5} alt="" /></div>
                <div data-aos="zoom-out"><img className="border p-4" src={img6} alt="" /></div>
                <div data-aos="zoom-out"><img className="border p-4" src={img7} alt="" /></div>
                <div data-aos="fade-left"><img className="border p-4" src={img8} alt="" /></div>

                <div data-aos="fade-up-right"><img className="border p-4" src={img2} alt="" /></div>
                <div data-aos="zoom-out"><img className="border p-4" src={img4} alt="" /></div>
                <div data-aos="zoom-out"><img className="border p-4" src={img1} alt="" /></div>
                <div data-aos="fade-up-left" ><img className="border p-4" src={img3} alt="" /></div>

            </div>
        </div>
    );
};

export default Section2;