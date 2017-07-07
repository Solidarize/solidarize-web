import {EventEmitter} from 'events';
import dispatcher from '../Dispatcher';

class EventDetailsStore extends EventEmitter {

    constructor() {
        super()
        this.eventDetail = {
            eventDetailVisible: false,
            events: [],
            subscribed: true
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
            case 'IS_USER_SUBSCRIBED':{
                this.isUserSubscribed(action.subscribed);                    
            }
        }
    }

    eventDetailsVisible() {
        this.eventDetail.eventDetailVisible = true;
        this.eventDetail.events = [];
        this.emit('change');
    }

    updateEvents(data) {
        this.subscribed = false;
        this.eventDetail.events = data;
        this.emit('change');
    }

    getAll() {
        return this.eventDetail;
    }

    setDefaultEventDetails() {
        this.eventDetail.eventDetailVisible = false;
        this.eventDetail.events = [];
        this.subscribed = false;
        return this.eventDetail;
    }

    isUserSubscribed(isSubscribed){
        this.eventDetail.subscribed = isSubscribed;
        this.emit('change');
    }

    isSubscribed(){
        return this.eventDetail.subscribed;
    }
}

const eventDetailsStore = new EventDetailsStore;
dispatcher.register(eventDetailsStore.handleAction.bind(eventDetailsStore));

export default eventDetailsStore;