"use client"

import { Container, Grid } from "@mui/material";
import RouteLayout from '../../../layout';
import CarrosselUm from "../../../../components/Carrosseis/CarrosselUm";
import CarrosselOito from "../../../../components/Carrosseis/CarrosselOito";


const data = [
  {
      firstname: "Colin",
      lastname: "Powell",
      designation: "Yoga trainer",
      content: "Undisturbed calmness of mind is attained by cultivating friendless toward the happy, compassion for the unhappy, delight in the virtuous, and indifference toward the wicked. Peace comes from within. Do not seek it without.",
      img: "https://via.placeholder.com/141x99"
  },
  {
      firstname: "Alexander",
      lastname: "harvard",
      designation: "Meditation expert",
      content: "When you listen to yourself, everything comes naturally. It comes from inside, like a kind of will to do something. Try to be sensitive. That is yoga. oga takes you into the present moment. The only place where life exists.",
      img: "https://via.placeholder.com/141x99"
  },
  {
      firstname: "Jeremy",
      lastname: "Girard",
      designation: "Yoga trainer",
      content: "Yoga is a great practice for both the body and the mind, it offers peace and mindfulness to its lovers and helps them get through daily stress. Yoga does not just change the way we see things, it transforms the person who sees.",
      img: "https://via.placeholder.com/141x99"
  }
];

export default function CarrosselOitoPage() {
  return (
    <RouteLayout title="Carrossel Oito">
      <Container>
      <Grid container justifyContent="center" alignContent={'center'} alignItems={'center'}>
        <Grid item sm={12} md={12} lg={12}>
          <h6 className="mt-10 text-dark text-center mx-6 font-medium mb-35px] lg:mb-[30px]">Seu Carrossel se parecerá com este:</h6>
        </Grid>
      </Grid>
      <Grid container justifyContent="center" xs={12} sm={12} md={12} alignContent={'center'} alignItems={'center'}>
        <Grid item xs={12} lg={8} justifyContent="center" alignItems={'center'} alignContent={'center'}>
          <CarrosselOito
            data={data}
            className="black-move relative"
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
