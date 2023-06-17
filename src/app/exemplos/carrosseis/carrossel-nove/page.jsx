"use client"

import { Grid } from "@mui/material";
import RouteLayout from '../../../layout';
import CarrosselUm from "../../../../components/Carrosseis/CarrosselUm";


const data = [
  {
      firstname: "Jemas",
      lastname: "Dossan",
      title: "Art freedom and creativity",
      content: "Lorem ipsum dolor sit amet consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua lorem ipsum dolor sit amet consectetur adipiscing elit.",
      img: "/assets/img/webp/home-seo-agency-quote.webp",
      thumbimg: "https://via.placeholder.com/125x125"
  },
  {
      firstname: "Jeremy",
      lastname: "Girard",
      title: "Design is not making beauty",
      content: "Lorem ipsum dolor sit amet consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua lorem ipsum dolor sit amet consectetur adipiscing elit.",
      img: "/assets/img/webp/home-seo-agency-quote.webp",
      thumbimg: "https://via.placeholder.com/125x125"
  },
  {
      firstname: "Colin",
      lastname: "Powell",
      title: "Design is a plan for elements",
      content: "Lorem ipsum dolor sit amet consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua lorem ipsum dolor sit amet consectetur adipiscing elit.",
      img: "/assets/img/webp/home-seo-agency-quote.webp",
      thumbimg: "https://via.placeholder.com/125x125",
  },
  {
      firstname: "Jeremy",
      lastname: "Girard",
      title: "Design is not for philosophy",
      content: "Lorem ipsum dolor sit amet consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua lorem ipsum dolor sit amet consectetur adipiscing elit.",
      img: "/assets/img/webp/home-seo-agency-quote.webp",
      thumbimg: "https://via.placeholder.com/125x125"
  },
];

export default function CarrosselSeisPage() {
  return (
    <RouteLayout title="Carrossel Seis">
      <Grid container justifyContent="center" alignContent={'center'} alignItems={'center'}>
        <Grid item sm={12} md={12} lg={12}>
          <h6 className="mt-10 text-dark text-center mx-6 font-medium mb-35px] lg:mb-[30px]">Seu Carrossel se parecerá com este:</h6>
        </Grid>
      </Grid>
      <Grid container justifyContent="center" xs={12} sm={12} md={12} alignContent={'center'} alignItems={'center'}>
        <Grid item xl={12} lg={12} md={12} xs={12} justifyContent="center" alignItems={'center'} alignContent={'center'}>
          <CarrosselUm
            data={data}
            carouselOption={{
              slidesPerView: 1,
              loop: true,
              navigation: true,
              className: "black-move"
          }}
          />
        </Grid>
      </Grid>
      
    </RouteLayout>
    
  )
};
