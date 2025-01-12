import { useEffect } from "react";

const Creator = () => {
  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      console.log("Received message:", event.data);

      if (event.data.type === "SAVE_FLOOR_PLAN") {
        try {
          const floorPlanData = JSON.parse(event.data.payload as string);
          console.log("Floor plan data:", floorPlanData);
        } catch (error) {
          console.error("Error parsing floor plan data:", error);
        }
      }
    };

    window.addEventListener("message", handleMessage);
    return () => {
      window.removeEventListener("message", handleMessage);
    };
  }, []);
  return (
    <div>
      <iframe
        src="http://localhost:3000/iframe-app/"
        // src="http://localhost:3000/"
        // src="https://domer.netlify.app/"
        className="w-full h-[calc(100vh-4rem)] object-contain"
        allow="fullscreen"
      ></iframe>
    </div>
  );
};

export default Creator;
