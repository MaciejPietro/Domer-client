import ThankYou from "@/pages/auth/ThankYou";
import { withUnauth } from "@/Common/lib/router/helpers";

export const Route = withUnauth({
  path: "/auth/thankyou",
  component: ThankYou,
});
