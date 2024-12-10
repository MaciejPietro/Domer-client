import Layout from "@/Auth/Layout";

import { Button } from "@mantine/core";
import { Link } from "@tanstack/react-router";

export default function ResetPasswordSent() {
  return (
    <Layout title="Wysłaliśmy email">
      <p className="text-center text-sm text-gray-500 flex gap-2 justify-center items-center">
        Sprawdź swoją skrzynkę email.
      </p>
      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm flex justify-center">
        <Link to="/auth/login">
          <Button className="mx-auto">Wróć do logowania</Button>
        </Link>
      </div>
    </Layout>
  );
}
