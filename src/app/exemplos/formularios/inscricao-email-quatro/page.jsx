"use client"
import ListaExpansivel from "../../../../components/Listas/ListaExpansivel";

import { Grid } from "@mui/material";
import {fadeIn} from "../../../../functions/GlobalAnimations";
import RouteLayout from '../../../layout';
import InscricaoEmailQuatro from "../../../../components/Formularios/InscricaoEmailQuatro";



export default function InscricaoEmailQuatroPage() {
  return (
    <RouteLayout title="Inscricao Email Quatro">
      <Grid container justifyContent="center" alignItems={'center'}>
        <Grid item sm={12} md={8} lg={6}>
          <h6 className="mt-10 text-dark text-center font-medium mb-[25px] lg:mb-[15px]">
            Seu formulario se parecerá com esta:
          </h6>
        </Grid>
        <Grid item sm={12} lg={8}>
          <InscricaoEmailQuatro />
        </Grid>
      </Grid>
      
    </RouteLayout>
    
  )
};