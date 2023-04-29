let currentQuestion = 1;

const QuestionComponent = ({change, description, type, question, questionNumber, options}) => {

    const { useState} = React;

    const [answered, setAnswered] = useState(false);
    const [value, setNewValue] = useState("");

    function handleChange(event) {
        let value = event.target.value;
        setNewValue(value);
        change(value);
    }


    console.log(answered);

    if(answered) {
        currentQuestion++;
        return(<>
            </>
        )
    }

    const mapArr = (arr) => {
        const mapping = {
            1: "Completamente Desacuerdo",
            2: "Desacuerdo",
            3: "Deacuerdo",
            4: "Completamente Deacuerdo"
        }
        return options.map(e => mapping[e]);
    }

    const mappedArr = mapArr(options)

    const selectClosedAnswer = (e) => {
        if(! e.target.classList.contains('selected')) {
            document.querySelectorAll('.answer').forEach((ans) => ans.classList.remove('selected'))
            e.target.classList.add("selected");
        }
    }

    const selectOpenAnswer = (e) => {
        e.target.classList.add('selected')
    }

    const goToNextQuestion  = (e) => {
        document.querySelectorAll(".answer").forEach(answer => {
            if(answer.classList.contains('selected')) {
                setAnswered(true);
                alert(answer.value)

            }
        })
    }

    const defineQuestionType = (type) => {
        switch(type) {

            case 'CLOSED_AD':
                mappedArr.reverse();
                return (mappedArr.map(opc => {
                    return (
                        <div key={opc} className="pregunta-opcion">
                            <input className="answer" id={opc} value={opc} type="radio" name="answer" onClick={e => { selectClosedAnswer(e)
                            }}/>
                            <label htmlFor={opc}>{opc}</label>
                        </div>
                    )
                }))

            case 'CLOSED_DA':
                return ( mappedArr.map(opc => {
                    return (
                        <div key={opc} className="pregunta-opcion">
                            <input className="answer" id={opc} value={opc} type="radio" name="answer" onClick={e => { selectClosedAnswer(e)
                            }}/>
                            <label htmlFor={opc}>{opc}</label>
                        </div>
                    )
                }))
            case 'OPEN':
                return (
                    <div className="pregunta-opcion-abierta">
                        <input name="answer"  className="answer" type="text" onClick={ev => {selectOpenAnswer(ev)} }/>
                    </div>
                )
        }
    }

    return(
        <div className="question_container">
            <div className="info_container">
                <h3>
                    Pregunta { questionNumber }
                </h3>
                <img className="info_img" src="../../images/Logo.jpeg" alt=""/>
            </div>
            <h3 className="descripcion_container">{description}</h3>
            <div className="pregunta_container">
                <h2 className="pregunta_container-h2"> {question} </h2>
                <form className="pregunta-opciones_container">

                    {defineQuestionType(type)}
                </form>
            </div>
            <div className="siguiente_container" onClick={(e) => {
                goToNextQuestion(e)
            }
            }>
                Siguiente Pregunta
            </div>
        </div>
    )
}

const sampleQuestion = "Trato de solucionar los problemas antes de que se hagan más grandes";

const opciones = ['Totalmente Desacuerdo','Desacuerdo','Deacuerdo','Totalmente Deacuerdo'];

const JSONSample = {
    "apartado1": {
        "acumulador": 0,
        "no_pregs": 36,
        "instrucciones": "Estas son las instrucciones, asu...",
        "preguntas": [
            {
                "tipo": "CLOSED_AD",
                "pregunta": "Si un vendedor hizo un gran esfuerzo para mostrarme un producto que no me convence del todo, es difícil para mí decirle que no.",
                "opciones": [1, 2, 3, 4],
                "id": 1,
                "respuestaUsuario": " ",
                "respuestaCorrecta:": " "
            },
            {
                "tipo": "CLOSED_AD",
                "pregunta": "Me identifico con personas que trabajan muy duro pero que no consiguen sus objetivos.",
                "opciones": [1, 2, 3, 4],
                "id": 2,
                "respuestaUsuario": " ",
                "respuestaCorrecta:": " "
            },
            {
                "tipo": "CLOSED_DA",
                "pregunta": "Prefiero presentar una solicitud por escrito para contratarme o inscribirme que pasar por una entrevista.",
                "opciones": [1, 2, 3, 4],
                "id": 3,
                "respuestaUsuario": " ",
                "respuestaCorrecta:": " "
            }]
    }
};

const questionNumber = JSONSample.apartado1.no_pregs;

const questions = JSONSample.apartado1.preguntas;

// Tipos de preguntas:
// - CLOSED_DA
// - CLOSED_AD
// - OPEN


const ParentComponent = () => {
    let [currentQuestion, setQurrentQuestion] = useState(1);
    function handleState(newValue) {
        setState(currentQuestion++);
    }


    const refresh = () => {}

    return (
        <>
            {
                questions.map( q => {
                    if(q.id == currentQuestion) {
                        return(
                            <QuestionComponent
                                change = {handleState}
                                description={ JSONSample.apartado1.instrucciones}
                                questionNumber={ q.id}
                                type={ q.tipo }
                                question={ q.pregunta }
                                options={ q.opciones } />
                        )
                    } else {
                        return (<>
                        </>)
                    }
                })
            }

        </>
    )
}

ReactDOM.render(
    <ParentComponent/>
    ,document.getElementById("app"));

    /*
    questions.map( q => {
        return(
            <QuestionComponent
                description={ JSONSample.apartado1.instrucciones}
                questionNumber={ q.id}
                type={ "OPEN" }
                question={ q.pregunta }
                options={ q.opciones } />
        )
    })*/
