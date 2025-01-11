import cx from "clsx";
import { Box } from "@mantine/core";

export function FinansesMenu({
  setActive,
  active,
  links,
}: {
  setActive: (active: number) => void;
  active: number;
  links: Array<{
    label: string;
    component: string;
    order: number;
    icon?: JSX.Element;
  }>;
}) {
  return (
    <div className="relative [--link-height:40px] pl-4">
      <div className="relative">
        <div
          className="absolute size-2.5 z-10 rounded-full border-2 border-blue-600 dark:border-blue-400 bg-white  transition-transform duration-150 ease-in-out -left-[4px]"
          style={{
            transform: `translateY(calc(${active} * var(--link-height) + 14px))`,
          }}
        />
        {links.map((item, index) => (
          <Box<"button">
            component="button"
            onClick={(event) => {
              event.preventDefault();
              setActive(index);
            }}
            key={item.label}
            className={cx(
              "group relative flex items-center w-full gap-2 text-sm text-current no-underline h-10 leading-10 rounded-r-sm border-l border-l-gray-200   ",
              {
                "font-medium text-blue-600 bg-gray-50 ": active === index,
              }
            )}
            style={{ paddingLeft: `calc(${item.order} * 1rem)` }}
          >
            <div className="absolute left-0 top-0 w-2 h-full bg-gray-100 -z-10 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            {item.icon}
            {item.label}
          </Box>
        ))}
      </div>
    </div>
  );
}
