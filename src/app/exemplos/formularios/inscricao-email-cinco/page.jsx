"use client"
import ListaExpansivel from "../../../../components/Listas/ListaExpansivel";

import { Container, Grid } from "@mui/material";
import {fadeIn} from "../../../../functions/GlobalAnimations";
import RouteLayout from '../../../layout';
import InscricaoEmailCinco from "../../../../components/Formularios/InscricaoEmailCinco";



export default function InscricaoEmailCincoPage() {
  return (
    <RouteLayout title="Inscricao Email Cinco">
      <Grid container justifyContent="center" alignItems={'center'}>
        <Grid item sm={12} md={8} lg={6}>
          <h6 className="mt-10 text-dark text-center font-medium mb-[25px] lg:mb-[15px]">
            Seu formulario se parecerá com esta:
          </h6>
        </Grid>
        <Grid 
        item 
        sm={12} 
        lg={8}
        className="py-[130px] lg:py-[90px] md:py-[75px] sm:py-[50px] relative bg-cover bg-fixed bg-center overflow-hidden lg:bg-local"
        style={{
          backgroundImage:
            "url('https://cdn.pixabay.com/photo/2023/05/14/10/27/ai-generated-7992467_1280.jpg')",
        }}>
          <div className="absolute top-0 left-0 h-full w-full bg-darkpurple2 opacity-80 z-[1]"></div>
          <Container className="relative z-[2]">
            <InscricaoEmailCinco />
          </Container>
        </Grid>
      </Grid>
      
    </RouteLayout>
    
  )
};