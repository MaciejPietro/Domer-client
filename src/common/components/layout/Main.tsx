import NavigationMobile from "@/common/components/nav/NavigationMobile";
import SidebarDesktop from "@/common/components/nav/SidebarDesktop";
import clsx from "clsx";
import { useAtom } from "jotai";
import { isCollapsedSidebarAtom } from "@/common/lib/store";

const Main = ({ children, withoutPadding }: any) => {
  const [isCollapsedSidebar] = useAtom(isCollapsedSidebarAtom);

  return (
    <div>
      <NavigationMobile />

      <SidebarDesktop />

      <main
        className={clsx(
          "max-h-screen overflow-y-auto transition-all duration-300",
          isCollapsedSidebar ? "lg:pl-20" : "lg:pl-72"
        )}
      >
        <div className={clsx(withoutPadding ? "py-0" : "py-10 lg:py-6")}>
          {children}
        </div>
      </main>
    </div>
  );
};

export default Main;
