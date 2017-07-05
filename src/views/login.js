import React from 'react'
import avatar from '../image/avatar.jpg';

const containerStyle = {
    clear: 'both',
    paddingTop: '60px'
}

class LoginComponent extends React.Component {

    render() {
        return (
            <div style={containerStyle}>
                <div className="row destaques">
                    <div className="col-md-12">
                        <h3 className="h3-destaques pull-left">Login:</h3><br/><br/>
                    </div>
                </div>
                <div className="row">
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
					            <a href="#" className="pull-right">Cadastrar-se</a>
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