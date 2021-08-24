import NextLink from "next/link";
import { v4 as uuidv4 } from "uuid";
import { Route, RouteData } from "../data/routes";
import { Compass } from "react-feather";
import FadeIn from "react-fade-in";

interface Props {
  dense?: boolean;
}

const NavbarItem = ({ name, href }: Omit<Route, "type">) => {
  return (
    <NextLink href={href}>
      <a
        aria-label={name}
        className="focus:outline-none mr-10 transition duration-300 ease-in-out hover:text-gray-400 dark:hover:text-gray-400"
      >
        {name !== "home" && <span>{name}</span>}
      </a>
    </NextLink>
  );
};

const NavbarCompass = () => {
  return (
    <NextLink href="/">
      <a className="focus:outline-none transition duration-300 ease-in-out hover:text-gray-400 dark:hover:text-gray-400 flex">
        <Compass />
        <div className="pl-5">home</div>
      </a>
    </NextLink>
  );
};

export const Navbar = ({ dense }: Props) => {
  return (
    <FadeIn>
      <nav className="z-50 w-full flex justify-start items-center mx-auto max-w-4xl lg:px-16 px-10 lg:my-16 dark:text-white text-black">
        <NavbarCompass />
        {RouteData.filter((route) => route.type !== "dropdown").map((route) => (
          <NavbarItem key={uuidv4()} name={route.name} href={route.href} />
        ))}
        {/*<Dropdown />*/}
      </nav>
    </FadeIn>
  );
};
