import useUser from "@/User/hooks/useUser";
import Button from "@/Common/components/ui/Button";
import {
  ExclamationTriangleIcon,
  CheckCircleIcon,
} from "@heroicons/react/24/outline";
import useResendEmailConfirmation from "@/Auth/hooks/useResendEmailConfirmation";

const ConfirmEmailField = () => {
  const user = useUser();
  const { mutate, isPending } = useResendEmailConfirmation();

  const handleResendEmailConfirmation = () => {
    mutate();
  };

  return (
    <>
      {user?.isEmailConfirmed ? (
        <p className="text-sm text-gray-400 flex gap-2 items-center">
          <CheckCircleIcon className="w-4 h-4 text-green-500" />
          Adres email dla tego konta został potwierdzony.
        </p>
      ) : (
        <>
          <p className="text-sm text-red-400 mt-4 flex gap-2 items-center">
            <ExclamationTriangleIcon className="w-4 h-4" />
            Potwierdź swój adres email, aby móc w przyszłości przypomnieć hasło.
          </p>

          <Button
            variant="light"
            color="black"
            size="xs"
            onClick={handleResendEmailConfirmation}
            className="mt-4"
            loading={isPending}
          >
            Wyślij ponownie
          </Button>
        </>
      )}
    </>
  );
};

export default ConfirmEmailField;
