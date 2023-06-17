import { Col, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import Header from "../Header";
import HeaderNav from "../Header/HeaderNav";

export default function HeaderHome() {
    
    return(
        <Header topSpace={{ md: true }} type="reverse-scroll">
            <HeaderNav fluid="fluid" theme="dark" expand="lg" className="digital-agency-header py-[0px] px-[35px] md:px-[15px] md:py-[20px] sm:px-0" containerClass="md:pr-0">
                <Col lg={2} sm={6} xs={"auto"} className="mr-auto ps-0">
                    <Link aria-label="header logo" className="flex items-center" to="/">
                        <Navbar.Brand className="inline-block p-0 m-0">
                            <img className="default-logo" width="111" height="36" loading="lazy" src='/assets/img/webp/logo-white.webp' data-rjs='/assets/img/webp/logo-white@2x.webp' alt='logo' />
                            <img className="alt-logo" width="111" height="36" loading="lazy" src='/assets/img/webp/logo-brownish-orange-green.webp' data-rjs='/assets/img/webp/logo-brownish-orange-green@2x.webp' alt='logo' />
                            <img className="mobile-logo" width="111" height="36" loading="lazy" src='/assets/img/webp/logo-brownish-orange-green.webp' data-rjs='/assets/img/webp/logo-brownish-orange-green@2x.webp' alt='logo' />
                        </Navbar.Brand>
                    </Link>
                </Col>
                
                
            </HeaderNav>
        </Header>
    )
};