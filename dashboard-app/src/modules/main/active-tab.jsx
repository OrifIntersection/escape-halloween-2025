//import React 
import { useState } from "react";

function NoActiveSequencePreview() {
  return (
    <div style={{}} className="AnimationSequencePreviewCont">
      <p className="AnimationSequenceP">
        Désactivé
      </p>
    </div>
  );
}

function ActiveSequencePreview({sequence}) {
  return (<>
    <div style={{ overflow: "hidden" }} className="AnimationSequencePreviewCont">
      <video style={{ objectFit: "contain", width: "100%", height: "100%" }} controls={true} src={sequence.file} type="video/mp4" autoPlay muted playsInline />
    </div>
  </>);
}

function DashboardMainActiveTab({activeSequence}) {
  
  return (
    <section className="MainElementActive">
        {(activeSequence) ? <ActiveSequencePreview sequence={activeSequence} /> : <NoActiveSequencePreview />}
    </section>
  )
}

export default DashboardMainActiveTab