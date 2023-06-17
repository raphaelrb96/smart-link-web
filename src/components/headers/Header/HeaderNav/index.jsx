import { Container, Navbar } from "react-bootstrap";

export default function HeaderNav (props) {
    const handleMenuToggle = () => {
      let header = document.querySelector("header"),
        menu = header.querySelector(".navbar-nav"),
        menu_item = menu.querySelectorAll(".nav-item");
  
      if (!document.body.classList.contains("navbar-collapse-show")) {
        document.body.classList.add("navbar-collapse-show");
      } else {
        document.body.classList.remove("navbar-collapse-show");
      }
  
      menu_item.forEach(function (item) {
        if (item.classList.contains("open")) {
          setTimeout(() => {
            item.classList.remove("open");
          }, 200);
        }
      });
    };
  
    return (
      <Navbar
        collapseOnSelect
        id="headerbar"
        expand={props.expand}
        bg={props.bg ? props.bg : "transparent"}
        variant={props.theme}
        className={`${props.menu && `menu-${props.menu}`}${props.className ? ` ${props.className}` : ""
          }${props.bg || props.bg === "transparent" ? "" : " header-transparent"}`}
        onToggle={handleMenuToggle}
      >
        <Container
          fluid={props.fluid}
          className={props.containerClass ? props.containerClass : ""}
        >
          {props.children}
        </Container>
      </Navbar>
    );
  };