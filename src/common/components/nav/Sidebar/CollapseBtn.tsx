import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import { useAtom } from "jotai";
import { isCollapsedSidebarAtom } from "@/common/lib/store";

const CollapseBtn = () => {
  const [isCollapsedSidebar, setIsCollapsedSidebar] = useAtom(
    isCollapsedSidebarAtom
  );

  return (
    <button
      onClick={() => {
        setIsCollapsedSidebar(!isCollapsedSidebar);
      }}
      className=" p-1.5 rounded-md bg-gray-100"
    >
      {isCollapsedSidebar ? (
        <ChevronRightIcon className="h-5 w-5 text-gray-500" />
      ) : (
        <ChevronLeftIcon className="h-5 w-5 text-gray-500" />
      )}
    </button>
  );
};

export default CollapseBtn;
