import clsx from "clsx";
import { useAtom } from "jotai";
import { isCollapsedSidebarAtom } from "@/common/lib/store";

const Logo = () => {
  const [isCollapsedSidebar] = useAtom(isCollapsedSidebarAtom);

  return (
    <div className="flex items-center">
      <img
        className={clsx(
          "h-8 w-auto transition-opacity absolute",
          isCollapsedSidebar && "absolute opacity-0 pointer-events-none"
        )}
        src="logo.png"
        alt="Your Company"
      />
    </div>
  );
};

export default Logo;
