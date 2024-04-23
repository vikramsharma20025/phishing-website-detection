'use client';
import React from 'react'
import {Swiper, SwiperSlide} from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/free-mode'
import {FreeMode, Pagination} from 'swiper/modules'
import {RxArrowTopRight} from 'react-icons/rx'


export default function page() {
    return (
        <div className='h-screen gradientbody'>
            <header className=' flex justify-center'>
                <h1 className='text-6xl'>Meet Our Team</h1>
            </header>
            <Swiper
                breakpoints={{
                    340: {
                        slidesPerView: 2,
                        spaceBetween: 15,
                    },
                    700: {
                        slidesPerView: 3,
                        spaceBetween: 15,
                    },
                }}
                freeMode={true}
                pagination={{
                    clickable: true,
                    dynamicBullets: true,
                    renderBullet: function (index, className) {
                        return '<span class="' + className + '"><RxArrowTopRight /></span>';
                    },
                }}
                modules={[FreeMode, Pagination]}
                className='max-w-[90%] 1g:max-w-[80%] h-3/4 my-auto mx-auto'
            >
                <SwiperSlide className='flex flex-col justify-center items-center transition-shadow duration-300 hover:shadow-lg'>
                    <section className="member flex flex-col justify-center h-full">
                        <h2>Vikram Sharma</h2>
                        <p>As our visionary leader, Vikram brings years of experience in full stack and software development. With his strategic mindset and innovative approach, he guides our team towards achieving new heights of success.</p>
                    </section>
                </SwiperSlide>
                <SwiperSlide className='flex flex-col justify-center items-center transition-shadow duration-300 hover:shadow-lg'>
                    <section className="member flex flex-col h-full justify-center">
                        <h2>Rakesh Kumar</h2>
                        <p>Meet Rakesh, our resident expert in documentation, requirement gathering. With a keen eye for detail and a commitment to excellence, Rakesh ensures that every project is executed with precision and quality.</p>
                    </section>
                </SwiperSlide>
                <SwiperSlide className='flex flex-col justify-center items-center transition-shadow duration-300 hover:shadow-lg'>
                    <section className="member flex flex-col h-full justify-center">
                        <h2>Tarurendra Kushwaha</h2>
                        <p>Tarurendra is the creative force behind our team. With a flair for design and a passion for storytelling, he brings ideas to life and captivates our audience with engaging content.</p>
                    </section>
                </SwiperSlide>
                <SwiperSlide className='flex flex-col justify-center items-center transition-shadow duration-300 hover:shadow-lg'>
                    <section className="member flex flex-col h-full justify-center">
                        <h2>Vivek Kumar</h2>
                        <p>Vivek is our tech guru, with a deep understanding of timeline and external relations management. From coding to troubleshooting, he keeps our systems running smoothly and ensures that we stay ahead in the ever-evolving digital landscape.</p>
                    </section>
                </SwiperSlide>
                <SwiperSlide className='flex flex-col justify-center items-center transition-shadow duration-300 hover:shadow-lg'>
                    <section className="member flex flex-col h-full justify-center">
                        <h2>Rakesh Kumar Kudan</h2>
                        <p>Rakesh Kudan is our go-to problem solver. With his analytical mindset and quick thinking, he tackles challenges head-on and finds innovative solutions to complex problems.</p>
                    </section>
                </SwiperSlide>
            </Swiper>
            <footer className='flex justify-center'>
                <a href="/" className='text-2xl'>We&apos excited to embark on this journey with you!</a>
            </footer>
        </div>
    )
}


// <main className='flex flex-row'>
//                 <section className="member">
//                     <h2>Vikram Sharma</h2>
//                     <p>As our visionary leader, Vikram brings years of experience in [relevant industry or field]. With his strategic mindset and innovative approach, he guides our team towards achieving new heights of success.</p>
//                 </section>
//                 <section className="member">
//                     <h2>Rakesh Kumar</h2>
//                     <p>Meet Rakesh, our resident expert in [specific role or expertise]. With a keen eye for detail and a commitment to excellence, Rakesh ensures that every project is executed with precision and quality.</p>
//                 </section>
//                 <section className="member">
//                     <h2>Tarurendra Kushwaha</h2>
//                     <p>Tarurendra is the creative force behind our team. With a flair for design and a passion for storytelling, he brings ideas to life and captivates our audience with engaging content.</p>
//                 </section>
//                 <section className="member">
//                     <h2>Vivek Kumar</h2>
//                     <p>Vivek is our tech guru, with a deep understanding of [relevant technology or tools]. From coding to troubleshooting, he keeps our systems running smoothly and ensures that we stay ahead in the ever-evolving digital landscape.</p>
//                 </section>
//                 <section className="member">
//                     <h2>Rakesh Kumar Kudan</h2>
//                     <p>Rakesh Kudan is our go-to problem solver. With his analytical mindset and quick thinking, he tackles challenges head-on and finds innovative solutions to complex problems.</p>
//                 </section>
//             </main>
//             <footer>
//                 <p>We&aposre excited to embark on this journey with you!</p>
//             </footer>