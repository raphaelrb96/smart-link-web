"use client"

import { Grid } from "@mui/material";
import {fadeIn} from "../../../../functions/GlobalAnimations";
import RouteLayout from '../../../layout';
import ListaExpansivel from "../../../../components/Listas/ListaExpansivel";

const data = [
    {
        title: "Common PayPal and credit card issues",
        content: "Lorem ipsum is simply dummy text of the printing type setting and industry. Lorem ipsum has been the industry's standard dummy."
    },
    {
        title: "Lets collaborate and make an impact business",
        content: "Lorem ipsum is simply dummy text of the printing type setting and industry. Lorem ipsum has been the industry's standard dummy."
    },
    {
        title: "A satisfied customer is the best business strats",
        content: "Lorem ipsum is simply dummy text of the printing type setting and industry. Lorem ipsum has been the industry's standard dummy."
    },
    {
        title: "Common PayPal and credit card issues",
        content: "Lorem ipsum is simply dummy text of the printing type setting and industry. Lorem ipsum has been the industry's standard dummy."
    },
    {
        title: "Lets collaborate and make an impact business",
        content: "Lorem ipsum is simply dummy text of the printing type setting and industry. Lorem ipsum has been the industry's standard dummy."
    },
    {
        title: "A satisfied customer is the best business strats",
        content: "Lorem ipsum is simply dummy text of the printing type setting and industry. Lorem ipsum has been the industry's standard dummy."
    },
]

export default function ListaExpansivelUmPage() {
  return (
    <RouteLayout title="Expansível Um">

      <Grid container justifyContent="center" alignItems={'center'} >
        <Grid lg={6} xl={8} item>
            <Grid container justifyContent="center" alignItems={'center'}>
                <Grid item sm={12} md={12} lg={12}>
                <h6 className="mt-10 text-dark text-center font-medium mb-[25px] lg:mb-[15px]">Sua lista se parecerá com esta:</h6>
                </Grid>
                <Grid item justifyContent="center" alignItems={'center'} sm={12} lg={8}>
                    <ListaExpansivel 
                        theme="accordion-style-01"
                        className="content-center items-center justify-center"
                        themeColor="light"
                        animation={fadeIn}
                        data={data}
                    />
                </Grid>
            </Grid>
        </Grid>
      </Grid>

      
      
    </RouteLayout>
    
  )
};
