import React from 'react';
import * as HeaderActions from '../../actions/HeaderActions'

const pStyle = {
    marginTop: '7px',
    marginBottom: '5px',
    marginRight: '10px',
}

const navStyle = {
    marginBottom: '5px',
}

class HeaderLayout extends React.Component {
    aboutAction(){
        HeaderActions.aboutAction();
    }

    createEventAction(){
        HeaderActions.createEventAction();
    }

    createInstitutionAction(){
        HeaderActions.createInstitutionAction();
    }

    eventListAction(){
        HeaderActions.eventListAction();
    }

    homeAction(){
        HeaderActions.homeAction();
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
                            <li className={this.props.active == 'createEvent' ? "active" : ''}>
                                <a href="#" onClick={this.createEventAction.bind(this)}>Criar Evento</a>
                            </li>
                            <li className={this.props.active == 'createInstitution' ? "active" : ''}>
                                <a href="#" onClick={this.createInstitutionAction.bind(this)}>Criar Instituição</a>
                            </li>
                            <li className={this.props.active == 'sobre' ? "active" : ''}>
                                <a href="#" onClick={this.aboutAction.bind(this)}>Sobre</a></li>
                        </ul>
                        <form action="/connect/facebook" method="POST">
                            <input type="hidden" name="scope" value="user_posts"/>
                            <p className="navbar-text navbar-right" style={pStyle}>
                                <button type="submit" className="btn btn-success">Conectar com Facebook</button>
                            </p>
                        </form>
                    </div>
                </div>
            </nav>
        )
    }
}
;

export default HeaderLayout;