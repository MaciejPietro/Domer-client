const ProjectDetails = () => {
  return (
    <div className="pb-8 mb-8 pt-16 border-b border-gray-100 grid grid-cols-2 pr-8">
      <img
        className="rounded-lg"
        src="https://i.wpimg.pl/c/1920x720/wpcdn.pl/extradom/designs/72062/586778/4e3ec8bd096f7e7f4c398bf14cbe2f183e4852267faf20145bb5ab4a61f976ea.jpg"
        alt=""
      />
      <div className="flex flex-col gap-2  px-4 py-4  sm:px-6 lg:px-8">
        {/* <div className=" rounded-full w-max bg-indigo-400/10 px-2 py-1 text-xs font-medium text-indigo-400 ring-1 ring-inset ring-indigo-400/30 sm:order-none">
              Parterówka
            </div> */}
        <div>
          <div className="flex items-center gap-x-3">
            <div className="flex-none rounded-full bg-green-400/10 p-1 text-green-400">
              <div className="h-2 w-2 rounded-full bg-current" />
            </div>
            <h1 className="flex items-baseline gap-x-3 text-base leading-7">
              <span className="font-semibold text-gray-900 text-xl">Zefir</span>
              <span className="text-xs font-light text-gray-400">WAH2121</span>
            </h1>
          </div>
          <p className="mt-2 text-xs leading-6 text-gray-400">
            Ten dom możesz budować metodą gospodarczą, systemem zleconym lub
            skorzystać z naszej oferty Projekt z Budową. Przy porównaniu weź pod
            uwagę nie tylko koszt, ale też różny zakres prac i standard
            wykonania.
          </p>
          <div className=" mt-10">
            <h2 className="sr-only">Summary</h2>
            <div className="rounded-lg bg-gray-50 shadow-sm ring-1 ring-gray-900/5">
              <dl className="flex flex-wrap">
                <div className="flex-auto pl-6 pt-6">
                  <dt className="text-sm font-semibold leading-6 text-gray-900">
                    Koszt projektu
                  </dt>
                  <dd className="mt-1 text-base font-semibold leading-6 text-gray-900">
                    5340zł
                  </dd>
                </div>
                <div className="flex-none self-end px-6 pt-4">
                  <dt className="sr-only">Status</dt>
                  <dd className="rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-600 ring-1 ring-inset ring-green-600/20">
                    Kupiony
                  </dd>
                </div>
              </dl>
              <div className="mt-6 border-t border-gray-900/5 px-6 py-4">
                <a
                  target="_blank"
                  href="https://www.extradom.pl/projekt-domu-zefir-WAH2121"
                  className="text-sm font-semibold leading-6 text-gray-900"
                >
                  Zobacz na stronie <span aria-hidden="true">&rarr;</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
