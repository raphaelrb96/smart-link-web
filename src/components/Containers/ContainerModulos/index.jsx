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
import CarrosselNove from "../../Carrosseis/CarrosselNove"



const ContainerModulos = (props) => {
  const {xs, sm, md, lg, xl} = props;
  const {dark} = props;
  return (
      <div className="w-full py-[130px] lg:py-[90px] md:py-[75px] sm:py-[50px] overflow-hidden bg-lightgray">
        
        <Grid container alignContent={'center'} alignItems={'center'} justifyContent={'center'} className="justify-center">
          <Grid xs={12} sm={10} md={8} lg={10} item className="text-center mb-[50px]">
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

        <motion.div>
          <Container fluid className="px-0">
            <CarrosselNove
                data={props.data.content}
            />
          </Container>
        </motion.div>
        
      </div>
  )
};


export default memo(ContainerModulos)