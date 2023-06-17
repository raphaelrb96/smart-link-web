"use client"

import { Grid } from "@mui/material";
import RouteLayout from '../../../layout';
import CarrosselUm from "../../../../components/Carrosseis/CarrosselUm";
import CarrosselTres from "../../../../components/Carrosseis/CarrosselTres";

const data = [
  {
      firstname: "Alexander ",
      lastname: "harvard",
      designation: "Creative director",
      content: "This theme has a wide variety of options and a really good customer support. Some of the customizations are limited but even so the theme still gives a lot of features."
  },
  {
      firstname: "Herman",
      lastname: "miller",
      designation: "Creative director",
      content: "There are design companies and then there are user experience, design, consulting, interface design. I wanted to hire the best and after looking at several other companies."
  },
  {
      firstname: "Lindsay",
      lastname: "swanson",
      designation: "Creative director",
      content: "Absolutely amazing theme, flexible and awesome design with possibilities. It's so easy to use and to customize. Simply the great designs and best theme for WooCommerce."
  },
  {
      firstname: "Jeremy",
      lastname: "dupont",
      designation: "Creative director",
      content: "I wanted to hire the best and after looking at several other companies, I knew Jacob was the perfect guy. I wanted to hire the best and after looking at several other companies."
  },
]


export default function CarrosselTresPage() {
  return (
    <RouteLayout title="Carrossel Tres">
      <Grid container justifyContent="center" alignContent={'center'} alignItems={'center'}>
        <Grid item sm={12} md={12} lg={12}>
          <h6 className="mt-10 text-dark text-center mx-6 font-medium mb-35px] lg:mb-[30px]">Seu Carrossel se parecerá com este:</h6>
        </Grid>
      </Grid>
      <Grid container justifyContent="center" xs={12} sm={12} md={12} alignContent={'center'} alignItems={'center'}>
        <Grid item xs={12} sm={12} md={12} lg={10} justifyContent="center" alignItems={'center'} alignContent={'center'}>
          <CarrosselTres
            data={data}
            className="white-move"
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
