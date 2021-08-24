export interface Project {
  title: string;
  description: string;
  href?: string;
}

export const ProjectCard = ({ title, description, href }: Project) => {
  return (
    <a
      href={href}
      rel="noopener noreferrer"
      target="_blank"
      className="border border-black dark:border-white border-opacity-10 bg-white dark:bg-white bg-opacity-10 transition duration-300 ease-in-out transform hover:scale-95 flex flex-col sm:flex-row text-left px-8 sm:px-6 py-6 rounded-md max-w-2xl"
    >
      <div className="sm:text-left flex flex-col w-full sm:w-11/12">
        <div className="dark:text-white font-bold">{title}</div>
        <div className="text-gray-600 dark:text-gray-300">{description}</div>
      </div>
    </a>
  );
};
