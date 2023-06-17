"use client"
import ListaExpansivel from "../../../../components/Listas/ListaExpansivel";

import { Grid } from "@mui/material";
import {fadeIn} from "../../../../functions/GlobalAnimations";
import RouteLayout from '../../../layout';
import InscricaoEmailTres from "../../../../components/Formularios/InscricaoEmailTres";



export default function InscricaoEmailTresPage() {
  return (
    <RouteLayout title="Inscricao Email Tres">
      <Grid container justifyContent="center" alignItems={'center'}>
        <Grid item sm={12} md={8} lg={6}>
          <h6 className="mt-10 text-dark text-center font-medium mb-[25px] lg:mb-[15px]">
            Seu formulario se parecerá com esta:
          </h6>
        </Grid>
        <Grid item sm={12} lg={8}>
          <InscricaoEmailTres />
        </Grid>
      </Grid>
      
    </RouteLayout>
    
  )
};