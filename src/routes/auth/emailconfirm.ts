import { createFileRoute, redirect } from "@tanstack/react-router";

import EmailConfirm from "@/pages/auth/EmailConfirm";
import { isValidEmail } from "@/utils/helpers";

export type ConfirmEmailSearchParams = {
  token?: string;
  email?: string;
};

export const Route = createFileRoute("/auth/emailconfirm")({
  component: EmailConfirm,
  beforeLoad: ({ search }: { search: ConfirmEmailSearchParams }) => {
    if (!search.token || !search.email || !isValidEmail(search.email)) {
      return redirect({ to: "/auth/login" });
    }

    return;
  },
});
