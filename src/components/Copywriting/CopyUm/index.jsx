"use client"

import { Container, Grid, Link } from "@mui/material"
import "../../../Assets/scss/components/_iconwithtext.scss"
import { memo } from "react"
import { IconWithTextData_01 } from "../../../functions/examples"
import { PropTypes } from "prop-types";
import Buttons from "../../Button/Buttons"
import { motion, m } from "framer-motion"

import CarrosselQuatro from '../../Carrosseis/CarrosselQuatro'

import "../../../Assets/scss/pages/_startup.scss"



const CopyUm = (props) => {
  const {xs, sm, md, lg, xl} = props;
  const {dark} = props;
  return (
    <section className="py-[130px] lg:py-[90px] md:py-[75px] sm:py-[50px] overflow-hidden bg-lightgray">
      <Container className="items-center">
        
        <Grid container alignContent={'center'} alignItems={'center'} justifyContent={'center'} className="justify-center">
          <Grid sm={12} lg={10} item className="text-center mb-[26px]">
            <h6 className={`font-serif ${dark ? ' text-white ' : ' text-darkgray '} text-center font-medium mb-[15px] lg:mb-[15px]`}>
              {props.data.subTitle}
            </h6>
            <h3 className={`font-serif ${dark ? ' text-white ' : ' text-darkgray '} text-center font-bold mb-[10px] lg:mb-[15px]`}>
              <div className={`${dark ? ' text-white text-gradient bg-gradient-to-r from-[#c4a2e1] via-[#d9c3eb] to-[#a664df]' : ' text-gradient bg-gradient-to-r from-[#4e3167] via-[#6a3496] to-[#8828dc]'}`}>
                {props.data.title}
              </div>
            </h3>
          </Grid>
        </Grid>

        <Grid container xs={12} className="justify-center text-center mb-[26px]">

            <Grid lg={6} sm={9} className="md:text-center md:mb-[40px] sm:mb[36px] xs:mb-[36px] pt-6" item>
              <h2 className="heading-4 font-sans leading-[3rem] text-darkgray font-semibold w-[100%] lg:w-full">
                {props.data.headline}
              </h2>
            </Grid>
            <Grid lg={6} item>
                <Grid xs={12} alignContent={'center'} alignItems={'center'} justifyContent={'center'} className="justify-center px-3" container>
                    <Grid xs={11} md={6} className="text-center items-center px-6 py-6" item>
                      <span className="font-serif text-[16px] mb-[10px] block text-darkgray xs:mb-[5px]">
                        {props.data.content[0].title}
                      </span>
                      <p className="w-full font-serif text-[13px] sm:mx-auto">
                        {props.data.content[0].text}
                      </p>
                    </Grid>
                    <Grid xxs={11} md={6} className="text-center px-6 py-6" item>
                      <div className="">
                        <span className="font-serif text-[16px]  mb-[10px] block text-darkgray xs:mb-[5px]">
                          {props.data.content[1].title}
                        </span>
                        <p className="w-full font-serif  text-[13px] sm:mx-auto">
                          {props.data.content[1].text}
                        </p>
                      </div>
                    </Grid>
                </Grid>
            </Grid>

        </Grid>

        <Grid container justifyContent="center" xs={12} sm={12} md={12} alignContent={'center'} alignItems={'center'}>
            <Grid sm={9} className="md:text-center md:mb-[20px] sm:mb-[16px] xs:mb-[16px] pt-6" item>
              <h3 className={`font-serif ${dark ? ' text-white ' : ' text-darkgray '} text-center font-bold`}>
                <div className={`${true ? ' text-white text-gradient bg-gradient-to-r from-[#7d2cc9] via-[#9c009f] to-[#b0027c]' : ' text-darkgray '}`}>{props.data.headlineExtra}</div>
              </h3>
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={10} justifyContent="center" alignItems={'center'} alignContent={'center'}>
              <CarrosselQuatro
                data={props.data.lista}
                className="black-move"
                carouselOption={{
                  slidesPerView: 1,
                  loop: true,
                  breakpoints: { 768: { slidesPerView: 2 } },
                  navigation: false,
                  autoplay: { delay: 3000, disableOnInteraction: false }
                }}
              />
            </Grid>
        </Grid>
      </Container>
    </section>
  )
};


export default memo(CopyUm)