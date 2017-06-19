import React from 'react';
import FacebookLogin from 'react-facebook-login';
import * as HeaderActions from '../../actions/HeaderActions'

const pStyle = {
    marginTop: '7px',
    marginBottom: '5px',
    marginRight: '10px',
}

const navStyle = {
    marginBottom: '5px',
}

const nameStyle = {
    padding: '9px',
    margin: 'auto'
}

class HeaderLayout extends React.Component {
    aboutAction() {
        HeaderActions.aboutAction();
    }

    createEventAction() {
        HeaderActions.createEventAction();
    }

    createInstitutionAction() {
        HeaderActions.createInstitutionAction();
    }

    eventListAction() {
        HeaderActions.eventListAction();
    }

    homeAction() {
        HeaderActions.homeAction();
    }

    facebookCallback(response) {
        console.log(response);
        HeaderActions.authAction(response)
    }

    render() {
        return (
            <nav className="navbar navbar-default navbar-fixed-top" style={navStyle}>
                <div className="container-fluid">
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        <a className="navbar-brand" href="#" onClick={this.props.onClickHome} title="Solidarize">
                            Solidarize
                        </a>
                    </div>

                    <div className="collapse navbar-collapse navbar-collapse" id="myNavbar">
                        <ul className="nav navbar-nav">
                            <li className={this.props.active == 'home' ? "active" : ''}
                            ><a href="#" onClick={this.homeAction.bind(this)}>Home</a></li>
                            <li className={this.props.active == 'event' ? "active" : ''}>
                                <a href="#" onClick={this.eventListAction.bind(this)}>Eventos</a>
                            </li>
                            {this.props.auth ?
                                <li className={this.props.active == 'createEvent' ? "active" : ''}>
                                    <a href="#" onClick={this.createEventAction.bind(this)}>Criar Evento</a>
                                </li> : null}
                            <li className={this.props.active == 'createInstitution' ? "active" : ''}>
                                <a href="#" onClick={this.createInstitutionAction.bind(this)}>Criar Instituição</a>
                            </li>
                            <li className={this.props.active == 'sobre' ? "active" : ''}>
                                <a href="#" onClick={this.aboutAction.bind(this)}>Sobre</a></li>
                        </ul>
                        <p className="navbar-right" style={pStyle}>
                            {!this.props.auth ?
                                <FacebookLogin
                                    appId="107556419780468"
                                    autoLoad={true}
                                    fields="name,email,picture"
                                    scope="public_profile,user_friends"
                                    callback={this.facebookCallback.bind(this)}
                                    cssClass="btn onl_btn-facebook"
                                />
                                : <p style={nameStyle}>Olá, {this.props.name}</p>}
                        </p>
                    </div>
                </div>
            </nav>
        )
    }
}
;

export default HeaderLayout;