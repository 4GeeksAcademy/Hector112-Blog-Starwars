export const initialStore=()=>{
  return {
    message: null,
    characters: (localStorage.getItem("favorites") != null) ? JSON.parse(localStorage.getItem("favorites")) : [],
    planets: (localStorage.getItem("favorites") != null) ? JSON.parse(localStorage.getItem("favorites")) : [],
    favs: (localStorage.getItem("favorites") != null) ? JSON.parse(localStorage.getItem("favorites")) : []
  }
}

export default function storeReducer(store, action = {}) {
  switch(action.type){

    case 'add_task':
    const { id,  color } = action.payload
    return {
      ...store,
      todos: store.todos.map((todo) => (todo.id === id ? { ...todo, background: color } : todo))
      };

    case 'update_character':
      return {
        ...store,
        characters: action.payload
      };

    case 'update_planet':
      return {
        ...store,
        planets: action.payload
        
      };

    case 'get_favs':
      return{
        ...store,
        favs: action.payload

      };

    case "update_characterDetails":
        return {
            ...store,
            characterDetails: action.payload
        };

    case "update_planetDetails":
        return {
            ...store,
            planetDetails: action.payload
        };

    case "add_favs":
        const favsAdd = store.favs.some(fav => fav.id === action.payload.id)
            ? store.favs
            : [...store.favs, action.payload];
        localStorage.setItem("favorites", JSON.stringify(favsAdd));
        return {
            ...store,
            favs: favsAdd
        };
    case "remove_fav":
        const favsRemove = store.favs.filter(fav => fav.id !== action.payload.id);
        localStorage.setItem("favorites", JSON.stringify(favsRemove));
        return {
            ...store,
            favs: favsRemove
        };

    default:
      throw Error(`Acción desconocida: ${action.type}`);
  }    
}
