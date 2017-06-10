import {EventEmitter} from 'events';
import dispatcher from '../Dispatcher';

class EventDetailsStore extends EventEmitter {

    constructor() {
        super()
        this.eventDetail = {
            eventDetailVisible: false,
            events: []
        };
    }

    handleAction(action) {
        switch (action.type) {
            case 'EVENT_DETAIL_COMPONENT_VISIBLE' : {
                this.eventDetailsVisible();
                break;
            }
            case 'EVENT_DETAIL_DATA' : {
                this.updateEvents(action.events);
                break;
            }
        }
    }

    eventDetailsVisible() {
        this.eventDetail.eventDetailVisible = true;
        this.eventDetail.events = [];
        this.emit('change');
    }

    updateEvents(data) {
        this.eventDetail.events = data;
        this.emit('change');
    }

    getAll() {
        return this.eventDetail;
    }
}

const eventDetailsStore = new EventDetailsStore;
dispatcher.register(eventDetailsStore.handleAction.bind(eventDetailsStore));

export default eventDetailsStore;