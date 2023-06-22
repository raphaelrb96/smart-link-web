"use client"

import { Container, Grid } from "@mui/material";
import RouteLayout from '../../../layout';
import CarrosselSeis from "../../../../components/Carrosseis/CarrosselSeis";


const data = [
  {
      firstname: "Alexander",
      lastname: "harvard",
      designation: "Creative director",
      content: "Every element is designed beautifully and pixel perfect, so it is really a modern theme. Support team is very kind. You don't need a web developer to use this theme. Simple and easy to integrate and build the whole website.",
      img: 'https://via.placeholder.com/125x125'
  },
  {
      firstname: "Jonsan",
      lastname: "Donner",
      designation: "Sales manager",
      content: "We see our customers as invited guests to a party and we are the hosts. It’s our job every day to make every important aspect of the customer experience a better. Everything is designed few things are designed well.",
      img: "https://via.placeholder.com/125x125"
  },
  {
      firstname: "Mackangy",
      lastname: "Rose",
      designation: "Creative director",
      content: "Out of all the themes that I have purchased and customized, this is the 1st one that didn't require any support. Support for this product has always been above and beyond, their technical team has been very reliable.",
      img: "https://via.placeholder.com/125x125"
  },
  {
      firstname: "Jeremy",
      lastname: "Smith",
      designation: "Design manager",
      content: "Every element is designed beautifully and pixel perfect, so it is really a modern theme. Support team is very kind. You don't need a web developer to use this theme. Simple and easy to integrate and build the whole website.",
      img: "https://via.placeholder.com/125x125"
  }
];

export default function CarrosselSeisPage() {
  return (
    <RouteLayout title="Carrossel Seis">
      <Container>
      <Grid container justifyContent="center" alignContent={'center'} alignItems={'center'}>
        <Grid item sm={12} md={12} lg={12}>
          <h6 className="mt-10 text-dark text-center mx-6 font-medium mb-35px] lg:mb-[30px]">Seu Carrossel se parecerá com este:</h6>
        </Grid>
      </Grid>
      <Grid container justifyContent="center" xs={12} sm={12} md={12} alignContent={'center'} alignItems={'center'}>
        <Grid item xl={8} lg={9} md={11} sm={12} xs={12} className="relative justify-center text-center" justifyContent="center" alignItems={'center'} alignContent={'center'}>
          <CarrosselSeis
            data={data}
            className=""
          />
        </Grid>
      </Grid>
      </Container>
      
    </RouteLayout>
    
  )
};
