"use client"

import { Container, Grid } from "@mui/material";
import RouteLayout from '../../../layout';
import CarrosselUm from "../../../../components/Carrosseis/CarrosselUm";
import CarrosselDois from "../../../../components/Carrosseis/CarrosselDois";

const TestimonialsCarouselData2 = [
  {
      firstname: "Alexander",
      lastname: "harvard",
      designation: "Creative director",
      content: "This theme has a wide variety of options and a really good customer support. Some of the customizations are limited but even so the theme still gives a lot of features while prioritizing web speed.",
      img: 'https://via.placeholder.com/125x125'
  },
  {
      firstname: " Lindsay",
      lastname: "swanson",
      designation: "Creative director",
      content: "I wanted to hire the best and after looking at several other companies, I knew Jacob was the perfect guy. I wanted to hire the best and after looking at several other companies.",
      img: "https://via.placeholder.com/125x125"
  },
  {
      firstname: " Jeremy",
      lastname: "dupont",
      designation: "Creative director",
      content: "Absolutely amazing theme, flexible and awesome design with possibilities. It's so easy to use and to customize. Simply the great designs and best theme for WooCommerce.",
      img: "https://via.placeholder.com/125x125"
  },
]


export default function CarrosselDoisPage() {
  return (
    <RouteLayout title="Carrossel Dois">
      <Container>
      <Grid container justifyContent="center" alignContent={'center'} alignItems={'center'}>
        <Grid item sm={12} md={12} lg={12}>
          <h6 className="mt-10 text-dark text-center mx-6 font-medium mb-35px] lg:mb-[30px]">Seu Carrossel se parecerá com este:</h6>
        </Grid>
      </Grid>
      <Grid container justifyContent="center" xs={12} sm={12} md={12} alignContent={'center'} alignItems={'center'}>
        <Grid item xs={12} sm={12} md={12} lg={12} justifyContent="center" alignItems={'center'} alignContent={'center'}>
          <CarrosselDois
            className="slider-nav-style-01 slider-nav-dark black-move"
            title="Seu Melhor"
            subtitle="Titulo aqui"
            data={TestimonialsCarouselData2}
            carouselOption={{
                slidesPerView: 1,
                loop: true,
                navigation: true,
                autoplay: { delay: 2500, disableOnInteraction: false },
            }}
          />
        </Grid>
      </Grid>
      </Container>
      
    </RouteLayout>
    
  )
};
