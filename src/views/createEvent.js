import React from 'react'
import axios from 'axios';
import AddressComponent from './AddressComponent'

const axiosConfig = () => {
    return axios.create({
        headers: {'Content-Type': "application/json; charset=utf-8"}
    });
}


class CreateEventComponent extends React.Component {

    onSubmit(evt) {
        var url = "https://solidarize-dev.herokuapp.com/event";

        let data = this.createFormData(evt);
        console.log(data);
        axiosConfig().post(url, data);

        evt.preventDefault();
        return false;
    }

    createFormData(evt) {
        let body = Array.from(evt.target.elements)
            .filter(el => el.name)
            .reduce((a, b) => ({...a, [b.name]: b.value}), {});

        body["timestamp"] = new Date().toISOString();
        body["event_time"] = new Date().toISOString();
        body["address"] = body["address"] + " - " + body["addressNumber"];
        return JSON.stringify(body);
    }


    render() {
        return (
            <div style={{paddingTop: '50px'}}>
                <div className="row destaques">
                    <div className="col-md-12">
                        <h3 className="h3-destaques pull-left">Cadastrar Evento</h3><br/><br/>
                    </div>
                </div>
                <div className="row">
                    <div className="container-fluid">
                        <br/>
                        <form id="createEventForm" onSubmit={this.onSubmit.bind(this)}>
                            <div className="col-md-10 col-md-offset-1">
                                <div className="form-group">
                                    <h3>Título do Evento:</h3>
                                    <input tabIndex="1" type="text" className="form-control input-lg"
                                           placeholder="Título do Evento"
                                           aria-describedby="basic-addon1" name="title" id="eventTitle"
                                           maxLength="30"
                                           data-toggle="tooltip" data-placement="left"
                                           title="Título do Evento" rel="txtTooltip"/>
                                </div>
                            </div>
                            <div className="col-md-10 col-md-offset-1">
                                <div className="form-group">
                                    <h3>SubTítulo:</h3>
                                    <input tabIndex="2" type="text" className="form-control input-lg"
                                           placeholder="SubTítulo"
                                           aria-describedby="basic-addon1" name="subtitle" id="eventSubTitle"
                                           maxLength="30"
                                           data-toggle="tooltip" data-placement="left"
                                           title="SubTítulo" rel="txtTooltip"/>
                                </div>
                            </div>
                            <div className="col-md-5 col-md-offset-1">
                                <div className="form-group">
                                    <h3>Descrição do Evento:</h3>
                                    <textarea tabIndex="3" className="form-control" placeholder="Descrição do Evento"
                                              aria-describedby="basic-addon1" name="description" id="eventDescription"
                                              maxLength="255" rows="20"
                                              data-toggle="tooltip" data-placement="left"
                                              title="Descrição do Evento" rel="txtTooltip"></textarea>
                                </div>
                            </div>
                            <div className="col-md-5">
                                <div className="form-group">

                                    <AddressComponent/>

                                    <div className="form-group">
                                        <br/>
                                        <h3>Data e Hora:</h3>
                                        <input tabIndex="8" type="text" className="form-control"
                                               aria-describedby="basic-addon1" name="house" id="dateTime"
                                               data-toggle="tooltip" data-placement="left"
                                               title="Data e Hora do Evento" rel="txtTooltip"/>
                                    </div>

                                    <br/><br/><br/><br/>

                                    <div className="input-group pull-left" id="canceldiv">
                                        <input tabIndex="9" type="reset" value="Cancelar"
                                               className="btn btn-lg btn-danger btn-submit"
                                               id="cancel-btn"/>
                                    </div>

                                    <div className="input-group pull-right" id="submitdiv">
                                        <input tabIndex="10" type="submit" value="Cadastrar Evento"
                                               className="btn btn-lg btn-success btn-submit"
                                               id="submit-form"/>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        )
    }
}

export default CreateEventComponent;