
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

    default:
      throw Error(`Acción desconocida: ${action.type}`);
  }    
}
