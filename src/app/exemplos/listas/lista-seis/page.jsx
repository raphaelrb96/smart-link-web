"use client"

import { Grid } from "@mui/material";
import ListaIconeTexto from "../../../../components/Listas/ListaIconeTexto";
import {fadeIn} from "../../../../functions/GlobalAnimations";
import {IconWithTextData_06} from "../../../../functions/examples";
import RouteLayout from '../../../layout';



export default function ListaSeisPage() {
  return (
    <RouteLayout title="Lista Seis">
      <Grid container justifyContent="center" alignItems={'center'}>
        <Grid item sm={12} md={8} lg={6}>
          <h6 className="mt-10 text-dark text-center font-medium mb-[25px] lg:mb-[15px]">Sua lista se parecerá com esta:</h6>
        </Grid>
        <Grid item sm={12} lg={10}>
          <ListaIconeTexto
            grid=" pt-8 "
            theme="icon-with-text-06"
            data={IconWithTextData_06}
            xs={12}sm={12} md={6} lg={4} xl={4}
            animation={fadeIn}
            animationDelay={0.1}
          />
        </Grid>
      </Grid>
      
    </RouteLayout>
    
  )
};
