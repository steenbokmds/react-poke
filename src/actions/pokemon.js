// we can use Axios but that seems a bit overkill for this

const baseUrl = "https://pokeapi.co/api/v2/pokemon/"

const getPokemon = async (id) => {
  let url = `${baseUrl}${id}/`

  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    return {
      name: data.name,
      height: data.height,
      weight: data.weight,
      types: data.types,
      sprites: data.sprites,
      stats: data.stats
    };
  } catch (error) {
    console.error("Error fetching data:", error);
    return null;
  }
}

export { getPokemon }