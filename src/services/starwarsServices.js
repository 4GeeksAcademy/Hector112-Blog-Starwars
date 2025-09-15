export async function getCharacters(id) {
	try {
	  const response = await fetch("https://swapi.tech/api/people/",{method: "GET"});
	  const data = await response.json();

      if (response.status === 200) {
        return data.results;
      }
	  
	} 
    
    catch (error) {
	  console.error("Error fetching characters:", error);
	}
  }


export async function getPlanets(id) {
	try { 
	  const response = await fetch("https://swapi.tech/api/planets/",{method: "GET"});
	  const data = await response.json();

      if (response.status === 200) {
        return data.results;
      }
	  
	}catch (error) {
	  console.error("Error fetching planets:", error);
	}
  }

export async function getPlanetDetails(id) {
    try {
        const response = await fetch(`https://www.swapi.tech/api/planets/${id}/`);
        if (!response.ok) {
            if (response.status === 429) {
                return { error: "Demasiadas peticiones a la API. Intenta más tarde." };
            }
            throw new Error("Error en la petición");
        }
        const data = await response.json();
        return data.result;
    } catch (error) {
        console.error("Error fetching planet details:", error);
        return { error: "No se pudo obtener la información del planeta." };
    }
}

export async function getCharacterDetails(id) {
    try {
        const response = await fetch(`https://www.swapi.tech/api/people/${id}/`);
        const data = await response.json();
        if (response.status === 200) {
            return data.result;
        }
    } catch (error) {
        console.error("Error fetching character details:", error);
    }
}