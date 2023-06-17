"use client"

import { Grid } from "@mui/material";
import ListaIconeTexto from "../../../../components/Listas/ListaIconeTexto";
import {fadeIn} from "../../../../functions/GlobalAnimations";
import {IconWithTextData_01} from "../../../../functions/examples";
import RouteLayout from '../../../layout';



export default function ListaUmPage() {
  return (
    <RouteLayout title="Lista Um">
      <Grid container justifyContent="center" alignItems={'center'}>
        <Grid item sm={12} md={8} lg={6}>
          <h6 className="mt-10 text-dark text-center font-medium mb-[25px] lg:mb-[15px]">Sua lista se parecerá com esta:</h6>
        </Grid>
        <Grid item sm={12} md={10}>
          <ListaIconeTexto
            grid="gap-y-[60px] sm:gap-y-[30px] xs:gap-y-[40px] pt-8 pb-8"
            theme="icon-with-text-01"
            data={IconWithTextData_01}
            sm={12} md={6} lg={4} xl={4}
            animation={fadeIn}
            animationDelay={0.2}
          />
        </Grid>
      </Grid>
      
    </RouteLayout>
    
  )
};
