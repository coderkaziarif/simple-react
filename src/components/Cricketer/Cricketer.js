import React from 'react';
import './Cricketer.css';
// <=====Bootstrap Added====>
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Card } from 'react-bootstrap';
// <=====FontAwesomeIcon Added====>
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCheck } from '@fortawesome/free-solid-svg-icons';

const Cricketer = (props) => {
    // console.log(props, "cricket");
    const { img, name, playingRole, age, country, email, team, wages } = props.profile;
    const selectPlayer = props.selectPlayer;

    return (
        <div className='player'>
            <div>
                <img src={img} alt="" />
            </div>
            <div className="player-info">
                {/* Using Bootstrap Card */}
                <Card className='card-container'>

                    <Card.Body className='card-body mb-4 mx-5 px-5'>
                        <Card.Title className='title lineB mb-2'>{name}</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">{playingRole}</Card.Subtitle>
                        <Card.Subtitle className="mb-2 text-muted">Age : {age}</Card.Subtitle>
                        <Card.Subtitle className="mb-2 text-muted">Country : {country}</Card.Subtitle>
                        <Card.Subtitle className="mb-2 text-muted">Email : {email}</Card.Subtitle>
                        <Card.Subtitle className="mb-2 text-muted">Team : {team}</Card.Subtitle>
                        <Card.Subtitle className="mb-5 text-muted"><small>Yearly Income : ${wages}</small></Card.Subtitle>
                        <footer className="blockquote-footer">
                            Someone famous in <cite title="Source Title">Source Title</cite>
                        </footer>

                        <Button onClick={() => selectPlayer(props.profile)} variant="danger">
                            <FontAwesomeIcon icon={faUserCheck} /> Select</Button>
                    </Card.Body>
                </Card>
            </div>
        </div>

    )
};

export default Cricketer;