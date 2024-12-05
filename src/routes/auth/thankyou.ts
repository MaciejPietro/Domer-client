import { createFileRoute } from "@tanstack/react-router";

import ThankYou from "@/pages/auth/ThankYou";

export const Route = createFileRoute("/auth/thankyou")({
  component: ThankYou,
});
