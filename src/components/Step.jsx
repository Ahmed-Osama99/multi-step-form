import '../style/Step.css'
function Step(props){
    return(<div className={props.isActive ? 'step active' : 'step'} >
        <div className="step__order">{props.stepOrder}</div>
        <div className="step__name">
            <span className="step__name__head">step {props.stepOrder}</span>
            <span className="step__name__body">{props.stepName}</span>
        </div>
    </div>)
}

export default Step