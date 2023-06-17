"use client"

import { Grid } from "@mui/material";
import ListaIconeTexto from "../../../../components/Listas/ListaIconeTexto";
import {fadeIn} from "../../../../functions/GlobalAnimations";
import {IconWithTextData_05} from "../../../../functions/examples";
import RouteLayout from '../../../layout';



export default function ListaCincoPage() {
  return (
    <RouteLayout title="Lista Cinco">
      <Grid container justifyContent="center" alignItems={'center'}>
        <Grid item sm={12} md={8} lg={6}>
          <h6 className="mt-10 text-dark text-center font-medium mb-[25px] lg:mb-[15px]">Sua lista se parecerá com esta:</h6>
        </Grid>
        <Grid item sm={12} lg={10}>
          <ListaIconeTexto
            grid=" pt-8 "
            theme="icon-with-text-05"
            data={IconWithTextData_05}
            xs={6}sm={4} md={4} lg={2} xl={2}
            animation={fadeIn}
            animationDelay={0.1}
          />
        </Grid>
      </Grid>
      
    </RouteLayout>
    
  )
};
