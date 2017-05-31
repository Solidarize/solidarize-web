import React from 'react'
import axios from 'axios';

const axiosConfig = () => {
    return axios.create({
        headers: {'Content-Type': "application/json; charset=utf-8"}
    });
}

class CreateEventComponent extends React.Component {

    onSubmit(evt) {
        var url = "https://solidarize-dev.herokuapp.com/event";

        let data = this.createFormData(evt);

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
        body["address"] = body["state"] + " - " + body["city"] + " " + body["neighborhood"] + " " + body["house"];
        return JSON.stringify(body);
    }


    render() {
        return (
            <div style={{paddingTop: '30px'}}>
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
                            <div className="col-md-5 col-md-offset-1">
                                <div className="form-group">
                                    <h3>Descrição do Evento:</h3>
                                    <textarea tabIndex="2" className="form-control" placeholder="Descrição do Evento"
                                              aria-describedby="basic-addon1" name="description" id="eventDescription"
                                              maxLength="255" rows="20"
                                              data-toggle="tooltip" data-placement="left"
                                              title="Descrição do Evento" rel="txtTooltip"></textarea>
                                </div>
                            </div>
                            <div className="col-md-5">
                                <div className="form-group">
                                    <h3>Local do Evento:</h3>
                                    <div className="form-group">
                                        <div className="form-inline">
                                            <select tabIndex="3" className="form-control"
                                                    placeholder="Unidade Federativa"
                                                    aria-describedby="basic-addon1" name="state" id="eventUF"
                                                    data-toggle="tooltip" data-placement="left"
                                                    title="Unidade Federativa do Evento" rel="txtTooltip">
                                                <option selected="true" value="UF">UF</option>
                                                <option value="PR">PR</option>
                                                <option value="SC">SC</option>
                                                <option value="RS">RS</option>
                                            </select>
                                            <input tabIndex="4" type="text" className="form-control"
                                                   placeholder="Cidade"
                                                   aria-describedby="basic-addon1" name="city" id="eventCity"
                                                   maxLength="30"
                                                   data-toggle="tooltip" data-placement="left"
                                                   title="Cidade do Evento" rel="txtTooltip"/>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <input tabIndex="5" type="text" className="form-control" placeholder="Bairro"
                                               aria-describedby="basic-addon1" name="neighborhood" id="eventDistrict"
                                               maxLength="30"
                                               data-toggle="tooltip" data-placement="left"
                                               title="Bairro do Evento" rel="txtTooltip"/>
                                    </div>
                                    <div className="form-group">
                                        <input tabIndex="6" type="text" className="form-control"
                                               placeholder="Logradouro"
                                               aria-describedby="basic-addon1" name="house" id="eventAddress"
                                               maxLength="30"
                                               data-toggle="tooltip" data-placement="left"
                                               title="Bairro do Evento" rel="txtTooltip"/>
                                    </div>
                                    <div className="form-group">
                                        <br/>
                                        <h3>Foto de divulgação:</h3>
                                        <div className="input-group file-preview">
                                            <input placeholder="" type="text"
                                                   className="form-control file-preview-filename"
                                                   disabled="disabled" id="fileName"/>
                                            <span className="input-group-btn">
                                                <button type="button" className="btn btn-default file-preview-clear"
                                                        style={{display: 'none'}}> <span
                                                    className="glyphicon glyphicon-remove"></span> Limpar </button>
                                                <div className="btn btn-default file-preview-input">
                                        <span className="glyphicon glyphicon-folder-open"></span>
                                        <span className="file-preview-input-title">Escolher Imagem</span>
                                        <input tabIndex="7" type="file" accept="image/*" name="input-file-preview"/>
                                    </div>
                                    <button type="button" className="btn btn-labeled btn-primary"> <span
                                        className="btn-label"><i
                                        className="glyphicon glyphicon-upload"></i> </span>Upload</button>
                                </span>
                                        </div>
                                    </div>

                                    <br/><br/><br/><br/>

                                    <div className="input-group pull-left" id="canceldiv">
                                        <input tabIndex="8" type="reset" value="Cancelar"
                                               className="btn btn-lg btn-danger btn-submit"
                                               id="cancel-btn"/>
                                    </div>

                                    <div className="input-group pull-right" id="submitdiv">
                                        <input tabIndex="9" type="submit" value="Cadastrar Evento"
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