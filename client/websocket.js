// This file registers all websocket listeners to one instance of our socket
// bc we are only supporting one connection for now
import { wsListeners as lobbyWs } from "./modules/lobby";

export default socket => {
  lobbyWs(socket);
};
