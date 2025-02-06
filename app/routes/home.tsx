import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "buildingmycraft" },
    { name: "description", content: "Welcome to my home base. It's where I work on my craft." },
  ];
}

export default function Home() {
  return <Welcome />;
}
