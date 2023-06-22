import HeroUm from '../../components/Hero/HeroUm';
import HeroDois from '../../components/Hero/HeroDois';

import BannerText from '../../components/Banner/BannerText';
import InBannerUm from '../../components/InterativeBanners/InBannerUm';
import {fadeIn} from '../../functions/GlobalAnimations.jsx';
import {dataHeroUm, InteractiveBannersData01, objHeadersComItens} from '../../functions/examples';
import ContainerListaTextoUm from '../../components/Containers/ContainerListaTextoUm';
import ContainerListaTextoDois from '../../components/Containers/ContainerListaTextoDois';
import HeroTres from '../../components/Hero/HeroTres';
import { Grid } from '@mui/material';
import DepoimentoUm from '../../components/Depoimentos/DepoimentoUm';
import CopyUm from '../../components/Copywriting/CopyUm';
import CopyBannerRotativo from "../../components/Copywriting/CopyBannerRotativo";
import ContainerModulos from "../../components/Containers/ContainerModulos"

import { Col, Container, Row } from 'react-bootstrap';
import Buttons from '../../components/Button/Buttons';

import comemorar from "../../../public/assets/video/comemorar.gif";

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


const HeroTresData = {
    btn: 'QUERO APRENDER A LUCRAR',
    btnExtra: 'Assista o vídeo',
    subhead: 'Monetize seu tempo online:',
    headline: 'Ganhe muito dinheiro com suas redes sociais'
};

const dataSoltions = {
    title: 'Temos a solução perfeita pra você que deseja começar',
    destaqueTitle: 'VIVER DAS REDES SOCIAIS',
    description: 'Mesmo que você esteja começando do ABSOLUTO ZERO ou se passa pelos seguintes PROBLEMAS:',
    lista: [
        {
            number: "01",
            title: "FALTA DE CONHECIMENTO E EXPERIÊNCIA",
            description: "NÃO TER CONHECIMENTO PRÉVIO SOBRE MARKETING DIGITAL, VENDAS ONLINE E ESTRATÉGIAS DE AFILIADOS, REVENDA OU CRIAÇÃO DE MARCA."
        },
        {
            number: "02",
            title: "DIFICULDADE NA ESCOLHA DA EXTRATEGIA E PRODUTO",
            description: "NÃO SABER SELECIONAR UM NICHO QUE SEJA RELEVANTE PARA O SEU PÚBLICO-ALVO E QUE TENHA DEMANDA E POTENCIAL DE LUCRO."
        },

        {
            number: "03",
            title: "GERENCIAMENTO DO TEMPO E CONSCISTENCIA",
            description: "MONETIZAR AS REDES SOCIAIS EXIGE CONSISTÊNCIA E GERENCIAMENTO EFICIENTE DO TEMPO. EFICIENCIA E PRODUTIVIDADE SÃO AS CHAVES"
        }

    ],
};

const depoimento = {
    lista: [
        {
            name: 'Herman Miller',
            designation: 'ThemeZaa Design',
            content: 'Lorem ipsum dolor amet consectetur do tempor incididunt labore et dolore magna nostrud exercitation ullamco.',
            img: 'https://via.placeholder.com/125x125',
        },
        {
            name: 'Jeremy Girard',
            designation: 'Microsoft Corporation',
            content: 'Lorem ipsum dolor amet consectetur do tempor incididunt labore et dolore magna nostrud exercitation ullamco.',
            img: 'https://via.placeholder.com/125x125'
        },
        {
            name: 'Alexander Harvard',
            designation: 'ThemeZaa Design',
            content: 'Lorem ipsum dolor amet consectetur do tempor incididunt labore et dolore magna nostrud exercitation ullamco.',
            img: 'https://via.placeholder.com/125x125'
        }
    ],
    subhead: 'Os comentarios que recebemos são',
    title: 'AS PROVAS REAIS DE SATISFAÇÃO'
};

const copywrite = {
    lista: [
        {
            firstname: "O Principal Desafio",
            lastname: "",
            designation: "",
            title: "Baixo engajamento e alcance limitado",
            content: "Você investe tempo e esforço na criação de conteúdo incrível, mas fica frustrado ao ver poucas curtidas, comentários e compartilhamentos. Isso afeta sua motivação e faz você questionar se vale a pena continuar.",
            img: "/assets/video/problem1.gif"
        },
        {
            firstname: "A Maior Barreira",
            lastname: "",
            designation: "",
            title: "Dificuldade em encontrar oportunidades",
            content: "Você sabe que trabalhar com parceiros e programas de afiliados pode impulsionar seus ganhos, mas enfrenta dificuldades em encontrar as oportunidades certas. Isso limita suas chances de aumentar sua renda e seu lucro.",
            img: "/assets/video/problem2.gif"
        },
        {
            firstname: "O Pesadelo Real",
            lastname: "",
            designation: "",
            title: "Sobrecarga de informações e direcionamento",
            content: "Você se sente perdido em meio a tantas informações dispersas sobre monetização nas redes sociais. A falta de um guia claro e direcionamento estratégico faz você desperdiçar tempo e energia em abordagens ineficientes.",
            img: "/assets/video/problem3.gif"
        },
    ],
    subTitle: 'VAMOS REVELAR O GRANDE SEGREDO',
    title: 'Você já se perguntou como algumas pessoas transformam suas redes sociais em verdadeiras máquinas de dinheiro?',
    headline: 'Enquanto você navega nas redes sociais, outras pessoas estão aproveitando essa mesma plataforma para alcançar o sucesso financeiro.',
    headlineExtra: 'NÃO ACHA QUE TA NA HORA DE VOCÊ RESOLVER ISSO DE UMA VEZ POR TODAS ?',
    content: [
        {title: 'A UNICA VERDADE', text: 'É que a maioria das pessoas não sabe como aproveitar o poder das redes sociais para gerar lucro real e ficam apenas consumindo e produzindo conteúdo aleatorio'},
        {title: 'O SEU PROBLEMA', text: 'É a falta de conhecimento sobre estratégias eficazes para criação de um produto ou serviço e dificuldades para atrair parceiros, afiliados ou patrocinadores'},
    ]
};

