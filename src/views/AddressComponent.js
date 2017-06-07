import React, {Component} from 'react';
import axios from 'axios';


const axiosConfig = () => {
    return axios.create({
        headers: {'Content-Type': "application/json; charset=utf-8"}
    });
}

const cssForLoadingAddress = {
    position: 'absolute',
    right: '20px',
    marginTop: '3px'
}

const cssForAddressInput = {
    display: 'inline'
}
class AddressComponent extends Component {


    constructor(props) {
        super(props);

        this.state = {
            address: '',
            isLoading: false
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
        var url = 'https://maps.google.com/maps/api/geocode/json?address=' + cep + '&sensor=false';
        axiosConfig().get(url).then(res => {
            this.setState({isLoading: true})
            if (res.data.results.length === 0) {
                return;
            }

            this.setState({
                address: res.data.results[0].formatted_address
            })

        }).then(s => this.setState({isLoading: false}));
    }

    render() {
        return (
            <div>
                <h3>Local do Evento:</h3>
                <div className="form-group">
                    <input type="text" className="form-control" placeholder="CEP"
                           aria-describedby="basic-addon1" name="cep" id="cep"
                           maxLength="30"
                           data-toggle="tooltip" data-placement="left"
                           title="Cep" rel="txtTooltip" onChange={this.handleCepChange.bind(this)}/>
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