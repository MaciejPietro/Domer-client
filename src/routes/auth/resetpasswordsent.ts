import ResetPasswordSent from "@/pages/auth/ResetPasswordSent";
import { withUnauth } from "@/Common/lib/router/helpers";

export const Route = withUnauth({
  path: "/auth/resetpasswordsent",
  component: ResetPasswordSent,
});
