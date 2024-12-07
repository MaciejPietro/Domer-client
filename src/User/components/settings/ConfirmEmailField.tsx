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
          <p className="text-sm text-red-400 flex gap-2 items-center">
            <ExclamationTriangleIcon className="w-4 h-4" />
            Potwierdź swój adres email, aby móc w przyszłości przypomnieć hasło.
          </p>

          <div className="flex gap-4 items-center text-xs mt-4">
            <p className="text-gray-400">
              Nie otrzymałeś wiadomość z linkiem aktywacyjnym?
            </p>
            <Button
              variant="light"
              color="black"
              size="xs"
              onClick={handleResendEmailConfirmation}
              loading={isPending}
            >
              Wyślij ponownie
            </Button>
          </div>
        </>
      )}
    </>
  );
};

export default ConfirmEmailField;
