"use client"
import ListaExpansivel from "../../../../components/Listas/ListaExpansivel";

import { Container, Grid } from "@mui/material";
import {fadeIn} from "../../../../functions/GlobalAnimations";
import RouteLayout from '../../../layout';
import InscricaoEmailSeis from "../../../../components/Formularios/InscricaoEmailSeis";


export default function InscricaoEmailSeisPage() {
  return (
    <RouteLayout title="Inscricao Email Seis">
      <Grid container justifyContent="center" alignItems={'center'}>
        <Grid item sm={12} md={8} lg={6}>
          <h6 className="mt-10 text-dark text-center font-medium mb-[25px] lg:mb-[15px]">
            Seu formulario se parecerá com esta:
          </h6>
        </Grid>
        <Grid item sm={12}>
          <Container className="bg-gradient-to-tr from-[#ec606c] via-[#ee6757] to-[#eb7242] rounded-[5px] py-[55px] md:py-[40px]">
            <InscricaoEmailSeis />
          </Container>
        </Grid>
      </Grid>
      
    </RouteLayout>
    
  )
};