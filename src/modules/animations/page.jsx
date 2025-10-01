import { useState, useEffect } from "react";
import image from '../../assets/images/sequences/image.png';
import "./style.css";

function SequenceItem({data, i, ActiveSequenceFunction, setActiveSequence, setActivePreview}) {

  // Fonction du click sur la séquence

  function handleClick(e) {
    e.preventDefault();
    setActiveSequence(ActiveSequenceFunction);
    setActivePreview("OK");
  }

  return (<>
    <div className="AnimationSequenceContainer" onClick={handleClick}>
      <div>
        <img alt="aperçu de séquence" src={image} style={{height:"100px",width:"100px"}}/>
      </div>

      <div className="AnimationSequenceInfoCont">
        <div className="AnimationSequenceInfoTitle">
          {data[i]?.title}
        </div>
        <div className="AnimationSequenceInfoDescr">
          {data[i]?.description}
        </div>
      </div>

      <div>
        {data[i]?.order}
      </div>

      <div style={{paddingLeft:"2%"}}>
        {data[i]?.duration}
      </div>
    </div>  
  </>)  
}

function AnimationsPage() {
  
  let i = 0;
//------------------------------------------------------------------------------------------
//                                        Séquences
//------------------------------------------------------------------------------------------

// State de la vidéo de la séquence active
  const [ActivePreview, setActivePreview] = useState("");

// Affichage de l'aperçu de séquence activée, désactivée 
  function ActiveSequenceFunction() {
    return(<>
      <div>         
        Active
        {ActivePreview}
      </div>
    </>);
  }

  function DesactiveSequenceFunction() {
    return(            
      <div className="AnimationSequencePreviewCont">
        <p>
          Désactivé
        </p>
      </div>
    );
  }

// State de la séquence active + son aperçu

  const [ActiveSequence, setActiveSequence] = useState(DesactiveSequenceFunction);

//------------------------------------------------------------------------------------------
//                                      Données mockées
//------------------------------------------------------------------------------------------

  const [Data, setData] = useState("");

/*                                                  /\
   Récupération des données via useState Sequences /||\
                                                    ||
                                                    ||
*/
  useEffect(() => {
    fetch("/mocks/sequence.json")
        .then(response => {
          if (!response.ok) {
            throw new Error("Error");
          }
          return response.json();
        })
        .then(data => {
          setData(data)
          console.log("Fetch succes, update: ", data);

        })
        .catch(error => {
          console.log("Catch Error : ", error);
        })
    }, []);

//------------------------------------------------------------------------------------------

    useEffect(()=> {
      let video = document.createElement('video');
      video.src = Data[i]?.file;
      video.controls = true;
      video.width = 640;

      setActivePreview(video)
    }, [ActiveSequence])


  return (<>
      <div className="AnimationContainer">
            
            <div className="AnimationSequencePreviewCont">
              <video src={ActivePreview}/>
            </div>

            <div>
              
            </div>
            <div className="AnimationSequenceTitles">
              <p>Séquences :</p>
              <p>Position</p>
              <p>Durée</p>
              </div>
            <div className="AnimationSequencesListCont">

            <SequenceItem i={0} data={Data} ActiveSequenceFunction={ActiveSequenceFunction} setActiveSequence={setActiveSequence} setActivePreview={setActivePreview}/>
            <SequenceItem i={1} data={Data} ActiveSequenceFunction={ActiveSequenceFunction} setActiveSequence={setActiveSequence} setActivePreview={setActivePreview}/>
            <SequenceItem i={2} data={Data} ActiveSequenceFunction={ActiveSequenceFunction} setActiveSequence={setActiveSequence} setActivePreview={setActivePreview}/>
            </div>
      </div>
  </>)
}

export default AnimationsPage;
