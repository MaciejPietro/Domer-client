import clsx from "clsx";
import ContactsList from "../components/ContactsList";
import Main from "../components/layout/Main";
import { useState } from "react";
import ContactsListSelected from "../components/ContactsListSelected";

type Tab = "Wszystkie" | "Wybrane";

const tabs = [
  { name: "Wszystkie", href: "#", count: "2" },
  { name: "Wybrane", href: "#", count: "1" },
];

const Tabs = ({ setTab, tab }: any) => {
  return (
    <div>
      <div className="sm:hidden">
        <label htmlFor="tabs" className="sr-only">
          Select a tab
        </label>
        {/* Use an "onChange" listener to redirect the user to the selected tab URL. */}
        <select
          id="tabs"
          name="tabs"
          className="block w-full rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
          defaultValue={tab}
          onChange={(e) => {
            console.log("xdxd", e);
            setTab(e.target.value);
          }}
        >
          {tabs.map((tab) => (
            <option key={tab.name} value={tab.name}>
              {tab.name}
            </option>
          ))}
        </select>
      </div>
      <div className="hidden sm:block">
        <div className="lg:px-8  border-b border-gray-200">
          <nav className="-mb-px flex space-x-8" aria-label="Tabs">
            {tabs.map(({ name, count }) => (
              <button
                key={name}
                className={clsx(
                  name === tab
                    ? "border-indigo-500 text-indigo-600"
                    : "border-transparent text-gray-500 hover:border-gray-200 hover:text-gray-700",
                  "flex whitespace-nowrap border-b-2 py-4 px-1 text-sm font-medium"
                )}
                onClick={() => {
                  setTab(name);
                }}
              >
                {name}
                {count ? (
                  <span
                    className={clsx(
                      name === tab
                        ? "bg-indigo-100 text-indigo-600"
                        : "bg-gray-100 text-gray-900",
                      "ml-3 hidden rounded-full py-0.5 px-2.5 text-xs font-medium md:inline-block"
                    )}
                  >
                    {count}
                  </span>
                ) : null}
              </button>
            ))}
          </nav>
        </div>
      </div>
    </div>
  );
};

const Contacts = () => {
  const [tab, setTab] = useState<Tab>("Wszystkie");

  return (
    <Main>
      <Tabs setTab={setTab} tab={tab} />

      {tab === "Wszystkie" ? <ContactsList /> : null}
      {tab === "Wybrane" ? <ContactsListSelected /> : null}
    </Main>
  );
};

export default Contacts;
