import React, { useEffect, useState } from 'react';
import './Team.css';
// import fakeData from '../../fakeData/MOCK_DATA.json';
import Cricketer from '../Cricketer/Cricketer';
import Draft from '../Draft/Draft';

const Team = () => {
    // const first15 = fakeData.slice(0, 15);
    const [profiles, setProfiles] = useState([]);
    const [player, setPlayer] = useState([]);

    useEffect(() => {
        fetch('https://mocki.io/v1/c708602b-69ab-4576-8f87-8f0bdfeedc43')
            .then(res => res.json())
            .then(data => {
                const first15 = data.slice(0, 15);
                setProfiles(first15)
            })
            .catch(error => console.log(error))
    }, [])


    const selectPlayer = (profile) => {
        // console.log("click");
        const newPlayer = [...player, profile];

        setPlayer(newPlayer);
    }


    return (
        <div>
            <h2 className='line'>Cricketer Profiles </h2>
            <div className='team-container'>
                <div className='cricketers'>
                    {
                        profiles.map(profile => <Cricketer profile={profile} selectPlayer={selectPlayer} key={profile.id}></Cricketer>)

                    }
                </div>

                <div className='draft'>
                    <Draft player={player}></Draft>
                    {/* <h2>total player : {player.length}</h2> */}

                </div>
            </div>
        </div>

    );
};

export default Team;