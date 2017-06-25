import React from 'react'
import avatar from '../image/avatar.jpg';


class InstitutionDetail extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return (
            <div className="user-info-box">
                <div className="row">
                    <div className="col-md-2">
                        <img src={avatar}/>
                    </div>
                    <div className="col-md-10">
                        <h4 style={{marginTop: '0'}}>{this.props.institution.name}</h4>
                        <p>{this.props.institution.description}</p>
                        <div className="pull-left">
                            <i className="fa fa-map-o"></i> {this.props.institution.address}<br/>
                            <i className="fa fa-phone"></i> (51) 3311-9955
                        </div>
                        <div className="pull-right">
                            <a href="#">contato@org.com.br</a>&nbsp;&nbsp;&nbsp;&nbsp;
                            <a href="#"><i className="fa fa-fw fa-facebook fa-2x"></i></a>
                            <a href="#"><i className="fa fa-fw fa-twitter fa-2x"></i></a>
                            <a href="#"><i className="fa fa-fw fa-google-plus fa-2x"></i></a>
                            <a href="#"><i className="fa fa-fw fa-dribbble fa-2x"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default InstitutionDetail;

