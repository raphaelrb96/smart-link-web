"use client"

import { Grid, Link, Container } from "@mui/material";
import "../../../Assets/scss/components/_iconwithtext.scss";
import { memo } from "react";
import { IconWithTextData_01 } from "../../../functions/examples"
import { PropTypes } from "prop-types";
import Buttons from "../../Button/Buttons"
import { motion, m } from "framer-motion";
import {fadeIn} from '../../../functions/GlobalAnimations';


import "../../../Assets/scss/components/_textbox.scss";
import ListaIconeTexto from "../../Listas/ListaIconeTexto";
import PassoAPassoUm from "../../Listas/ListaEtapas/PassoAPassoUm";
import ListaSimples from "../../Listas/ListaSimples";
import {TextoAnimado} from "../../Texto/TextoAnimado";

import VideoPlayer from "../../VideoPlayer";


const ContainerChamadaUm = (props) => {
  const {xs, sm, md, lg, xl} = props;
  const {dark} = props;
  return (
    <section className=" bg-lightgray w-full">
      <VideoPlayer
        className="py-[80px] h-full flex flex-1 lg:py-[80px] md:py-[65px] sm:py-[50px] bg-slate-950 xs:py-[40px]"
        src="https://st3.depositphotos.com/19677694/36691/v/600/depositphotos_366911620-stock-video-packs-of-brazilian-real-money.mp4"
        loop={true}
        poster="https://via.placeholder.com/1920x1080"
        overlay={["#5f3b5d", "#5d3d72", "#6b4c80", "#4f2d6c", "#570e6d"]}
        opacity="0.90"
      >
        <Container>
          <Grid container className="z-[1] relative overflow-hidden">
            <Grid lg={7} md={10} className="font-serif xs:ml-6 sm:ml-6 md:mb-20 sm:mb-14 xs:mb-14" item>
              <h2 className="heading-4 font-serif font-medium text-gray-100 mb-16 w-[100%] md:mb-12 xs:mb-16 sm:w-[90%] xs:w-[90%]">
                Seja um dos poucos privilegiados a ter acesso a esse segredo exclusivo de monetização online. 
                Comece agora a conquistar: 
                <TextoAnimado duration={3000} className="font-semibold pl-2" color="#e0bcff" animation="slide" data={["Dinheiro", "Liberdade", "Audiencia", "Conhecimento", "Parcerias"]}>
                    
                </TextoAnimado>
              </h2>
              <ListaSimples theme="text-gray-300" className=" list-style-02 w-[90%]" data={props.data.list} />
              <div className="mt-[80px] md:mt-[45px] xs:mt-[55px] landscape:md:mt-[60px]">
                  <Buttons ariaLabel="link for pricing-packages" to="/page/pricing-packages" className="sm:mx-[14px] rounded-[4px] lg:min-w-[250px] xl:min-w-[250px] sm:w-[90%] xs:w-[90%] left-0 right-0 items-center font-medium font-serif hover:text-gray-100 uppercase md:mb-[15px]" themeColor={["#4f1b7d", "#7637ad"]} size="xl" color="#fff" title={'COMPRAR AGORA'} />
                  <Buttons ariaLabel="link for modal button" className="hidden font-medium font-serif xs:!p-0 uppercase btn-link after:h-[2px] md:text-md md:mb-[15px] after:bg-gray-300 hover:text-gray-400 text-gray-300" color="#45464b" size="xl" title={'ASSISTIR VÍDEO'} />
              </div>
            </Grid>
            <Grid lg={5} md={10} className="content xs:ml-6 sm:ml-6 landscape:px-[15px]" item>
                <p className="w-[90%] mb-[40px] mt-2 md:mb-[45px] italic text-gray-300 xs:mb-[25px]">
                  Satisfação garantida ou seu dinheiro de volta. Experimente nosso treinamento e se não estiver totalmente satisfeito, devolvemos cada centavo.
                </p>
              <ListaIconeTexto 
                xs={12}
                xm={12}
                md={12}
                lg={12}
                xl={12}
                grid="justify-center" 
                theme="icon-with-text-01 mt-8 text-gray-300" 
                data={props.data.featurebox} />
                <h6 className="heading-6 font-serif mt-20 font-medium mb-0 text-gray-100 lg:mb-[9px] md:mb-[8px] sm:mb-44px]">
                  Edição limitada: A oferta promocional termina em breve. Aproveite agora mesmo antes do preço subir ou da página sair do ar...
                </h6>
            </Grid>
          </Grid>
        </Container>
      </VideoPlayer>

    </section>
  )
};


export default memo(ContainerChamadaUm);