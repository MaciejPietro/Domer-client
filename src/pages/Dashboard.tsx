import clsx from "clsx";
import Main from "@/Common/components/layout/Main";
import {
  BanknotesIcon,
  ChartBarIcon,
  Cog6ToothIcon,
  FolderIcon,
  InformationCircleIcon,
  UsersIcon,
} from "@heroicons/react/24/outline";
import { Link } from "@tanstack/react-router";

const actions = [
  {
    title: "Projekty",
    href: "/projects",
    content: "Lista twoich projektów",
    icon: FolderIcon,
    iconForeground: "text-yellow-700",
    iconBackground: "bg-yellow-50",
    disabled: false,
  },
  {
    title: "Ustawienia konta",
    href: "/settings",
    content: "Zmień swoje dane, lub usuń konto",
    icon: Cog6ToothIcon,
    iconForeground: "text-rose-700",
    iconBackground: "bg-rose-50",
    disabled: false,
  },
  {
    title: "Kontakty",
    href: "/contacts",
    content: "Lista twoich kontaktów",
    icon: UsersIcon,
    iconForeground: "text-sky-700",
    iconBackground: "bg-sky-50",
    disabled: true,
  },
  {
    title: "Statystyki",
    href: "/stats",
    content: "Statystyki dotyczące twoich projektów",
    icon: ChartBarIcon,
    iconForeground: "text-sky-700",
    iconBackground: "bg-sky-50",
    disabled: true,
  },
  {
    title: "O aplikacji",
    href: "/about",
    content: "Dowiedz się do czego służy aplikacja",
    icon: InformationCircleIcon,
    iconForeground: "text-yellow-600",
    iconBackground: "bg-rose-50",
    disabled: false,
  },

  {
    title: "Kup mi kawę",
    content: "Wesprzyj mnie kupując mi wirtualną kawę ;)",
    icon: BanknotesIcon,
    iconForeground: "text-teal-700",
    iconBackground: "bg-teal-50",
    disabled: true,
  },
];

function Tiles() {
  return (
    <div className="divide-y divide-gray-200 border-y border-r border-gray-200 overflow-hidden  bg-gray-200 sm:grid sm:grid-cols-2 sm:gap-px sm:divide-y-0 max-w-6xl">
      {actions.map((action) => (
        <Link
          to={action.href}
          disabled={action.disabled}
          key={action.title}
          className={clsx(
            "group relative bg-white p-6 hover:bg-gray-50 transition-colors duration-300 ",
            action.disabled ? "pointer-events-none" : ""
          )}
        >
          <div className={clsx(action.disabled && "opacity-15")}>
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
                <span className="absolute inset-0" aria-hidden="true" />
                {action.title}
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
        </Link>
      ))}
    </div>
  );
}

const Dashboard = () => {
  return (
    <Main>
      <div className="px-6 mb-6 max-w-2xl ">
        <h2 className="text-xs font-semibold leading-7 text-indigo-600">
          Wszystko co potrzebujesz do zarządzania budową.
        </h2>
        <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Budoma
        </p>
      </div>
      <Tiles />
    </Main>
  );
};

export default Dashboard;
