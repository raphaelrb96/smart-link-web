"use client"
import ListaExpansivel from "../../../../components/Listas/ListaExpansivel";

import { Container, Grid } from "@mui/material";
import {fadeIn} from "../../../../functions/GlobalAnimations";
import RouteLayout from '../../../layout';
import InscricaoEmailOito from "../../../../components/Formularios/InscricaoEmailOito";
import { ParallaxProvider } from "react-scroll-parallax";



export default function InscricaoEmailOitoPage() {
  return (
    <RouteLayout title="Inscricao Email Oito">
      <ParallaxProvider>

        <Grid container justifyContent="center" alignItems={'center'}>
          <Grid item sm={12} md={8} lg={6}>
            <h6 className="mt-10 text-dark text-center font-medium mb-[25px] lg:mb-[15px]">
              Seu formulario se parecerá com esta:
            </h6>
          </Grid>
          <Grid item sm={12}>
            <InscricaoEmailOito />
          </Grid>
        </Grid>
      </ParallaxProvider>
      
    </RouteLayout>
    
  )
};