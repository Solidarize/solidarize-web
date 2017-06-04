import React from 'react'
import avatar from '../image/avatar.jpg';
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
            <div class="row">
                <div class="col-md-10 col-md-offset-1">
                    <EventList isEventDetail={true} events={this.props.events}/>
                    <div className="user-info-box">
                        <div className="row">
                            <div className="col-md-2">
                                <img src={avatar}/>
                            </div>
                            <div className="col-md-10">
                                <h4 style={{marginTop: '0'}}>John Doe</h4>
                                <p>There are many variations of passages of Lorem Ipsum available, but the
                                    majority have suffered alteration in some form, by injected humour, or
                                    randomised words which don't look even slightly believable. If you are
                                    going to use a passage of Lorem Ipsum, you need to be sure there isn't
                                    anything.</p>
                                <div className="pull-left">
                                    <i className="fa fa-map-o"></i> Rua sei lá, 509<br/>
                                    <i className="fa fa-phone"></i> (51) 3311-9955
                                </div>
                                <div className="pull-right">
                                    <a href="#">contato@org.com.br</a>&nbsp;&nbsp;&nbsp;&nbsp;
                                    <a href="#"><i className="fa fa-fw fa-facebook fa-2x"></i></a>
                                    <a href="#"><i className="fa fa-fw fa-twitter fa-2x"></i></a>
                                    <a href="#"><i className="fa fa-fw fa-google-plus fa-2x"></i></a>
                                    <a href="#"><i className="fa fa-fw fa-dribbble fa-2x"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <br/><br/><br/><br/>
        )
    }
}

export default EventDetailComponent;