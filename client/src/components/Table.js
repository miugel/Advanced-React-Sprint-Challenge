import React from 'react';

const Table = props => (
    <div className='table'>
        <div className='table-heading' data-testid='table-heading'>
            <p>Rank</p>
            <p>Name</p>
            <p>Country</p>
            <p>Searches</p>
        </div>
        {props.state.players.map(item => (
            <div key={item.id} className='table-row'>
                <p>{item.id + 1}</p>
                <p>{item.name}</p>
                <p>{item.country}</p>
                <p>{item.searches}</p>
            </div>
        ))}
    </div>
);

export default Table;