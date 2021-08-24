let codingTimeCache;
export async function getCodingTime() {
  if (codingTimeCache) return codingTimeCache;
  const request = await fetch("/api/wakatime");

  const body = await request.json();
  codingTimeCache = body.data;

  return body.data;
}
