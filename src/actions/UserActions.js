import dispatcher from "../Dispatcher"
import axios from 'axios';

const axiosConfig = () => {
    return axios.create({
        headers: { 'Content-Type': "application/json; charset=utf-8"}
    });
}

export function login(data) {
    let user = { id: data.id };
    axiosConfig().post('https://solidarize-dev.herokuapp.com/user/login', JSON.stringify(user))
        .then(res => {
            res.data.name = data.name;
            dispatcher.dispatch({
                type: 'IS_AUTH',
                userData: res.data
            });

            dispatcher.dispatch({
                type: 'USER_LOGIN',
                user: res.data
            });
        }).catch(function (error) {
            dispatcher.dispatch({
                type: 'HOME_COMPONENT_VISIBLE'
            });
        });
}

export function eventSubscribe(event) {
    console.log(event);
    axiosConfig().put('https://solidarize-dev.herokuapp.com/user/subscribeToEvent', JSON.stringify(event))
        .then(res => {
            axios.get('https://solidarize-dev.herokuapp.com/user/login')
                .then(res2 => {
                    dispatcher.dispatch({
                        type: 'GET_LOGGED_USER',
                        user: res2.data
                    });

                    isSubscribed(event);
                });

        }).catch(function (error) {
            console.log("ERROU!");
        });



}

export function isSubscribed(event) {
    axios.get('https://solidarize-dev.herokuapp.com/user/subscribedToEvent/' + event.id)
        .then(res => {
            dispatcher.dispatch({
                type: 'IS_USER_SUBSCRIBED',
                subscribed: res.data
            })
        });
}
