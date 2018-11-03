import store from "../store";

export const FETCH_IDEAS = "lobby/FETCH_IDEAS";

const initialState = {
  ideas: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_IDEAS:
      return {
        ...state,
        ideas: action.payload
      };

    default:
      return state;
  }
};

// Actions
export const fetchIdeas = () => async dispatch => {
  const result = await axios.get(`${window.apiUri}/api/ideas/lobby`);
  dispatch({
    type: FETCH_IDEAS,
    payload: result.data
  });
};

export const startGame = idea => _ => {
  socket.emit("start game", { idea });
};

// websocket listeners
export const wsListeners = socket => {
  socket.on("lobby refresh", data => {
    store.dispatch({
      type: FETCH_IDEAS,
      payload: data
    });
  });
};
