import clsx from "clsx";
import { useLayoutEffect, useRef, useState } from "react";

const projects = [
  {
    name: "Trudzia",
    fullname: "-",
    specialisation: "Firma budowlana",
    phone: "623 147 442",
    email: "trudzia.kontakt@wp.pl",
  },
];

const ContactsListSelected = () => {
  const checkbox = useRef<null>(null);
  const [checked, setChecked] = useState(false);
  const [indeterminate, setIndeterminate] = useState(false);
  const [selectedProjects, setselectedProjects] = useState<Array<any>>([]);

  useLayoutEffect(() => {
    const isIndeterminate =
      selectedProjects.length > 0 && selectedProjects.length < projects.length;
    setChecked(selectedProjects.length === projects.length);
    setIndeterminate(isIndeterminate);
    if (checkbox.current) {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
      (checkbox.current as any).indeterminate = isIndeterminate;
    }
  }, [selectedProjects]);

  function toggleAll() {
    setselectedProjects(checked || indeterminate ? [] : projects);
    setChecked(!checked && !indeterminate);
    setIndeterminate(false);
  }

  return (
    <div className="px-4 sm:px-6 lg:px-8 mt-12">
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <h1 className="text-base font-semibold leading-6 text-gray-900">
            Wybrane kontakty
          </h1>
          <p className="mt-2 text-sm text-gray-700">
            Lista zapisanych wykonawców
          </p>
        </div>
      </div>
      <div className="mt-8 flow-root">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
            <div className="relative">
              {selectedProjects.length > 0 && (
                <div className="absolute left-14 top-0 flex h-12 items-center space-x-3 bg-white sm:left-12">
                  <button
                    type="button"
                    className="inline-flex items-center rounded bg-white px-2 py-1 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:bg-white"
                  >
                    Usuń z wybranych
                  </button>
                </div>
              )}
              <table className="min-w-full table-fixed divide-y divide-gray-300">
                <thead>
                  <tr>
                    <th scope="col" className="relative px-7 sm:w-12 sm:px-6">
                      <input
                        type="checkbox"
                        className="absolute left-4 top-1/2 -mt-2 h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                        ref={checkbox}
                        checked={checked}
                        onChange={toggleAll}
                      />
                    </th>
                    <th
                      scope="col"
                      className="min-w-[12rem] py-3.5 pr-3 text-left text-sm font-semibold text-gray-900"
                    >
                      Nazwa
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      Imię i nazwisko
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      Specjalizacje
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      Telefon
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      Email
                    </th>
                    <th
                      scope="col"
                      className="relative py-3.5 pl-3 pr-4 sm:pr-3"
                    ></th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white">
                  {projects.map((project) => (
                    <tr
                      key={project.name}
                      className={
                        selectedProjects.includes(project)
                          ? "bg-gray-50"
                          : undefined
                      }
                    >
                      <td className="relative px-7 sm:w-12 sm:px-6">
                        {selectedProjects.includes(project) && (
                          <div className="absolute inset-y-0 left-0 w-0.5 bg-indigo-600" />
                        )}
                        <input
                          type="checkbox"
                          className="absolute left-4 top-1/2 -mt-2 h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                          value={project.name}
                          checked={selectedProjects.includes(project)}
                          onChange={(e) => {
                            setselectedProjects(
                              e.target.checked
                                ? [...selectedProjects, project]
                                : selectedProjects.filter((p) => p !== project)
                            );
                          }}
                        />
                      </td>
                      <td
                        className={clsx(
                          "whitespace-nowrap py-4 pr-3 text-sm font-medium",
                          selectedProjects.includes(project)
                            ? "text-indigo-600"
                            : "text-gray-900"
                        )}
                      >
                        {project.name}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        {project.fullname}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        {project.specialisation}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        {project.phone}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        {project.email}
                      </td>
                      <td className="whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-3">
                        <button className="rounded-md border border-gray-300 py-1 px-3 mr-4">
                          Zadzwoń
                        </button>
                        <a
                          href="#"
                          className="text-indigo-600 hover:text-indigo-900"
                        >
                          Link do strony
                          <span className="sr-only">, {project.name}</span>
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactsListSelected;
