import React from "react";
import Container from "react-bootstrap/Container";
import Footer from "../footer";
import Header from "../header";
import Seo from "../seo";
import "bootstrap/dist/css/bootstrap.min.css";
import { fixed } from "./layout.module.css";

const headerHeight = 56;

interface LayoutProps {
  className?: string;
}

function createWindowScrollCallback(callback: (deltaY: number) => void) {
  let isTicking = false;
  let previousScrollY = window.scrollY;

  return () => {
    const deltaY = window.scrollY - previousScrollY;
    if (deltaY === 0) return;

    previousScrollY = window.scrollY;

    if (isTicking) return;

    window.requestAnimationFrame(() => {
      callback(deltaY);
      isTicking = false;
    });

    isTicking = true;
  };
}

const Layout: React.FC<LayoutProps> = ({ children, className }) => {
  const [headerExpanded, setHeaderExpanded] = React.useState(false);
  const [headerTop, setHeaderTop] = React.useState(0);

  React.useEffect(() => {
    if (headerExpanded) return;

    let localHeaderTop = 0;

    const onWindowScroll = createWindowScrollCallback((deltaY) => {
      if (deltaY > 0 && localHeaderTop > -headerHeight) {
        localHeaderTop =
          localHeaderTop - deltaY > -headerHeight
            ? localHeaderTop - deltaY
            : -headerHeight;
        setHeaderTop(localHeaderTop);
      } else if (deltaY < 0 && localHeaderTop < 0) {
        localHeaderTop = localHeaderTop < deltaY ? localHeaderTop - deltaY : 0;
        setHeaderTop(localHeaderTop);
      }
    });

    window.addEventListener("scroll", onWindowScroll);

    return () => window.removeEventListener("scroll", onWindowScroll);
  }, [headerExpanded]);

  const onHeaderToggled = (expanded: boolean) => {
    setHeaderExpanded(expanded);

    if (expanded) setHeaderTop(0);
  };

  return (
    <>
      <Seo />
      <header>
        <Header onToggle={onHeaderToggled} style={{ top: headerTop }} />
      </header>
      <main>
        <div className={fixed}>
          <Container className={className} fluid="lg">
            {children}
          </Container>
        </div>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default Layout;
