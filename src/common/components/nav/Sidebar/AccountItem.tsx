import Logout from "@/Auth/components/Logout";
import { Link } from "@tanstack/react-router";
import clsx from "clsx";
import { useAtom } from "jotai";
import { isCollapsedSidebarAtom } from "@/common/lib/store";
import useUser from "@/User/hooks/useUser";

const AccountItem = () => {
  const user = useUser();
  const [isCollapsedSidebar] = useAtom(isCollapsedSidebarAtom);

  return (
    <div className="-mx-6 flex justify-between border-t border-gray-200">
      <Link
        to="/settings"
        className={clsx(
          "flex items-center gap-x-3 px-6 h-14 font-semibold leading-6 text-gray-900 hover:bg-gray-50 text-xs",
          isCollapsedSidebar ? "justify-center" : "w-full"
        )}
      >
        <div className="h-8 w-8 min-w-[2rem] rounded-full bg-gray-100 flex items-center justify-center uppercase text-gray-400">
          {user.email[0]}
        </div>
        {!isCollapsedSidebar && (
          <span className="truncate w-36">{user.email}</span>
        )}
      </Link>

      {!isCollapsedSidebar && (
        <div className="flex items-center gap-2">
          <Logout />
        </div>
      )}
    </div>
  );
};

export default AccountItem;
