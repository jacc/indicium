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
        <div className="text-lg text-gray-500 max-w-4xl mt-4">
          <p>
            hi! i’m jack lafond, an {age} year old developer, designer, breaker
            and maker. i’m currently studying cybersecurity and entrepreneurship
            at the{" "}
            <span className="dark:text-gray-300 text-gray-800 hover:underline transition duration-300 ease-in-out outline-none focus:outline-none focus:rin">
              <Link href="https://ut.edu">University of Tampa</Link>
            </span>
            , but in my free time I build and contribute to multiple{" "}
            <span className="dark:text-gray-300 text-gray-800 hover:underline transition duration-300 ease-in-out outline-none focus:outline-none focus:rin">
              <Link href="/projects">projects</Link>
            </span>{" "}
            online.
          </p>
          <br />
          <p>
            i'm well versed in TypeScript and Python, and i hold a keen eye for
            design. i'm also a huge people person, and love connecting with and
            building communities. i've recently dived into the crypto space, and
            i've gotten the opportunity to work with quite a few incredible
            projects.
          </p>
          <br />
          <p>
            i'm currently working as a community moderator at{" "}
            <span className="dark:text-gray-300 text-gray-800 hover:underline transition duration-300 ease-in-out outline-none focus:outline-none focus:rin">
              <Link href="https://discord.gg/creature">Creature World NFT</Link>
            </span>
            , where i primarily moderate and overlook operations of the server.
            i've also gotten to work on some pretty unique projects with
            TypeScript and Python in the form of Discord bots. i've also done
            things with{" "}
            <span className="dark:text-gray-300 text-gray-800 hover:underline transition duration-300 ease-in-out outline-none focus:outline-none focus:rin">
              <Link href="https://discord.gg/brkfst">Brkfst World NFT</Link>
            </span>
            , and currently maintain two Discord bots -{" "}
            <span className="dark:text-gray-300 text-gray-800 hover:underline transition duration-300 ease-in-out outline-none focus:outline-none focus:rin">
              <Link href="https://tunes.ninja">tunes.ninja</Link>
            </span>{" "}
            and{" "}
            <span>
              <span className="dark:text-gray-300 text-gray-800 hover:underline transition duration-300 ease-in-out outline-none focus:outline-none focus:rin">
                <Link href="https://top.gg/bot/822117936251928586">
                  StreamTicker
                </Link>
              </span>
              .{" "}
            </span>
            i'm always looking for new ways to innovate, and my full list of
            projects can be found{" "}
            <span className="dark:text-gray-300 text-gray-800 hover:underline transition duration-300 ease-in-out outline-none focus:outline-none focus:rin">
              <Link href="/projects">here</Link>
            </span>
            .
          </p>
          <br />
          <p>
            my past work experience includes time at{" "}
            <span className="dark:text-gray-300 text-gray-800 hover:underline transition duration-300 ease-in-out outline-none focus:outline-none focus:rin">
              <Link href="https://reincubate.com">Reincubate</Link>
            </span>
            , where I had the pleasure of working with the team as a QA/Testing
            Engineer - my full CV and work experience can be obtained by
            shooting me an{" "}
            <span className="dark:text-gray-300 text-gray-800 hover:underline transition duration-300 ease-in-out outline-none focus:outline-none focus:rin">
              <Link href="mailto:hi@jack.link">email</Link>
            </span>
            .
          </p>
        </div>
        {/* 
        
          <br />
          <br />
          <span>
            i’m well versed in TypeScript and Python - i have a keen eye for
            design and love creating user first interfaces.
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
        </p> */}
      </Main>
    </>
  );
}
