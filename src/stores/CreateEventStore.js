import {EventEmitter} from 'events';
import dispatcher from '../Dispatcher';

class CreateEventStore extends EventEmitter {

    constructor() {
        super()
        this.event = {
            loading: false,
            success: false
        };
    }

    getAll() {
        return this.event;
    }

    setDefaultState() {
        this.event.success = false;
        this.event.loading = false;

        return this.event;
    }

    handleAction(action) {
        switch (action.type) {
            case 'CREATE_EVENT' : {
                this.event.loading = true;
                this.emit('change');
                break;
            }
            case 'CREATE_EVENT_SUCCESS' : {
                this.event.loading = false;
                this.event.success = true;
                this.emit('change');
                break;
            }
            case 'CREATE_EVENT_SUCCESS_CONFIRM' : {
                this.setDefaultState();
                this.emit('change');
                break;
            }
        }
    }
}

const createEventStore = new CreateEventStore();
dispatcher.register(createEventStore.handleAction.bind(createEventStore));

export default createEventStore;
