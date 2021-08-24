import { Meta } from "../components/Meta";
import { Main } from "./layouts/Main";
import Link from "next/link";
import { v4 as uuidv4 } from "uuid";
import { Friends } from "../data/friends";

export default function Projects() {
  return (
    <>
      <Meta title="Jack LaFond" description="Some random information." />

      <Main>
        <h1 className="text-4xl font-semibold dark:text-white">etc</h1>
        <br />
        <h2 className="text-xl font-semibold dark:text-white">cool friends</h2>
        <div className="dark:text-gray-500 text-gray-500">
          i have had the pleasure of interacting with some amazing people who
          have helped me in my development journey - here is a few of em :)
          <div className="pt-2">
            {Friends.map((friend) => {
              return (
                <li key={uuidv4()}>
                  <Link href={friend.social}>
                    <span className="hover:underline transition duration-300 ease-in-out outline-none focus:outline-none focus:ring text-gray-800 dark:text-gray-300">
                      {friend.name}
                    </span>
                  </Link>{" "}
                  - <span className="dark:text-gray-500">{friend.info}</span>
                </li>
              );
            })}
          </div>
        </div>
      </Main>
    </>
  );
}