const beneficios = {
    subTitle: 'CHEGA DE FRUSTRAÇÃO E INCERTEZAS',
    title: 'Descubra como se tornar um verdadeiro especialista em monetização online e alcance ',
    destaqueTitle: 'O sucesso que você sempre sonhou.',
    description: 'Não perca mais tempo e oportunidades. Nosso produto é a chave para transformar sua presença nas redes sociais em um negócio lucrativo. Junte-se a nós agora mesmo e comece a trilhar o caminho para o sucesso na monetização online.',
    content: [
        {
            icon: "fas fa-bolt text-fastblue",
            title: "Estratégias comprovadas",
            content: "Nosso produto oferece um conjunto completo de estratégias comprovadas para vender online através das redes sociais. Aprenda a criar anúncios persuasivos, construir funis de vendas eficientes e utilizar técnicas de conversão que impulsionarão suas vendas e lucros.",
            linkTitle: "COMEÇAR AGORA",
            link: "/"
        },
        {
            icon: "fas fa-bolt text-fastblue",
            title: "Táticas avançadas",
            content: "Descubra táticas avançadas de marketing digital que irão impulsionar sua presença nas redes sociais. Aprenda a segmentar seu público-alvo, criar conteúdo relevante e utilizar estratégias de engajamento que irão aumentar sua visibilidade e sua base de clientes.",
            linkTitle: "COMEÇAR AGORA",
            link: "/"
        },
        {
            icon: "fas fa-bolt text-fastblue",
            title: "Parcerias estratégicas",
            content: "Aproveite o poder das parcerias estratégicas e dos programas de afiliados para expandir seu alcance e aumentar suas vendas. Ensinamos como identificar as melhores oportunidades e como estabelecer relacionamentos com afiliados que promoverão seus produtos.",
            linkTitle: "COMEÇAR AGORA",
            link: "/"
        },
        {
            icon: "fas fa-bolt text-fastblue",
            title: "Construção de autoridade",
            content: "Abordamos a importância de construir autoridade e reputação online para se destacar da concorrência. Aprenda a criar uma presença sólida e engajada nas redes sociais, para ganhar a confiança dos seguidores e se tornar uma referência em seu nicho de mercado.",
            linkTitle: "COMEÇAR AGORA",
            link: "/"
        },
        {
            icon: "fas fa-bolt text-fastblue",
            title: "Marketing de conteúdo",
            content: "Aprenda a criar, manter e monetizar um blog com criação de conteúdo envolvente e relevante que atrai e retém a atenção do seu público. Descubra técnicas para gerar interesse, engajamento e interação com seus seguidores. Conquiste verdadeiros fãs da sua marca e se destaque dos demais.",
            linkTitle: "COMEÇAR AGORA",
            link: "/"
        },
        {
            icon: "fas fa-bolt text-fastblue",
            title: "Automatização e ferramentas",
            content: "Conheça as ferramentas e recursos eficientes para automatizar suas tarefas nas redes sociais, economizando tempo e esforço. Aprenda a utilizar plataformas de agendamento de posts, monitoramento de métricas e gerenciamento de relacionamento com o cliente.",
            linkTitle: "COMEÇAR AGORA",
            link: "/"
        },
    ]
}

const conteudo = {
    subTitle: 'O guia completo sobre',
    title: 'Monetização Digital',
    headline: 'Aumente DRASTICAMENTE suas chances de ficar milionário(a) com a internet !!!',

};

