import React, {Component} from 'react';
import renderHTML from 'react-render-html';
import {withRouter} from 'react-router-dom';

class Show extends Component{
    render() {
        return (
            <div className="card">
                <h5 className="card-header">{this.props.name}</h5>
                <div className="card-body">{this.props.summary ? renderHTML(this.props.summary) : null}</div>
                {this.props.children}
            </div>
       );
    }
}

export default withRouter(Show);

