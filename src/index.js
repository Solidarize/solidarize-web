import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import DefaultLayout from './views/layout/master'
import FooterLayout from './views/layout/footer'
import HeaderLayout from './views/layout/header'
import SobreComponent from './views/layout/sobre'
import CreateEventComponent from './views/createEvent'
import EventList from './views/eventList'
import IndexBody from './views/indexBody'
import EventDetailComponent from './views/eventDetail'
import CreateInstitutionComponent from './views/createInstituction'
import './views/layout/solidarize.css'
import './style/background.png'

import HeaderStore from './stores/HeaderStore'
import EventDetailsStore   from './stores/EventDetailsStore'
import * as HeaderActions from './actions/HeaderActions'
const refreshReact = () => {
    ReactDOM.render(<IndexComponent/>, document.getElementById('root'));
    registerServiceWorker();
};


class IndexComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            header: HeaderStore.getAll(),
            eventDetails: EventDetailsStore.getAll()
        }
    }

    componentDidMount() {
        HeaderActions.homeAction();
    }

    componentWillMount() {
        HeaderStore.on('change', () => {
            this.setState({
                header: HeaderStore.getAll(),
                eventDetails: EventDetailsStore.setDefaultEventDetails()
            })
        })

        EventDetailsStore.on('change', () => {
            this.setState({
                header: HeaderStore.setHeaderToDefault(),
                eventDetails: EventDetailsStore.getAll()
            })
        })
    }


    render() {
        return (
            <DefaultLayout name={this.props.name}>
                <HeaderLayout
                    active={this.state.header.active}/>
                {this.state.header.indexBodyVisible ? <IndexBody/> : null}
                {this.state.header.eventListComponentVisible ?
                    <EventList events={this.state.header.events}/> : null}
                {this.state.header.sobreComponentVisible ? <SobreComponent/> : null}
                {this.state.header.createEventVisible ? <CreateEventComponent/> : null}
                {this.state.eventDetails.eventDetailVisible ?
                    <EventDetailComponent events={this.state.eventDetails.events}/> : null}
                {this.state.header.institutionComponentVisible ? <CreateInstitutionComponent/> : null}
                <FooterLayout/>
            </DefaultLayout>
        )
    }
}

refreshReact();

