export default async function getMovieDetails(url: string) {
  const apiKey = process.env.TMDB_ACCESS_KEY;

  try {
    const options: RequestInit = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      next: { revalidate: 60 * 60 * 24 },
    };

    const result = await fetch(url, options);

    if (!result.ok) {
      throw new Error(`Failed to fetch data. Status: ${result.status}`);
    }

    const data = await result.json();

    // Check if results exist in the data object
    return data || [];
  } catch (error) {
    console.error("Error fetching data:", error);
    return []; // Return empty array in case of error
  }
}
