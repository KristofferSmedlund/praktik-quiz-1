import React, { useState } from "react";
import Avatar, { genConfig } from "react-nice-avatar";
import image1 from "./1.png";
import image2 from "./2.png";
import image3 from "./3.png";
import image4 from "./4.png";
import image5 from "./5.png";
import image6 from "./6.png";

export default function AvatarPicker({ setIsDone, setName }) {
  const [pickedImage, setPickedImage] = useState(1);
  const [nick, setNick] = useState("");

  const isPicked = (num) => {
    return num === pickedImage;
  };

  const onDone = () => {
    setIsDone(true);
    setName(nick);
  };

  return (
    <div className="avatar-container">
      <h1>Välj din avatar</h1>

      <input
        className="name-input"
        placeholder="Namn"
        value={nick}
        onChange={(e) => {
          setNick(e.target.value);
        }}
      />
      <div className="avatar-picker">
        <img
          className={
            isPicked(1) ? "image-picked profile-photo" : "profile-photo"
          }
          src={image1}
          alt={"Carlie Anglemire"}
          height={"400px"}
          onClick={() => setPickedImage(1)}
        />
        <img
          className={
            isPicked(2) ? "image-picked profile-photo" : "profile-photo"
          }
          src={image2}
          alt={"Carlie Anglemire"}
          height={"400px"}
          onClick={() => setPickedImage(2)}
        />
        <img
          className={
            isPicked(3) ? "image-picked profile-photo" : "profile-photo"
          }
          src={image3}
          alt={"Carlie Anglemire"}
          height={"400px"}
          onClick={() => setPickedImage(3)}
        />
        <img
          className={
            isPicked(4) ? "image-picked profile-photo" : "profile-photo"
          }
          src={image4}
          alt={"Carlie Anglemire"}
          height={"400px"}
          onClick={() => setPickedImage(4)}
        />
        <img
          className={
            isPicked(5) ? "image-picked profile-photo" : "profile-photo"
          }
          src={image5}
          alt={"Carlie Anglemire"}
          height={"400px"}
          onClick={() => setPickedImage(5)}
        />
        <img
          className={
            isPicked(6) ? "image-picked profile-photo" : "profile-photo"
          }
          src={image6}
          alt={"Carlie Anglemire"}
          height={"400px"}
          onClick={() => setPickedImage(6)}
        />
      </div>

      <button className={"done-button"} onClick={() => onDone()}>
        Klar
      </button>
    </div>
  );
}
