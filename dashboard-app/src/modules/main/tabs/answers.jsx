//import React 
import { useState, useEffect } from "react";
//import components

//import assets
import image from "../../../../public/mocks/images/sequences/image.png"

//import styles 
import "./style.css";

function InputHistory({ input }) {
  return (<>
    <div className="InputHistory">
      <div className="InputHistoryPosition">
        {input.answersId}
      </div>
      <div className="InputHistoryContent">
        {input.content}
      </div>
    </div>
    <hr className="hrInput"/>
  </>)
}

function DashboardMainAnswersTab({ setActiveSequence }) {
  const [input, setInput] = useState(null);
  const [resp, setResp] = useState("Salutt")

  useEffect(() => {
    fetch("/mocks/input.json")
      .then(response => {
        if (!response.ok) {
          throw new Error("Error");
        }
        return response.json();
      })
      .then(data => {
        setInput(data)
      })
      .catch(error => {
        console.log("Catch Error : ", error);
      })
  }, []);

  return (
    <div className="AnswersContainer">
      <div className="AnswersUserResponse">
        <h2>Retour de l'utilisateur : </h2>
          {resp}
      </div>
      <div className="AnswersHistory">
        {
          (input) ? <>
            {input.inputs.map((inputHistory, index) => <InputHistory input={inputHistory} key={index} />)}
          </> : <> <h2>Loading answers...</h2></>
        }
      </div>
    </div>
  )
}

export default DashboardMainAnswersTab
