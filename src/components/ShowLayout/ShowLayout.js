import React, {Component} from 'react';
import Show from '../Shows/Show/Show';
import {connect} from 'react-redux';
import Seasons from '../Seasons/Seasons';
import ShowSelect from '../ShowSelect';

class ShowLayout extends Component{
    constructor(props){
        super(props);
        this.state = {
            showId : null,
            showObj: null
        }
    }
    isValidShow = id => {
        let isValid = false;
        const shows = this.props.shows || [];
        shows.forEach(show => {
            if(show.showId === +id){
                isValid = true;
            }
        })
        return isValid;
    }
    componentDidMount() {
        this.loadShowData();
    }
    componentDidUpdate() {
        this.loadShowData();
    }
    loadShowData(){
        //console.log(this.props);
        const id = this.props.match.params.showId;
        const shows = this.props.shows;
        if(id && this.isValidShow(id)){
            if(!this.state.showObj || (this.state.showObj && this.state.showId !== +id)){
                this.setState(prevState => ({
                    showId: +id,
                    showObj: shows.find(show => show.showId === +id)
                }));
            }
        }else {
            this.props.history.replace('/shows');
        }
    }
    onShowChangeHandler = event => {
        console.log(this.props);
        this.props.history.push('/shows/' + event.target.value);
    }
    render() {
        let showId = this.state.showId;
        let layout = null;
        if(showId){
            layout = (
                <div>
                    <ShowSelect shows={this.props.shows} 
                        showId={showId}
                        onShowChangeHandler={this.onShowChangeHandler}/>
                    <Show {...this.state.showObj}>
                        <Seasons seasons={this.state.showObj.seasons}/>
                    </Show>
                </div>
            );
        }
        return layout;
    }  
}
const mapStateToProps = state => ({
    shows: state.appData.shows
});

export default connect(mapStateToProps, null)(ShowLayout);