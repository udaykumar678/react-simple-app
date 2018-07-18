import React, {Component} from 'react';
import Show from './Show/Show';
import {withRouter} from 'react-router-dom';

class Shows extends Component{
    onClickHandler = (showId) => {
        //console.log(this.props);
        const currentUrl = this.props.match.url;
        this.props.history.push(currentUrl + '/' + showId);
    }
    render() {
        return (
        <div className="row">
            {
                this.props.shows.map(show =>
                    <div className="col-12" onClick={() => this.onClickHandler(show.showId)}
                            style={{marginBottom: '10px', cursor: 'pointer'}} key={show.showId}>   
                        <Show {...show}/>
                    </div>
                    )
            }
        </div>
        );
    }
}

export default withRouter(Shows);

