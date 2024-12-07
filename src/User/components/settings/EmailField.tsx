import EditBtn from "@/Common/components/form/EditBtn";
import FieldError from "@/Common/components/form/FieldError";
import Input from "@/Common/components/form/fields/Input";

import { useToggle } from "usehooks-ts";

const EmailField = ({ field }: any) => {
  const [isEditing, toggleEditing] = useToggle(false);

  return (
    <div className="col-span-full">
      <div className="mt-2 relative">
        <Input.Wrapper
          label="Adres email"
          required
          error={
            field.state.meta.errors.length && (
              <FieldError errors={field.state.meta.errors} />
            )
          }
        >
          <div className="relative">
            <Input
              value={field.state.value}
              onChange={(e) => {
                field.handleChange(e.target.value);
              }}
              error={!!field.state.meta.errors.length}
              disabled={!isEditing}
            />
            <EditBtn
              isEditing={isEditing}
              toggleEditing={toggleEditing}
              restoreValue={() => {
                field.handleChange(field.state.initialValue);
              }}
            />
          </div>
        </Input.Wrapper>
      </div>
    </div>
  );
};

export default EmailField;
