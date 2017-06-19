import React from 'react';
import background  from '../style/background.png';
const imgStyle = {
    margin: '0px',

}


var IndexBody = React.createClass({
    render: function () {
        return (
            <div className="row-no-padding">
                <div className="destaques">
                    <h2 className="h2-destaques">solidarize</h2>
                    <h3 className="h3-destaques">Todos juntos em busca de um mundo melhor!</h3><br/><br/>
                    <br/><br/>
                    <center><img className="img-responsive" src={background} style={imgStyle} alt="" /></center>
                </div>
                <div className="row-no-padding">
                    <div className="destaques-footer">
                        <h4>O Solidarize foi criado com a intenção de divulgar serviços de cunho social
                            e unir instituições a pessoas que tem o interesse de contribuir.</h4>
                        <a className="btn-destaque" href="sobre.html">saiba mais</a>
                    </div>
                </div>
            </div>
        )
    }
});

export default IndexBody;