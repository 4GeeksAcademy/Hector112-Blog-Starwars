


export async function getCharacters() {
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


export async function getPlanets() {
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