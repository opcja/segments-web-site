import * as React from "react";
import styled from "styled-components";
import MainTemplate from "../templates/MainTemplates";
import { StaticImage } from "gatsby-plugin-image"

import LogoIcon from "../assets/icons/LogoIcon";
import BrandRectangleIcon from "../assets/icons/brandRectangleIcon";

const PageWrapper = styled.div`
  padding: 11px 8px 24px;
  background-color: #000;

  @media (max-width: 768px) and (min-height: 760px) {
    max-height: 100vh;
    overflow-y: hidden;
  }
`;

const ListSections = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 11px;
  list-style: none;

  li {
    height: 62px;
    position: relative;
    background-color: ${({ theme }) => theme.colors.background.secondary};
    overflow-y: hidden;
    border-radius: 16px;
    transition: height .5s ease-in-out, background-color .5s ease-in-out;

    .content-box {
      min-height: 511px;
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
      text-align: end;
      opacity: 0;
      transition: opacity .3s ease-in-out;
      z-index: 999;

      svg {
        width: 24px !important;
        height: 24px !important;
      }
    }

    .bcg-photo-box {
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

    @media (max-width: 768px) and (min-height: 760px) {
      .content-box {
        min-height: calc(100vh - 240px);
      }
    }
  }

  li.about-section {
    .description {
      margin-top: 32px;
    }

    .brand-rectangle-icon-box {
      flex-grow: 1;
      display: flex;
      justify-content: end;
      align-items: end;
    }
  }

  li.ralizations-section,  li.contact-section {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    .brand-rectangle-icon-box { 
      flex-grow: 1;
      display: flex;
      justify-content: end;
      align-items: end;
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
      font-weight: 600;
    }
  }

  li.contact-section .second-description {
    margin-top: 24px;
  }

  li.active {
    height: 511px;
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

    @media (max-width: 768px) and (min-height: 760px) { 
      height: calc(100vh - 240px);
    }
  }
`;

const IndexPage = () => {
  React.useEffect(() => {
    document.body.style.backgroundColor = "#000";
  },[]);
  

  React.useEffect(() => {
    const listItems = document.querySelectorAll(".list-item");
    
    listItems.forEach((item) => {
      item.addEventListener('click', () => {        
        listItems.forEach((item) => {
          item.classList.remove('active');
        });
        item.classList.add('active');
      });
    });
  },[]);  

  return (
    <>
      {" "}
      <MainTemplate>
        <PageWrapper>
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
                <div className="bcg-photo-box">
                  <StaticImage src="../assets/images/about-bcg-mobile.webp"></StaticImage>
                </div>
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
                <div className="bcg-photo-box">
                  <StaticImage src="../assets/images/services-bcg-mobile.webp"></StaticImage>
                </div>
              </div>
            </li>
            <li className="list-item ralizations-section">
              <div className="content-box">
                <h1 className="section-title">
                  <span className="big-title">Realizacje</span>
                  <span className="small-title">Realizacje</span>
                </h1>
                <p className="description">
                  Oferujemy kompleksowe usługi budowlane, które obejmują każdy etap realizacji projektu. Od starannego planowania i projektowania, przez profesjonalną budowę, aż po zarządzanie projektem – zapewniamy pełne wsparcie na każdym kroku. <br /><br />
                  Dzięki naszym doświadczeniu i zaangażowaniu, jesteśmy w stanie sprostać nawet najbardziej wymagającym wyzwaniom, dostarczając rozwiązania, które łączą funkcjonalność, estetykę i trwałość.
                </p>
                <div className="brand-rectangle-icon-box">
                  <BrandRectangleIcon />
                </div>
                <div className="bcg-photo-box">
                  <StaticImage src="../assets/images/realizations-bcg-mobile.webp"></StaticImage>
                </div>
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
                      <a href="tel:"></a>
                    </div>
                    <div className="adress-link-box">
                      <span>E-mail:</span>
                      <a href= "mailto: "></a>
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
            </li>
          </ListSections>
        </PageWrapper>
      </MainTemplate>
    </>
  );
};

export default IndexPage;
