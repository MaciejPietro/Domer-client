import {
  ArchiveBoxIcon,
  Cog6ToothIcon,
  DocumentIcon,
  TrashIcon,
} from "@heroicons/react/24/outline";
import { Menu } from "@mantine/core";
import type { ProjectId } from "@/Projects/types/mixed";
import { useState } from "react";
import DeleteProjectModal from "@/Projects/components/Project/DeleteProjectModal";

type ComponentProps = {
  projectId: ProjectId;
};

export default function ProjectMenu({ projectId }: ComponentProps) {
  const [activeDeleteModal, setActiveDeleteModal] = useState(false);

  return (
    <div>
      <Menu position="left">
        <Menu.Target>
          <button className="mb-2 mr-2 bg-gray-50 hover:bg-gray-100 transition-colors duration-100 size-10 flex items-center justify-center rounded">
            <Cog6ToothIcon className="size-4" />
          </button>
        </Menu.Target>

        <Menu.Dropdown>
          <Menu.Item
            leftSection={<DocumentIcon className="size-4" />}
            onClick={() => {}}
            disabled
          >
            Wygeneruj .pdf
          </Menu.Item>

          <Menu.Item
            leftSection={<ArchiveBoxIcon className="size-4" />}
            onClick={() => {}}
            disabled
          >
            Przenieś do archiwum
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

      <DeleteProjectModal
        projectId={projectId}
        active={activeDeleteModal}
        setActive={setActiveDeleteModal}
      />
    </div>
  );
}
