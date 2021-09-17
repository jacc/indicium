import { ReactNode } from "react";
import { Meta } from "../components/Meta";
import FadeIn from "react-fade-in";

interface Props {
  children: ReactNode;
  title?: string;
  description?: string;
  margin?: boolean;
}

export const Main = ({
  children,
  title,
  description,
  margin = true,
}: Props) => {
  return (
    <>
      {title && description && <Meta title={title} description={description} />}
      <FadeIn className="flex flex-col max-w-3xl mx-auto mb-auto sm:px-0 overflow-none">
        {title && <h1 className="text-3xl font-bold">{title}</h1>}
        {description && (
          <p className="text-gray-600 dark:text-gray-400 mt-2">{description}</p>
        )}
        <div className={margin ? "mt-8" : undefined}>{children}</div>
      </FadeIn>
    </>
  );
};
