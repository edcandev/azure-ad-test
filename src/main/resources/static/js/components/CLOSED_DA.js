const CLOSED_DA = ({question, options}) => {
    return(
        <div className="pregunta_container">
            <h2>
                {question}
            </h2>
            <div>
                <ul>
                    {options.map( op => op)
                    }
                </ul>
            </div>
        </div>
    )
}

const CLOSED_AD = () => {
    return(
        <div>
            <h2>
                PREGUNTA
            </h2>
            <div>
                <ul>
                    <li>OPC_1</li>
                    <li>OPC_2</li>
                    <li>OPC_3</li>
                    <li>OPC_4</li>
                </ul>
            </div>
        </div>
    )
}

ReactDOM.render(<CLOSED_DA question={"Pregunta...?"} options={[1,2,3,4]}/>,document.querySelector("#app"));
