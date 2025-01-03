import ResetPasswordSent from "@/pages/auth/ResetPasswordSent";
import { withUnauth } from "@/common/lib/router/helpers";

export const Route = withUnauth({
  path: "/auth/resetpasswordsent",
  component: ResetPasswordSent,
});
