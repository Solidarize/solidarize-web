import React from 'react';

const containerStyle = {
    paddingTop: '30px'
}


class SobreComponent extends React.Component {

    render() {
        return (
            <div style={containerStyle}>
                <div className="row destaques">
                    <div className="col-md-12">
                        <h3 className="h3-destaques pull-left">Sobre Nós</h3><br/><br/>
                    </div>
                </div>
                <div className="row">
                    <div className="container">
                        <br/><br/>
                        <blockquote>
                            <p style={{textAlign: 'justify'}}><i>"A solidariedade é uma qualidade que dignifica o ser
                                humano. É
                                um laço recíproco entre as pessoas, entre as comunidades e grupos humanos; é um
                                sentimento
                                que envolve e constrói possibilidades transformadoras.
                                Ser solidário é aderir, apoiar concretamente a uma causa, com princípio, valor e
                                sentimento
                                humano. Ser solidário é uma atitude humano e social que vai ao outro, com vontade e
                                determinação libertadora. Ser solidário é apresentar-se ao mundo consciente da
                                responsabilidade que vincula os seres humanos, consciente do papel que podemos
                                representar
                                uns para os outros: para a família, para a comunidade, para a cidade, para a humanidade.
                                Ser
                                solidário é ir em busca da missão, é perseguir o ideal do desenvolvimento humano. Ser
                                solidário é ser luz, é ser ajuda, é ser muito mais do que o sistema sócio-político e
                                econômico induz que podemos ser."</i></p>
                            <footer>Elias J Silva</footer>
                        </blockquote>
                        <h1>Sobre o Solidarize</h1>
                        <div style={{textAlign: 'justify'}}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore
                            et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                            nisi
                            ut
                            aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit
                            esse
                            cillum
                            dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                            culpa
                            qui officia
                            deserunt mollit anim id est laborum.<br/><br/>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore
                            et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                            nisi
                            ut
                            aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit
                            esse
                            cillum
                            dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                            culpa
                            qui officia
                            deserunt mollit anim id est laborum.<br/><br/>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore
                            et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                            nisi
                            ut
                            aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit
                            esse
                            cillum
                            dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                            culpa
                            qui officia
                            deserunt mollit anim id est laborum.
                            <br/><br/><br/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default SobreComponent;