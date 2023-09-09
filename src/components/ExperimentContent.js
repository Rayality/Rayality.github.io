
export default function Experiment(props) {

    return (
        <div className='experiment-container'>
            <div className="experiment-description">
                <h4>
                    {props.title}
                </h4>
                <p>
                    {props.description}
                </p>
            </div>
            <button className='exp-button' onClick={props.click} name={props.title}>
                <img name={props.title} src={props.picture} alt='#'/>
            </button>
        </div>
    )
}
