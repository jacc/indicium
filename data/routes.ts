export interface Route {
  name: string;
  href: string;
  type?: string;
}

export const RouteData: Route[] = [
  {
    name: "home",
    href: "/",
  },
  {
    name: "bio",
    href: "/bio",
  },
  {
    name: "projects",
    href: "/projects",
  },
  {
    name: "etc",
    href: "/etc",
  },
];
