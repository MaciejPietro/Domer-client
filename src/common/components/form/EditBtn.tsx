import { ArrowPathIcon, PencilSquareIcon } from "@heroicons/react/24/outline";

type ComponentProps = {
  isEditing: boolean;
  toggleEditing: () => void;
  restoreValue: () => void;
};

const EditBtn = ({
  isEditing,
  toggleEditing,
  restoreValue,
}: ComponentProps) => {
  return (
    <button
      type="button"
      className="absolute -right-8 bottom-5 z-10 cursor-pointer"
      onClick={toggleEditing}
    >
      {isEditing ? (
        <ArrowPathIcon className="w-4 h-4 " onClick={restoreValue} />
      ) : (
        <PencilSquareIcon className="w-4 h-4 cursor-pointer" />
      )}
    </button>
  );
};

export default EditBtn;
