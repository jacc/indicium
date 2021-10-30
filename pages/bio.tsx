import { Meta } from "../components/Meta";
import { Main } from "../layouts/Main";
import { age } from "../data/age";
import Link from "next/link";

export default function Bio() {
  return (
    <>
      <Meta title="Jack LaFond" description="Jack LaFond's short bio." />

      <Main>
        <h1 className="text-4xl font-semibold dark:text-white">
          who i am & what i do
        </h1>
        <p className="text-lg text-gray-500 max-w-4xl mt-4">
          <span>
            hi! i’m jack lafond, an {age} year old developer and designer. i’m
            currently studying cybersecurity at the{" "}
            <span className="dark:text-gray-300 text-gray-800 hover:underline transition duration-300 ease-in-out outline-none focus:outline-none focus:rin">
              <Link href="https://ut.edu">University of Tampa</Link>
            </span>
            , but in my free time I build and contribute to multiple{" "}
            <span className="dark:text-gray-300 text-gray-800 hover:underline transition duration-300 ease-in-out outline-none focus:outline-none focus:rin">
              <Link href="/projects">projects</Link>
            </span>{" "}
            online.
          </span>
          <br />
          <br />
          <span>
            i’m well versed in TypeScript and Python - i have a keen eye for
            design and love creating user first interfaces. i've been working heavily
            in the NFT space, working with artists to build up their Discord communities
            for upcoming releases and projects.
          </span>
          <br />
          <br />
          <span>
            my past work experience is detailed more on my{" "}
            <span className="dark:text-gray-300 text-gray-800 hover:underline transition duration-300 ease-in-out outline-none focus:outline-none focus:rin">
              <Link href="https://linkedin.com/in/jacklafond">LinkedIn</Link>
            </span>{" "}
            - i worked at{" "}
            <span className="dark:text-gray-300 text-gray-800 hover:underline transition duration-300 ease-in-out outline-none focus:outline-none focus:rin">
              <Link href="https://reincubate.com">Reincubate</Link>
            </span>{" "}
            as a QA and Testing Engineer, as well as run my own commercial
            automation software business.
          </span>
          <br />
          <br />
          <span>
            my full CV is available on request via{" "}
            <span className="dark:text-gray-300 text-gray-800 hover:underline transition duration-300 ease-in-out outline-none focus:outline-none focus:rin">
              <Link href="mailto:hi@jack.link">email</Link>
            </span>
            .
          </span>
        </p>
      </Main>
    </>
  );
}
