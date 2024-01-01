const { createContext } = require("react");

const UserContext = createContext({
    loggedUser:"LogOut",
});

export default UserContext;