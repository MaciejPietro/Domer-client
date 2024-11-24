import clsx from "clsx";
import {
  InformationCircleIcon,
  FolderIcon,
  HomeIcon,
  ArrowLeftStartOnRectangleIcon,
  // UserIcon,
  Cog6ToothIcon,
  UsersIcon,
} from "@heroicons/react/24/outline";
import { useRouterState } from "@tanstack/react-router";
import Dialog from "../ui/Dialog";
import { useState } from "react";

const navigation = [
  { name: "Panel", href: "/", icon: InformationCircleIcon, current: true },
  { name: "Kreator", href: "/creator", icon: HomeIcon, current: false },
  { name: "Projekty", href: "/projects", icon: FolderIcon, current: false },
  // { name: "Kontakty", href: "/contacts", icon: UsersIcon, current: false },

  // { name: "Usługi", href: "#", icon: UserIcon, current: false },
  // { name: "Dokumenty", href: "#", icon: DocumentDuplicateIcon, current: false },
  // { name: "Kalendarz", href: "#", icon: CalendarIcon, current: false },
  // { name: "Raporty", href: "#", icon: ChartPieIcon, current: false },
];
// const teams = [
//   { id: 1, name: "Inspiracje", href: "#", initial: "I", current: false },
//   // { id: 2, name: "Tailwind Labs", href: "#", initial: "T", current: false },
//   // { id: 3, name: "Workcation", href: "#", initial: "W", current: false },
// ];

const SidebarDesktop = () => {
  const router = useRouterState();
  const [logoutModal, setLogoutModal] = useState(false);

  const path = router.location.pathname;

  return (
    <div className="hidden lg:fixed lg:inset-y-0 lg:z-10 lg:flex lg:w-72 lg:flex-col">
      <div className="flex grow flex-col gap-y-5 overflow-y-auto border-r border-gray-200 bg-white px-6">
        <div
          className="flex h-16 shrink-0 items-center"
          style={{ filter: "brightness(1.6)" }}
        >
          <img className="h-8 w-auto" src="logo.png" alt="Your Company" />
        </div>
        <nav className="flex flex-1 flex-col">
          <ul role="list" className="flex flex-1 flex-col gap-y-7">
            <li>
              <ul role="list" className="-mx-2 space-y-1">
                {navigation.map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      className={clsx(
                        path === item.href
                          ? "bg-gray-50 text-indigo-600"
                          : "text-gray-700 hover:text-indigo-600 hover:bg-gray-50",
                        "group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold"
                      )}
                    >
                      <item.icon
                        className={clsx(
                          path === item.href
                            ? "text-indigo-600"
                            : "text-gray-400 group-hover:text-indigo-600",
                          "h-6 w-6 shrink-0"
                        )}
                        aria-hidden="true"
                      />
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </li>
            {/* <li>
              <div className="text-xs font-semibold leading-6 text-gray-400">
                Your teams
              </div>
              <ul role="list" className="-mx-2 mt-2 space-y-1">
                {teams.map((team) => (
                  <li key={team.name}>
                    <a
                      href={team.href}
                      className={clsx(
                        team.current
                          ? "bg-gray-50 text-indigo-600"
                          : "text-gray-700 hover:text-indigo-600 hover:bg-gray-50",
                        "group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold"
                      )}
                    >
                      <span
                        className={clsx(
                          team.current
                            ? "text-indigo-600 border-indigo-600"
                            : "text-gray-400 border-gray-200 group-hover:border-indigo-600 group-hover:text-indigo-600",
                          "flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border text-[0.625rem] font-medium bg-white"
                        )}
                      >
                        {team.initial}
                      </span>
                      <span className="truncate">{team.name}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </li> */}
            <li className="-mx-6 mt-auto flex justify-between pr-4">
              <div className="flex items-center gap-x-4 px-6 py-3 text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-50">
                <img
                  className="h-8 w-8 rounded-full bg-gray-50"
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt=""
                />
                <span aria-hidden="true">Tom Cook</span>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => {
                    setLogoutModal(true);
                  }}
                >
                  <span className="sr-only">Log out</span>
                  <ArrowLeftStartOnRectangleIcon className="text-gray-600 hover:text-gray-900 transition-colors w-6 h-6" />
                </button>

                <Dialog open={logoutModal} setOpen={setLogoutModal} />

                <a href="/settings">
                  <span className="sr-only">Your profile</span>
                  <Cog6ToothIcon className="text-gray-600 hover:text-gray-900 transition-colors w-6 h-6" />
                </a>
              </div>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default SidebarDesktop;
