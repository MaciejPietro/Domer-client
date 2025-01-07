import {
  ArrowLeftIcon,
  ExclamationTriangleIcon,
} from "@heroicons/react/24/outline";
import { Button } from "@mantine/core";
import { Link } from "@tanstack/react-router";

const Project404 = () => {
  return (
    <section className="py-8 px-6">
      <h1 className="mb-4 text-xl font-bold  text-red-500 flex gap-2 items-center">
        <ExclamationTriangleIcon className="size-10" />
        Projekt nie istnieje.
      </h1>
      <p className="mb-6 text-md font-light text-gray-500 dark:text-gray-400">
        Przepraszamy, nie możemy znaleźć tego projektu.
      </p>
      <Link to="/projects">
        <Button variant="light" color="red">
          <ArrowLeftIcon className="size-4 mr-2" />
          Powrót do listy projektów
        </Button>
      </Link>
    </section>
  );
};

export default Project404;
