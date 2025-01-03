import { redirect } from "@tanstack/react-router";

import ResetPassword from "@/pages/auth/ResetPassword";
import { isValidEmail } from "@/common/utils/helpers";
import { publicRoute } from "@/common/lib/router/helpers";

export type ResetPasswordSearchParams = {
  token?: string;
  email?: string;
};

export const Route = publicRoute({
  path: "/auth/resetpassword",
  component: ResetPassword,
  beforeLoad: ({ search }: { search: ResetPasswordSearchParams }) => {
    if (!search.token || !search.email || !isValidEmail(search.email)) {
      return redirect({ to: "/" });
    }

    return;
  },
});
