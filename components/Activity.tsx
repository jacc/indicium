import { useLanyard } from "use-lanyard";

const getActivity = (activity) => {
  if (!activity) return null;

  if (activity.spotify) {
    return {
      name: `Listening to ${activity.spotify.song}`,
      details: `by ${activity.spotify.artist}`,
      icon: activity.spotify.album_art_url,
    };
  } else if (activity.activities[1]) {
    return {
      name: activity.activities[1].name,
      details: activity.activities[1].details
        ? activity.activities[1].details
        : "No details provided.",
      icon: `${
        activity.activities[1].assets
          ? `https://cdn.discordapp.com/app-assets/${activity.activities[1].application_id}/${activity.activities[1].assets.large_image}.png`
          : "https://steamuserimages-a.akamaihd.net/ugc/934934926476985171/5182552889AF62A2AE66B8C79CD41D1FF66B03AD/?imw=512&imh=511&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=true"
      }`,
    };
  }
};

export function Activity() {
  const { data: activity } = useLanyard(process.env.NEXT_PUBLIC_DISCORD_ID);
  if (!activity) return null;

  const normalizedActivity = getActivity(activity);

  if (!normalizedActivity) {
    return null;
  }

  return (
    <div className="flex mt-4 mb-4">
      <div className="blur focus:outline-none transition duration-300 ease-in-out transform p-3 rounded-md border dark:text-white border-black dark:border-white border-opacity-10 dark:bg-white bg-opacity-10   flex flex-row max-w-sm">
        <div>
          <div className="w-10 h-10">
            <img
              className="w-full h-full rounded shadow"
              src={normalizedActivity.icon}
            />
          </div>
        </div>
        <div>
          <div className="my-auto mx-4">
            <h1 className="font-semibold text-sm sm:text-regular">
              {normalizedActivity.name}
            </h1>
            <p className="text-xs">{normalizedActivity.details}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
