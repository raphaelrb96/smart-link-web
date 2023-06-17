import Buttons from "../../Button/Buttons";
import {Button, Container, Grid} from '@mui/material';

const BannerText = () => {
    return (
        <section className="py-[160px] overflow-hidden relative lg:py-[120px] md:py-[95px] sm:py-[80px] xs:py-[50px]">
            <Container>
                <Grid container spacing={2} className="items-center flex flex-1 content-around justify-center">
                    <Grid item lg={6} md={6} xs={8} className="sm:mb-[30px] ">
                        <h2 className="text-5xl font-semibold md:mx-6 text-darkgray mb-0">We are creative digital agency working for huge brands</h2>
                    </Grid>
                    <Grid item sx={{xl: { span: 5, offset: 1 }}} md={5} xs={11}>
                        <p  className="text-lg mb-[25px] leading-[38px] md:text-xmd">Lorem ipsum dolor sit amet consectetur adipiscing elit do eiusmod tempor incididunt ut labore et dolore magna ut enim ad minim veniam nostrud exercitation.</p>
                        <div><Buttons ariaLabel="button link for our services page" to="/page/our-services" className="font-medium uppercase btn-link after:h-[2px] md:text-md md:mb-[15px] after:bg-darkgray hover:text-darkgray" size="xl" color="#232323" title="Explore services" /></div>
                    </Grid>
                </Grid>
            </Container>
        </section>
    )
}

export default BannerText;