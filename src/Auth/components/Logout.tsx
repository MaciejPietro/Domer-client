import { ArrowLeftStartOnRectangleIcon } from "@heroicons/react/24/outline";

import { useState } from "react";
import useLogout from "@/Auth/hooks/useLogout";
import Modal from "@/common/components/ui/Modal";
import { Button } from "@mantine/core";

const Logout = () => {
  const [active, setActive] = useState(false);
  const { mutateAsync, isPending } = useLogout();

  const handleLogout = () => {
    void mutateAsync();
    setActive(false);
  };

  return (
    <>
      <button
        onClick={() => {
          setActive(true);
        }}
      >
        <span className="sr-only">Wyloguj się</span>
        <ArrowLeftStartOnRectangleIcon className="text-gray-600 hover:text-gray-900 transition-colors w-12 h-14 py-5 px-3 hover:bg-gray-50" />
      </button>
      <Modal
        opened={active}
        onClose={() => {
          setActive(false);
        }}
        title="Opuść aplikację"
      >
        <p className="text-sm text-gray-500">
          Jesteś pewny że chcesz opuścić aplikację i <b>wylogować się</b> ?
        </p>

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

export default Logout;
