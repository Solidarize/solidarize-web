import React, {Component} from 'react';
import axios from 'axios';


const axiosConfig = () => {
    return axios.create({
        headers: {
            'Content-Type': "application/json; charset=utf-8"
        }
    });
}

const cssForLoadingAddress = {
    position: 'absolute',
    right: '20px',
    marginTop: '3px'
}

const cssForLoadingCNPJ = {
    position: 'absolute',
    marginTop: '3px',
    left: '160px'
}

const cssForCNPJInput = {
    width: '37%'
}
const cssForAddressInput = {
    display: 'inline'
}
class AddressComponent extends Component {


    constructor(props) {
        super(props);

        this.state = {
            address: '',
            cep: '',
            isLoading: false,
            isLoadingCNPJ: false
        }
    }


    handleCepChange(evt) {
        this.setState({
            address: ''
        })
        let cep = evt.target.value;
        if (cep.length < 8) {
            return;
        } else if (cep.length > 9) {
            return;
        } else if (( cep.length === 9 ) && !cep.includes('-')) {
            return;
        } else if (cep.length === 9 && !cep.match('[0-9]{5}-[0-9]{3}')) {
            return;
        } else if (cep.length === 8 && cep.includes('-')) {
            return;
        }
        if (cep.length === 9) {
            var cepSplitted = cep.split('-');
            cep = cepSplitted[0] + cepSplitted[1];
        }
        this.updateAddress(cep);
    }

    updateAddress(cep) {
        var url = 'https://maps.google.com/maps/api/geocode/json?address=' + cep + '&sensor=false';
        console.log(url)
        axiosConfig().get(url).then(res => {
            this.setState({isLoading: true})
            if (res.data.results.length === 0) {
                return;
            }
            console.log(res.data.results[0].formatted_address)
            this.setState({
                address: res.data.results[0].formatted_address
            })

        }).then(s => this.setState({isLoading: false}));
    }

    handleCNPJChange(evt) {
        let cnpj = evt.target.value;
        cnpj = cnpj.replace(/\.|\/|\-/g, '');
        var url = 'https://crossorigin.me/https://www.receitaws.com.br/v1/cnpj/' + cnpj;
        this.setState({isLoadingCNPJ: true})
        axiosConfig().get(url).then(res => {

            if (res.data.status !== 'OK') {
                return;
            }

            let cepSplitted = res.data.cep.split('.');
            let cep = cepSplitted[0] + cepSplitted[1];
            console.log(cep)
            this.setState({
                cep: cep
            });

            this.updateAddress(cep);
            this.setState({isLoadingCNPJ: false})
        });

    }

    render() {
        return (
            <div>
                { this.props.cnpjActive ? <div className="form-group">
                    <br/>
                    <h3>CNPJ:</h3>
                    <div className="form-inline">
                        <input tabIndex="7" type="text" className="form-control"
                               placeholder="CNPJ"
                               aria-describedby="basic-addon1" name="cnpj" id="institutionPhone"
                               maxLength="18"
                               style={cssForCNPJInput}
                               data-toggle="tooltip" data-placement="left"
                               title="CNPJ" rel="txtTooltip"
                               onChange={this.handleCNPJChange.bind(this)}/>
                        {this.state.isLoadingCNPJ ? <i style={cssForLoadingCNPJ}
                                                       className="fa fa-circle-o-notch fa-spin fa-2x fa-fw"></i> : null}
                    </div>
                </div> : null }
                { this.props.cnpjActive ? <h3>Endereço da Instituição:</h3>:<h3>Local do Evento:</h3>}
                <div className="form-group">
                    {this.props.cnpjActive ?
                        <input type="text" className="form-control" placeholder="CEP"
                               style={{width: '20%'}}
                               aria-describedby="basic-addon1" name="cep" id="cep"
                               maxLength="9"
                               data-toggle="tooltip" data-placement="left"
                               title="Cep" rel="txtTooltip"
                               value={this.state.cep} disabled='true'
                        />
                        :
                        <input type="text" className="form-control" placeholder="CEP"
                               style={{width: '20%'}}
                               aria-describedby="basic-addon1" name="cep" id="cep"
                               maxLength="9"
                               data-toggle="tooltip" data-placement="left"
                               title="Cep" rel="txtTooltip"
                               onChange={this.handleCepChange.bind(this)}
                        />
                    }
                </div>
                <div className="form-group">

                    <input tabIndex="4" type="text" className="form-control"
                           placeholder="Endereço"
                           aria-describedby="basic-addon1" name="address" id="address"
                           maxLength="30"
                           data-toggle="tooltip" data-placement="left"
                           title="Endereço" rel="txtTooltip" value={this.state.address}
                           disabled='true'
                           style={cssForAddressInput}/>
                    {this.state.isLoading ? <i style={cssForLoadingAddress}
                                               className="fa fa-circle-o-notch fa-spin fa-2x fa-fw"></i> : null}
                </div>
                <div className="form-group">
                    <input tabIndex="5" type="text" className="form-control"
                           placeholder="Complemento"
                           aria-describedby="basic-addon1" name="addressNumber" id="addressNUmber"
                           maxLength="30"
                           data-toggle="tooltip" data-placement="left"
                           title="Complemento do Endereço" rel="txtTooltip"/>

                </div>
            </div>
        )
    }
}

export default AddressComponent