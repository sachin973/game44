import { useState,useEffect,useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { Image } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./GameSelect.scss";
import mode1Img from "../../../assets/img/select_game_random.png";
import mode2Img from "../../../assets/img/select_game_friend.png";
import mode3Img from "../../../assets/img/select_game_computer.png";
import song from "../../../assets/audio/gameselect.mp3";
import UserFormModal from "../UserInfo/index";
import useSound from "use-sound";
import { Button } from 'react-bootstrap';


export const GameSelect = () => {
    const [show, setShow] = useState(false);
      const [isSaved, setIsSaved] = useState(false);
        const [username, setUsername] = useState('');
  const [playSong] = useSound(song);
  const navigate = useNavigate();
  const handleShow = useCallback(() => setShow(true), []);
  const handleClose = useCallback(() => setShow(false), []);
  const matchPlayAction = () => {
    navigate("/matchPlay");
    playSong();
  };

  const friendPlayAction = () => {
    navigate("/friendPlay");
    playSong();
  };

  const machinePlayAction = () => {
    navigate("/machinePlay");
    playSong();
  };

  return (
    <div className="GameSelect">
      <div className="position-absolute" style={{right:"10px",top: "6px"}}>
           {!isSaved ? (
              <Button    className="w-fit" variant="primary" onClick={handleShow}>
                Open Form
              </Button>
            ) : (
              <h5 className="text-white">{username}</h5>
            )}
            </div>
      <div className="u-container ">
        <div className="u-ribbon">Select game</div>
        <div className="u-content">
          <div className="u-item" onClick={matchPlayAction}>
            <Image className="u-item-image" src={mode1Img}></Image>
            <div className="u-item-text">Match with Random User</div>
          </div>
          <div className="u-item" onClick={friendPlayAction}>
            <Image className="u-item-image" src={mode2Img}></Image>
            <div className="u-item-text">Match with Friend</div>
          </div>
          <div className="u-item" onClick={machinePlayAction}>
            <Image className="u-item-image" src={mode3Img}></Image>
            <div className="u-item-text">Match with Computer</div>
          </div>
        </div>
      </div>
      <UserFormModal show={show}  setShow={setShow} isSaved={isSaved} username={username} setUsername={setUsername} setIsSaved={setIsSaved} handleShow={handleShow} handleClose={handleClose}/>
    </div>
  );
};

export default GameSelect;
