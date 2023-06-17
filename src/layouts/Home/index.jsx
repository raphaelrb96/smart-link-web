import HeroUm from '../../components/Hero/HeroUm';
import HeroDois from '../../components/Hero/HeroDois';

import BannerText from '../../components/Banner/BannerText';
import InBannerUm from '../../components/InterativeBanners/InBannerUm';
import {fadeIn} from '../../functions/GlobalAnimations.jsx';
import {dataHeroUm, InteractiveBannersData01, objHeadersComItens} from '../../functions/examples';
import ListaExpansivel from '../../components/Listas/ListaExpansivel';
import HeroVideoUm from '../../components/Hero/HeroVideoUm';
import { Grid } from '@mui/material';
import CarrosselDois from '../../components/Carrosseis/CarrosselDois';
import { Col, Container, Row } from 'react-bootstrap';
import Buttons from '../../components/Button/Buttons';

const dados = dataHeroUm;

const data = objHeadersComItens;


const data1 = [
    {
        title: "What do you mean by item and end product?",
        content: "Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry's standard dummy text ever when an unknown printer took a galley. Lorem ipsum is simply."
    },
    {
        title: "What are some examples of permitted end products?",
        content: "Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry's standard dummy text ever when an unknown printer took a galley. Lorem ipsum is simply."
    },
    {
        title: "Am i allowed to modify the item that i purchased?",
        content: "Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry's standard dummy text ever when an unknown printer took a galley. Lorem ipsum is simply."
    },
    {
        title: "What do you mean by item and end product?",
        content: "Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry's standard dummy text ever when an unknown printer took a galley. Lorem ipsum is simply."
    },
  ];
  const data2 = [
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

function Home () {
    return (
        <Grid  justifyContent="center" alignItems={'center'} container>
            <Grid item sm={12}>
                <HeroVideoUm />
            </Grid>
            <Grid item sm={12}>
            <HeroUm 
                title={dados.title}  
                buttonTitle={dados.buttonTitle} 
                headline={dados.headline}
                description={dados.description}
                button={dados.button} 
                buttonExtra={dados.buttonExtra} 
            />
            </Grid>
            <Grid item sm={12}>
                <HeroDois 
                    itens={data.itens}
                />
            </Grid>
            <InBannerUm data={InteractiveBannersData01} />
            <BannerText />
            <Grid item sm={12} lg={8}>
                <ListaExpansivel 
                    theme="accordion-style-04" 
                    className="" 
                    animation={fadeIn} 
                    data={data1}
                    themeColor="light"
                />
            </Grid>

            <Grid className='mt-[56px]' item xs={12} sm={12} md={12} lg={12} justifyContent="center" alignItems={'center'} alignContent={'center'}>
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
        
    )
};

export default Home;