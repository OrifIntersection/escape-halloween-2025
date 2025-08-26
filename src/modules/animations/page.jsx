import "./style.css";
import "../../mocks/sequence.json";


function SequenceItem() {

fetch("sequence.json")
.then(response => {
  if (!response.ok) {
    throw new Error("Error");
  }
})

  return (<>
    <div>
      <div>
        <img alt="Preview" src="../../assets/images/sequences/image.png" style={{}}/>
      </div>
      <div></div>
      <div></div>
      <div></div>
    </div>
    
    
    <h1>Hello</h1>
  </>)  
}

function AnimationsPage() {


  return (<>
      <div className="AnimationContainer">
            <div className="AnimationSequencePreviewCont">
              <p>Aperçu</p>
            </div>
            <div>
    
            </div>
            <div className="AnimationSequencesListCont">
            <SequenceItem/>
          
            </div>
      </div>
  </>)
}

export default AnimationsPage;
