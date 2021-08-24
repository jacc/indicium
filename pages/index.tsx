import { Meta } from "../components/Meta";
import { Main } from "./layouts/Main";
import { age } from "../data/age";
import { toast } from "react-hot-toast";
import { getCodingTime } from "../data/coding";
import { Activity } from "../components/Activity";
import { Social } from "../components/Social";
import {
  GitHub,
  Headphones,
  Inbox,
  Instagram,
  Linkedin,
  Mail,
  Twitter,
} from "react-feather";

const handleClick = async () => {
  const id = toast.loading("Loading...");

  // const time = await getCodingTime();

  toast(`I've coded for aaaa this week!`, {
    icon: "🕗",
    id,
  });
};

export default function Home() {
  return (
    <>
      <Meta
        title="Jack LaFond"
        description="18-year-old software developer and student from the United Kingdom."
      />

      <Main>
        <h1 className="dark:text-white text-black text-4xl font-semibold">
          Jack LaFond
        </h1>
        <p className="text-lg text-gray-500 max-w-sm mt-2 ">
          {age} year old student &{" "}
          <button
            onClick={handleClick}
            className="hover:underline transition duration-300 ease-in-out outline-none focus:outline-none focus:ring dark:text-gray-300 text-gray-800"
          >
            developer
          </button>
        </p>
        <div className={"flex flex-wrap space-x-4 mt-3"}>
          <Social href={"/github"} icon={<GitHub></GitHub>} />
          <Social href={"/twitter"} icon={<Twitter></Twitter>} />
          <Social href={"/linkedin"} icon={<Linkedin></Linkedin>} />
          <Social href={"/instagram"} icon={<Instagram></Instagram>} />
          <Social href={"/lastfm"} icon={<Headphones></Headphones>} />
          <Social href={"/mail"} icon={<Inbox></Inbox>} />
        </div>
        <Activity />
      </Main>
    </>
  );
}
