import React from "react";
import Notes from "./Notes";

const Home = (props) => {
  const { showAlert } = props;
  const { setColor } = props;
  return (
    <div>
      <Notes showAlert={showAlert} />
    </div>
  );
};

export default Home;
