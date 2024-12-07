const AvatarField = () => {
  return (
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
  );
};

export default AvatarField;
