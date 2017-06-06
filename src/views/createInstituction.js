import React from 'react'
import axios from 'axios';

const axiosConfig = () => {
    return axios.create({
        headers: {'Content-Type': "application/json; charset=utf-8"}
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

        body["address"] = body["state"] + " - " + body["city"] + " " + body["neighborhood"] + " " + body["house"];
        return JSON.stringify(body);
    }


    render() {
        return (
            <div style={{paddingTop: '50px'}}>
              <div className="row destaques">
                  <div className="col-md-12">
                      <h3 className="h3-destaques pull-left">Cadastrar Instituição</h3><br/><br/>
                  </div>
              </div>
              <div className="row">
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
                                  <h3>Descrição do Evento:</h3>
                                  <textarea tabIndex="2" className="form-control" 
                                      placeholder="Descrição da Instituição, serviços e informações"
                                            aria-describedby="basic-addon1" name="description" id="institutionDescription"
                                            maxLength="255" rows="20"
                                            data-toggle="tooltip" data-placement="left"
                                            title="Descrição da Instituição" rel="txtTooltip"></textarea>
                              </div>
                          </div>
                          <div className="col-md-5">
                              <div className="form-group">
                                  <h3>Endereço da sede da Instituição:</h3>
                                  <div className="form-group">
                                      <div className="form-inline">
                                          <select tabIndex="3" className="form-control"
                                                  placeholder="Unidade Federativa"
                                                  aria-describedby="basic-addon1" name="state" id="institutionUF"
                                                  data-toggle="tooltip" data-placement="left"
                                                  title="Unidade Federativa da Instituição" rel="txtTooltip">
                                              <option selected="true" value="UF">UF</option>
                                              <option value="PR">PR</option>
                                              <option value="SC">SC</option>
                                              <option value="RS">RS</option>
                                          </select>
                                          <input tabIndex="4" type="text" className="form-control"
                                                 placeholder="Cidade"
                                                 aria-describedby="basic-addon1" name="city" id="institutionCity"
                                                 maxLength="30"
                                                 data-toggle="tooltip" data-placement="left"
                                                 title="Cidade da Instituição" rel="txtTooltip"/>
                                      </div>
                                  </div>
                                  <div className="form-group">
                                      <input tabIndex="5" type="text" className="form-control" placeholder="Bairro"
                                             aria-describedby="basic-addon1" name="neighborhood" id="institutionDistrict"
                                             maxLength="30"
                                             data-toggle="tooltip" data-placement="left"
                                             title="Bairro da Instituição" rel="txtTooltip"/>
                                  </div>
                                  <div className="form-group">
                                      <input tabIndex="6" type="text" className="form-control"
                                             placeholder="Logradouro"
                                             aria-describedby="basic-addon1" name="house" id="institutionAddress"
                                             maxLength="30"
                                             data-toggle="tooltip" data-placement="left"
                                             title="Endereço e Número da Instituição" rel="txtTooltip"/>
                                  </div>
                                  
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
                                                 aria-describedby="basic-addon1" name="cellphone" id="institutionCellphone"
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
              </div>
              <br/><br/>
            </div>

        )
    }
}

export default CreateInstituctionComponent;