import dispatcher from '../Dispatcher';
import axios from 'axios';

export function eventDetailListAction(eventId) {
    dispatcher.dispatch({
        type: 'EVENT_DETAIL_COMPONENT_VISIBLE'
    });

    axios.get('https://solidarize-dev.herokuapp.com/event/' + eventId)
        .then(res => {
            dispatcher.dispatch({
                type: 'EVENT_DETAIL_DATA',
                events: [res.data]
            });

            axios.get('https://solidarize-dev.herokuapp.com/user/subscribedToEvent/' + eventId)
                .then(res => {
                    dispatcher.dispatch({
                        type: 'IS_USER_SUBSCRIBED',
                        subscribed: res.data
                    })
                });
        });
}



