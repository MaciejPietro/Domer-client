import { ArrowLeftStartOnRectangleIcon } from "@heroicons/react/24/outline";

import Modal from "../ui/Modal";
import Button from "../ui/Button";
import { useState } from "react";
import useLogout from "@/hooks/auth/useLogout";

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
        <ArrowLeftStartOnRectangleIcon className="text-gray-600 hover:text-gray-900 transition-colors w-6 h-6" />
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
          <Button color="red" loading={isPending} onClick={handleLogout}>
            Wyloguj
          </Button>
          <Button
            variant="outline"
            color="black"
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
