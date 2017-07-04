import {EventEmitter} from 'events';
import dispatcher from '../Dispatcher';
class HeaderStore extends EventEmitter {

    constructor() {
        super();
        this.header = {
            indexBodyVisible: true,
            sobreComponentVisible: false,
            eventListComponentVisible: true,
            createEventVisible: false,
            institutionComponentVisible: false,
            userControlPanelComponentVisible: false,
            active: 'home',
            events: [],
            auth: false,
            user: {}

        }
    }

    setHeaderToDefault() {
        this.header.indexBodyVisible = false;
        this.header.sobreComponentVisible = false;
        this.header.eventListComponentVisible = false;
        this.header.createEventVisible = false;
        this.header.institutionComponentVisible = false;
        this.header.userControlPanelComponentVisible = false;
        this.header.active = 'none';
        return this.header;
    }

    getAll() {
        return this.header;
    }

    handleAction(action) {
        switch (action.type) {
            case 'ABOUT_COMPONENT_VISIBLE' : {
                this.aboutComponentVisible();
                break;
            }
            case 'CREATE_EVENT_COMPONENT_VISIBLE' : {
                this.createEventComponentVisible();
                break;
            }
            case 'CREATE_INSTITUTION_COMPONENT_VISIBLE' : {
                this.createInstitutionComponentVisible();
                break;
            }
            case 'EVENT_LIST_COMPONENT_VISIBLE' : {
                this.eventListComponentVisible();
                break;
            }
            case 'HOME_COMPONENT_VISIBLE' : {
                if(this.auth){
                    this.userHomeComponentVisible();
                } else {
                    this.homeComponentVisible();
                }
                
                break;
            }
            case 'EVENT_LIST_DATA' : {
                this.eventDataVisible(action.events);
                break;
            }
            case 'IS_AUTH' : {
                this.authenticate(action.userData);
                break;
            }
            case 'USER_HOME_COMPONENT_VISIBLE':{
                this.userHomeComponentVisible();
                break;
            }
        }
    }

    aboutComponentVisible() {
        this.setHeaderToDefault();
        this.header.sobreComponentVisible = true;
        this.header.active = 'sobre';
        this.emit('change');
    }

    createEventComponentVisible() {
        this.setHeaderToDefault();
        this.header.createEventVisible = true;
        this.header.active = 'createEvent';
        this.emit('change');
    }

    createInstitutionComponentVisible() {
        this.setHeaderToDefault();
        this.header.institutionComponentVisible = true;
        this.header.active = 'createInstitution';
        this.emit('change');
    }

    eventListComponentVisible() {
        this.setHeaderToDefault();
        this.header.eventListComponentVisible = true;
        this.header.active = 'event';
        this.header.events = [];
        this.emit('change');
    }

    homeComponentVisible() {
        this.setHeaderToDefault();
        this.header.indexBodyVisible = true;
        this.header.eventListComponentVisible = true;
        this.header.active = 'home';
        this.header.events = [];
        this.emit('change');
    }

    userHomeComponentVisible() {
        this.setHeaderToDefault();
        this.header.userControlPanelComponentVisible = true;
        this.header.active = 'userHome';
        this.header.events = [];
        this.emit('change');
    }

    eventDataVisible(data) {
        this.header.events = data;
        this.emit('change');
    }

    authenticate(data) {
        //this.setHeaderToDefault();
        this.header.auth = true;
        this.header.user = data;        
        //this.emit('change');
        this.userHomeComponentVisible();
    }
}

const headerStore = new HeaderStore;
dispatcher.register(headerStore.handleAction.bind(headerStore));

export default headerStore;
