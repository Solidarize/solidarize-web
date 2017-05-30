import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import registerServiceWorker from './registerServiceWorker';
import DefaultLayout from './views/layout/master'
import FooterLayout from './views/layout/footer'
import HeaderLayout from './views/layout/header'
import EventList from './views/eventList'
import IndexBody from './views/indexBody'
import './views/layout/solidarize.css'
import './style/background.png'

let events = [{title: 'TEst'}];
const fetchEventList = () => {
    axios.get(`http://solidarize-dev.herokuapp.com/events/rank?offset=3&order=desc`)
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
            indexBodyVisible: true
        }
    }

    onClickEvenListHeader() {
        console.log("executou handler");
        this.setState({indexBodyVisible: false});
        console.log(this.state.indexBodyVisible);
        //refreshReact();
    }

    render() {
        return (
            <DefaultLayout name={this.props.name}>
                <HeaderLayout onClickEventList={this.onClickEvenListHeader.bind(this)}/>
                {this.state.indexBodyVisible ? <IndexBody/> : null}
                <EventList events={events}/>
                <FooterLayout/>
            </DefaultLayout>
        )
    }
}
;

refreshReact();
fetchEventList();
