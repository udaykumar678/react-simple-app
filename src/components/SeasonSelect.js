import React from 'react';

const seasonSelect = (props) => (
    <div className="form-group row" style={{ padding: '0px 20px' }}>
        <label htmlFor="seasonSelect" className="col-6 col-form-label">
            <b>Select Seasons:</b><br />
            <select className="form-control" id="seasonSelect"
                value={props.currentSeason} onChange={props.onSesasonSelectHandler}>
                {props.seasons.map((season, i) => {
                    return (
                        <option key={i} value={i}>{"Season " + (i + 1) + " (" + season.slug + ")"}</option>
                    );
                })}
            </select>
        </label>
    </div>
);

export default seasonSelect;