import {
  ArchiveBoxIcon,
  Cog6ToothIcon,
  PencilIcon,
  TrashIcon,
} from "@heroicons/react/24/outline";
import { Menu } from "@mantine/core";
import type { Project } from "@/Projects/types/mixed";
import { useState, lazy } from "react";
import useMoveToArchiveProject from "@/Projects/hooks/useMoveToArchiveProject";
import { ProjectStatus } from "@/Projects/types/api";

type ComponentProps = {
  data: Project;
};

// Lazy load the modals
const DeleteProjectModal = lazy(() => import("./DeleteProjectModal"));
const EditProjectModal = lazy(() => import("./modals/EditProjectModal"));

export default function ProjectMenu({ data }: ComponentProps) {
  const [activeDeleteModal, setActiveDeleteModal] = useState(false);
  const [activeEditModal, setActiveEditModal] = useState(false);

  const { moveToArchive } = useMoveToArchiveProject(data.id);

  const projectId = data.id;

  return (
    <div>
      <Menu position="left">
        <Menu.Target>
          <button className="mb-2 mr-2 bg-gray-50 hover:bg-gray-100 transition-colors duration-100 size-10 flex items-center justify-center rounded">
            <Cog6ToothIcon className="size-4" />
          </button>
        </Menu.Target>

        <Menu.Dropdown>
          {/* <Menu.Item
            leftSection={<DocumentIcon className="size-4" />}
            onClick={() => {}}
            disabled
          >
            Wygeneruj .pdf
          </Menu.Item> */}

          <Menu.Item
            leftSection={<ArchiveBoxIcon className="size-4" />}
            onClick={() => {
              void moveToArchive();
            }}
            disabled={data.status === ProjectStatus.Archived}
          >
            Przenieś do archiwum
          </Menu.Item>

          <Menu.Item
            leftSection={<PencilIcon className="size-4" />}
            onClick={() => {
              setActiveEditModal(true);
            }}
          >
            Edytuj
          </Menu.Item>

          <Menu.Item
            color="red"
            leftSection={<TrashIcon className="size-4" />}
            onClick={() => {
              setActiveDeleteModal(true);
            }}
          >
            Usuń projekt
          </Menu.Item>
        </Menu.Dropdown>
      </Menu>

      {activeDeleteModal && (
        <DeleteProjectModal
          projectId={projectId}
          active={activeDeleteModal}
          setActive={setActiveDeleteModal}
        />
      )}

      {activeEditModal && (
        <EditProjectModal
          project={data}
          active={activeEditModal}
          setActive={setActiveEditModal}
        />
      )}
    </div>
  );
}
