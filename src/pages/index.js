import * as React from "react";
import styled from "styled-components";
import MainTemplate from "../templates/MainTemplates";
import { StaticImage } from "gatsby-plugin-image"

import LogoIcon from "../assets/icons/LogoIcon";
import BrandRectangleIcon from "../assets/icons/brandRectangleIcon";
import introVideo from "../assets/videos/Logo_BLK_BKG.mp4";

const PageWrapper = styled.div`
  padding: 11px 8px 24px;
  background-color: #000;
  display: flex;
  opacity: 0;
  transition: opacity .6s ease-in-out;

  &.show {
    opacity: 100%;
  }

  @media (max-width: 768px) and (min-height: 760px) {
    max-height: 100svh;
    overflow-y: hidden;
  }

  @media (min-width: 1024px) {
    padding: 24px;
    height: 100vh;
  }
`;

const ListSections = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 11px;
  list-style: none;

  @media (min-width: 1024px) {
    gap: 24px;
  }

  li {
    height: 58px;
    position: relative;
    background-color: ${({ theme }) => theme.colors.background.secondary};
    overflow-y: hidden;
    border-radius: 16px;
    transition: height .5s ease-in-out, background-color .5s ease-in-out;
    z-index: 999;

    .content-box {
      height: 511px;
      padding: 16px;
      display: flex;
      flex-direction: column;
      position: relative;
    }

    .logo-and-title-box {
      display: flex;
      justify-content: space-between;

      svg {
        width: 32px;
        height: 32px;
      }
    }

    .section-title {
      line-height: ${({ theme }) => theme.lineheight.heading};
      color: ${({ theme }) => theme.colors.text.primary};
      

      .big-title, .small-title {
        position: absolute;
        right: 16px;
        width: max-content;
        transition: opacity .4s ease-in-out;
      }

      .big-title::after, .small-title::after {
        content: '';
        display: block;
        width: 24px;
        height: 1px;
        background-color: ${({theme}) => theme.colors.text.primary};
        position: absolute;
        right: 0;
        margin-top: 2px;
        transition: background-color .6s ease-in-out;
      }

      .big-title {
        font-size: ${({ theme }) => theme.font.heading.mobile.h1};
        opacity: 0;
        font-weight: 600;
      }
      
      .small-title {
        font-size: ${({ theme }) => theme.font.heading.mobile.h2};
        font-weight: 500;
      }
      
    }

    .description {
      margin-top: 76px;
      color: ${({ theme }) => theme.colors.text.primary};    
      font-size: ${({ theme }) => theme.font.body.small};
      line-height: ${({ theme }) => theme.lineheight.body};
      font-weight: 300;
      letter-spacing: 0.01em;
    }

    .brand-rectangle-icon-box {
      display: flex;
      flex-grow: 1;
      justify-content: end;
      align-items: end;
      opacity: 0;
      transition: opacity .3s ease-in-out;
      z-index: 999;

      svg {
        width: 24px !important;
        height: 24px !important;
      }
    }

    .bcg-mobile-photo-box {
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;

      .gatsby-image-wrapper {
        width: 100%;

        div {
          max-width: none !important;
        }
      }
    }

    .bcg-desktop-photo-box {
      display: none;

      .gatsby-image-wrapper {
        width: 100%;

        div {
          max-width: none !important;
        }
      }
    }
  }

  li.about-section {
    .description {
      margin-top: 32px;
    }
  }

  li.contact-section .contact-data-box {
    display: flex;
    flex-direction: column;
    gap: 4px;
    margin-top: 24px;
    color: ${({ theme }) => theme.colors.text.primary};

    span {
      font-size: ${({ theme }) => theme.font.body.small};
    }

    .phone-link-box, .email-link-box, .adress-data-box {
      display: flex;
      gap: 4px;
    }

    .phone-link-box a, .email-link-box a, .adress-data-box span {
      color: ${({ theme }) => theme.colors.text.primary};
      text-decoration: none;
      font-size: ${({ theme }) => theme.font.body.small};
    }

    .bcg-desktop-photo-box {
      width: max-content;
    }
  }

  li.contact-section .second-description {
    margin-top: 24px;
  }

  li.active {
    height: 511px;
    flex-grow: 1;
    background-color: ${({ theme }) => theme.colors.background.primary};

    .section-title .big-title {
      opacity: 100;
    }

    .section-title .small-title {
      opacity: 0;
    }

    .brand-rectangle-icon-box {
      opacity: 100;
    }
  }



  @media (min-width: 1024px) {
    flex-direction: row;
    height: 100%;
    width: 100%;

    li {
      height: 100%;
      width: 180px;
      transition: width .6s ease-in-out, background-color .4s ease-in-out;
      cursor: pointer;

      .content-box {
        padding: 40px;
        height: 100%;
        width: calc(100vw - 660px);

        .section-title .big-title {
         display: none;
        }

         .section-title .small-title {
          font-size: ${({ theme }) => theme.font.heading.desktop.h2};
          font-weight: 700;
          top: 160px;
          transition: all .5s ease-in-out, left .6s ease-in-out;
        }

        .section-title .small-title::after {
          right: auto;
          left: 0;
          width: 21px;
          margin-top: 4px;
          transition: width .4s ease-in-out, background-color .4s ease-in-out;
        }

        .description {
          margin-left: 40px;
          margin-top: 184px;
          opacity: 0;
          font-size: ${({ theme }) => theme.font.body.regular};
          transition: opacity .6s ease-in-out;
        }

        .contact-data-box {
          opacity: 0;
          transition: opacity .6s ease-in-out;
          margin-left: 40px;

          span {
            font-size: ${({ theme }) => theme.font.body.regular};
          }
        }

        .second-description {
          margin-top: 24px;
        }
      }

      .logo-and-title-box svg, .brand-rectangle-icon-box svg {
        width: 40px !important;
        height: 40px !important;
      }

      .bcg-mobile-photo-box {
        display: none;
      }

      .bcg-desktop-photo-box {
        display: block;
        position: absolute;
        right: 0;
        bottom: 0;
        transition: scale .5s ease-in-out, transform .5s ease-in-out;
        width: calc(100vw - 660px);
        transform-origin: bottom right;
        transform: scale(0.65);
      } 
    }

    li:hover {
      background-color: ${({theme}) => theme.colors.background.primary};

      .section-title .small-title::after {
        width: 100%;
        background-color: ${({theme}) => theme.colors.background.brandred};
      }

      .bcg-desktop-photo-box {
        transform: scale(0.8);
      }
    }

    li.active {
      flex-grow: 1;
      height: 100%;
      width: calc(100vw - 660px);

      .section-title .small-title {
        transform: scale(1.2);
        opacity: 100%;
      }

      .section-title .small-title::after {
        background-color: ${({theme}) => theme.colors.background.secondary};
      }

      .description, .contact-data-box  {
          opacity: 100;
      }

      .bcg-desktop-photo-box {
        transform: scale(1);
      }
    }

    li.about-section .description {
      margin-top: 144px;
    }

    li.about-section .section-title .small-title { 
      left: 48px;
    }

    li.services-section .section-title .small-title { 
      left: 40px;
    }

    li.realizations-section .section-title .small-title { 
      left: 15px;
    }

    li.contact-section .section-title .small-title { 
      left: 30px;
    }

    li.services-section.active .section-title .small-title, li.about-section.active .section-title .small-title, li.contact-section.active .section-title .small-title { 
      left: 90px;
    }

    li.realizations-section.active .section-title .small-title {
      left: 95px;
    }

    li.about-section .description {
      max-width: 470px;
    }

    li.services-section .description {
      max-width: 470px;
    }

    li.realizations-section .description {
      max-width: 465px;
    }

    li.about-section .description, li.services-section .description, li.realizations-section .description {
      padding-bottom: 16px;
      border-bottom: 1px solid ${({theme}) => theme.colors.background.secondary};;
    }

    li.contact-section .bcg-desktop-photo-box {
      transform: scale(0.6) translateX(36%);
    }

    li.contact-section:hover .bcg-desktop-photo-box {
      transform: scale(0.65) translateX(36%);
    }

    li.contact-section.active .bcg-desktop-photo-box, li.contact-section.active:hover .bcg-desktop-photo-box {
      transform: scale(0.6) translateX(0%);
    }

    li.active:hover {
      .section-title .small-title::after {
        width: 21px;
      }

      .bcg-desktop-photo-box {
        transform: scale(1);
      }
    }
  }

  @media (min-width: 1200px) {
    li {
      width: 212px;

      .content-box, .bcg-desktop-photo-box { 
        width: calc(100vw - 706px);;
      }
    }

    li.about-section .section-title .small-title { 
      left: 58px;
    }

    li.services-section .section-title .small-title { 
      left: 51px;
    }

    li.realizations-section .section-title .small-title { 
      left: 23px;
    }

    li.contact-section .section-title .small-title { 
      left: 39px;
    }
  }
