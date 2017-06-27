import React from 'react'
import avatar from '../image/avatar.jpg';
import EventList from "./eventList";


class ControlPainelComponent extends React.Component {

    render() {
        return (
            <div className="content">
                <div className="col-md-offset-1 col-md-10">
                    <div className="col-md-3">
                        <div className="text-center">
                            <br/><img src={avatar} className="img img-circle" />
                            <h4>John Doe</h4><hr/>
                            <h4>Meus dados:</h4>
                            <p><b>Nome:</b> John Doe</p>
                            <p><b>Endereço:</b> Rua sei lá, 509</p>
                            <p><b>Telefone:</b> (51) 3311-9955</p>
                            <p><b>Site:</b> contato@org.com.br</p>
                            <a href="#" className="btn btn-warning"><i className="fa fa-pencil"> Editar Informações</i></a>
                        </div>
                    </div>
                    <div className="col-md-9">
                        <div className="destaques">                   
                            <h3 className="h3-destaques pull-left">Meus Eventos:</h3><br/><br/>                  
                        </div>
                        <br/>
                        <table className="table table-striped">
                            <th>Evento</th>
                            <th>Endereço</th>
                            <th>Data</th>
                            <th>Ações</th>
                            <tr>
                                <td>Evento 1</td>
                                <td>Rua Sei Lá, 23</td>
                                <td>12/07/2017 18:00</td>
                                <td>
                                    <a href="#" className="btn btn-sm btn-info"><i classNameName="fa fa-eye"></i></a> | 
                                    <a href="#" className="btn btn-sm btn-warning"><i className="fa fa-pencil"></i></a> | 
                                    <a href="#" className="btn btn-sm btn-danger"><i className="fa fa-trash"></i></a>
                                </td>
                            </tr>
                            <tr>
                                <td>Evento 2</td>
                                <td>Rua X, 523</td>
                                <td>16/07/2017 14:00</td>
                                <td>
                                    <a href="#" className="btn btn-sm btn-info"><i className="fa fa-eye"></i></a> | 
                                    <a href="#" className="btn btn-sm btn-warning"><i className="fa fa-pencil"></i></a> | 
                                    <a href="#" className="btn btn-sm btn-danger"><i className="fa fa-trash"></i></a>
                                </td>
                            </tr>
                        </table>  
                    </div>
                </div>
            </div>
        )
    }
}

export default ControlPainelComponent;