import { PencilSquareIcon, XMarkIcon } from "@heroicons/react/24/outline";

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
      className="absolute -right-8 bottom-3 z-10 cursor-pointer transition-colors p-1 rounded hover:bg-gray-100"
      onClick={toggleEditing}
    >
      {isEditing ? (
        <XMarkIcon className="w-4 h-4 " onClick={restoreValue} />
      ) : (
        <PencilSquareIcon className="w-4 h-4 cursor-pointer" />
      )}
    </button>
  );
};

export default EditBtn;
