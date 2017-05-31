import React from 'react';
import evento  from '../image/evento.jpg'

const centralize = {
    width: '860px',
    margin: 'auto',
}

const getMonth = (event_time) => {
    var eventDate = new Date(event_time);
    var month = {
        0: "JAR",
        1: "FEV",
        2: "MAR",
        3: "ABR",
        4: "MAI",
        5: "JUN",
        6: "JUL",
        7: "AGO",
        8: "SET",
        9: "OUT",
        10: "NOV",
        11: "DEZ"
    };
    return month[eventDate.getUTCMonth()];
}

const getDay = (event_time) => {
    let eventDate = new Date(event_time);
    return eventDate.getUTCDate();
}

const containerStyle = {
    paddingTop: '60px'
}



class EventList extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        if (this.props.events.length == 0) {
            return (
                <div className="row">
                    <div className="loader" style={{margin:'auto'}}></div>
                </div>
            )
        }
        return (
            <div className="row" style={containerStyle}>
                {this.props.events.map(event =>
                    <div>
                        <div className="row" style={centralize}>
                            <p><img alt="" src={evento} className="img-responsive img-thumbnail"
                                    width="100%"/>
                            </p>
                        </div>
                        <div className="row" style={centralize}>
                            <div className="post-date">
                                <i className="fa fa-calendar fa-2x"></i><br/>
                                <span className="month">{getMonth(event.event_time)}</span><br/>
                                <span className="day">{getDay(event.event_time)}</span><br/>
                                <hr className="hr-date"/>
                                <div>
                                </div>
                                <span className="like-box-heart">
                            <i className="fa fa-heart"/>
                        </span>
                                <span className="like-box-score">
                        <b>{event.rank}</b>
                        </span>
                            </div>
                            <div className="float-right">
                                <h2 className="post-Title">{event.title}</h2>
                                <h4 className="post-sub-title">{event.subTitle}</h4>
                                <p className="post-info">
                                    <i className="fa fa-university"></i> <a href="#">Instituição</a> |
                                    <i className="fa fa-map-o"></i> {event.address} |
                                    <i className="fa fa-clock-o"></i> {event.eventTime}
                                </p>
                                <div style={{textAlign: 'justify'}}>{event.description}
                                    <button className={this.props.isEventDetail ? 'displayNone' : "btn btn-read-more pull-right"}
                                            onClick={() => this.props.onClickLeiaMais(event.id)}>Leia
                                        mais &nbsp;&nbsp;&nbsp;&nbsp;
                                        <i className="fa fa-angle-right"></i></button>
                                </div>
                            </div>
                        </div>
                        <br/><br/><br/><br/>
                    </div>
                )}
            </div>
        );
    }
}

export default EventList;