import Main from "@/common/components/layout/Main";

const About = () => {
  return (
    <Main>
      <div className="px-6 max-w-2xl ">
        <h2 className="text-xs font-semibold leading-7 text-blue-600">
          Wszystko co potrzebujesz do zarządzania budową.
        </h2>
        <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Budoma
        </p>
        <p className="mt-10 text-sm  text-gray-600">
          Aplikacja do zarządzania budową domku jednorodzinnego umożliwia
          kompleksowe śledzenie postępu prac, harmonogramowanie zadań oraz
          zarządzanie dokumentacją budowlaną, zapewniając efektywne i
          zorganizowane prowadzenie projektu.
        </p>

        <p className="mt-3 text-sm  text-gray-600">
          Dzięki funkcjom takim jak <b>powiadomienia o terminach</b>,
          <b>kontrola kosztów</b>
          oraz <b>możliwość współpracy z zespołem</b>, użytkownicy mogą
          skutecznie monitorować i zarządzać każdym etapem budowy w intuicyjny
          sposób, zwiększając efektywność i minimalizując ryzyko opóźnień czy
          błędów.
        </p>

        <p className="mt-3 text-sm  text-gray-600">
          Dodatkowo, aplikacja oferuje narzędzia do komunikacji z podwykonawcami
          oraz dostęp do przydatnych materiałów i poradników, wspierając
          użytkowników w realizacji ich budowlanych projektów.
        </p>
      </div>
    </Main>
  );
};

export default About;
