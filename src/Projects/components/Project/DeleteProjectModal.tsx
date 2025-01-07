import { TrashIcon } from "@heroicons/react/24/outline";
import { Button } from "@mantine/core";
import Modal from "@/common/components/ui/Modal";
import useDeleteProject from "@/Projects/hooks/useDeleteProject";
import type { ProjectId } from "@/Projects/types/mixed";

type ComponentProps = {
  projectId: ProjectId;
  active: boolean;
  setActive: (active: boolean) => void;
};

const DeleteProjectModal = ({
  projectId,
  active,
  setActive,
}: ComponentProps) => {
  const { mutateAsync, isPending } = useDeleteProject();

  const handleDelete = () => {
    void mutateAsync({ projectId });
    setActive(false);
  };

  return (
    <>
      <Modal
        opened={active}
        onClose={() => {
          setActive(false);
        }}
        title="Usuń projekt"
      >
        <p className="text-sm ">
          Jesteś pewny że chcesz <b>usunąć</b> ten projekt?
        </p>

        <div className="mt-8 space-x-4">
          <Button
            color="red"
            loading={isPending}
            onClick={handleDelete}
            leftSection={<TrashIcon className="w-4 h-4" />}
          >
            Usuń
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

export default DeleteProjectModal;
