import React from'react';
import solidarize from './solidarize.css';

class MasterLayout extends React.Component {
    render() {
        return (
            <html lang="en">
            <head>
                <meta httpEquiv="Content-Type" content="text/html;charset=utf-8"/>
                <title>{this.props.title}</title>

                <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
                <script src="http://maxcdn.bootstrapcdn.com/bootstrap/3.2.0/js/bootstrap.min.js"></script>

                <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"/>
                <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap-theme.min.css"/>
                <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"/>

                <link rel="stylesheet" href="solidarize.css"/>
            </head>
            <body>
            {this.props.children}
            </body>
            </html>
        )
    }
};

export default MasterLayout;