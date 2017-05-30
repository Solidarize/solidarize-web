import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import registerServiceWorker from './registerServiceWorker';
import DefaultLayout from './views/layout/master'
import FooterLayout from './views/layout/footer'
import HeaderLayout from './views/layout/header'
import SobreComponent from './views/layout/sobre'
import EventList from './views/eventList'
import IndexBody from './views/indexBody'
import './views/layout/solidarize.css'
import './style/background.png'

let events = [{title: 'TEst'}];
const fetchEventListByRank = () => {

    axios.get(`https://solidarize-dev.herokuapp.com/events/rank?offset=3&order=desc`)
        .then(res => {
            events = res.data;
            refreshReact();
        });
}

const fetchEventList = () => {
    axios.get(`https://solidarize-dev.herokuapp.com/events?offset=10&order=desc`)
        .then(res => {
            events = res.data;
            refreshReact();
        });
}


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
            active: 'home'
        }
    }

    onClickEvenListHeader() {
        this.setState({
            indexBodyVisible: false,
            sobreComponentVisible: false,
            eventListComponentVisible: true,
            active: 'event'
        });
        fetchEventList();
    }

    onClickHomeHeader() {
        this.setState({
            indexBodyVisible: true,
            sobreComponentVisible: false,
            eventListComponentVisible: true,
            active: 'home'
        });
        fetchEventListByRank();
    }

    onClickSobreHeader() {
        this.setState({
            indexBodyVisible: false,
            sobreComponentVisible: true,
            eventListComponentVisible: false,
            active: 'sobre'
        });
        refreshReact();
    }


    render() {
        return (
            <DefaultLayout name={this.props.name}>
                <HeaderLayout
                    active={this.state.active}
                    onClickEventList={this.onClickEvenListHeader.bind(this)}
                    onClickHome={this.onClickHomeHeader.bind(this)}
                    onClickSobre={this.onClickSobreHeader.bind(this)}/>
                {this.state.indexBodyVisible ? <IndexBody/> : null}
                {this.state.eventListComponentVisible ? <EventList events={events}/> : null}
                {this.state.sobreComponentVisible ? <SobreComponent/> : null}
                <FooterLayout/>
            </DefaultLayout>
        )
    }
}

refreshReact();
fetchEventListByRank();
