import React from 'react';
import background  from '../style/background.png';
const imgStyle = {
    margin: '0px',

}

const containerStyle = {
    display: 'inline',
}
var IndexBody = React.createClass({
    render: function () {
        return (
            <div className="row" style={containerStyle}>
                <div className="row destaques">
                    <div className="col-md-12">
                        <h2 className="h2-destaques">solidarize</h2>
                        <h3 className="h3-destaques">Todos juntos em busca de um mundo melhor!</h3><br/><br/>
                        <br/><br/>

                        <center><img className="img-responsive" src={background} style={imgStyle} alt="" /></center>
                    </div>
                </div>
                <div className="row">
                    <div className="destaques-footer">
                        <h4>O Solidarize foi criado com a intenção de divulgar serviços de cunho social
                            e unir instituições a pessoas que tem o interesse de contribuir.</h4>
                        <a className="btn btn-destaque" href="sobre.html">saiba mais</a>
                    </div>
                </div>
            </div>
        )
    }
});

export default IndexBody;