import { WakaTimeClient, RANGE } from "wakatime-client";
const wakatime = new WakaTimeClient(process.env.WAKATIME);

export default async function handler(req, res) {
  const stats = await wakatime.getMyStats({ range: RANGE.LAST_30_DAYS });
  res.json({ data: stats.data.human_readable_total_including_other_language });
}
