var React = require('react');


class FooterLayout extends React.Component {
    render() {
        return (
            <footer className="text-center">
                <div className="footer-above">
                    <div className="container">
                        <div className="row">
                            <div className="footer-col col-md-4">
                                <h3></h3>
                                <p></p>
                            </div>
                            <div className="footer-col col-md-4">
                                <h2>NOSSAS MÍDIAS</h2>
                                <br/>
                                <ul className="list-inline">
                                    <li>
                                        <a href="#" className="btn-social"><i className="fa fa-fw fa-facebook"></i></a>
                                    </li>
                                    <li>
                                        <a href="#" className="btn-social"><i className="fa fa-fw fa-twitter"></i></a>
                                    </li>
                                    <li>
                                        <a href="#" className="btn-social"><i className="fa fa-fw fa-git"></i></a>

                                    </li>
                                    <li>
                                        <a href="#" className="btn-social"><i className="fa fa-fw fa-linkedin"></i></a>
                                    </li>
                                    <li>
                                        <a href="#" className="btn-social"><i className="fa fa-fw fa-dribbble"></i></a>
                                    </li>
                                </ul>
                            </div>
                            <div className="footer-col col-md-4">
                                <h3></h3>
                                <p></p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-below">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                Copyright &copy; Solidarize 2017
                            </div>
                        </div>
                    </div>
                </div>

            </footer>
        )
    }
};

export default FooterLayout;