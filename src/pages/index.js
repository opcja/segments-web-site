import * as React from "react";
import styled from "styled-components";
import MainTemplate from "../templates/MainTemplates";

import LogoIcon from "../assets/icons/LogoIcon";

const PageWrapper = styled.div`
  height: 100vh;
  padding: 11px 8px 24px;
  background-color: #000;
`;

const ListSections = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 11px;
  list-style: none;

  li {
    height: 9.4vh;
    background-color: ${({ theme }) => theme.colors.background.secondary};
    overflow-y: hidden;
    border-radius: 16px;

    .section-title {
      font-size: ${({ theme }) => theme.font.heading.mobile.h2};
      line-height: ${({ theme }) => theme.lineheight.heading};
    }
  }

  li.active {
    height: 61.8vh;
  }

  svg {
    width: 32px;
    height: 32px;
  }
`;

const IndexPage = () => {
  return (
    <MainTemplate>
      <PageWrapper>
        <ListSections>
          <li className="list-item about-section active">
            <div className="logo-box">
              <LogoIcon />
            </div>
            <h1 className="section-title">O nas</h1>
            <p className="description">
              Nasza firma powstała z pasji do budowania i kreowania wyjątkowych
              przestrzeni. Od lat dostarczamy najwyższej jakości usługi
              budowlane, łącząc nowoczesne technologie z tradycyjnym rzemiosłem.
                Dążymy do innowacyjności, zrównoważonego rozwoju i doskonałości
              we wszystkim, co robimy. Nasz zespół składa się z doświadczonych
              specjalistów, którzy każdego dnia realizują ambitne projekty,
              dbając o każdy szczegół i zadowolenie klientów.
            </p>
          </li>
          <li className="list-item services-section">
            <h1 className="section-title">Usługi</h1>
            <p className="description">
              Oferujemy kompleksowe usługi budowlane, które obejmują każdy etap
              realizacji projektu. Od starannego planowania i projektowania,
              przez profesjonalną budowę, aż po zarządzanie projektem –
              zapewniamy pełne wsparcie na każdym kroku.   Dzięki naszym
              doświadczeniu i zaangażowaniu, jesteśmy w stanie sprostać nawet
              najbardziej wymagającym wyzwaniom, dostarczając rozwiązania, które
              łączą funkcjonalność, estetykę i trwałość.
            </p>
          </li>
          <li className="list-item ralizations-section">
            <h1 className="section-title">Realizacje</h1>
            <p className="description">
              Jesteśmy dumni z naszych licznych realizacji, które obejmują
              zarówno nowoczesne apartamenty, przestrzenie komercyjne, jak i
              projekty infrastrukturalne. Każdy z naszych projektów to
              świadectwo naszego zaangażowania w najwyższą jakość i innowacyjne
              podejście do budownictwa. Zapraszamy do zapoznania się z naszym
              portfolio, które prezentuje naszą wszechstronność i zdolność do
              tworzenia przestrzeni, które inspirują i służą społeczności przez
              wiele lat.
            </p>
          </li>
          <li className="list-item contact-section">
            <h1 className="section-title">Kontakt</h1>
          </li>
        </ListSections>
      </PageWrapper>
    </MainTemplate>
  );
};

export default IndexPage;