`;

const IntroWrapper = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #000;
  display: grid;
  align-content: center;
  transition: opacity .4s ease-in-out;
  max-height: 100vh;
  

  &.hidden {
    opacity: 0;

    .intro-video {
      display: none;
    }
  }

  .intro-video {
    width: 40%;
    margin: 0 auto;
  }

  @media (min-width: 1024px) {
  .intro-video {
    width: 10%;
  }
  }

`

const IndexPage = () => {

  React.useEffect(() => {
    document.body.style.backgroundColor = "#000";
  },[]);

  React.useEffect(() => {
    const listItems = document.querySelectorAll(".list-item");

    if (window.screen.width < 768 && window.screen.height > 760) {
      document.querySelector(".page-wrapper").style.height = `${window.innerHeight}px`;
      document.querySelectorAll(".content-box").forEach((item) => {
        item.style.height = `${window.innerHeight - 242}px`;
      });
      document.querySelector(".list-item.active").style.height = `${window.innerHeight - 242}px`;
    }
    
    listItems.forEach((item) => {
      item.addEventListener('click', () => {        
        listItems.forEach((item) => {
          item.classList.remove('active');
          if (window.screen.width < 768 && window.screen.height > 760) item.style.height = `58px`;
        });
        item.classList.add('active');
        if (window.screen.width < 768 && window.screen.height > 760) item.style.height = `${window.innerHeight - 242}px`;
      });
    });
  },[]);  

  React.useEffect(() => {
    if(window.screen.width >= 1024) {
      const contactSection = document.querySelector('li.contact-section');
      const contactSectionPhoto = document.querySelector('li.contact-section .bcg-desktop-photo-box');
      const aboutSection = document.querySelector('li.about-section');
      const servicesSection = document.querySelector('li.services-section');
      const realizationsSection = document.querySelector('li.realizations-section');

      let contactSectionIsActive = false;

      contactSectionPhoto.style.transform = `scale(0.6) translateX(${(window.innerWidth / 1000) * 26}%)`;

      window.addEventListener("resize", () => {
        if(!(contactSectionIsActive)) contactSectionPhoto.style.transform = `scale(0.6) translateX(${(window.innerWidth / 1000) * 26}%)`;
      });

      contactSection.addEventListener("mouseover", () => {
        if(!(contactSectionIsActive)) contactSectionPhoto.style.transform = `scale(0.65) translateX(${(window.innerWidth / 1000) * 26}%)`;
      });

      contactSection.addEventListener("mouseleave", () => {
         if(!(contactSectionIsActive)) contactSectionPhoto.style.transform = `scale(0.6) translateX(${(window.innerWidth / 1000) * 26}%)`;
      });

      contactSection.addEventListener("click", () => {
        contactSectionPhoto.style.transform = `scale(0.6) translateX(0)`;
         if(!(contactSectionIsActive)) contactSectionIsActive = true;
      });

      aboutSection.addEventListener("click", () => {
         if(contactSectionIsActive) { 
          contactSectionPhoto.style.transform = `scale(0.6) translateX(${(window.innerWidth / 1000) * 26}%)`;
          contactSectionIsActive = false;
        }
      });

      servicesSection.addEventListener("click", () => {
         if(contactSectionIsActive) { 
          contactSectionPhoto.style.transform = `scale(0.6) translateX(${(window.innerWidth / 1000) * 26}%)`;
          contactSectionIsActive = false;
        }
      });

      realizationsSection.addEventListener("click", () => {
         if(contactSectionIsActive) { 
          contactSectionPhoto.style.transform = `scale(0.6) translateX(${(window.innerWidth / 1000) * 26}%)`;
          contactSectionIsActive = false;
        }
      });
    }
  });

  React.useLayoutEffect(() => {
    const introVideo = document.querySelector('.intro-video');
    const introWrapper = document.querySelector('.intro-wrapper');
    const pageWrapper = document.querySelector('.page-wrapper');

    if(document.readyState === 'complete') {
      introVideo.play();
      console.log('complete');
    } else {
       window.addEventListener("load", () => {
       introVideo.play();
       console.log('load');
    });
    }
   
    introVideo.addEventListener("ended", () => {
      introWrapper.classList.add("hidden");
      pageWrapper.classList.add("show");
    });
  },[]);

  return (
    <>
      {" "}
      <MainTemplate>
        <PageWrapper className="page-wrapper">
          <ListSections>
            <li className="list-item about-section active">
              <div className="content-box">
                <div className="logo-and-title-box">
                {" "}
                  <div className="logo-box">
                    <LogoIcon />
                  </div>
                  <h1 className="section-title">
                    <span className="big-title">O nas</span>
                    <span className="small-title">O nas</span>
                  </h1>
                </div>
                <p className="description">
                  <b>SEGMENTS</b> to firma stworzona z pasji do budownictwa, kreowania wyjątkowych przestrzeni oraz dostarczania wysokiej jakości usług dla przemysłu. Nasz zespół liczy 50 zdolnych i wyjątkowych osób, które nie znają rzeczy niemożliwych i dążą do doskonałości. W SEGMENTS zespół składa się z 30 specjalistów przemysłowych oraz 20 ekspertów w dziedzinie budownictwa.<br /><br />
                  <b>Nasza filozofia</b><br /><br />
                  Wierzymy, że połączenie pasji z profesjonalizmem jest kluczem do osiągnięcia najwyższej jakości usług. Nasza firma kładzie nacisk na innowacyjność, precyzję i ciągłe dążenie do doskonałości. Niezależnie od projektu, nasz zespół podejmuje się wyzwań z determinacją i zaangażowaniem.
                </p>
                <div className="brand-rectangle-icon-box">
                  <BrandRectangleIcon />
                </div>
                <div className="bcg-mobile-photo-box">
                  <StaticImage src="../assets/images/about-bcg-mobile.webp" loading="eager"></StaticImage>
                </div>
              </div>   
              <div className="bcg-desktop-photo-box">
                <StaticImage src="../assets/images/about-bcg-desktop.webp" loading="eager"></StaticImage>
              </div> 
            </li>
            <li className="list-item services-section">
              <div className="content-box">        
                <h1 className="section-title">
                  <span className="big-title">Usługi</span>
                  <span className="small-title">Usługi</span>
                </h1>
                <p className="description">
                  <b style={{fontSize: "16px"}}>Budownictwo i nieruchomości</b><br /><br />
                  Jesteśmy pasjonatami budownictwa i nieruchomości. Oferujemy: uzbrajanie terenów, budownictwo jednorodzinne i wielorodzinne, nowoczesne projektowanie, sprzedaż inwestycji deweloperskich. Naszym priorytetem jest jakość i innowacyjność. Dołącz do naszej pasjonującej podróży!<br /><br />
                  <b style={{fontSize: "16px"}}>Przemysł</b> <br /><br />
                  SEGMENTS to butikowy dostawca usług przemysłowych. Oferujemy budowę linii produkcyjnych, spawalnictwo, utrzymanie ruchu, kontrolę jakości, naprawy maszyn, wsparcie logistyczne i produkcyjne. Zaufaj naszym specjalistom w zapewnieniu najwyższej jakości usług.
                </p>
                <div className="bcg-mobile-photo-box">
                  <StaticImage src="../assets/images/services-bcg-mobile.webp" loading="eager"></StaticImage>
                </div>
              </div>
              <div className="bcg-desktop-photo-box">
                <StaticImage src="../assets/images/services-bcg-desktop.webp" loading="eager"></StaticImage>
              </div> 
            </li>
            <li className="list-item realizations-section">
              <div className="content-box">
                <h1 className="section-title">
                  <span className="big-title">Realizacje</span>
                  <span className="small-title">Realizacje</span>
                </h1>
                <p className="description">
                  Jesteśmy dumni z naszych licznych realizacji, które obejmują zarówno nowoczesne apartamenty, przestrzenie komercyjne, jak i projekty infrastrukturalne. Każdy z naszych projektów to świadectwo naszego zaangażowania w najwyższą jakość i innowacyjne podejście do budownictwa. 
                  <br /><br />
                  Zapraszamy do zapoznania się z naszym portfolio, które prezentuje naszą wszechstronność i zdolność do tworzenia przestrzeni, które inspirują i służą społeczności przez wiele lat.
                </p>
                <div className="brand-rectangle-icon-box">
                  <BrandRectangleIcon />
                </div>
                <div className="bcg-mobile-photo-box">
                  <StaticImage src="../assets/images/realizations-bcg-mobile.webp" loading="eager"></StaticImage>
                </div>
              </div>
              <div className="bcg-desktop-photo-box">
                <StaticImage src="../assets/images/realizations-bcg-desktop.webp" loading="eager"></StaticImage>
              </div> 
            </li>
            <li className="list-item contact-section">
              <div className="content-box">
                <h1 className="section-title">
                  <span className="big-title">Kontakt</span>
                  <span className="small-title">Kontakt</span>
                </h1>
                <div class="contact-texts-box">
                  <p className="description">
                    Masz pytania, chcesz dowiedzieć się więcej lub umówić się na spotkanie? Skorzystaj z poniższych danych kontaktowych:
                  </p>
                  <div className="contact-data-box">
                    <div className="phone-link-box">
                      <span>Telefon:</span>
                      <a href="tel:+48603637908"><b>+48 603 637 908</b></a>
                    </div>
                    <div className="email-link-box">
                      <span>E-mail:</span>
                      <a href= "mailto:j.duraj@segments.pl"><b>j.duraj@segments.pl</b></a>
                    </div>
                    <div className="adress-data-box">
                      <span>Adres:</span>
                    </div>
                  </div>
                  <p className="second-description description">
                    Najpiękniejsze historie zaczynają się od jednego telefonu. Dlatego nie wahaj się skontaktować - jestem tutaj, aby Ci pomóc!<br /><br />
                    <b>Jakub Duraj</b>
                  </p>
                </div>
                <div className="brand-rectangle-icon-box">
                  <BrandRectangleIcon />
                </div>
              </div>
              <div className="bcg-desktop-photo-box">
                <StaticImage src="../assets/images/contact-bcg-desktop.webp" loading="eager"></StaticImage>
              </div> 
            </li>
          </ListSections>
        </PageWrapper>
        <IntroWrapper className="intro-wrapper">
          <video autoPlay muted playsInline className="intro-video">
            <source src={introVideo} type="video/mp4" />
          </video>
          <div></div>
        </IntroWrapper>
      </MainTemplate>
    </>
  );
};

export default IndexPage;
