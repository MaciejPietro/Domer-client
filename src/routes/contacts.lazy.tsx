import { createLazyFileRoute } from "@tanstack/react-router";
import Contacts from "../pages/Contacts";

export const Route = createLazyFileRoute("/contacts")({
  component: Contacts,
});
