import React from 'react';

const episodeSearchBar = (props) => (
    <div className="row" style={{ padding: '0px 20px' }}>
        <div className="col-4">
            <input className="form-control" width="40px"
                placeholder="Enter Episode to seach" value={props.seasonObj.searchName}
                onChange={event => props.onChangeHandler(event, 'searchName')} />
        </div>
        <div className="col-2"></div>
        <div className="col-6">
            <div className="form-group row">
                <label htmlFor="sortBy" className="col-4 col-form-label">
                    <b>Sort By:</b>
                </label>
                <div className="col-8">
                    <select className="form-control" id="sortBy"
                        value={props.seasonObj.sortBy}
                        onChange={event => props.onChangeHandler(event, 'sortBy')}>
                        <option value="default">Please choose one</option>
                        <option value="title">Name</option>
                        <option value="caption">Caption</option>
                    </select>
                </div>
            </div>
        </div>
    </div>
);

export default episodeSearchBar;