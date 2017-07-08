import React from 'react'
import avatar from '../image/avatar.jpg';
import * as HeaderActions from '../actions/HeaderActions'

const containerStyle = {
    clear: 'both',
    paddingTop: '30px'
}

class LoginComponent extends React.Component {

    createInstitutionAction() {
        HeaderActions.createInstitutionAction();
    }

    render() {
        return (
            <div style={containerStyle}>
                <div className="destaques">                   
                    <h3 className="h3-destaques pull-left">Login:</h3><br/><br/>               
                </div>
                <div className="row-no-padding">
                    <div className="container-fluid">
                        <br/>
                      	<div className="container">
					        <div className="card card-container">          
					            <img className="profile-img-card" src={avatar} />
					            <p className="profile-name-card"></p>
					            <form className="form-signin">
					                <span id="reauth-email" className="reauth-email"></span>
					                <input type="email" id="inputEmail" className="form-control" placeholder="Usuário" required autofocus/>
					                <input type="password" id="inputPassword" className="form-control" placeholder="Senha" required/>      
					                <button className="btn btn-lg btn-success btn-block btn-signin" type="submit">Logar</button>
					            </form>
					            <br/>
					            <a href="#" className="pull-right" onClick={this.createInstitutionAction.bind(this)}>Cadastrar-se</a>
					        </div>
					    </div>
                    </div>
                </div>
                <br/><br/>
            </div>
        )
    }
}

export default LoginComponent;