import { createLazyFileRoute } from "@tanstack/react-router";
import Creator from "../pages/Creator";

export const Route = createLazyFileRoute("/creator")({
  component: Creator,
});
