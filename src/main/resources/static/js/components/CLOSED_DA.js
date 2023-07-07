const userAnswers = { "answers": [] };
const examJSON = {
    "examen": {
        "acumulador": 0,
        "no_pregs": 5,
        "preguntas": [
            {
                "apartado": 1,
                "id": 1,
                "descripcion": "Instrucciones: Seleccione la opción correcta.",
                "pregunta": "¿Cuándo fue promulgada la LPI (La Ley de la Propiedad Industrial)?",
                "imageUrl": "",
                "tipo": "MULTI",
                "opciones": ["1988","1999","1995","1991"],
                "respuestaUsuario": "",
                "respuestaCorrecta": "1991"
            },
            {
                "apartado": 1,
                "id": 2,
                "descripcion": "Instrucciones: Seleccione la opción correcta.",
                "pregunta": "¿Qué es lo que protege la (LPI)?",
                "imageUrl": "",
                "tipo": "MULTI",
                "opciones": [
                    "La LPI protege las invenciones, que incluyen patentes y modelos de utilidad.",
                    "Protege las marcas, diseños industriales, denominaciones de origen.",
                    "Protege secretos industriales y conocimientos técnicos.",
                    "Todas las anteriores."
                ],
                "respuestaUsuario": "",
                "respuestaCorrecta": "Todas las anteriores."
            },
            {
                "apartado": 1,
                "id": 3,
                "descripcion": "Instrucciones: Seleccione la opción correcta.",
                "pregunta": "¿Cúal es la duración de la patente?",
                "imageUrl": "",
                "tipo": "MULTI",
                "opciones": [
                    "5 años.",
                    "10 años.",
                    "20 años.",
                    "16 años."
                ],
                "respuestaUsuario": "",
                "respuestaCorrecta": "20 años."
            },
            ]
    }
};

const FinalComponent = () => {

    const { useState } = React;
    const [state, setState] = useState({});

    const sendAnswers = (ev) => {

        ev.preventDefault();
        //console.log(document.querySelector('meta[name="username"]').content);
        document.cookie = 'finished=true';

        userAnswers.username = document.querySelector('meta[name="username"]').content;

        const requestOptions = {
            method: 'POST',
            authorization: 'user',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userAnswers)
        };
        fetch('/exam/end', requestOptions)
            .then(response => response.json())
            .then(data => console.log(data) );

        alert("¡Las respuestas han sido enviadas!")
        alert("Puede cerrar esta pestaña...")

        console.log(userAnswers);
        //ev.preventDefault();
    }
    return (
        <div className="final_container">
            <div className="">
                <h2>
                    ¡Has terminado la evaluación!
                </h2>
            </div>
            <a href="/exam/end" className="acepto_a-return enviar-respuestas" onClick={sendAnswers}>
                Enviar respuestas
            </a>
        </div>
    )
}

