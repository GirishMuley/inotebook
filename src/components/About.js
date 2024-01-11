import React from "react";
const About = () => {
  return (
    <div>
      <>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <style
          dangerouslySetInnerHTML={{
            __html:
              "\n.card {\n  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);\n  transition: 0.3s;\n  width: 40%;\n  \n}\n.center {\n  margin: auto;\n  width: 50%;\n  border: 3px solid yellow;\n  padding: 10px;\n}\n\n.card:hover {\n  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);\n}\n\n.container {\n  padding: 2px 16px;\n}\n",
          }}
        />
        <div className="card center">
          <div className="container">
            <h4>
              <b>Girish Muley</b>
            </h4>
            <p>
              <strong>Email :</strong>GirishMuley@outlook.com
            </p>
            <p>
              <strong>Phone :</strong>8308170274
            </p>
          </div>
        </div>
      </>
    </div>
  );
};

export default About;
