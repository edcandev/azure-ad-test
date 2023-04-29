const QuestionComponent = ({description, type, question, questionNumber, options}) => {

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

    const defineQuestionType = (type) => {

        switch(type) {

            case 'CLOSED_AD':
                mappedArr.reverse();
                return (mappedArr.map(opc => {
                    return (
                        <div key={opc} className="pregunta-opcion">
                            <input id={opc} value={opc} type="radio" name="answer"/>
                            <label htmlFor={opc}>{opc}</label>
                        </div>
                    )
                }))

            case 'CLOSED_DA':
                return ( mappedArr.map(opc => {
                    return (
                        <div key={opc} className="pregunta-opcion">
                            <input id={opc} value={opc} type="radio" name="answer"/>
                            <label htmlFor={opc}>{opc}</label>
                        </div>
                    )
                }))
            case 'OPEN':
                return (
                    <div>
                        <input type="text"/>
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
            <div className="siguiente_container">
                Siguiente Pregunta
            </div>
        </div>
    )
}
/*
const OPEN = ({description, type, question, questionNumber, options}) => {

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

                    <label htmlFor={opc}>{opc}</label>
                    <input id={opc} value={opc} type="radio" name="answer"/>

                </form>
            </div>
            <div className="siguiente_container">
                Siguiente Pregunta
            </div>
        </div>
    )

}
*/
/*
const CLOSED_AD = ({description, question, questionNumber, options}) => {

    options.reverse()

    const selectOption = (e) => {
        if(! e.target.classList.contains('selected')) {
            e.target.classList.add('selected')
        } else {
            e.target.classList.remove('selected')
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
                    {
                        options.map(opc => {
                            return (
                                <div className="pregunta-opcion">
                                    <input id={opc} value={opc} type="radio" name="answer"/>
                                    <label htmlFor={opc}>{opc}</label>
                                </div>
                            )
                        })
                    }
                </form>
            </div>
            <div className="siguiente_container">
                Siguiente Pregunta
            </div>
        </div>
    )
}
*/


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


console.log(questionNumber)

const questions = JSONSample.apartado1.preguntas;


ReactDOM.render(
    <>
        {
            questions.map( q => {
                return(
                    <QuestionComponent
                        description={ JSONSample.apartado1.instrucciones}
                        questionNumber={ q.id}
                        type={ q.tipo }
                        question={ q.pregunta }
                        options={ q.opciones } />
                )
            })
        }

    </>
    ,document.getElementById("app"));
