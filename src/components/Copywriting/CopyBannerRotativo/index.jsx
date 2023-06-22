"use client"

import { Container, Grid, Link } from "@mui/material"
import "../../../Assets/scss/components/_iconwithtext.scss"
import { memo } from "react"
import { IconWithTextData_01 } from "../../../functions/examples"
import { PropTypes } from "prop-types";
import Buttons from "../../Button/Buttons"
import { motion, m } from "framer-motion"

import BannerRotativo from '../../InterativeBanners/BannerRotativo'
import Overlap from '../../Overlap'

import "../../../Assets/scss/pages/_startup.scss"
import { rotateInLeft } from "../../../functions/GlobalAnimations"



const CopyBannerRotativo = (props) => {
  const {xs, sm, md, lg, xl} = props;
  const {dark} = props;
  return (
    <section className="py-[130px] lg:py-[90px] md:py-[75px] sm:py-[50px] overflow-hidden">
      <Container className="items-center">
        <Grid container justifyContent="center" xs={12} sm={12} md={12} alignContent={'center'} alignItems={'center'}>
            <Grid sm={8} lg={8} className="md:text-center mb-[60px] md:mb-[40px] sm:mb-[36px] xs:mb-[36px] pt-6" item>
              <h3 className={`font-serif ${dark ? ' text-white ' : ' text-darkgray '} text-center uppercase font-bold`}>
                <div className={`${true ? ' text-white text-gradient bg-gradient-to-r from-[#c4a2e1] via-[#d9c3eb] to-[#a664df]' : ' text-darkgray '}`}>{props.data.headline}</div>
              </h3>
            </Grid>
            <Grid item xs={12} sm={8} md={8} lg={12} className="justify-center lg:mt-[20px] md:mt-0" justifyContent="center" alignItems={'center'} alignContent={'center'}>
                <BannerRotativo 
                  animation={rotateInLeft} 
                  animationDelay={0.4} 
                  grid="gap-y-10 justify-center" 
                  data={props.data.content} />
            </Grid>
        </Grid>
      </Container>
    </section>
  )
};


export default memo(CopyBannerRotativo)