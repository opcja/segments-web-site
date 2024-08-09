import * as React from "react";
import styled from "styled-components";
import MainTemplate from "../templates/MainTemplates";
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby";

import LogoIcon from "../assets/icons/LogoIcon";
import BrandRectangleIcon from "../assets/icons/brandRectangleIcon";
import SignatureBlackIcon from "../assets/icons/SignatureBlackIcon";
import SignatureLightIcon from "../assets/icons/SignatureLightIcon";
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
    overflow: hidden;
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

      span {
        display: block;
        margin-top: 8px;
      }
    }

    .portfolio-links-box {
      margin-top: 32px;
      display: flex;
      flex-direction: column;
      gap: 16px;

      .portfolio-link {
        display: block;
        text-align: center;
        padding: 8px 0;
        border: 2px solid ${({ theme }) => theme.colors.border.primary};
        color: ${({ theme }) => theme.colors.text.primary};  
        font-weight: 600;
        text-decoration: none;

        &.disabled {
          border: 2px solid ${({ theme }) => theme.colors.border.disabled};
          color: ${({ theme }) => theme.colors.text.disabled};  
          background-color: ${({ theme }) => theme.colors.background.disabled}; ;
        }
      }
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

  li.services-section .brand-rectangle-icon-box {
    position: absolute;
    bottom: 16px;
    right: 16px;

    @media (max-width: 768px) and (min-height: 760px) {
      position: static;
    }
  }

  li.contact-section .contact-data-box {
    display: flex;
    flex-direction: row;
    gap: 4px;
    margin-top: 24px;
    color: ${({ theme }) => theme.colors.text.primary};

    span {
      font-size: ${({ theme }) => theme.font.body.small};
    }

    .contact-left-column, .contact-right-column {
      display: flex;
      flex-direction: column;
      gap: 8px;
      flex-basis: 50%;
    }

    .adress-data-box {
      display: flex;
      flex-direction: column;
      gap: 4px;
    }

    .contact-right-column {
      align-items: end;

      .linkedin-link-box {
        align-items: end;
      }
    }

    .phone-link-box a, .email-link-box a, .linkedin-link-box a, .adress-data-box span {
      color: ${({ theme }) => theme.colors.text.primary};
      text-decoration: none;
      font-size: ${({ theme }) => theme.font.body.small};
    }

    .bcg-desktop-photo-box {
      width: max-content;
    }
  }

  li.contact-section {
    .second-description {
      margin-top: 24px;
    }

    .signature-icon-box {
      position: absolute;
      bottom: 0;
      left: 16px;

      svg {
        width: 140px;
      }
    }

    .bcg-mobile-photo-box {
      width: 60%;
      left: auto;
    }

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
      flex-basis: 180px;
      min-width: 180px;
      transition: flex-basis .6s ease-in-out, background-color .4s ease-in-out;
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

        .portfolio-links-box {
          margin-top: 16px;

          .portfolio-link {
            padding: 12px 24px;
            width: fit-content;

            /* &:hover {
              background-color: ${({ theme }) => theme.colors.background.secondary};;
            } */
          }
        }

        .contact-texts-box {
          max-width: 550px;
        }

        .contact-data-box {
          opacity: 0;
          transition: opacity .6s ease-in-out;
          margin-left: 40px;

          .contact-right-column { 
            align-items: flex-start;
          }

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
      flex-basis: calc(100vw - 660px);

      .section-title .small-title {
        transform: scale(1.2);
        opacity: 100%;
      }

      .section-title .small-title::after {
        background-color: ${({theme}) => theme.colors.background.secondary};
      }

      .description, .contact-data-box, .portfolio-link-box {
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

    li.services-section .brand-rectangle-icon-box {
      position: static;
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

    li.contact-section .signature-icon-box {
      opacity: 0;
      transition: opacity .6s ease-in-out;

      svg {
        width: 16vw;
      }
    } 

    li.contact-section.active .signature-icon-box {
      opacity: 100;
    }

    li.contact-section .bcg-desktop-photo-box, li.contact-section:hover .bcg-desktop-photo-box  {
      transform: scale(0.45);
    }

    li.contact-section.active .bcg-desktop-photo-box, li.contact-section.active:hover .bcg-desktop-photo-box {
      transform: scale(0.5);
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
      flex-basis: 212px;
      min-width: 212px;

      .content-box, .bcg-desktop-photo-box { 
        width: calc(100vw - 756px);
      }
    }

    li.active {
      flex-basis: calc(100vw - 756px);
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
                    <a href="/" className="logo-link">
                      <LogoIcon />
                    </a>
                  </div>
                  <h1 className="section-title">
                    <span className="big-title">O nas</span>
                    <span className="small-title">O nas</span>
                  </h1>
                </div>
                <p className="description">
                  <strong>SEGMENTS</strong> to firma stworzona z pasji do budownictwa, kreowania wyjątkowych przestrzeni oraz dostarczania wysokiej jakości usług dla przemysłu. Nasz zespół liczy pięćdziesiąt zdolnych i wyjątkowych osób, które nie znają słów nie da się.<br /><br />
                  <strong>Nasze motta</strong><br /><br />
                  1. Dobry może być lepszy, lepszy może być najlepszy, a najlepszy nigdy nie powinien przestać się rozwijać. <br />
                  <span>2. By nie popełniać błędów trzeba mieć doświadczenie, żeby mieć doświadczenie trzeba popełniać błędy.</span>
                </p>
                <div className="brand-rectangle-icon-box">
                  <BrandRectangleIcon />
                </div>
                <div className="bcg-mobile-photo-box">
                  <StaticImage src="../assets/images/about-bcg-mobile.webp" loading="eager" alt="segments about"></StaticImage>
                </div>
              </div>   
              <div className="bcg-desktop-photo-box">
                <StaticImage src="../assets/images/about-bcg-desktop.webp" loading="eager" alt="segments about"></StaticImage>
              </div> 
            </li>
            <li className="list-item services-section">
              <div className="content-box">        
                <h1 className="section-title">
                  <span className="big-title">Usługi</span>
                  <span className="small-title">Usługi</span>
                </h1>
                <p className="description">
                  <strong style={{fontSize: "16px"}}>Budownictwo i nieruchomości</strong><br /><br />
                 Jesteśmy pasjonatami budownictwa i nieruchomości. Płynnie przeprowadzimy proces od nabycia gruntu poprzez projekt, budowę, odbiory a kończąc na sprzedaży.<br /><br />

                  <strong style={{fontSize: "16px"}}>Przemysł</strong> <br /><br />
                  SEGMENTS to butikowy dostawca usług przemysłowych. Oferujemy budowę linii produkcyjnych, spawalnictwo, utrzymanie ruchu, kontrolę jakości, naprawy maszyn, wsparcie logistyczne i produkcyjne. 
                </p>
                <div className="brand-rectangle-icon-box">
                  <BrandRectangleIcon />
                </div>
                <div className="bcg-mobile-photo-box">
                  <StaticImage src="../assets/images/services-bcg-mobile.webp" loading="eager" alt="segments services"></StaticImage>
                </div>
              </div>
              <div className="bcg-desktop-photo-box">
                <StaticImage src="../assets/images/services-bcg-desktop.webp" loading="eager" alt="segments services"></StaticImage>
              </div> 
            </li>
            <li className="list-item realizations-section">
              <div className="content-box">
                <h1 className="section-title">
                  <span className="big-title">Realizacje</span>
                  <span className="small-title">Realizacje</span>
                </h1>
                <p className="description">
                  Jesteśmy pasjonatami, a każdy z naszych projektów to świadectwo naszego zaangażowania w najwyższą jakość i innowacyjne podejście do przemysłu oraz budownictwa .
                  <br /><br />
                  Zapraszamy do zapoznania się z naszym portfolio.
                  <div className="portfolio-links-box">
                    <a href="" className="portfolio-link disabled">Pobierz portfolio budowlane</a>
                    <a href="" className="portfolio-link disabled">Pobierz portfolio przemysłowe</a>
                  </div>
                </p>
                <div className="brand-rectangle-icon-box">
                  <BrandRectangleIcon />
                </div>
                <div className="bcg-mobile-photo-box">
                  <StaticImage src="../assets/images/realizations-bcg-mobile.webp" loading="eager" alt="segments realizations"></StaticImage>
                </div>
              </div>
              <div className="bcg-desktop-photo-box">
                <StaticImage src="../assets/images/realizations-bcg-desktop.webp" loading="eager" alt="segments realizations"></StaticImage>
              </div> 
            </li>
            <li className="list-item contact-section">
              <div className="content-box">
                <h1 className="section-title">
                  <span className="big-title">Kontakt</span>
                  <span className="small-title">Kontakt</span>
                </h1>
                <div className="contact-texts-box">
                  <p className="description">
                    Masz pytania, chcesz dowiedzieć się więcej? Skorzystaj z poniższych danych kontaktowych:
                  </p>
                  <div className="contact-data-box">
                    <div className="contact-left-column">
                      <div className="company-name-box">
                        <span><strong>SEGMENTS. Sp. z o.o.</strong></span>
                      </div>
                      <div className="nip-box">
                        <span>PL5532580093</span>
                      </div>
                      <div className="adress-data-box">
                        <span>43-300 Bielsko-Biała, Polska</span>
                        <span>ul. Architektów 20</span>
                      </div>
                    </div>
                    <div className="contact-right-column">
                      <div className="ceo-name-box">
                        <span><strong>Jakub Duraj</strong></span>
                      </div>
                      <div className="email-link-box">
                        <a href= "mailto:j.duraj@segments.pl">j.duraj@segments.pl</a>
                      </div>
                      <div className="phone-link-box">
                        <a href="tel:+48603637908">+48 603 637 908</a>
                      </div>
                      <div className="linkedin-link-box">
                        <a href="https://linkedin.com/in/jd-segments">Linkedin</a>
                      </div>
                    </div>
                  </div>
                  <p className="second-description description">
                    Najpiękniejsze historie zaczynają się od jednego telefonu, a ten powyżej jest bezpośrednio do mnie.
                  </p>
                </div>
                <div className="brand-rectangle-icon-box">
                  <BrandRectangleIcon />
                </div>
                <div className="signature-icon-box">
                  <SignatureLightIcon />
                </div>
                <div className="bcg-mobile-photo-box">
                  <StaticImage src="../assets/images/contact-bcg-mobile.webp" loading="eager" alt="segments contact"></StaticImage>
                </div>
              </div>
              <div className="bcg-desktop-photo-box">
                <StaticImage src="../assets/images/contact-bcg-desktop.webp" loading="eager" alt="segments contact"></StaticImage>
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
