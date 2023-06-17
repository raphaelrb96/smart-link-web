import { useScroll } from "framer-motion";
import { useContext, useEffect, useState } from "react";

export default function Header(props) {
    // Add Global Header Data
    const { scrollY } = useScroll();
    const [scrollPos, setScrollPos] = useState({
      y: 0,
      prevY: -1,
      directionDown: true,
    });
  
    useEffect(() => {
      let headerEl = document.querySelector("header");
  
      // Calculate header height
      function setTopSpace() {
        let windowWidth = window.innerWidth,
          headerheight = (props.topSpace.desktop && props.topSpace.desktop === true) ? headerEl.offsetHeight : 0;
  
        if (windowWidth <= 1199 && props.topSpace.lg) {
          headerheight = props.topSpace.lg === true ? headerEl.offsetHeight : 0;
        }
  
        if (windowWidth <= 991 && props.topSpace.md) {
          headerheight = props.topSpace.md === true ? headerEl.offsetHeight : 0;
        }
  
        if (windowWidth <= 767 && props.topSpace.sm) {
          headerheight = props.topSpace.sm === true ? headerEl.offsetHeight : 0;
        }
  
        if (windowWidth <= 575 && props.topSpace.xs) {
          headerheight = props.topSpace.xs === true ? headerEl.offsetHeight : 0;
        }
  
      }
  
      setTopSpace();
  
      window.addEventListener("load", setTopSpace);
      window.addEventListener("resize", setTopSpace);
  
      if (document.body.classList.contains("mobile-menu")) {
        document.body.classList.remove("navbar-collapse-show")
        document.body.classList.remove("menu-modern")
        document.body.classList.remove("menu-full")
        document.body.style.removeProperty("overflow");
      }
  
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
  
    useEffect(() => {
      let lastScrollTop = 0;
      scrollY.onChange((pos) => {
        if (pos > lastScrollTop) {
          setScrollPos({
            ...scrollPos,
            y: pos,
            prevY: pos - 1,
            directionDown: true,
          });
        } else {
          setScrollPos({
            ...scrollPos,
            y: pos,
            prevY: pos - 1,
            directionDown: false,
          });
        }
  
        if (pos === 0) {
          setScrollPos({ ...scrollPos, directionDown: true });
        }
        lastScrollTop = pos;
      });
  
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
  
    return (
      <header
        className={`${props.className ? props.className : ""}${scrollPos.y > 5 ? " sticky-header" : ""}${scrollPos.directionDown === false ? " header-appear" : ""}${props.type ? ` ${props.type}` : ""
          }`}
      >
        {props.children}
      </header>
    );
}