"use client"

import { Grid } from "@mui/material";
import RouteLayout from '../../../layout';
import CarrosselNove from "../../../../components/Carrosseis/CarrosselNove";
import { fadeIn } from "../../../../functions/GlobalAnimations";
import InViewPort from "../../../../components/InViewPort.jsx";
import { Container } from "react-bootstrap";
import { m, motion } from "framer-motion";



const exemplo = [
  {
    img: "../../../../../assets/img/vencedora.jpg",
    title: 'Mentalidade Vencedora',
    subtitle: 'Módulo 01',
    content: 'Lorem ipsum dolor consectetur adipiscing mod tempor incididunt labore dolore magna ut veniam.',
    buttonTitle: "Learn more",
    buttonLink: "/page/what-we-offer/"
  },
  {
    img: "../../../../../assets/img/profissal_digital.jpg",
    title: "Nova Profissão do Digital",
    subtitle: "Módulo 02",
    content: "Lorem ipsum dolor consectetur adipiscing mod tempor incididunt labore dolore magna ut veniam.",
    buttonTitle: "Learn more",
    buttonLink: "/page/what-we-offer/"
  },
  {
    img: "../../../../../assets/img/iniciativas.jpg",
    title: "Melhores Iniciativas",
    subtitle: "Módulo 03",
    content: "Lorem ipsum dolor consectetur adipiscing mod tempor incididunt labore dolore magna ut veniam.",
    buttonTitle: "Learn more",
    buttonLink: "/page/what-we-offer/"
  },
  {
    img: "../../../../../assets/img/venda.jpg",
    title: "Venda Qualquer Coisa Online",
    subtitle: "Módulo 04",
    content: "Lorem ipsum dolor consectetur adipiscing mod tempor incididunt labore dolore magna ut veniam.",
    buttonTitle: "Learn more",
    buttonLink: "/page/what-we-offer/"
  },
  {
    img: "../../../../../assets/img/freelancer.jpg",
    title: "Lucrando como Freelancing",
    subtitle: "Módulo 05",
    content: "Lorem ipsum dolor consectetur adipiscing mod tempor incididunt labore dolore magna ut veniam.",
    buttonTitle: "Learn more",
    buttonLink: "/page/what-we-offer/"
  },
  {
    img: "../../../../../assets/img/marketing.jpg",
    title: "Marketing de Afiliação",
    subtitle: "Módulo 06",
    content: "Lorem ipsum dolor consectetur adipiscing mod tempor incididunt labore dolore magna ut veniam.",
    buttonTitle: "Learn more",
    buttonLink: "/page/what-we-offer/"
  },
];

export default function CarrosselNovePage(props) {
  return (
    <RouteLayout title="Carrossel Nove">
      <div className="w-full">
        <Grid container justifyContent="center" alignContent={'center'} alignItems={'center'}>
          <Grid item sm={12} md={12} lg={12}>
            <h6 className="mt-10 text-dark text-center mx-6 font-medium mb-35px] lg:mb-[30px]">Seu Carrossel se parecerá com este:</h6>
          </Grid>
        </Grid>
        <motion.div>
          <Container fluid className="px-0">
            <CarrosselNove
                data={exemplo}
            />
          </Container>
        </motion.div>
      </div>
      
    </RouteLayout>
    
  )
};
