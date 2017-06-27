import React from 'react'
import EventList from "./eventList";

class EventDetailComponent extends React.Component {

    render() {
        if (this.props.events.length == 0) {
            return (
                <div className="row">
                    <div className="loader" style={{margin: 'auto'}}></div>
                </div>
            )
        }
        return (
            <div className="row">
                <div className="col-md-10 col-md-offset-1">
                    <EventList isEventDetail={true} events={this.props.events}/>
                </div>
                <br/><br/><br/><br/>
            </div>

        )
    }
}

export default EventDetailComponent;