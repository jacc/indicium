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
            title={"music-box"}
            description={
              "Display your Last.fm stats in a GitHub Gist on your profile"
            }
            href={"https://github.com/jacc/music-box"}
          />
          <ProjectCard
            title={"whatrelay"}
            description={
              "WIP revolutionary tool for moderating Discord servers at scale"
            }
            href={"https://whatrelay.com"}
          />
        </div>
      </Main>
    </>
  );
}
