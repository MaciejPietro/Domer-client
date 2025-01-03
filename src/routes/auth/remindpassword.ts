import RemindPassword from "@/pages/auth/RemindPassword";
import { publicRoute } from "@/common/lib/router/helpers";

export type ConfirmEmailSearchParams = {
  token?: string;
  email?: string;
};

export const Route = publicRoute({
  path: "/auth/remindpassword",
  component: RemindPassword,
});
