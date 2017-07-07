import EventEmitter from "events";
import dispatcher from "../Dispatcher"

class UserStore extends EventEmitter {
    constructor() {
        super();
        this.isAuth = false;
        this.loggedUser = {};
        this.name = "";
    }

    getLoggedUser() {
        return this.loggedUser;
    }

    isUserLogged() {
        return this.isAuth;
    }

    login(user) {
        if (user != null) {
            this.isAuth = true;
            this.loggedUser = user;
            this.name = user.name;
        }

        this.emit("change");
    }

    updateLoggedUser(user) {
        this.loggedUser = user;
        this.loggedUser.name = this.name;
        this.emit("change");
    }

    handleActions(action) {
        switch (action.type) {
            case "USER_LOGIN":
                this.login(action.user);
                break;
            case "GET_LOGGED_USER":
                this.updateLoggedUser(action.user);
                break;
        }
    }
}

const userStore = new UserStore;
dispatcher.register(userStore.handleActions.bind(userStore));
export default userStore;