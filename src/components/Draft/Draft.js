import React from 'react';
import './Draft.css';

const Draft = (props) => {
    // console.log(props.player, 'draft');
    const player = props.player;
    const salary = props.player.reduce((salary, property) => salary + (property.salary), 0);
    // const fee = props.player.salary +" "
    let name = [];
    let fee = [];

    for (let i = 0; i < props.player.length; i++) {
        const element = props.player[i];
        name = name + " " + element.name + " |";
    }

    for (let i = 0; i < props.player.length; i++) {
        const element = props.player[i];
        fee = fee + " " + element.salary + " |";
    }


    return (
        <div>
            <h3>Player Draft List</h3>
            <p><h5 style={{ display: 'inline' }}>Total Player :</h5> {player.length}</p>
            <p><h5>Player Name :</h5>{name}</p>
            <p><h5>Player Salary :</h5> ${fee}</p>
            <h6 style={{ fontWeight: '600' }}>Total Cost : ${salary}</h6>
        </div>
    )
};

export default Draft;