const introducao = {
    headline: 'Como você se sentiria se conseguisse transformar sua paixão pelas redes sociais em uma fonte de renda sólida e duradoura?',
    content: [
        {
            img: "assets/video/comemorar.gif",
            title: "Chegou a sua vez!",
            subtitle: "Ler Mais",
            icon: "fas fa-money-bill-wave",
            btnLink: "#",
            btnTitle: "COMEÇAR AGORA",
            content: "Aprenda como aproveitar todas as oportunidades que as redes sociais oferecem. Atraves do nosso guia completo."
        },
        {
            img: "assets/video/oportunidade_unica.gif",
            title: "Oportunidade Unica",
            subtitle: "Ler Mais",
            icon: "fas fa-money-bill-wave",
            btnLink: "#",
            btnTitle: "COMEÇAR AGORA",
            content: "Descubra como atrair clientes, precificar seus serviços e construir uma reputação impecável no mercado digital."
        },
        {
            img: "assets/video/perder_tempo.gif",
            title: "Não perca mais tempo!",
            subtitle: "Ler Mais",
            icon: "fas fa-money-bill-wave",
            btnLink: "#",
            btnTitle: "COMEÇAR AGORA",
            content: "Dê o primeiro passo rumo à sua independência financeira. Comece agora e transforme seus sonhos em realidade."
        }
    ]
}

const moduls = {
    title: 'CONHECIMENTO DE ALTO VALOR AGREDADO',
    subTitle: 'Nossa proposta é te entregar',
    description: 'Para que você avance na sua carreira e alcance sues resultados e metas.',
    content: [
        {
          img: "../../../../../assets/img/vencedora.jpg",
          title: 'Mentalidade Vencedora',
          subtitle: 'Módulo 01',
          content: 'Lorem ipsum dolor consectetur adipiscing mod tempor incididunt labore dolore magna ut veniam.',
          buttonTitle: "Ver Próximo",
          buttonLink: "/page/what-we-offer/"
        },
        {
          img: "../../../../../assets/img/profissal_digital.jpg",
          title: "Nova Profissão do Digital",
          subtitle: "Módulo 02",
          content: "Lorem ipsum dolor consectetur adipiscing mod tempor incididunt labore dolore magna ut veniam.",
          buttonTitle: "Ver Próximo",
          buttonLink: "/page/what-we-offer/"
        },
        {
          img: "../../../../../assets/img/iniciativas.jpg",
          title: "As Melhores Iniciativas",
          subtitle: "Módulo 03",
          content: "Lorem ipsum dolor consectetur adipiscing mod tempor incididunt labore dolore magna ut veniam.",
          buttonTitle: "Ver Próximo",
          buttonLink: "/page/what-we-offer/"
        },
        {
          img: "../../../../../assets/img/venda.jpg",
          title: "Venda Qualquer Coisa Online",
          subtitle: "Módulo 04",
          content: "Lorem ipsum dolor consectetur adipiscing mod tempor incididunt labore dolore magna ut veniam.",
          buttonTitle: "Ver Próximo",
          buttonLink: "/page/what-we-offer/"
        },
        {
          img: "../../../../../assets/img/freelancer.jpg",
          title: "Lucrando como Freelancing",
          subtitle: "Módulo 05",
          content: "Lorem ipsum dolor consectetur adipiscing mod tempor incididunt labore dolore magna ut veniam.",
          buttonTitle: "Ver Próximo",
          buttonLink: "/page/what-we-offer/"
        },
        {
          img: "../../../../../assets/img/marketing.jpg",
          title: "Marketing de Afiliação",
          subtitle: "Módulo 06",
          content: "Lorem ipsum dolor consectetur adipiscing mod tempor incididunt labore dolore magna ut veniam.",
          buttonTitle: "Ver Próximo",
          buttonLink: "/page/what-we-offer/"
        },
    ]
}


function Home () {
    return (
        <Grid className='bg-darkpurple2' justifyContent="center" alignItems={'center'} container>
            
            <Grid item sm={12}>
                <HeroTres 
                    data={HeroTresData} 
                />
            </Grid>
            <Grid item sm={12}>
                <CopyBannerRotativo
                    data={introducao}
                />
            </Grid>

            <Grid item xs={12}>
                <CopyUm
                    data={copywrite}
                />
            </Grid>


            <>
            <Grid item sm={12}>
                <ContainerListaTextoUm
                    className="my-14"
                    grid="justify-center gap-y-10"
                    theme="text-box-style-02"
                    data={dataSoltions}
                    xs={10}sm={8} md={4} lg={4} xl={4}
                    dark
                    animation={fadeIn} 
                />
            </Grid>
            <Grid item sm={12} lg={10}>
                <ContainerListaTextoDois
                    grid=" py-[120px] "
                    dark
                    theme="icon-with-text-06"
                    className="hover:text-purple-950 text-purple-400"
                    data={beneficios}
                    xs={12}sm={8} md={6} lg={4} xl={4}
                    animation={fadeIn}
                    animationDelay={0.1}
                />
            </Grid>
            </>


            <ContainerModulos 
                data={moduls}
            />
            


            <Grid className='bg-lightgray' item xs={12} sm={12} md={12}>
                <DepoimentoUm
                    grid="gap-y-[10px] bg-lightgray justify-center"
                    theme='testimonials-style-03 px-[10px] py-[26px]'
                    className="sm:px-0"
                    data={depoimento}
                    animation={fadeIn}
                    animationDelay={0.3}
                />
            </Grid>

        </Grid>
        
    )
};

export default Home;