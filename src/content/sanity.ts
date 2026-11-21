export const contentProjection = `"content": coalesce(content[]{
    _key, "type": _type, text, level, items, code, language, headers,
    "rows": rows[].cells, "src": asset->url, alt
  }, [])`;

export async function fetchPublished<T>(
  query: string,
): Promise<T[] | undefined> {
  const endpoint = new URL(
    "https://8cicukl5.api.sanity.io/v2026-11-13/data/query/production",
  );
  endpoint.searchParams.set("query", query);
  endpoint.searchParams.set("perspective", "published");

  try {
    const response = await fetch(endpoint, {
      signal: AbortSignal.timeout(5000),
    });
    if (!response.ok)
      throw new Error(`Sanity returned HTTP ${response.status}`);
    const payload: { result: T[] } = await response.json();
    return payload.result;
  } catch (error) {
    console.warn("Could not load published Sanity content", error);
    return undefined;
  }
}
