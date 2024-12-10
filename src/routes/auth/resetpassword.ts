import { redirect } from "@tanstack/react-router";

import ResetPassword from "@/pages/auth/ResetPassword";
import { isValidEmail } from "@/Common/utils/helpers";
import { publicRoute } from "@/Common/lib/router/helpers";

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
