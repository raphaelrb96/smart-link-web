"use client"

import { Container, Grid } from "@mui/material";
import RouteLayout from '../../../layout';
import CarrosselUm from "../../../../components/Carrosseis/CarrosselUm";
import CarrosselQuatro from "../../../../components/Carrosseis/CarrosselQuatro";


const data = [
  {
      firstname: "Alexander",
      lastname: "Harvard",
      designation: "ThemeZaa Design",
      title: "Just love their design for all stunning details!",
      content: "Lorem ipsum dolor sit consectetur adipiscing do eiusmod tempor incididunt ut labore et dolore magna ut enim ad minim veniam nostrud exercitation ullamco laboris nisi.",
      img: "https://via.placeholder.com/148x148"
  },
  {
      firstname: "Shoko",
      lastname: "Mugikura",
      designation: "Google Design",
      title: "Every element is designed beautifully and perfect!",
      content: "Lorem ipsum dolor sit consectetur adipiscing do eiusmod tempor incididunt ut labore et dolore magna ut enim ad minim veniam nostrud exercitation ullamco laboris nisi.",
      img: "https://via.placeholder.com/148x148"
  },
  {
      firstname: "Herman",
      lastname: "Miller",
      designation: "Apple Design",
      title: "Simple and easy to integrate and build the website!",
      content: "Lorem ipsum dolor sit consectetur adipiscing do eiusmod tempor incididunt ut labore et dolore magna ut enim ad minim veniam nostrud exercitation ullamco laboris nisi.",
      img: "https://via.placeholder.com/148x148"
  },
]

export default function CarrosselQuatroPage() {
  return (
    <RouteLayout title="Carrossel Quatro" >
      <Container>
      <Grid container justifyContent="center" alignContent={'center'} alignItems={'center'}>
        <Grid item sm={12} md={12} lg={12}>
          <h6 className="mt-10 text-dark text-center mx-6 font-medium mb-35px] lg:mb-[30px]">Seu Carrossel se parecerá com este:</h6>
        </Grid>
      </Grid>
      <Grid container justifyContent="center" xs={12} sm={12} md={12} alignContent={'center'} alignItems={'center'}>
        <Grid item xs={12} sm={12} md={12} lg={10} justifyContent="center" alignItems={'center'} alignContent={'center'}>
          <CarrosselQuatro
            data={data}
            className="black-move"
            carouselOption={{
              slidesPerView: 1,
              loop: true,
              breakpoints: { 768: { slidesPerView: 2 } },
              navigation: false,
              autoplay: { delay: 3000, disableOnInteraction: false }
            }}
          />
        </Grid>
      </Grid>
      </Container>
      
    </RouteLayout>
    
  )
};
