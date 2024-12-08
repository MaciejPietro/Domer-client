import { redirect } from "@tanstack/react-router";

import EmailConfirm from "@/pages/auth/EmailConfirm";
import { isValidEmail } from "@/Common/utils/helpers";
import { publicRoute } from "@/Common/lib/router/helpers";

export type ConfirmEmailSearchParams = {
  token?: string;
  email?: string;
};

export const Route = publicRoute({
  path: "/auth/emailconfirm",
  component: EmailConfirm,
  beforeLoad: ({ search }: { search: ConfirmEmailSearchParams }) => {
    if (!search.token || !search.email || !isValidEmail(search.email)) {
      return redirect({ to: "/" });
    }

    return;
  },
});
