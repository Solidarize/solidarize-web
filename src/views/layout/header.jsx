import React from 'react';


const pStyle = {
    marginTop: '7px',
    marginBottom: '5px',
    marginRight: '10px',
}

const navStyle = {
    marginBottom: '5px',
}

class HeaderLayout extends React.Component {
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
                            ><a href="#" onClick={this.props.onClickHome}>Home</a></li>
                            <li className={this.props.active == 'event' ? "active" : ''}>
                                <a href="#" onClick={this.props.onClickEventList}>Eventos</a>
                            </li>
                            <li className={this.props.active == 'createEvent' ? "active" : ''}>
                                <a href="#" onClick={this.props.onClickCreateEvent}>Criar Evento</a>
                            </li>
                            <li className={this.props.active == 'sobre' ? "active" : ''}>
                                <a href="#" onClick={this.props.onClickSobre}>Sobre</a></li>
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