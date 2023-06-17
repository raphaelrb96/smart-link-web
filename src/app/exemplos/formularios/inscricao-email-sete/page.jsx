"use client"
import ListaExpansivel from "../../../../components/Listas/ListaExpansivel";

import { Container, Grid } from "@mui/material";
import {fadeIn} from "../../../../functions/GlobalAnimations";
import RouteLayout from '../../../layout';
import InscricaoEmailSete from "../../../../components/Formularios/InscricaoEmailSete";



export default function InscricaoEmailSetePage() {
  return (
    <RouteLayout title="Inscricao Email Sete">
      <Grid container justifyContent="center" alignItems={'center'}>
        <Grid item sm={12} md={8} lg={6}>
          <h6 className="mt-10 text-dark text-center font-medium mb-[25px] lg:mb-[15px]">
            Seu formulario se parecerá com esta:
          </h6>
        </Grid>
        <Grid item sm={12}>
          <Container className="bg-lightgray py-[160px] lg:py-[120px] md:py-[95px] sm:py-[80px] xs:py-[50px] overflow-hidden">
            <InscricaoEmailSete />
          </Container>
        </Grid>
      </Grid>
      
    </RouteLayout>
    
  )
};