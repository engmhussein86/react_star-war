
export async function getStarships(url = 'https://swapi.dev/api/starships/') {
    const response = await fetch(url);
    if (!response.ok) throw new Error('Failed to fetch starships');
    const data = await response.json();
    return data;
  }