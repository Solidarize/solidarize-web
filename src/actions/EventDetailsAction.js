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
            })
        });
}
