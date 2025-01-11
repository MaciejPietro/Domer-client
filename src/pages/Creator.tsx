import Main from "@/common/components/layout/Main";
import SaveProjectFromCreatorModal from "@/Projects/components/Creator/SaveProjectFromCreatorModal";

const Creator = () => {
  return (
    <Main withoutPadding>
      <div className="h-16 border-b border-gray-200  px-4 flex items-center justify-between">
        <SaveProjectFromCreatorModal />
      </div>
      <div>
        <iframe
          src="https://domer.netlify.app/"
          className="w-full h-[calc(100vh-4rem)] object-contain"
        ></iframe>
      </div>
    </Main>
  );
};

export default Creator;
