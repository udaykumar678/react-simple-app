import React,{Component} from 'react';
import SeasonSelect from '../SeasonSelect';
import EpisodeSearchBar from '../EpisodeSearchBar';
import Episodes from '../Episodes/Episodes';

class Seasons extends Component{
    constructor(props){
        super(props);
        this.state = {
            originalSeasons: props.seasons || [],
            currentSeason: 0,
            modifiedSeasons: this.getModifiedSeasons(props.seasons),
        }
    }
    componentDidUpdate() {
        //console.log('Seasons Js: in component did update');
        if(this.state.originalSeasons !== this.props.seasons){
            this.setState({
                originalSeasons: this.props.seasons || [],
                currentSeason: 0,
                modifiedSeasons: this.getModifiedSeasons(this.props.seasons),
            });
        }
    }
    getModifiedSeasons = (seasons) => {
        return seasons.map(season => {
            season.searchName = '';
            season.sortBy = 'default';
            return season;
        })
    }
    onSesasonSelectHandler = event => {
        //console.log(event);
        this.setState({
            currentSeason: event.target.value
        });
    }
    onChangeHandler = (event, filter) => {
        //console.log(event.target.value);
        const seasons = this.state.modifiedSeasons;
        const seasonId = this.state.currentSeason;
        const seasonObj = this.state.modifiedSeasons[seasonId];
        const updatedObj = {...seasonObj, [filter]: event.target.value};
        const newSeasons = [...seasons];
        newSeasons[seasonId] = updatedObj;
        this.setState({
            modifiedSeasons: newSeasons
        });
    }
    sortEpisodes = (sortBy, episodes) => {
        if(sortBy === 'default'){
            return episodes;
        }else {
            return episodes.sort((a,b) => {
                        if(a[sortBy] < b[sortBy]) return -1;
                        if(a[sortBy] > b[sortBy]) return 1;
                        return 0;
                   });
        }
    }
    searchEpisodes = (name, episodes) => {
        return episodes.filter(episode => {
            return episode.title.toLowerCase().includes(name.toLowerCase());
        })
    }
    render(){
        //console.log('Invoking render method');
        const seasons = this.state.modifiedSeasons || [];
        const currentSeason = this.state.currentSeason;
        const seasonObj = this.state.modifiedSeasons[currentSeason];
        let episodes = seasonObj['show_episodes'];
        episodes = this.searchEpisodes(seasonObj.searchName, episodes);
        episodes = this.sortEpisodes(seasonObj.sortBy, episodes);
        return (
            <div>
                <SeasonSelect seasons={seasons} currentSeason={currentSeason} 
                        onSesasonSelectHandler={this.onSesasonSelectHandler}/>
                <hr/>
                <EpisodeSearchBar seasonObj={seasonObj} onChangeHandler={this.onChangeHandler}/>
                <Episodes episodes={episodes}/>
            </div>
        );
    }
}
export default Seasons;