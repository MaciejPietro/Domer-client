import EditBtn from "@/Common/components/form/EditBtn";
import EmailInput from "@/Common/components/form/fields/EmailInput";
import type { SettingsForm } from "@/pages/Settings";
import useUser from "@/User/hooks/useUser";
import type { FormApi } from "@tanstack/react-form";

import { useToggle } from "usehooks-ts";

type ComponentProps = {
  form: FormApi<SettingsForm, undefined>;
};

const EmailField = ({ form }: ComponentProps) => {
  const user = useUser();
  const [isEditing, toggleEditing] = useToggle(false);

  return (
    <div className="relative">
      <EmailInput form={form} disabled={!isEditing} />
      <EditBtn
        isEditing={isEditing}
        toggleEditing={toggleEditing}
        restoreValue={() => {
          form.setFieldValue("email", user.email);
        }}
      />
    </div>
  );
};

export default EmailField;
