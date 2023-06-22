import React, { memo } from "react";
import * as Yup from "yup";

import VideoPlayer from '../../../components/VideoPlayer';
import { Container, Grid } from '@mui/material';
import Buttons from '../../../components/Button/Buttons';
import { Form, Formik } from "formik";
import { InputUm } from "../../Inputs/InputUm";
import { AnimatePresence, m } from "framer-motion";


const HeroTres = (props) => {

    const {btnExtra, btn, subhead, headline} = props.data;

    return (
        <section >
            <VideoPlayer
                className="py-[120px] h-full lg:py-[120px] md:py-[95px] sm:py-[80px] bg-slate-950 xs:py-[50px]"
                src="https://www.youtube.com/embed/sU3FkzUKHXU?rel=0&amp;showinfo=0&amp;background=1&amp;autoplay=1&amp;loop=1&amp;mute=1&amp;playlist=sU3FkzUKHXU"
                loop={true}
                poster="https://via.placeholder.com/1920x1080"
                overlay={["#5f3b5d", "#5d3d72", "#6b4c80", "#4f2d6c", "#570e6d"]}
                opacity="0.9"
            >

                <Container className="">
                    <Grid container className="items-center z-[1] relative overflow-hidden">
                        <Grid item xl={5} md={6} className="sm:mb-[40px]  overflow-hidden">
                            <h2 className="heading-5 font-serif font-semibold text-[#f1edf2] uppercase mb-[5px]">{subhead}</h2>
                            <h1 className="font-serif font-bold xs:text-[42px] sm:text-[42px] uppercase text-gradient bg-gradient-to-r from-[#c4a2e1] via-[#d9c3eb] to-[#a664df] mb-[25px] tracking-[-1px]"> {headline}</h1>
                            <p className="w-[90%] text-lg mb-[45px] text-[#d9c9de] leading-[30px] xs:text-xmd">Start working with an company that can provide everything you need to generate awareness.</p>
                            <div className="xs:text-center sm:text-center">
                                <Buttons ariaLabel="link for pricing-packages" to="/page/pricing-packages" className="mr-[38px] xs:mr-0 sm:mx-[14px] rounded-[4px] font-medium font-serif hover:text-gray-100 uppercase md:mb-[15px]" themeColor={["#4f1b7d", "#7637ad"]} size="xl" color="#fff" title={btn} />
                                <Buttons ariaLabel="link for modal button" className="font-medium font-serif xs:!p-0 uppercase btn-link after:h-[2px] md:text-md md:mb-[15px] after:bg-gray-300 hover:text-gray-400 text-gray-300" color="#45464b" size="xl" title={btnExtra} />
                            </div>
                            
                        </Grid>
                        <Grid item xl={7} md={6} className="text-right ">
                            <img className="inline-block w-full h-auto " src="/assets/img/illustrations/img1.png" alt="" />
                        </Grid>
                    </Grid>
                </Container>
            </VideoPlayer>
            
        </section>
    );
};


export default memo(HeroTres);