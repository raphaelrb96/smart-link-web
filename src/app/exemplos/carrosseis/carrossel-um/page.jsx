"use client"

import { Grid } from "@mui/material";
import RouteLayout from '../../../layout';
import CarrosselUm from "../../../../components/Carrosseis/CarrosselUm";

const TestimonialsCarouselData1 = [
  {
      firstname: "Alexander",
      lastname: "harvard",
      designation: "Creative director",
      content: "Aqui ficara sua descrição desse item da lista. Você podera personalizar icone, titulo e descricão. Seja curta ou longa sua mensagem, ela será exibida aqui para todos visitantes do seu site",
      img: "https://via.placeholder.com/131x131"
  },
  {
      firstname: "Jeremy",
      lastname: "dupont",
      designation: "Creative director",
      content: "Aqui ficara sua descrição desse item da lista. Você podera personalizar icone, titulo e descricão. Seja curta ou longa sua mensagem, ela será exibida aqui para todos visitantes do seu site",
      img: "https://via.placeholder.com/131x131"
  },
  {
      firstname: "Lindsay",
      lastname: "swanson",
      designation: "Creative director",
      content: "Aqui ficara sua descrição desse item da lista. Você podera personalizar icone, titulo e descricão. Seja curta ou longa sua mensagem, ela será exibida aqui para todos visitantes do seu site",
      img: "https://via.placeholder.com/131x131"
  }
];


export default function CarrosselUmPage() {
  return (
    <RouteLayout title="Carrossel Um">
      <Grid container justifyContent="center" alignContent={'center'} alignItems={'center'}>
        <Grid item sm={12} md={12} lg={12}>
          <h6 className="mt-10 text-dark text-center mx-6 font-medium mb-35px] lg:mb-[30px]">Seu Carrossel se parecerá com este:</h6>
        </Grid>
      </Grid>
      <Grid container justifyContent="center" xs={12} sm={12} md={12} alignContent={'center'} alignItems={'center'}>
        <Grid item xs={12} sm={12} md={12} lg={10} justifyContent="center" alignItems={'center'} alignContent={'center'}>
          <CarrosselUm
            data={TestimonialsCarouselData1}
            className="swiper-navigation-04 swiper-navigation-light swiper-pagination-dark swiper-pagination-big black-move"
            carouselOption={{
                slidesPerView: 1,
                loop: true,
                navigation: false,
                autoplay: { delay: 4500, disableOnInteraction: false },
                pagination: { dynamicBullets: false, clickable: true },
                keyboard: { enabled: true, onlyInViewport: true },
            }}
          />
        </Grid>
      </Grid>
      
    </RouteLayout>
    
  )
};
