import React from 'react'
import avatar from '../image/avatar.jpg';
import EventList from "./eventList";

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

class UserControlPanel extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div style={{ paddingTop: '70px', paddingBottom: '50px' }}>
                <div className="row">
                    <div className="col-md-offset-1 col-md-10">
                        <div className="col-md-3">
                            <div className="text-center">
                                <br /><img src={avatar} className="img img-circle" />
                                <h4>{this.props.user.name}</h4><hr />
                                <h4>Meus dados:</h4>
                                <p><b>Nome:</b> {this.props.user.name}</p>
                                <p><b>Email:</b> {this.props.user.email == null ? "Email não informado" : this.props.user.email}</p>
                                <a href="#" className="btn btn-warning"><i className="fa fa-pencil"> Editar Informações</i></a>
                            </div>
                        </div>
                        <div className="col-md-9">
                            <div className="destaques">
                                <h3 className="h3-destaques pull-left">Meus Eventos:</h3><br /><br />
                            </div>
                            <br />
                            <table className="table table-striped">
                                <th>Evento</th>
                                <th>Endereço</th>
                                <th>Data</th>
                                {/*<th>Ações</th>*/}
                                {this.props.user.events == null ? <tr><td colSpan='3'>Sem Dados</td></tr> : this.props.user.events.map(event =>
                                    <tr>
                                        <td>{event.name}</td>
                                        <td>{event.address}</td>
                                        <td>{event.event_time}</td>
                                        {/*<td>
                                            <a href="#" className="btn btn-sm btn-info"><i classNameName="fa fa-eye"></i></a> |
                                        <a href="#" className="btn btn-sm btn-warning"><i className="fa fa-pencil"></i></a> |
                                        <a href="#" className="btn btn-sm btn-danger"><i className="fa fa-trash"></i></a>
                                        </td>*/}
                                    </tr>
                                )}
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default UserControlPanel;