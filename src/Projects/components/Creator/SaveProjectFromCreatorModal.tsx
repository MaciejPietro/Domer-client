import {
  ArrowLeftStartOnRectangleIcon,
  PlusIcon,
} from "@heroicons/react/24/outline";

import { useState } from "react";
import useLogout from "@/Auth/hooks/useLogout";
import Modal from "@/common/components/ui/Modal";
import { Button } from "@mantine/core";

const SaveProjectFromCreatorModal = () => {
  const [active, setActive] = useState(false);
  const { mutateAsync, isPending } = useLogout();

  const handleLogout = () => {
    void mutateAsync();
    setActive(false);
  };

  return (
    <>
      <Button
        onClick={() => {
          setActive(true);
        }}
        leftSection={<PlusIcon className="size-4" />}
        variant="light"
      >
        Dodaj jako projekt
      </Button>
      <Modal
        opened={active}
        onClose={() => {
          setActive(false);
        }}
        title="Stwórz projekt"
      >
        <p className="text-sm text-gray-500">Chcesz zapisać projekt ?</p>

        <div className="mt-8 space-x-4">
          <Button
            color="red"
            loading={isPending}
            onClick={handleLogout}
            leftSection={<ArrowLeftStartOnRectangleIcon className="w-4 h-4" />}
          >
            Wyloguj
          </Button>
          <Button
            variant="subtle"
            color="gray"
            onClick={() => {
              setActive(false);
            }}
          >
            Anuluj
          </Button>
        </div>
      </Modal>
    </>
  );
};

export default SaveProjectFromCreatorModal;
