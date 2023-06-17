"use client"

import { Grid } from "@mui/material";
import RouteLayout from '../../../layout';
import CarrosselCinco from "../../../../components/Carrosseis/CarrosselCinco";

const data = [
  {
      firstname: "Seu texto",
      lastname: "aqui",
      designation: "Texto Primario",
      content: "Descrição do Item com seu texto personalizado.",
      img: "https://via.placeholder.com/359x359"
  },
  {
      firstname: "Seu texto",
      lastname: "aqui",
      designation: "Texto Primario",
      content: "Descrição do Item com seu texto personalizado.",
      img: "https://via.placeholder.com/359x359"
  },
  {
      firstname: "Seu texto",
      lastname: "aqui",
      designation: "Texto Primario",
      content: "Descrição do Item com seu texto personalizado.",
      img: "https://via.placeholder.com/359x359"
  }
];


export default function CarrosselCincoPage() {
  return (
    <RouteLayout title="Carrossel Cinco">
      <Grid container justifyContent="center" alignContent={'center'} alignItems={'center'}>
        <Grid item sm={12} md={12} lg={12}>
          <h6 className="mt-10 text-dark text-center mx-6 font-medium mb-35px] lg:mb-[30px]">Seu Carrossel se parecerá com este:</h6>
        </Grid>
      </Grid>
      <Grid container justifyContent="center" xs={12} sm={12} md={12} alignContent={'center'} alignItems={'center'}>
        <Grid item xs={12} xl={7} lg={7} md={9} justifyContent="center" alignItems={'center'} alignContent={'center'}>
          <CarrosselCinco
            data={data}
            className="black-move"
            carouselOption={{
                slidesPerView: 1,
                loop: true,
                navigation: false,
                autoplay: { delay: 2500, disableOnInteraction: false },
            }}
          />
        </Grid>
      </Grid>
      
    </RouteLayout>
    
  )
};
