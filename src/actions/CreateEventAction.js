import dispatcher from '../Dispatcher';
import axios from 'axios';


const axiosConfig = () => {
    return axios.create({
        headers: {'Content-Type': "application/json; charset=utf-8"}
    });
}


const createFormData = (form) => {

    let body = form.filter(el => el.name)
        .reduce((a, b) => ({...a, [b.name]: b.value}), {});

    body["timestamp"] = new Date().toISOString();
    body["event_time"] = new Date().toISOString();
    body["address"] = body["address"] + " - " + body["addressNumber"];
    return JSON.stringify(body);
}


export function createEventAction(event) {
    var url = "https://solidarize-dev.herokuapp.com/event";
    let data = createFormData(event);
    dispatcher.dispatch({
        type: 'CREATE_EVENT'
    });
    console.log(data);
    axiosConfig().post(url, data)
        .then(res => {
            dispatcher.dispatch({
                type: 'CREATE_EVENT_SUCCESS'
            })
        });
}

export function successConfirm() {
    dispatcher.dispatch({
        type: 'CREATE_EVENT_SUCCESS_CONFIRM'
    });
}
