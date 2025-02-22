import clsx from "clsx";
import {
  InformationCircleIcon,
  FolderIcon,
  HomeIcon,
  CalendarIcon,
  DocumentIcon,
} from "@heroicons/react/24/outline";
import { useRouterState } from "@tanstack/react-router";

import CollapseBtn from "./Sidebar/CollapseBtn";
import { useAtomValue } from "jotai";
import { isCollapsedSidebarAtom } from "@/common/lib/store";
import Logo from "./Sidebar/Logo";
import AccountItem from "./Sidebar/AccountItem";
import { Tooltip } from "@mantine/core";

const navigation = [
  { name: "Panel", href: "/", icon: InformationCircleIcon, current: true },
  // { name: "Wizualizacja", href: "/creator", icon: HomeIcon, current: false },
  // { name: "Kalendarz", href: "/calendar", icon: CalendarIcon, current: false },
  // { name: "Dokumenty", href: "/documents", icon: DocumentIcon, current: false },
  { name: "Projekty", href: "/projects", icon: FolderIcon, current: false },
];

const SidebarDesktop = () => {
  const isCollapsedSidebar = useAtomValue(isCollapsedSidebarAtom);
  const router = useRouterState();

  const path = router.location.pathname;

  return (
    <div
      className={clsx(
        "hidden lg:fixed lg:inset-y-0 lg:z-10 lg:flex lg:flex-col transition-all duration-300",
        isCollapsedSidebar ? "lg:w-20" : "lg:w-72"
      )}
    >
      <div className="flex grow flex-col gap-y-5 overflow-y-auto border-r border-gray-200 bg-white px-6 overflow-x-hidden">
        <div className="flex h-10 shrink-0 pt-4">
          <Logo />
        </div>
        <nav className="flex flex-1 flex-col">
          <ul role="list" className="flex flex-1 flex-col gap-y-4">
            <li>
              <ul role="list" className="-mx-2 space-y-1 pt-4">
                {navigation.map((item) => (
                  <li key={item.name}>
                    <Tooltip
                      label={item.name}
                      position="right-end"
                      offset={5}
                      color="gray"
                      disabled={!isCollapsedSidebar}
                    >
                      <a
                        href={item.href}
                        className={clsx(
                          path === item.href
                            ? "bg-gray-50 text-blue-600"
                            : "text-gray-700 hover:text-blue-600 hover:bg-gray-50",
                          "group flex gap-x-3 rounded-md py-2 px-3 text-sm leading-6 font-semibold"
                        )}
                      >
                        <item.icon
                          className={clsx(
                            path === item.href
                              ? "text-blue-600"
                              : "text-gray-400 group-hover:text-blue-600",
                            "h-6 w-6 shrink-0"
                          )}
                          aria-hidden="true"
                        />
                        <span
                          className={clsx(
                            "absolute left-16 transition-opacity duration-200",
                            isCollapsedSidebar
                              ? "opacity-0 pointer-events-none"
                              : "delay-200"
                          )}
                        >
                          {item.name}
                        </span>
                      </a>
                    </Tooltip>
                  </li>
                ))}
              </ul>
            </li>

            <li className="mt-auto">
              <CollapseBtn />
            </li>

            <li>
              <AccountItem />
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default SidebarDesktop;
