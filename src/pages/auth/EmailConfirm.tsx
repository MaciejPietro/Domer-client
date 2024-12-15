import useConfirmEmail from "@/Auth/hooks/useConfirmEmail";
import Layout from "@/Auth/Layout";
import type { ConfirmEmailSearchParams } from "@/routes/auth/emailconfirm";
import { Button } from "@mantine/core";
import { Link, useSearch } from "@tanstack/react-router";
import { useEffect } from "react";

export default function EmailConfirm() {
  const search: Required<ConfirmEmailSearchParams> = useSearch({
    strict: false,
  });

  const { mutateAsync } = useConfirmEmail();

  useEffect(() => {
    void mutateAsync({ token: search.token, email: search.email });
  }, [search, mutateAsync]);

  return (
    <Layout title="Potwierdzenie adresu email">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <p className="text-center tracking-tight text-gray-900 text-lg">
          Twój email został potwierdzony, możesz się zalogować
        </p>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <div className="relative pb-10 flex flex-col mt-4">
          <Link to="/auth/login">
            <Button className="min-w-full">Przejdź do logowania</Button>
          </Link>
        </div>
      </div>
    </Layout>
  );
}
