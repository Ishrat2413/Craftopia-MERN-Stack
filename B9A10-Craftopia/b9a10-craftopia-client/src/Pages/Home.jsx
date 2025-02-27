import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/bundle";
import { Navigation, Autoplay } from 'swiper/modules';
import { FaFaceSmileBeam } from "react-icons/fa6";
import { useLoaderData } from "react-router-dom";
import SubCatCard from "./SubCatCard";
import { Typewriter } from 'react-simple-typewriter'
import { Fade } from 'react-awesome-reveal';


const Home = () => {
    const handleType = (count) => {
        console.log(count);
    };

    const handleDone = () => {
        console.log(`Typewriter animation done!`);
    };

    const subCategory = useLoaderData();
    return (
        <div>
            <div className='h-[350px] md:h-[450px] mt-[60px] md:mt-16'>
                <Swiper navigation={true} modules={[Navigation, Autoplay]} loop={true} autoplay={{ delay: 2000 }}>
                    <SwiperSlide>
                        <div className="slide ">
                            <img className='md:w-[1140px] h-[250px] md:h-[470px]' src="https://i.ibb.co/RzJrGJj/sunset-silhouettes-trees-mountains-generative-ai-169016-29376.jpg" alt="" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="slide">
                            <img className='md:w-[1140px] h-[250px]  md:h-[470px]' src="https://i.ibb.co/zXDYWgp/abstract-nature-illustration-tree-backdrop-watercolor-painted-image-generated-by-ai-188544-15564.jpg" alt="" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="slide">
                            <img className='md:w-[1140px] h-[250px] md:h-[470px]' src="https://i.ibb.co/CVvqpdz/beautiful-watercolor-floral-background-24972-2255.jpg" alt="" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="slide">
                            <img className='md:w-[1140px] h-[250px] md:h-[470px]' src="https://i.ibb.co/QcRV6gZ/vibrant-colors-swirling-futuristic-underwater-chaos-generated-by-ai-188544-9692.jpg" alt="" />
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
            <div>
                <div>
                    <div className='text-4xl font-bold text-center mt-12 mb-10'>
                        Our Crafto<span className="text-red-700">Pia</span> Arts & Crafts
                        <Typewriter
                            words={['..', '..']}
                            loop={true}
                            cursor
                            cursorStyle="_"
                            typeSpeed={70}
                            deleteSpeed={50}
                            delaySpeed={1000}
                            onLoopDone={handleDone}
                            onType={handleType}
                        />
                    </div>
                    <p className="flex w-[400px] md:w-[700px] mx-auto text-center mb-6">Explore a vibrant world of arts and crafts at Craftopia, your go-to destination for all things handmade and heartfelt. From intricate DIY projects to inspiring tutorials, immerse yourself in a community fueled by passion and imagination. </p>
                </div>
            </div>
            {/* Category */}
            <div>
                <div className="text-center text-4xl font-bold m-12">
                    Categories of our Arts & Crafts-
                    <Typewriter
                        words={['Landscape', 'Portrait', 'Charcoal', 'Oil Painting', 'Water Color', 'Cartoon']}
                        loop={true}
                        cursor
                        cursorStyle="_"
                        typeSpeed={70}
                        deleteSpeed={50}
                        delaySpeed={1000}
                        onLoopDone={handleDone}
                        onType={handleType}
                    />
                </div>
                <div className="grid md:grid-cols-3 gap-5">
                    {
                        subCategory.map(all => <SubCatCard
                            key={all._id}
                            all={all}>
                        </SubCatCard>)

                    }
                </div>
            </div>
            {/* Why people chhose us */}
            <div>
                <div className="text-center text-4xl font-bold m-12">
                    Why People Choose Us-
                    <Typewriter
                        words={['Realistic Arts', 'Fast & Secure', 'Helpful']}
                        loop={true} // Loop the animation
                        cursor
                        cursorStyle="_"
                        typeSpeed={70}
                        deleteSpeed={50}
                        delaySpeed={1000}
                        onLoopDone={handleDone}
                        onType={handleType}
                    />
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
                    <Fade direction="up" cascade damping={0.1} duration={800}>
                        <div className="py-6 px-2 shadow border flex justify-center items-center flex-col gap-4 bg-violet-100">
                            <p className="font-semibold text-lg text-center">
                                Realistic Arts <br />
                                By Professionals
                            </p>
                        </div>
                    </Fade>
                    <Fade direction="up" cascade damping={0.1} duration={800} delay={100}>
                        <div className="py-6 px-2 shadow border flex justify-center items-center flex-col gap-4 bg-orange-100">
                            <p className="font-semibold text-lg text-center">
                                Fast & Secure <br />
                                Delivery
                            </p>
                        </div>
                    </Fade>
                    <Fade direction="up" cascade damping={0.1} duration={800} delay={200}>
                        <div className="py-6 px-2 shadow border flex justify-center items-center flex-col gap-4 bg-violet-50 ">
                            <p className="font-semibold text-lg text-center">
                                Help by Our <br />
                                Professional Artists
                            </p>
                        </div>
                    </Fade>
                    <Fade direction="up" cascade damping={0.1} duration={800} delay={300}>
                        <div className="py-6 px-2 shadow border flex justify-center items-center flex-col gap-4 bg-orange-50">
                            <p className="font-semibold text-lg text-center">
                                Delivery Support <br />
                                24/7
                            </p>
                        </div>
                    </Fade>
                </div>

            </div>
            {/* Customer Review */}
            <div className="mx-auto mt-8 mb-6">
                <h2 className="text-center text-4xl font-bold font-serif m-4 ">Our Customer Review</h2>
                <div className="flex flex-wrap -m-4">
                    <div className="p-4 md:w-1/2 h-[250px] w-full ">
                        <div className="h-full bg-green-100 p-8 shadow-lg rounded">
                            <a className="inline-flex items-center gap-x-4">
                                <FaFaceSmileBeam className="text-3xl" />
                                <p className="font-medium text-gray-900">Sarah L.</p>
                            </a>
                            <p className="leading-relaxed mb-6">Absolutely thrilled with my experience on Craftopia! Their customer service is also top-notch; they answered all my questions and made sure my package arrived on time. Highly recommend!</p>
                        </div>
                    </div>
                    <div className="p-4 md:w-1/2 h-[250px] w-full ">
                        <div className="h-full bg-purple-100 p-8 shadow-lg rounded">
                            <a className="inline-flex items-center gap-x-4">
                                <FaFaceSmileBeam className="text-3xl" />
                                <p className="font-medium text-gray-900">JASON M.</p>
                            </a>
                            <p className="leading-relaxed mb-6">Ive been a customer at Craftopia for the past six months, and its been a game-changer for my DIY projects. The customer service team handled it very professionally</p>
                        </div>
                    </div>
                    <div className="p-4 md:w-1/2 h-[250px] w-full ">
                        <div className="h-full bg-sky-100 p-8 shadow-lg rounded">
                            <a className="inline-flex items-center gap-x-4">
                                <FaFaceSmileBeam className="text-3xl" />
                                <p className="font-medium text-gray-900">Darek T.</p>
                            </a>
                            <p className="leading-relaxed mb-6">I ordered a variety of painting supplies from Craftopia, and Ism impressed by the quality and price. Craftopia really fuels my creativity!</p>
                        </div>
                    </div>
                    <div className="p-4 md:w-1/2 h-[250px] w-full ">
                        <div className="h-full  bg-yellow-100 p-8 shadow-lg rounded">
                            <a className="inline-flex items-center gap-x-4">
                                <FaFaceSmileBeam className="text-3xl" />
                                <p className="font-medium text-gray-900">Mellissa G.</p>
                            </a>
                            <p className="leading-relaxed mb-6">Craftopia is my go-to site for all my crafting needs! I recently purchased several items for a quilting project and was delighted by the variety of fabrics and tools available. </p>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Home;