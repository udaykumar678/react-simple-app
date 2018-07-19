import React from 'react';

const showSelect = (props) => (
    <div className="card" style={{marginBottom:'10px'}}>
        <div className="form-group row" style={{ padding: '0px 20px' }}>
            <label htmlFor="showSelect" className="col-6 col-form-label">
                <b>Select Shows:</b><br />
                <select value={props.showId} className="form-control"
                     id="showSelect" onChange={props.onShowChangeHandler}>
                            {props.shows.map((show, i) => <option key={i+5} 
                                    value={show.showId}>{show.name}
                                </option>)}
                </select>
            </label>
        </div>
    </div>
);

export default showSelect;