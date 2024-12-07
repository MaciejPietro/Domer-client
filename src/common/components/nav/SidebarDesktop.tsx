import clsx from "clsx";
import {
  InformationCircleIcon,
  FolderIcon,
  HomeIcon,
  Cog6ToothIcon,
} from "@heroicons/react/24/outline";
import { useRouterState } from "@tanstack/react-router";
import useUser from "@/User/hooks/useUser";
import Logout from "@/Common/components/user/Logout";

const navigation = [
  { name: "Panel", href: "/", icon: InformationCircleIcon, current: true },
  { name: "Kreator", href: "/creator", icon: HomeIcon, current: false },
  { name: "Projekty", href: "/projects", icon: FolderIcon, current: false },
];

const SidebarDesktop = () => {
  const user = useUser();

  const router = useRouterState();

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

            <li className="-mx-6 mt-auto flex justify-between pr-4">
              <div className="flex items-center gap-x-4 px-6 py-3 text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-50 text-xs">
                <img
                  className="h-8 w-8 rounded-full bg-gray-50 "
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt=""
                />
                <span className="truncate w-40">{user?.email}</span>
              </div>

              <div className="flex items-center gap-2">
                <a href="/settings">
                  <span className="sr-only">Your profile</span>
                  <Cog6ToothIcon className="text-gray-600 hover:text-gray-900 transition-colors w-6 h-6" />
                </a>

                <Logout />
              </div>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default SidebarDesktop;