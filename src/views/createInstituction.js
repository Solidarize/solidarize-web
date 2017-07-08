import React from 'react'
import axios from 'axios';
import AddressComponent from './AddressComponent'

const axiosConfig = () => {
    return axios.create({
        headers: {'Content-Type': "application/json; charset=utf-8"
        }
    });
}

class CreateInstituctionComponent extends React.Component {

    onSubmit(evt) {
        var url = "https://solidarize-dev.herokuapp.com/institution";

        let data = this.createFormData(evt);

        axiosConfig().post(url, data);

        evt.preventDefault();
        return false;
    }

    createFormData(evt) {
        let body = Array.from(evt.target.elements)
            .filter(el => el.name)
            .reduce((a, b) => ({...a, [b.name]: b.value}), {});

        body["address"] = body["address"] + " - " + body["addressNumber"];
        return JSON.stringify(body);
    }


    render() {
        return (
            <div style={{paddingTop: '30px'}}>
                <div className="destaques">
                    <h3 className="h3-destaques pull-left">Cadastrar Instituição</h3><br/><br/>
                </div>    
                <div className="container-fluid">
                    <br/>
                    <form id="createInstituctionForm" onSubmit={this.onSubmit.bind(this)}>
                        <div className="col-md-10 col-md-offset-1">
                            <div className="form-group">
                                <h3>Nome da Instituição:</h3>
                                <input tabIndex="1" type="text" className="form-control input-lg"
                                        placeholder="Nome da Instituição"
                                        aria-describedby="basic-addon1" name="name" id="institutionName"
                                        maxLength="30"
                                        data-toggle="tooltip" data-placement="left"
                                        title="Nome da Instituição" rel="txtTooltip"/>
                            </div>
                        </div>
                        <div className="col-md-5 col-md-offset-1">
                            <div className="form-group">
                                <h3>Descrição da Instituição:</h3>
                                <textarea tabIndex="2" className="form-control"
                                            placeholder="Descrição da Instituição, serviços e informações"
                                            aria-describedby="basic-addon1" name="description"
                                            id="institutionDescription"
                                            maxLength="255" rows="20"
                                            data-toggle="tooltip" data-placement="left"
                                            title="Descrição da Instituição" rel="txtTooltip"></textarea>
                            </div>
                        </div>
                        <div className="col-md-5">
                            <div className="form-group">
                                <AddressComponent cnpjActive={'true'}/>
                                <div className="form-group">
                                    <br/>
                                    <h3>Dados de Contatos:</h3>
                                    <div className="form-inline">
                                        <input tabIndex="7" type="text" className="form-control"
                                                placeholder="Telefone"
                                                aria-describedby="basic-addon1" name="phone" id="institutionPhone"
                                                maxLength="30"
                                                data-toggle="tooltip" data-placement="left"
                                                title="Telefone fixo para contato" rel="txtTooltip"/>

                                        <input tabIndex="8" type="text" className="form-control"
                                                placeholder="Celular"
                                                aria-describedby="basic-addon1" name="cellphone"
                                                id="institutionCellphone"
                                                maxLength="30"
                                                data-toggle="tooltip" data-placement="left"
                                                title="Celular para contato" rel="txtTooltip"/>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <input tabIndex="9" type="text" className="form-control"
                                            placeholder="E-mail"
                                            aria-describedby="basic-addon1" name="house" id="institutionEmail"
                                            maxLength="30"
                                            data-toggle="tooltip" data-placement="left"
                                            title="E-mail para contato" rel="txtTooltip"/>
                                </div>
                                <div className="form-group">
                                    <input tabIndex="10" type="text" className="form-control"
                                            placeholder="Site"
                                            aria-describedby="basic-addon1" name="house" id="institutionSite"
                                            maxLength="30"
                                            data-toggle="tooltip" data-placement="left"
                                            title="Web Site da Instituição" rel="txtTooltip"/>
                                </div>
                                <div className="form-group">
                                    <input tabIndex="11" type="text" className="form-control"
                                            placeholder="Facebook"
                                            aria-describedby="basic-addon1" name="house" id="institutionFacebook"
                                            maxLength="30"
                                            data-toggle="tooltip" data-placement="left"
                                            title="Facebook da Instituição" rel="txtTooltip"/>
                                </div>

                                <br/><br/>

                                <div className="input-group pull-left" id="canceldiv">
                                    <input tabIndex="11" type="reset" value="Cancelar"
                                            className="btn btn-lg btn-danger btn-submit"
                                            id="cancel-btn"/>
                                </div>

                                <div className="input-group pull-right" id="submitdiv">
                                    <input tabIndex="12" type="submit" value="Cadastrar Instituição"
                                            className="btn btn-lg btn-success btn-submit"
                                            id="submit-form"/>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
                <br/><br/>
            </div>
        )
    }
}

export default CreateInstituctionComponent;