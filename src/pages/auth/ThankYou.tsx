import AuthLayout from "@/layouts/AuthLayout";
import { Button } from "@mantine/core";
import { Link } from "@tanstack/react-router";

const ThankYou = () => {
  return (
    <AuthLayout title="Dziękujemy za rejestrację!">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <p className="text-center tracking-tight text-gray-900 text-lg">
          Sprawdź swoją pocztę, aby w aktywować konto. Dzięki temu możesz
          przypomnieć swoje hasło jeśli je zapomnisz.
        </p>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <div className="relative pb-10 flex flex-col mt-4">
          <Link to="/auth/login">
            <Button className="min-w-full">Przejdź do logowania</Button>
          </Link>
        </div>
      </div>
    </AuthLayout>
  );
};

export default ThankYou;
