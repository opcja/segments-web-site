import * as React from "react";

const IndexPage = () => {
  return (
    <>
      <main>
        <ul className="list-sectios">
          <li className="list-item about-section">
            <h1 className="section-tite">O nas</h1>
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
            <h1 className="section-tite">Usługi</h1>
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
            <h1 className="section-tite">Realizacje</h1>
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
            <h1 className="section-tite">Kontakt</h1>
          </li>
        </ul>
      </main>
    </>
  );
};

export default IndexPage;
