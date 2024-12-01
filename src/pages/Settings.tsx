import Main from "../components/layout/Main";

const Settings = () => {
  return (
    <Main>
      <div className="px-8">
        <h2 className="text-base font-semibold leading-7 text-gray-900">
          Ustawienia konta
        </h2>
        <p className="mt-1 text-sm leading-6 text-gray-400">
          Edytuj swoje ustawienia konta.
        </p>
      </div>

      <form className="md:col-span-2 px-8 my-8">
        <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:max-w-xl sm:grid-cols-6">
          <div className="col-span-full flex items-center gap-x-8">
            <img
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt=""
              className="h-24 w-24 flex-none rounded-lg bg-gray-800 object-cover"
            />
            <div>
              <button
                type="button"
                className="rounded-md bg-black/10 px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm hover:bg-black/20"
              >
                Change avatar
              </button>
              <p className="mt-2 text-xs leading-5 text-gray-400">
                JPG, GIF or PNG. 1MB max.
              </p>
            </div>
          </div>

          <div className="col-span-full">
            <label
              htmlFor="email"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Email address
            </label>
            <div className="mt-2">
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                className="block w-full rounded-md border-0 bg-black/5 py-1.5 text-gray-900 shadow-sm  px-3 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
        </div>

        <div className="mt-8 flex">
          <button
            type="submit"
            className="rounded-md bg-indigo-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
          >
            Zapisz
          </button>
        </div>
      </form>

      <div className="grid max-w-7xl grid-cols-1 gap-x-8 gap-y-10 px-4 py-16 sm:px-6 md:grid-cols-3 lg:px-8 border-t border-gray-300">
        <div>
          <h2 className="text-base font-semibold leading-7 text-gray-900">
            Delete account
          </h2>
          <p className="mt-1 text-sm leading-6 text-gray-400">
            No longer want to use our service? You can delete your account here.
            This action is not reversible. All information related to this
            account will be deleted permanently.
          </p>
        </div>

        <form className="flex items-start md:col-span-2">
          <button
            type="submit"
            className="rounded-md bg-red-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-400"
          >
            Yes, delete my account
          </button>
        </form>
      </div>
    </Main>
  );
};

export default Settings;
