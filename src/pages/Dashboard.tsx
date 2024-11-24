import clsx from "clsx";
import Main from "../components/layout/Main";
import {
  AcademicCapIcon,
  BanknotesIcon,
  CheckBadgeIcon,
  ClockIcon,
  Cog6ToothIcon,
  FolderIcon,
  HandRaisedIcon,
  InformationCircleIcon,
  ReceiptRefundIcon,
  UsersIcon,
} from "@heroicons/react/24/outline";

const actions = [
  {
    title: "Projekty",
    href: "/projects",
    content: "Lista twoich projektów",
    icon: FolderIcon,
    iconForeground: "text-yellow-700",
    iconBackground: "bg-yellow-50",
  },
  // {
  //   title: "Kontakty",
  //   href: "/contacts",
  //   content: "Lista twoich kontaktów",
  //   icon: UsersIcon,
  //   iconForeground: "text-sky-700",
  //   iconBackground: "bg-sky-50",
  // },
  {
    title: "O aplikacji",
    content: "Dowiedz się do czego służy aplikacja",
    icon: InformationCircleIcon,
    iconForeground: "text-yellow-600",
    iconBackground: "bg-rose-50",
  },
  {
    title: "Kup mi kawę",
    content: "Wesprzyj mnie kupując mi wirtualną kawę ;)",
    icon: BanknotesIcon,
    iconForeground: "text-teal-700",
    iconBackground: "bg-teal-50",
  },
  // {
  //   title: "Wsparcie",
  //   content:
  //     "Aby uzystać wsparcie podczas korzystania z aplikacji skontaktuj się ze mną. Możesz również zgłaszać błędy i proponować zmiany.",
  //   icon: HandRaisedIcon,
  //   iconForeground: "text-purple-700",
  //   iconBackground: "bg-purple-50",
  // },

  {
    title: "Ustawienia konta",
    href: "/settings",
    content: "Zmień swoje dane, lub usuń konto",
    icon: Cog6ToothIcon,
    iconForeground: "text-rose-700",
    iconBackground: "bg-rose-50",
  },
];

function Tiles() {
  return (
    <div className="divide-y divide-gray-200 overflow-hidden rounded-lg bg-gray-200 shadow sm:grid sm:grid-cols-2 sm:gap-px sm:divide-y-0">
      {actions.map((action, actionIdx) => (
        <div
          key={action.title}
          className={clsx(
            actionIdx === 0
              ? "rounded-tl-lg rounded-tr-lg sm:rounded-tr-none"
              : "",
            actionIdx === 1 ? "sm:rounded-tr-lg" : "",
            actionIdx === actions.length - 2 ? "sm:rounded-bl-lg" : "",
            actionIdx === actions.length - 1
              ? "rounded-bl-lg rounded-br-lg sm:rounded-bl-none"
              : "",
            "group relative bg-white p-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-500"
          )}
        >
          <div>
            <span
              className={clsx(
                action.iconBackground,
                action.iconForeground,
                "inline-flex rounded-lg p-3 ring-4 ring-white"
              )}
            >
              <action.icon className="h-6 w-6" aria-hidden="true" />
            </span>
          </div>
          <div className="mt-8">
            <h3 className="text-base font-semibold leading-6 text-gray-900">
              <a href={action.href} className="focus:outline-none">
                {/* Extend touch target to entire panel */}
                <span className="absolute inset-0" aria-hidden="true" />
                {action.title}
              </a>
            </h3>
            <p className="mt-2 text-sm text-gray-500">{action.content}</p>
          </div>
          <span
            className="pointer-events-none absolute right-6 top-6 text-gray-300 group-hover:text-gray-400"
            aria-hidden="true"
          >
            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20 4h1a1 1 0 00-1-1v1zm-1 12a1 1 0 102 0h-2zM8 3a1 1 0 000 2V3zM3.293 19.293a1 1 0 101.414 1.414l-1.414-1.414zM19 4v12h2V4h-2zm1-1H8v2h12V3zm-.707.293l-16 16 1.414 1.414 16-16-1.414-1.414z" />
            </svg>
          </span>
        </div>
      ))}
    </div>
  );
}

const Dashboard = () => {
  return (
    <Main>
      <div className="px-6 max-w-2xl ">
        <h2 className="text-xs font-semibold leading-7 text-indigo-600">
          Wszystko co potrzebujesz do zarządzania budową.
        </h2>
        <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Budoma
        </p>
        <p className="mt-6 text-sm  text-gray-600">
          {/* Aplikacja do zarządzania budową domku jednorodzinnego umożliwia
          kompleksowe śledzenie postępu prac, harmonogramowanie zadań oraz
          zarządzanie dokumentacją budowlaną, zapewniając efektywne i
          zorganizowane prowadzenie projektu. 
          
          Dzięki funkcjom takim jak
          powiadomienia o terminach, kontrola kosztów oraz możliwość współpracy
          z zespołem, użytkownicy mogą skutecznie monitorować i zarządzać każdym
          etapem budowy w intuicyjny sposób, zwiększając efektywność i
          minimalizując ryzyko opóźnień czy błędów. Dodatkowo, aplikacja oferuje
          narzędzia do komunikacji z podwykonawcami oraz dostęp do przydatnych
          materiałów i poradników, wspierając użytkowników w realizacji ich
          budowlanych projektów. */}
        </p>
      </div>
      <Tiles />
    </Main>
  );
};

export default Dashboard;
