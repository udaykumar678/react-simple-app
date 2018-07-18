import React from 'react';
import renderHTML from 'react-render-html';

const episodes = (props) => props.episodes.map((episode, i) => {
    return (
        <div className="card" key={i} style={{padding:'10px',margin: '10px'}}>
            <h5  className="card-title">Episode Name:</h5>  
            <p className="card-title">{episode.title}</p>
            <h5  className="card-title">Caption:</h5>  
            <p className="card-title">{episode.caption}</p>
            {episode['picture_url'] ? <img src={episode['picture_url']}
                   style={{width: '100%', height:'300px'}} alt={episode.title}/>: null} 
            {renderHTML(episode.description)}
        </div>
    );
});

export default episodes;