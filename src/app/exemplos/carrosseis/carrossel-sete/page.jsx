"use client"

import { Container, Grid } from "@mui/material";
import RouteLayout from '../../../layout';
import CarrosselSete from "../../../../components/Carrosseis/CarrosselSete";


const data = [
  {
      firstname: "Shoko",
      lastname: "mugikura",
      designation: "Graphic designer",
      content: "Awesome theme and outstanding support. One of the best themes available out there. Design, coding, functionalities and possibilities are great!",
      img: "https://via.placeholder.com/187x187"
  },
  {
      firstname: "Mackangy",
      lastname: "rose",
      designation: "Creative director",
      content: "Are you looking for a website that's ready now, and you don’t know coding, stop browsing themeforest because nothing better. Loyal to themezaa.",
      img: "https://via.placeholder.com/187x187"
  },
  {
      img: "https://via.placeholder.com/187x187",
      content: "We see our customers as invited guests to a party and we are the hosts. It's our job every day to make every important aspect of the customer a better.",
      firstname: "Alexander",
      lastname: "harvard",
      designation: "Creative director"
  },
]

export default function CarrosselSetePage() {
  return (
    <RouteLayout title="Carrossel Sete">
      <Container>
      <Grid container justifyContent="center" alignContent={'center'} alignItems={'center'}>
        <Grid item sm={12} md={12} lg={12}>
          <h6 className="mt-10 text-dark text-center mx-6 font-medium mb-35px] lg:mb-[30px]">Seu Carrossel se parecerá com este:</h6>
        </Grid>
      </Grid>
      <Grid container justifyContent="center" className=" bg-slate-900" xs={12} sm={12} md={12} alignContent={'center'} alignItems={'center'}>
        <Grid item xl={6} lg={7} md={9} xs={12} justifyContent="center" alignItems={'center'} alignContent={'center'}>
          <CarrosselSete
            data={data}
            className="slider-nav-style-01 swiper-navigation-02 swiper-navigation-light white-move"
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
