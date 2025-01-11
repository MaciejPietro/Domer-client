import { atomWithStorage, createJSONStorage } from "jotai/utils";

const storage = createJSONStorage(() => localStorage);

export const isCollapsedSidebarAtom = atomWithStorage(
  "isCollapsedSidebar",
  false,
  storage,
  { getOnInit: true }
);
