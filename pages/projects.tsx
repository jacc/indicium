import { Meta } from "../components/Meta";
import { Main } from "../layouts/Main";
import { age } from "../data/age";
import Link from "next/link";
import { ProjectCard } from "../components/Project";
import { Headphones, Music } from "react-feather";

export default function Projects() {
  return (
    <>
      <Meta
        title="Jack LaFond"
        description="My running list of ongoing projects."
      />

      <Main>
        <h1 className="text-4xl font-semibold dark:text-white">projects</h1>
        <br />
        <div className="grid lg:grid-cols-2 sm:grid-cols-1 sm:text-left gap-6">
          <ProjectCard
            title={"tunes.ninja"}
            description={
              "Discord bot bridging the gap between music streaming services"
            }
            href={"https://tunes.ninja"}
          />
          <ProjectCard
            title={"StreamTicker"}
            description={
              "Discord bot allowing users to display social media statistics in their Discord server"
            }
            href={"https://top.gg/bot/822117936251928586"}
          />
          <ProjectCard
            title={"music-box"}
            description={
              "Display your Last.fm stats in a GitHub Gist on your profile"
            }
            href={"https://github.com/jacc/music-box"}
          />
          <ProjectCard
            title={"EthSign"}
            description={"Sign messages on the Ethereum blockchain"}
            href={"https://sign.jack.link"}
          />
          <ProjectCard
            title={"Creature World NFT"}
            description={
              "Moderator of the Creature World NFT Discord community with 30,000 members"
            }
            href={"https://discord.gg/creature"}
          />
          <ProjectCard
            title={"Brkfst World NFT"}
            description={
              "Developed numerous solutions for Brjfst World NFT's Discord community"
            }
            href={"https://discord.gg/creature"}
          />
          <ProjectCard
            title={"This website"}
            description={"This website is fully open source!"}
            href={"https://github.com/jacc/indicium"}
          />
        </div>
      </Main>
    </>
  );
}