const QuestionComponent = ({change, description, type, question, questionNumber, options, section, correctAnswer}) => {
    const { useState} = React;

    const [answered, setAnswered] = useState(false);
    const [value, setNewValue] = useState(questionNumber);

    function handleChange(event) {
        let _qn =  questionNumber;
        setNewValue(_qn + 1);
        change(value);
    }

    document.querySelectorAll('.answer').forEach((ans) => ans.classList.remove('selected'))
    //console.log(answered);

    const mapArr = (arr) => {
        const mapping = {
            1: "Totalmente en desacuerdo",
            2: "Desacuerdo",
            3: "De acuerdo",
            4: "Totalmente de acuerdo"
        }
        return options.map(e => mapping[e]);
    }

    //console.log(options)
    // console.log(answered)

    let mappedArr = []
    if(options) {
        mappedArr = mapArr(options)
    } else {
        mappedArr = []
    }

    // Mappeo de imágenes
    const mapImages = (id) => {
        const mapping = {
            133: "../../images/A6-R0.png",
            136: "../../images/A6-R3.png",
            138: "../../images/A6-R5.png",
            139: "../../images/A6-R6.png",
            142: "../../images/A6-R9.png",
            143: "../../images/A6-R10.png"
        }
        if(mapping.hasOwnProperty(id)) {
            return mapping[id]
        } else {
            return null;
        }

    }
        // console.log(mapImages(questionNumber))

    const selectClosedAnswer = (e) => {
        if(! e.target.classList.contains('selected')) {
            document.querySelectorAll('.answer').forEach((ans) => ans.classList.remove('selected'))
            e.target.classList.add("selected");
        }
    }

    const selectOpenAnswer = (e) => {
        e.target.classList.add('selected')
        // setAnswered(true);
    }

    const goToNextQuestion  = (e) => {

        document.querySelectorAll(".answer").forEach(answer => {

            if(answer.classList.contains('selected')) {
                setAnswered(true);
                answer.checked = false;

                if(answer.value != null) {
                    userAnswers.answers.push(
                        {
                            "question": questionNumber,
                            "section": section,
                            "answer": answer.value,
                            "correctAnswer": correctAnswer.toString()
                        }
                    )
                }
                answer.value = "";
                setAnswered(false);
                //alert(answer.value)
                handleChange(e)
            }  else {
                return null;
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
                if(mapImages(questionNumber) == null) {
                    return (
                        <div className="pregunta-opcion-abierta">
                            <input name="answer"  className="answer" type="text" onClick={ev => {selectOpenAnswer(ev)} }/>
                        </div>
                    )
                } else {
                    return (
                        <div className="pregunta-opcion-abierta">
                            <img className="open-image multi-image answer selected" src={mapImages(questionNumber)}></img>
                            <input name="answer" style={{ margin:"80px 20px" }} className="answer" type="text" onClick={ev => {selectOpenAnswer(ev)} }/>
                        </div>
                    )

                }


            case 'SAMPLE':
                return (
                    <div className="pregunta-opcion-abierta-img">
                        <img className="open-image answer selected" src={mapImages(questionNumber)}></img>
                        <b className="sample-warning">Esto es una pregunta de ejemplo y no debe ser respondida, de clic en siguiente para continuar respondiendo.</b>
                    </div>
                )
            case 'MULTI':
                return ([...options].map(opc => {
                    return (
                        <div key={opc} className="pregunta-opcion pregunta-opcion-multi">
                            <input className="answer" id={opc} value={opc} type="radio" name="answer" onClick={e => { selectClosedAnswer(e)
                            }}/>
                            <label htmlFor={opc}>{opc}</label>
                        </div>
                    )
                }))
        }
    }

    return(
        <div className="question_container">
            <div className="info_container">
                <h3>
                    Pregunta { questionNumber }
                </h3>
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

const ParentComponent = () => {
    const { useState } = React;

    let [currentQuestion, setCurrentQuestion] = useState(startedQuestion - 1);
    function handleState(newValue) {
        setCurrentQuestion(newValue);
    }


    // console.log(JSON.stringify(userAnswers));
    //**
    // Enviar estado
    //

    const questionComponents = questions.map( q => {
        return(
            <QuestionComponent
                change={handleState}
                description={ q.descripcion}
                questionNumber={ q.id}
                type={ q.tipo }
                question={ q.pregunta }
                options={ q.opciones }
                section={ q.apartado }
                correctAnswer= { q.respuestaCorrecta}
            />
        )})

    //console.log(currentQuestion);

    return (
        <>
            {
                questionComponents[currentQuestion] != null ? questionComponents[currentQuestion] : <FinalComponent/>
                /*

                                questionComponents[148]

                questionComponents.map(question => {
                    return question
                })
                */
            }
        </>
    )
}
//const sampleQuestion = "Trato de solucionar los problemas antes de que se hagan más grandes";
//const opciones = ['Totalmente Desacuerdo','Desacuerdo','Deacuerdo','Totalmente Deacuerdo'];


const questions = examJSON.examen.preguntas;

// Tipos de preguntas:
// - CLOSED_DA
// - CLOSED_DA
// - OPEN

let startedQuestion = 1;


if(document.cookie !== 'finished=true') {
    ReactDOM.render(

        <>
            <ParentComponent/>
            {/*
                        <FinalComponent/>


                    */}
        </>
        ,document.getElementById("app")
    );
}

// Tipos de preguntas:
// - CLOSED_DA
// - CLOSED_DA
// - OPEN



if(document.cookie !== 'finished=true') {
    ReactDOM.render(

        <>
            <ParentComponent/>
            {/*
                        <FinalComponent/>


                    */}
        </>
        ,document.getElementById("app")
    );
}