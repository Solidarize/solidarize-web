import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import registerServiceWorker from './registerServiceWorker';
import DefaultLayout from './views/layout/master'
import FooterLayout from './views/layout/footer'
import HeaderLayout from './views/layout/header'
import SobreComponent from './views/layout/sobre'
import CreateEventComponent from './views/createEvent'
import EventList from './views/eventList'
import IndexBody from './views/indexBody'
import EventDetailComponent from './views/eventDetail'
import './views/layout/solidarize.css'
import './style/background.png'

const refreshReact = () => {
    ReactDOM.render(<IndexComponent/>, document.getElementById('root'));
    registerServiceWorker();
};


class IndexComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            indexBodyVisible: true,
            sobreComponentVisible: false,
            eventListComponentVisible: true,
            createEventVisible: false,
            eventDetailVisible: false,
            active: 'home',
            events: []
        }
    }

    componentDidMount() {
        this.fetchEventListByRank();
    }

    fetchEventList() {
        axios.get(`https://solidarize-dev.herokuapp.com/events?offset=10&order=desc`)
            .then(res => {
                this.setState({events: res.data});
                refreshReact();
            });
    }

    fetchEventListByRank() {
        axios.get(`https://solidarize-dev.herokuapp.com/events/rank?offset=3&order=desc`)
            .then(res => {
                this.setState({events: res.data});
                refreshReact();
            });
    }

    onClickEvenListHeader() {
        this.setState({
            indexBodyVisible: false,
            sobreComponentVisible: false,
            eventListComponentVisible: true,
            createEventVisible: false,
            eventDetailVisible: false,
            active: 'event'
        });
        this.fetchEventList();
    }

    onClickHomeHeader() {
        this.setState({
            indexBodyVisible: true,
            sobreComponentVisible: false,
            eventListComponentVisible: true,
            createEventVisible: false,
            eventDetailVisible: false,
            active: 'home'
        });
        this.fetchEventListByRank();
    }

    onClickSobreHeader() {
        this.setState({
            indexBodyVisible: false,
            sobreComponentVisible: true,
            eventListComponentVisible: false,
            createEventVisible: false,
            eventDetailVisible: false,
            active: 'sobre'
        });
        refreshReact();
    }

    onClickCreateEventHeader() {
        this.setState({
            indexBodyVisible: false,
            sobreComponentVisible: false,
            eventListComponentVisible: false,
            createEventVisible: true,
            eventDetailVisible: false,
            active: 'createEvent'
        });
        refreshReact();
    }

    onClickLeiaMais(eventId) {
        this.setState({
            indexBodyVisible: false,
            sobreComponentVisible: false,
            eventListComponentVisible: false,
            createEventVisible: false,
            eventDetailVisible: true,
            active: 'eventDetail'
        });

        axios.get('https://solidarize-dev.herokuapp.com/event/' + eventId)
            .then(res => {
                this.setState({events: [res.data]});
                refreshReact();
            });
    }

    render() {
        return (
            <DefaultLayout name={this.props.name}>
                <HeaderLayout
                    active={this.state.active}
                    onClickEventList={this.onClickEvenListHeader.bind(this)}
                    onClickHome={this.onClickHomeHeader.bind(this)}
                    onClickSobre={this.onClickSobreHeader.bind(this)}
                    onClickCreateEvent={this.onClickCreateEventHeader.bind(this)}/>/>
                {this.state.indexBodyVisible ? <IndexBody/> : null}
                {this.state.eventListComponentVisible ? <EventList events={this.state.events} onClickLeiaMais={this.onClickLeiaMais.bind(this)}/> : null}
                {this.state.sobreComponentVisible ? <SobreComponent/> : null}
                {this.state.createEventVisible ? <CreateEventComponent/> : null}
                {this.state.eventDetailVisible ? <EventDetailComponent events={this.state.events} /> : null}
                <FooterLayout/>
            </DefaultLayout>
        )
    }
}

refreshReact();

