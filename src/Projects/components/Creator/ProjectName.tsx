import EditBtn from "@/common/components/form/EditBtn";
import useUser from "@/User/hooks/useUser";
import { CheckIcon } from "@heroicons/react/24/outline";
import { TextInput } from "@mantine/core";
import { useState } from "react";

import { useToggle } from "usehooks-ts";

const ProjectName = () => {
  const [name, setName] = useState("...");
  const [isEditing, toggleEditing] = useToggle(false);

  const save = () => {
    toggleEditing();
  };

  return (
    <div className="relative flex gap-2 items-center    ">
      {isEditing ? (
        <TextInput
          placeholder="Nazwa projektu"
          className="mt-2 w-64"
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
      ) : (
        <h1 className="text-md font-semibold h-9 mb-2 flex items-center w-64 bg-gray-50 rounded px-4">
          {name}
        </h1>
      )}

      <EditBtn
        isEditing={isEditing}
        toggleEditing={toggleEditing}
        restoreValue={() => {
          //   form.setFieldValue("email", user.email);
        }}
      />
      {isEditing ? (
        <button
          className="p-1 hover:bg-gray-100 rounded-md text-green-600"
          onClick={save}
        >
          <CheckIcon className="size-4" />
        </button>
      ) : null}
    </div>
  );
};

export default ProjectName;
