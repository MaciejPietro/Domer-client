import { useEffect } from "react";
import { Button } from "@mantine/core";
import { Link, useSearch } from "@tanstack/react-router";
import useConfirmEmail from "@/hooks/auth/useConfirmEmail";

export default function EmailConfirm() {
  //   const { token, email } = useSearch();
  //   const { mutateAsync } = useConfirmEmail();

  //   useEffect(() => {
  //     if (token && email) {
  //       //   console.log("xdxd", token);
  //       //   void mutateAsync({ token, email });
  //     }
  //   }, [token]);

  return (
    <div className="flex min-h-screen flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <img
          className="mx-auto h-10 w-auto"
          src="/logo.png"
          alt="Your Company"
        />
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Potwierdzenie adresu email
        </h2>
      </div>

      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <p className="mt-10 text-center tracking-tight text-gray-900 text-lg">
          Twój email został potwierdzony, możesz się zalogować
        </p>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <div className="relative pb-10 flex flex-col mt-4">
          <Link to="/login">
            <Button className="min-w-full">Przejdź do logowania</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
