import dispatcher from '../Dispatcher';
import axios from 'axios';


const axiosConfig = () => {
    return axios.create({
        headers: { 'Content-Type': "application/json; charset=utf-8" }
    });
}

export function aboutAction() {
    dispatcher.dispatch({
        type: 'ABOUT_COMPONENT_VISIBLE'
    })
}

export function createEventAction() {
    dispatcher.dispatch({
        type: 'CREATE_EVENT_COMPONENT_VISIBLE'
    })
}

export function createInstitutionAction() {
    dispatcher.dispatch({
        type: 'CREATE_INSTITUTION_COMPONENT_VISIBLE'
    })
}

export function eventListAction() {
    dispatcher.dispatch({
        type: 'EVENT_LIST_COMPONENT_VISIBLE'
    });
    axios.get(`https://solidarize-dev.herokuapp.com/events?offset=10&order=desc`)
        .then(res => {
            dispatcher.dispatch({
                type: 'EVENT_LIST_DATA',
                events: res.data
            })
        });
}

export function homeAction() {
    dispatcher.dispatch({
        type: 'HOME_COMPONENT_VISIBLE'
    });
    axios.get(`https://solidarize-dev.herokuapp.com/events/rank?offset=3&order=desc`)
        .then(res => {
            dispatcher.dispatch({
                type: 'EVENT_LIST_DATA',
                events: res.data
            })
        });
}

export function userHomeAction() {
    dispatcher.dispatch({
        type: 'USER_HOME_COMPONENT_VISIBLE'
    });
    axios.get(`https://solidarize-dev.herokuapp.com/events/rank?offset=3&order=desc`)
        .then(res => {
            dispatcher.dispatch({
                type: 'EVENT_LIST_DATA',
                events: res.data
            })
        });
}

export function authAction(data) {
    axios.get(`https://solidarize-dev.herokuapp.com/user/` + data.id).then(res => {
        console.log(res);
        if (res.data == "") {
            let user = {id : data.id, type : 2};
            axiosConfig().post('https://solidarize-dev.herokuapp.com/user/', JSON.stringify(user))
                .then(res2 => {
                    res2.data.name = data.name;                    
                    dispatcher.dispatch({
                        type: 'IS_AUTH',
                        userData: res2.data
                    })
                });
        } else {
            res.data.name = data.name;
            dispatcher.dispatch({
                type: 'IS_AUTH',
                userData: res.data
            })
        }
    });
}