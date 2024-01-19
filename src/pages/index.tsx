import Head from "next/head";
import { Background } from "@/components/background";
import { StylesWrapper } from "./index.styles";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { MainContent } from "@/components/main-content";
import { useCallback, useEffect, useState } from "react";
import useHashFragment from "@/shared/hooks/useHashFragment";

const NavbarLinks = ["Hello", "About", "Work", "Projects", "Contact"];

export default function Home() {
  const [activeLink, setActiveLink] = useState(0);
  const { hashFragment } = useHashFragment();

  const handleLinkChange = useCallback((index: number) => {
    setActiveLink(index);
  }, []);

  useEffect(() => {
    if (hashFragment) {
      setActiveLink(NavbarLinks.indexOf(hashFragment));
    } else {
      setActiveLink(0);
    }
  }, [hashFragment]);

  return (
    <>
      <Head>
        <title>Anindya Pramudita | Frontend Developer</title>
        <meta
          name="description"
          content="Portfolio of Anindya Pramudita - 2024"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.png" />
      </Head>
      <main>
        <StylesWrapper isFooterShown={activeLink === 0 ? true : false}>
          <div className="page-content">
            <Navbar
              activeLink={activeLink}
              onLinkClick={handleLinkChange}
              NavbarLinks={NavbarLinks}
            />
            <div className="main-content">
              <MainContent activeLink={activeLink} />
            </div>
            <Footer />
          </div>
          <Background />
        </StylesWrapper>
      </main>
    </>
  );
}
