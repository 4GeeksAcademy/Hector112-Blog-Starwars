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


export async function getCharactersDetails(id) {
	try{
		const response = await fetch ("https://swapi.tech/api/people")
	if (response.status === 200) {
        return data.results;
      }
	  
	}catch (error) {
	  console.error("Error fetching planets:", error);
	}
	
}