import ThankYou from "@/pages/auth/ThankYou";
import { withUnauth } from "@/common/lib/router/helpers";

export const Route = withUnauth({
  path: "/auth/thankyou",
  component: ThankYou,
});
