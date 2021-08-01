import React from "react";
import Lightbox from "react-lightbox-pack"; // <--- Importing LightBox Pack
import "react-lightbox-pack/dist/index.css";

const Modal = () => {
  // State
  const [toggle, setToggle] = React.useState(false);
  const [sIndex, setSIndex] = React.useState(0);

  // Handler
  const lightBoxHandler = (state, sIndex) => {
    setToggle(state);
    setSIndex(sIndex);
  };

  return (
    <div>
      {data.map((item, index) => (
        <>
          <img
            key={item.id}
            src={item.image}
            alt={item.title}
            style={{ maxHeight: "80vh", maxWidth: "50vw" }}
            onClick={() => {
              lightBoxHandler(true, index);
            }}
          />
        </>
      ))}
      //Component
      <Lightbox
        state={toggle}
        event={lightBoxHandler}
        data={data}
        imageWidth="60vw"
        imageHeight="70vh"
        thumbnailHeight={50}
        thumbnailWidth={50}
        setImageIndex={setSIndex}
        imageIndex={sIndex}
      />
    </div>
  );
};
export default Modal;
