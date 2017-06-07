import React from 'react'
import axios from 'axios';

const axiosConfig = () => {
    return axios.create({
        headers: {'Content-Type': "application/json; charset=utf-8"}
    });
}

class ManagerInstituctionComponent extends React.Component {

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

        
        return JSON.stringify(body);
    }


    render() {
        return (
            <div style={{paddingTop: '30px'}}>
              <div classNameName="row destaques">
                    <div className="col-md-12">
                        <h3 className="h3-destaques pull-left">Gerenciar Instituição</h3><br/><br/>
                    </div>
                </div>
                <div className="row">
                    <div className="container-fluid">
                        <br/>
                        <form id="createInstituctionForm" onSubmit={this.onSubmit.bind(this)}>
                            <div className="col-md-10 col-md-offset-1">
                                <div className="form-group">
                                    <h3>Localizar Instituição:</h3>
                                    <div className="input-group">                                   
                                      <input tabIndex="1" type="text" className="form-control input-lg"
                                           placeholder="Localizar Instituição"
                                           aria-describedby="basic-addon1" name="title" id="institutionName"
                                           maxLength="30"
                                           data-toggle="tooltip" data-placement="left"
                                           title="Nome da Instituição" rel="txtTooltip"/>
                                      <span className="input-group-btn">
                                        <button className="btn btn-lg btn-success" type="button" tabIndex="2" 
                                            type="submit" className="btn btn-lg btn-success btn-submit" id="submit-form">
                                          <i className="glyphicon glyphicon-search"></i>Localizar
                                        </button>
                                      </span>
                                    </div>
                                </div>
                            </div>
                        </form>
                        <div className="col-md-10 col-md-offset-1">
                          <table className="table table-striped table-hover">
                            <th>Instituição</th>
                            <th>Telefone</th>
                            <th>Endereço</th>
                            <th>Ações</th>

                            <tr>
                              <td>Instituição 1</td>
                              <td>3212-8547</td>
                              <td>Rua x, 24</td>
                              <td>
                                <a href="#" className="btn btn-sm btn-info"><i className="glyphicon glyphicon-eye-open"></i></a> | 
                                <a href="#" className="btn btn-sm btn-warning"><i className="glyphicon glyphicon-pencil"></i></a> | 
                                <a href="#" className="btn btn-sm btn-danger"><i className="glyphicon glyphicon-trash"></i></a>
                              </td>
                            </tr>
                            <tr>
                              <td>Instituição 2</td>
                              <td>3541-2564</td>
                              <td>Rua y, 351</td>
                              <td>
                                <a href="#" className="btn btn-sm btn-info"><i className="glyphicon glyphicon-eye-open"></i></a> | 
                                <a href="#" className="btn btn-sm btn-warning"><i className="glyphicon glyphicon-pencil"></i></a> | 
                                <a href="#" className="btn btn-sm btn-danger"><i className="glyphicon glyphicon-trash"></i></a>
                              </td>
                            </tr>
                          </table>
                        </div>
                    </div>
                </div>
                <br/><br/>
            </div>

        )
    }
}

export default ManagerInstituctionComponent;