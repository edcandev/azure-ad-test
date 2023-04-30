const userAnswers = { "answers": [] };

const examJSON = {
    "examen": {
        "acumulador": 0,
        "no_pregs": 156,
        "preguntas": [
            {
                "apartado": 1,
                "id": 1,
                "descripcion": "Intrucciones: A continuación hay una lista de afirmaciones, seleccione la opción que le describa.No hay respuestas correctas o equivocadas por lo que es fundamental contestar con sinceridad. Es necesario que todas las afirmaciones cuenten con una respuesta.IMPORTANTE:  La escala puede aparecer de 'Totalmente en desacuerdo'  a  'Totalmente de acuerdo' o a la INVERSA.",
                "pregunta": "Trato de solucionar los problemas antes de que se hagan más grandes.",
                "tipo": "CLOSED_DA",
                "opciones": [1,2,3,4]
            },
            {
                "apartado": 1,
                "id": 2,
                "descripcion": "Intrucciones: A continuación hay una lista de afirmaciones, seleccione la opción que le describa.No hay respuestas correctas o equivocadas por lo que es fundamental contestar con sinceridad.Es necesario que todas las afirmaciones cuenten con una respuesta.IMPORTANTE:  La escala puede aparecer de 'Totalmente en desacuerdo'  a  'Totalmente de acuerdo' o a la INVERSA.",
                "pregunta": "Me sucede constantemente que las personas me caen mal y no se por que",
                "tipo": "CLOSED_AD",
                "opciones": [1,2,3,4]
            },
            {
                "apartado": 1,
                "id": 3,
                "descripcion": "Intrucciones: A continuación hay una lista de afirmaciones, seleccione la opción que le describa.No hay respuestas correctas o equivocadas por lo que es fundamental contestar con sinceridad.Es necesario que todas las afirmaciones cuenten con una respuesta.IMPORTANTE:  La escala puede aparecer de 'Totalmente en desacuerdo'  a  'Totalmente de acuerdo' o a la INVERSA.",
                "pregunta": "Para entender la postura de alguien más es necesario analizar.",
                "tipo": "CLOSED_DA",
                "opciones": [1,2,3,4]
            },
            {
                "apartado": 1,
                "id": 4,
                "descripcion": "Intrucciones: A continuación hay una lista de afirmaciones, seleccione la opción que le describa.No hay respuestas correctas o equivocadas por lo que es fundamental contestar con sinceridad.Es necesario que todas las afirmaciones cuenten con una respuesta.IMPORTANTE:  La escala puede aparecer de 'Totalmente en desacuerdo'  a  'Totalmente de acuerdo' o a la INVERSA.",
                "pregunta": "Estoy consciente de que mi postura corporal comunica mensajes.",
                "tipo": "CLOSED_DA",
                "opciones": [1,2,3,4]
            },
            {
                "apartado": 1,
                "id": 5,
                "descripcion": "Intrucciones: A continuación hay una lista de afirmaciones, seleccione la opción que le describa.No hay respuestas correctas o equivocadas por lo que es fundamental contestar con sinceridad.Es necesario que todas las afirmaciones cuenten con una respuesta.IMPORTANTE:  La escala puede aparecer de 'Totalmente en desacuerdo'  a  'Totalmente de acuerdo' o a la INVERSA.",
                "pregunta": "Para entender la postura de alguien más es necesario sentir lo que siente.",
                "tipo": "CLOSED_AD",
                "opciones": [1,2,3,4]
            },
            {
                "apartado": 1,
                "id": 6,
                "descripcion": "Intrucciones: A continuación hay una lista de afirmaciones, seleccione la opción que le describa.No hay respuestas correctas o equivocadas por lo que es fundamental contestar con sinceridad.Es necesario que todas las afirmaciones cuenten con una respuesta.IMPORTANTE:  La escala puede aparecer de 'Totalmente en desacuerdo'  a  'Totalmente de acuerdo' o a la INVERSA.",
                "pregunta": "Suelo saber de lado caerá una moneda.",
                "tipo": "CLOSED_AD",
                "opciones": [1,2,3,4]
            },
            {
                "apartado": 1,
                "id": 7,
                "descripcion": "Intrucciones: A continuación hay una lista de afirmaciones, seleccione la opción que le describa.No hay respuestas correctas o equivocadas por lo que es fundamental contestar con sinceridad.Es necesario que todas las afirmaciones cuenten con una respuesta.IMPORTANTE:  La escala puede aparecer de 'Totalmente en desacuerdo'  a  'Totalmente de acuerdo' o a la INVERSA.",
                "pregunta": "Cuando estoy en medio de un conflicto lo vivo tan intensamente que me quedo pensando en él a pesar de que ya pasó mucho tiempo.",
                "tipo": "CLOSED_AD",
                "opciones": [1,2,3,4]
            },
            {
                "apartado": 1,
                "id": 8,
                "descripcion": "Intrucciones: A continuación hay una lista de afirmaciones, seleccione la opción que le describa.No hay respuestas correctas o equivocadas por lo que es fundamental contestar con sinceridad.Es necesario que todas las afirmaciones cuenten con una respuesta.IMPORTANTE:  La escala puede aparecer de 'Totalmente en desacuerdo'  a  'Totalmente de acuerdo' o a la INVERSA.",
                "pregunta": "Por humanidad colaboro en la solución de conflictos, aunque yo no tenga nada que ver.",
                "tipo": "CLOSED_DA",
                "opciones": [1,2,3,4]
            },
            {
                "apartado": 1,
                "id": 9,
                "descripcion": "Intrucciones: A continuación hay una lista de afirmaciones, seleccione la opción que le describa.No hay respuestas correctas o equivocadas por lo que es fundamental contestar con sinceridad.Es necesario que todas las afirmaciones cuenten con una respuesta.IMPORTANTE: La escala puede aparecer de 'Totalmente en desacuerdo'  a  'Totalmente de acuerdo' o a la INVERSA.",
                "pregunta": "Logro comprender a otras personas aun cuando proceden de una cultura diferente.",
                "tipo": "CLOSED_DA",
                "opciones": [1,2,3,4]
            },
            {
                "apartado": 1,
                "id": 10,
                "descripcion": "Intrucciones: A continuación hay una lista de afirmaciones, seleccione la opción que le describa.No hay respuestas correctas o equivocadas por lo que es fundamental contestar con sinceridad.Es necesario que todas las afirmaciones cuenten con una respuesta.IMPORTANTE:  La escala puede aparecer de 'Totalmente en desacuerdo'  a  'Totalmente de acuerdo' o a la INVERSA.",
                "pregunta": "Me es difícil comunicarme con una persona de mucho dinero.",
                "tipo": "CLOSED_AD",
                "opciones": [1,2,3,4]
            },
            {
                "apartado": 1,
                "id": 11,
                "descripcion": "Intrucciones: A continuación hay una lista de afirmaciones, seleccione la opción que le describa.No hay respuestas correctas o equivocadas por lo que es fundamental contestar con sinceridad.Es necesario que todas las afirmaciones cuenten con una respuesta.IMPORTANTE:  La escala puede aparecer de 'Totalmente en desacuerdo'  a  'Totalmente de acuerdo' o a la INVERSA.",
                "pregunta": "Creo que colocarse en los zapatos de otro es absurdo.",
                "tipo": "CLOSED_AD",
                "opciones": [1,2,3,4]
            },
            {
                "apartado": 1,
                "id": 12,
                "descripcion": "Intrucciones: A continuación hay una lista de afirmaciones, seleccione la opción que le describa.No hay respuestas correctas o equivocadas por lo que es fundamental contestar con sinceridad.Es necesario que todas las afirmaciones cuenten con una respuesta.IMPORTANTE:  La escala puede aparecer de 'Totalmente en desacuerdo'  a  'Totalmente de acuerdo' o a la INVERSA.",
                "pregunta": "Me tomo mi tiempo para descubrir el motivo principal de un conflicto.",
                "tipo": "CLOSED_DA",
                "opciones": [1,2,3,4]
            },
            {
                "apartado": 1,
                "id": 13,
                "descripcion": "Intrucciones: A continuación hay una lista de afirmaciones, seleccione la opción que le describa.No hay respuestas correctas o equivocadas por lo que es fundamental contestar con sinceridad.Es necesario que todas las afirmaciones cuenten con una respuesta.IMPORTANTE:  La escala puede aparecer de 'Totalmente en desacuerdo'  a  'Totalmente de acuerdo' o a la INVERSA.",
                "pregunta": "Yo sé que puedo comunicarme usando gestos.",
                "tipo": "CLOSED_DA",
                "opciones": [1,2,3,4]
            },
            {
                "apartado": 1,
                "id": 14,
                "descripcion": "Intrucciones: A continuación hay una lista de afirmaciones, seleccione la opción que le describa.No hay respuestas correctas o equivocadas por lo que es fundamental contestar con sinceridad.Es necesario que todas las afirmaciones cuenten con una respuesta.IMPORTANTE:  La escala puede aparecer de 'Totalmente en desacuerdo'  a  'Totalmente de acuerdo' o a la INVERSA.",
                "pregunta": "Un conflicto no termina al darse la mano, también hay que pensar en que sucederá después.",
                "tipo": "CLOSED_DA",
                "opciones": [1,2,3,4]
            },
            {
                "apartado": 1,
                "id": 15,
                "descripcion": "Intrucciones: A continuación hay una lista de afirmaciones, seleccione la opción que le describa.No hay respuestas correctas o equivocadas por lo que es fundamental contestar con sinceridad.Es necesario que todas las afirmaciones cuenten con una respuesta.IMPORTANTE:  La escala puede aparecer de 'Totalmente en desacuerdo'  a  'Totalmente de acuerdo' o a la INVERSA.",
                "pregunta": "Me es difícil ponerme en el punto de referencia de dos personas en una discusión, generalmente me inclino por una.",
                "tipo": "CLOSED_AD",
                "opciones": [1,2,3,4]
            },
            {
                "apartado": 1,
                "id": 16,
                "descripcion": "Intrucciones: A continuación hay una lista de afirmaciones, seleccione la opción que le describa.No hay respuestas correctas o equivocadas por lo que es fundamental contestar con sinceridad.Es necesario que todas las afirmaciones cuenten con una respuesta.IMPORTANTE:  La escala puede aparecer de 'Totalmente en desacuerdo'  a  'Totalmente de acuerdo' o a la INVERSA.",
                "pregunta": "Me es absurdo y una pérdida de tiempo que las personas digan varias veces lo mismo.",
                "tipo": "CLOSED_AD",
                "opciones": [1,2,3,4]
            },
            {
                "apartado": 1,
                "id": 17,
                "descripcion": "Intrucciones: A continuación hay una lista de afirmaciones, seleccione la opción que le describa.No hay respuestas correctas o equivocadas por lo que es fundamental contestar con sinceridad.Es necesario que todas las afirmaciones cuenten con una respuesta.IMPORTANTE:  La escala puede aparecer de 'Totalmente en desacuerdo'  a  'Totalmente de acuerdo' o a la INVERSA.",
                "pregunta": "El tono de voz comunica muchas cosas.",
                "tipo": "CLOSED_DA",
                "opciones": [1,2,3,4]
            },
            {
                "apartado": 1,
                "id": 18,
                "descripcion": "Intrucciones: A continuación hay una lista de afirmaciones, seleccione la opción que le describa.No hay respuestas correctas o equivocadas por lo que es fundamental contestar con sinceridad.Es necesario que todas las afirmaciones cuenten con una respuesta.IMPORTANTE:  La escala puede aparecer de 'Totalmente en desacuerdo'  a  'Totalmente de acuerdo' o a la INVERSA.",
                "pregunta": "Vivo una historia como si estuviera presente en ella.",
                "tipo": "CLOSED_AD",
                "opciones": [1,2,3,4]
            },
            {
                "apartado": 1,
                "id": 19,
                "descripcion": "Intrucciones: A continuación hay una lista de afirmaciones, seleccione la opción que le describa.No hay respuestas correctas o equivocadas por lo que es fundamental contestar con sinceridad.Es necesario que todas las afirmaciones cuenten con una respuesta.IMPORTANTE:  La escala puede aparecer de 'Totalmente en desacuerdo'  a  'Totalmente de acuerdo' o a la INVERSA.",
                "pregunta": "El machismo está completamente erradicado.",
                "tipo": "CLOSED_AD",
                "opciones": [1,2,3,4]
            },
            {
                "apartado": 1,
                "id": 20,
                "descripcion": "Intrucciones: A continuación hay una lista de afirmaciones, seleccione la opción que le describa.No hay respuestas correctas o equivocadas por lo que es fundamental contestar con sinceridad.Es necesario que todas las afirmaciones cuenten con una respuesta.IMPORTANTE:  La escala puede aparecer de 'Totalmente en desacuerdo'  a  'Totalmente de acuerdo' o a la INVERSA.",
                "pregunta": "En la manera de hablar notas si alguien está nervioso.",
                "tipo": "CLOSED_DA",
                "opciones": [1,2,3,4]
            },
            {
                "apartado": 1,
                "id": 21,
                "descripcion": "Intrucciones: A continuación hay una lista de afirmaciones, seleccione la opción que le describa.No hay respuestas correctas o equivocadas por lo que es fundamental contestar con sinceridad.Es necesario que todas las afirmaciones cuenten con una respuesta.IMPORTANTE:  La escala puede aparecer de 'Totalmente en desacuerdo'  a  'Totalmente de acuerdo' o a la INVERSA.",
                "pregunta": "Se nota cuando alguien miente para quedar bien.",
                "tipo": "CLOSED_DA",
                "opciones": [1,2,3,4]
            },
            {
                "apartado": 1,
                "id": 22,
                "descripcion": "Intrucciones: A continuación hay una lista de afirmaciones, seleccione la opción que le describa.No hay respuestas correctas o equivocadas por lo que es fundamental contestar con sinceridad.Es necesario que todas las afirmaciones cuenten con una respuesta.IMPORTANTE:  La escala puede aparecer de 'Totalmente en desacuerdo'  a  'Totalmente de acuerdo' o a la INVERSA.",
                "pregunta": "En las reuniones o fiestas suelo pasarla bien sin importar mucho el contexto.",
                "tipo": "CLOSED_DA",
                "opciones": [1,2,3,4]
            },
            {
                "apartado": 1,
                "id": 23,
                "descripcion": "Intrucciones: A continuación hay una lista de afirmaciones, seleccione la opción que le describa.No hay respuestas correctas o equivocadas por lo que es fundamental contestar con sinceridad.Es necesario que todas las afirmaciones cuenten con una respuesta.IMPORTANTE:  La escala puede aparecer de 'Totalmente en desacuerdo'  a  'Totalmente de acuerdo' o a la INVERSA.",
                "pregunta": "No creo poder entender a una persona que roba.",
                "tipo": "CLOSED_AD",
                "opciones": [1,2,3,4]
            },
            {
                "apartado": 1,
                "id": 24,
                "descripcion": "Intrucciones: A continuación hay una lista de afirmaciones, seleccione la opción que le describa.No hay respuestas correctas o equivocadas por lo que es fundamental contestar con sinceridad.Es necesario que todas las afirmaciones cuenten con una respuesta.IMPORTANTE:  La escala puede aparecer de 'Totalmente en desacuerdo'  a  'Totalmente de acuerdo' o a la INVERSA.",
                "pregunta": "En un conflicto lo más importante son los hechos en sí y no como lo vivencia cada una de las partes.",
                "tipo": "CLOSED_AD",
                "opciones": [1,2,3,4]
            },
            {
                "apartado": 1,
                "id": 25,
                "descripcion": "Intrucciones: A continuación hay una lista de afirmaciones, seleccione la opción que le describa.No hay respuestas correctas o equivocadas por lo que es fundamental contestar con sinceridad.Es necesario que todas las afirmaciones cuenten con una respuesta.IMPORTANTE:  La escala puede aparecer de 'Totalmente en desacuerdo'  a  'Totalmente de acuerdo' o a la INVERSA.",
                "pregunta": "Cuando dos personas discuten me es muy incomodo y prefiero retirarme.",
                "tipo": "CLOSED_AD",
                "opciones": [1,2,3,4]
            },
            {
                "apartado": 1,
                "id": 26,
                "descripcion": "Intrucciones: A continuación hay una lista de afirmaciones, seleccione la opción que le describa.No hay respuestas correctas o equivocadas por lo que es fundamental contestar con sinceridad.Es necesario que todas las afirmaciones cuenten con una respuesta.IMPORTANTE:  La escala puede aparecer de 'Totalmente en desacuerdo'  a  'Totalmente de acuerdo' o a la INVERSA.",
                "pregunta": "Suelo terminar agotado después de lidiar con un conflicto.",
                "tipo": "CLOSED_AD",
                "opciones": [1,2,3,4]
            },
            {
                "apartado": 1,
                "id": 27,
                "descripcion": "Intrucciones: A continuación hay una lista de afirmaciones, seleccione la opción que le describa.No hay respuestas correctas o equivocadas por lo que es fundamental contestar con sinceridad.Es necesario que todas las afirmaciones cuenten con una respuesta.IMPORTANTE:  La escala puede aparecer de 'Totalmente en desacuerdo'  a  'Totalmente de acuerdo' o a la INVERSA.",
                "pregunta": "Suelo evitar las miradas fijas.",
                "tipo": "CLOSED_AD",
                "opciones": [1,2,3,4]
            },
            {
                "apartado": 1,
                "id": 28,
                "descripcion": "Intrucciones: A continuación hay una lista de afirmaciones, seleccione la opción que le describa.No hay respuestas correctas o equivocadas por lo que es fundamental contestar con sinceridad.Es necesario que todas las afirmaciones cuenten con una respuesta.IMPORTANTE:  La escala puede aparecer de 'Totalmente en desacuerdo'  a  'Totalmente de acuerdo' o a la INVERSA.",
                "pregunta": "Analizar los errores del pasado solo te hace perder tiempo.",
                "tipo": "CLOSED_AD",
                "opciones": [1,2,3,4]
            },
            {
                "apartado": 1,
                "id": 29,
                "descripcion": "Intrucciones: A continuación hay una lista de afirmaciones, seleccione la opción que le describa.No hay respuestas correctas o equivocadas por lo que es fundamental contestar con sinceridad.Es necesario que todas las afirmaciones cuenten con una respuesta.IMPORTANTE:  La escala puede aparecer de 'Totalmente en desacuerdo'  a  'Totalmente de acuerdo' o a la INVERSA.",
                "pregunta": "Al encontrarme con una persona me es fácil que se sienta en confianza.",
                "tipo": "CLOSED_DA",
                "opciones": [1,2,3,4]
            },
            {
                "apartado": 1,
                "id": 30,
                "descripcion": "Intrucciones: A continuación hay una lista de afirmaciones, seleccione la opción que le describa.No hay respuestas correctas o equivocadas por lo que es fundamental contestar con sinceridad.Es necesario que todas las afirmaciones cuenten con una respuesta.IMPORTANTE:  La escala puede aparecer de 'Totalmente en desacuerdo'  a  'Totalmente de acuerdo' o a la INVERSA.",
                "pregunta": "Generalmente pienso que los problemas tienen varias alternativas de solución.",
                "tipo": "CLOSED_DA",
                "opciones": [1,2,3,4]
            },
            {
                "apartado": 1,
                "id": 31,
                "descripcion": "Intrucciones: A continuación hay una lista de afirmaciones, seleccione la opción que le describa.No hay respuestas correctas o equivocadas por lo que es fundamental contestar con sinceridad.Es necesario que todas las afirmaciones cuenten con una respuesta.IMPORTANTE:  La escala puede aparecer de 'Totalmente en desacuerdo'  a  'Totalmente de acuerdo' o a la INVERSA.",
                "pregunta": "Cuando leo o veo alguna película suelo saber lo que va a pasar.",
                "tipo": "CLOSED_DA",
                "opciones": [1,2,3,4]
            },
            {
                "apartado": 1,
                "id": 32,
                "descripcion": "Intrucciones: A continuación hay una lista de afirmaciones, seleccione la opción que le describa.No hay respuestas correctas o equivocadas por lo que es fundamental contestar con sinceridad.Es necesario que todas las afirmaciones cuenten con una respuesta.IMPORTANTE:  La escala puede aparecer de 'Totalmente en desacuerdo'  a  'Totalmente de acuerdo' o a la INVERSA.",
                "pregunta": "Me es difícil saber qué decir para que las personas se tranquilicen.",
                "tipo": "CLOSED_AD",
                "opciones": [1,2,3,4]
            },
            {
                "apartado": 1,
                "id": 33,
                "descripcion": "Intrucciones: A continuación hay una lista de afirmaciones, seleccione la opción que le describa.No hay respuestas correctas o equivocadas por lo que es fundamental contestar con sinceridad.Es necesario que todas las afirmaciones cuenten con una respuesta.IMPORTANTE:  La escala puede aparecer de 'Totalmente en desacuerdo'  a  'Totalmente de acuerdo' o a la INVERSA.",
                "pregunta": "Tengo buen olfato para detectar problemas y alejarme antes que exploten.",
                "tipo": "CLOSED_AD",
                "opciones": [1,2,3,4]
            },
            {
                "apartado": 1,
                "id": 34,
                "descripcion": "Intrucciones: A continuación hay una lista de afirmaciones, seleccione la opción que le describa.No hay respuestas correctas o equivocadas por lo que es fundamental contestar con sinceridad.Es necesario que todas las afirmaciones cuenten con una respuesta.IMPORTANTE:  La escala puede aparecer de 'Totalmente en desacuerdo'  a  'Totalmente de acuerdo' o a la INVERSA.",
                "pregunta": "Ir al psicólogo es absurdo.",
                "tipo": "CLOSED_AD",
                "opciones": [1,2,3,4]
            },
            {
                "apartado": 1,
                "id": 35,
                "descripcion": "Intrucciones: A continuación hay una lista de afirmaciones, seleccione la opción que le describa.No hay respuestas correctas o equivocadas por lo que es fundamental contestar con sinceridad.Es necesario que todas las afirmaciones cuenten con una respuesta.IMPORTANTE:  La escala puede aparecer de 'Totalmente en desacuerdo'  a  'Totalmente de acuerdo' o a la INVERSA.",
                "pregunta": "Cuando a alguien le interesa solucionar un conflicto se nota.",
                "tipo": "CLOSED_DA",
                "opciones": [1,2,3,4]
            },
            {
                "apartado": 1,
                "id": 36,
                "descripcion": "Intrucciones: A continuación hay una lista de afirmaciones, seleccione la opción que le describa.No hay respuestas correctas o equivocadas por lo que es fundamental contestar con sinceridad.Es necesario que todas las afirmaciones cuenten con una respuesta.IMPORTANTE:  La escala puede aparecer de 'Totalmente en desacuerdo'  a  'Totalmente de acuerdo' o a la INVERSA.",
                "pregunta": "Hago hasta lo imposible por solucionar los problemas y nadie se entere.",
                "tipo": "CLOSED_AD",
                "opciones": [1,2,3,4]
            },
            {
                "apartado": 2,
                "id": 37,
                "descripcion": "Intrucciones: A continuación hay una lista de afirmaciones, seleccione la opción que le describa.No hay respuestas correctas o equivocadas por lo que es fundamental contestar con sinceridad.Es necesario que todas las afirmaciones cuenten con una respuesta.IMPORTANTE:  La escala puede aparecer de 'Totalmente en desacuerdo'  a  'Totalmente de acuerdo' o a la INVERSA.",
                "pregunta": "Si un vendedor hizo un gran esfuerzo para mostrarme un producto que no me convence del todo, es difícil para mí decirle que no.",
                "tipo": "CLOSED_AD",
                "opciones": [1,2,3,4]
            },
            {
                "apartado": 2,
                "id": 38,
                "descripcion": "Intrucciones: A continuación hay una lista de afirmaciones, seleccione la opción que le describa.No hay respuestas correctas o equivocadas por lo que es fundamental contestar con sinceridad.Es necesario que todas las afirmaciones cuenten con una respuesta.IMPORTANTE:  La escala puede aparecer de 'Totalmente en desacuerdo'  a  'Totalmente de acuerdo' o a la INVERSA.",
                "pregunta": "Me identifico con personas que trabajan muy duro pero que no consiguen sus objetivos.",
                "tipo": "CLOSED_AD",
                "opciones": [1,2,3,4]
            },
            {
                "apartado": 2,
                "id": 39,
                "descripcion": "Intrucciones: A continuación hay una lista de afirmaciones, seleccione la opción que le describa.No hay respuestas correctas o equivocadas por lo que es fundamental contestar con sinceridad.Es necesario que todas las afirmaciones cuenten con una respuesta.IMPORTANTE:  La escala puede aparecer de 'Totalmente en desacuerdo'  a  'Totalmente de acuerdo' o a la INVERSA.",
                "pregunta": "Prefiero presentar una solicitud por escrito para contratarme o inscribirme que pasar por una entrevista.",
                "tipo": "CLOSED_DA",
                "opciones": [1,2,3,4]
            },
            {
                "apartado": 2,
                "id": 40,
                "descripcion": "Intrucciones: A continuación hay una lista de afirmaciones, seleccione la opción que le describa.No hay respuestas correctas o equivocadas por lo que es fundamental contestar con sinceridad.Es necesario que todas las afirmaciones cuenten con una respuesta.IMPORTANTE:  La escala puede aparecer de 'Totalmente en desacuerdo'  a  'Totalmente de acuerdo' o a la INVERSA.",
                "pregunta": "Evito intentar cosas nuevas.",
                "tipo": "CLOSED_AD",
                "opciones": [1,2,3,4]
            },
            {
                "apartado": 2,
                "id": 41,
                "descripcion": "Intrucciones: A continuación hay una lista de afirmaciones, seleccione la opción que le describa.No hay respuestas correctas o equivocadas por lo que es fundamental contestar con sinceridad.Es necesario que todas las afirmaciones cuenten con una respuesta.IMPORTANTE:  La escala puede aparecer de 'Totalmente en desacuerdo'  a  'Totalmente de acuerdo' o a la INVERSA.",
                "pregunta": "Suelen atormentarme los errores de mi vida.",
                "tipo": "CLOSED_AD",
                "opciones": [1,2,3,4]
            },
            {
                "apartado": 2,
                "id": 42,
                "descripcion": "Intrucciones: A continuación hay una lista de afirmaciones, seleccione la opción que le describa.No hay respuestas correctas o equivocadas por lo que es fundamental contestar con sinceridad.Es necesario que todas las afirmaciones cuenten con una respuesta.IMPORTANTE:  La escala puede aparecer de 'Totalmente en desacuerdo'  a  'Totalmente de acuerdo' o a la INVERSA.",
                "pregunta": "Después de hacer algo importante y que vale la pena, trato de que los demás lo sepan.",
                "tipo": "CLOSED_AD",
                "opciones": [1,2,3,4]
            },
            {
                "apartado": 2,
                "id": 43,
                "descripcion": "Intrucciones: A continuación hay una lista de afirmaciones, seleccione la opción que le describa.No hay respuestas correctas o equivocadas por lo que es fundamental contestar con sinceridad.Es necesario que todas las afirmaciones cuenten con una respuesta.IMPORTANTE:  La escala puede aparecer de 'Totalmente en desacuerdo'  a  'Totalmente de acuerdo' o a la INVERSA.",
                "pregunta": "Si tuviera que hacer una lista de mis virtudes y defectos, la de defectos sería más larga.",
                "tipo": "CLOSED_AD",
                "opciones": [1,2,3,4]
            },
            {
                "apartado": 2,
                "id": 44,
                "descripcion": "Intrucciones: A continuación hay una lista de afirmaciones, seleccione la opción que le describa.No hay respuestas correctas o equivocadas por lo que es fundamental contestar con sinceridad.Es necesario que todas las afirmaciones cuenten con una respuesta.IMPORTANTE:  La escala puede aparecer de 'Totalmente en desacuerdo'  a  'Totalmente de acuerdo' o a la INVERSA.",
                "pregunta": "Me gustaría sentir más respeto hacia mi mismo.",
                "tipo": "CLOSED_AD",
                "opciones": [1,2,3,4]
            },
            {
                "apartado": 2,
                "id": 45,
                "descripcion": "Intrucciones: A continuación hay una lista de afirmaciones, seleccione la opción que le describa.No hay respuestas correctas o equivocadas por lo que es fundamental contestar con sinceridad.Es necesario que todas las afirmaciones cuenten con una respuesta.IMPORTANTE:  La escala puede aparecer de 'Totalmente en desacuerdo'  a  'Totalmente de acuerdo' o a la INVERSA.",
                "pregunta": "Me es difícil decir que no.",
                "tipo": "CLOSED_AD",
                "opciones": [1,2,3,4]
            },
            {
                "apartado": 2,
                "id": 46,
                "descripcion": "Intrucciones: A continuación hay una lista de afirmaciones, seleccione la opción que le describa.No hay respuestas correctas o equivocadas por lo que es fundamental contestar con sinceridad.Es necesario que todas las afirmaciones cuenten con una respuesta.IMPORTANTE:  La escala puede aparecer de 'Totalmente en desacuerdo'  a  'Totalmente de acuerdo' o a la INVERSA.",
                "pregunta": "Necesito sentir éxito al iniciar algo nuevo o no continúo haciéndolo.",
                "tipo": "CLOSED_AD",
                "opciones": [1,2,3,4]
            },
            {
                "apartado": 2,
                "id": 47,
                "descripcion": "Intrucciones: A continuación hay una lista de afirmaciones, seleccione la opción que le describa.No hay respuestas correctas o equivocadas por lo que es fundamental contestar con sinceridad.Es necesario que todas las afirmaciones cuenten con una respuesta.IMPORTANTE:  La escala puede aparecer de 'Totalmente en desacuerdo'  a  'Totalmente de acuerdo' o a la INVERSA.",
                "pregunta": "Prefiero evitar platicar con personas que no conocía previamente.",
                "tipo": "CLOSED_AD",
                "opciones": [1,2,3,4]
            },
            {
                "apartado": 2,
                "id": 48,
                "descripcion": "Intrucciones: A continuación hay una lista de afirmaciones, seleccione la opción que le describa.No hay respuestas correctas o equivocadas por lo que es fundamental contestar con sinceridad.Es necesario que todas las afirmaciones cuenten con una respuesta.IMPORTANTE:  La escala puede aparecer de 'Totalmente en desacuerdo'  a  'Totalmente de acuerdo' o a la INVERSA.",
                "pregunta": "Cuando alguien me felicita, no sé qué responder.",
                "tipo": "CLOSED_AD",
                "opciones": [1,2,3,4]
            },
            {
                "apartado": 2,
                "id": 49,
                "descripcion": "Intrucciones: A continuación hay una lista de afirmaciones, seleccione la opción que le describa.No hay respuestas correctas o equivocadas por lo que es fundamental contestar con sinceridad.Es necesario que todas las afirmaciones cuenten con una respuesta.IMPORTANTE:  La escala puede aparecer de 'Totalmente en desacuerdo'  a  'Totalmente de acuerdo' o a la INVERSA.",
                "pregunta": "Si el comentario de un familiar me es molesto prefiero evitar que se de cuenta que me afectó.",
                "tipo": "CLOSED_AD",
                "opciones": [1,2,3,4]
            },
            {
                "apartado": 2,
                "id": 50,
                "descripcion": "Intrucciones: A continuación hay una lista de afirmaciones, seleccione la opción que le describa.No hay respuestas correctas o equivocadas por lo que es fundamental contestar con sinceridad.Es necesario que todas las afirmaciones cuenten con una respuesta.IMPORTANTE:  La escala puede aparecer de 'Totalmente en desacuerdo'  a  'Totalmente de acuerdo' o a la INVERSA.",
                "pregunta": "Se que la vida no es sencilla pero siempre encuentro la forma de alcanzar mis metas.",
                "tipo": "CLOSED_DA",
                "opciones": [1,2,3,4]
            },
            {
                "apartado": 2,
                "id": 51,
                "descripcion": "Intrucciones: A continuación hay una lista de afirmaciones, seleccione la opción que le describa.No hay respuestas correctas o equivocadas por lo que es fundamental contestar con sinceridad.Es necesario que todas las afirmaciones cuenten con una respuesta.IMPORTANTE:  La escala puede aparecer de 'Totalmente en desacuerdo'  a  'Totalmente de acuerdo' o a la INVERSA.",
                "pregunta": "Evito herir los sentimientos de otras personas, incluso si me siento ofendido.",
                "tipo": "CLOSED_AD",
                "opciones": [1,2,3,4]
            },
            {
                "apartado": 2,
                "id": 52,
                "descripcion": "Intrucciones: A continuación hay una lista de afirmaciones, seleccione la opción que le describa.No hay respuestas correctas o equivocadas por lo que es fundamental contestar con sinceridad.Es necesario que todas las afirmaciones cuenten con una respuesta.IMPORTANTE:  La escala puede aparecer de 'Totalmente en desacuerdo'  a  'Totalmente de acuerdo' o a la INVERSA.",
                "pregunta": "Disfruto de platicar con gente que es muy diferente a mí.",
                "tipo": "CLOSED_DA",
                "opciones": [1,2,3,4]
            },
            {
                "apartado": 2,
                "id": 53,
                "descripcion": "Intrucciones: A continuación hay una lista de afirmaciones, seleccione la opción que le describa.No hay respuestas correctas o equivocadas por lo que es fundamental contestar con sinceridad.Es necesario que todas las afirmaciones cuenten con una respuesta.IMPORTANTE:  La escala puede aparecer de 'Totalmente en desacuerdo'  a  'Totalmente de acuerdo' o a la INVERSA.",
                "pregunta": "Generalmente hago lo que creo que se espera de mí, en lugar de lo que a mí me gusta.",
                "tipo": "CLOSED_AD",
                "opciones": [1,2,3,4]
            },
            {
                "apartado": 2,
                "id": 54,
                "descripcion": "Intrucciones: A continuación hay una lista de afirmaciones, seleccione la opción que le describa.No hay respuestas correctas o equivocadas por lo que es fundamental contestar con sinceridad.Es necesario que todas las afirmaciones cuenten con una respuesta.IMPORTANTE:  La escala puede aparecer de 'Totalmente en desacuerdo'  a  'Totalmente de acuerdo' o a la INVERSA.",
                "pregunta": "No tengo nada que decir.",
                "tipo": "CLOSED_AD",
                "opciones": [1,2,3,4]
            },
            {
                "apartado": 2,
                "id": 55,
                "descripcion": "Intrucciones: A continuación hay una lista de afirmaciones, seleccione la opción que le describa.No hay respuestas correctas o equivocadas por lo que es fundamental contestar con sinceridad.Es necesario que todas las afirmaciones cuenten con una respuesta.IMPORTANTE:  La escala puede aparecer de 'Totalmente en desacuerdo'  a  'Totalmente de acuerdo' o a la INVERSA.",
                "pregunta": "Solo voy a reuniones o fiestas si conozco a alguien que también asistirá.",
                "tipo": "CLOSED_AD",
                "opciones": [1,2,3,4]
            },
            {
                "apartado": 2,
                "id": 56,
                "descripcion": "Intrucciones: A continuación hay una lista de afirmaciones, seleccione la opción que le describa.No hay respuestas correctas o equivocadas por lo que es fundamental contestar con sinceridad.Es necesario que todas las afirmaciones cuenten con una respuesta.IMPORTANTE:  La escala puede aparecer de 'Totalmente en desacuerdo'  a  'Totalmente de acuerdo' o a la INVERSA.",
                "pregunta": "Prefiero evitar hablarles a personas muy atractivas.",
                "tipo": "CLOSED_AD",
                "opciones": [1,2,3,4]
            },
            {
                "apartado": 2,
                "id": 57,
                "descripcion": "Intrucciones: A continuación hay una lista de afirmaciones, seleccione la opción que le describa.No hay respuestas correctas o equivocadas por lo que es fundamental contestar con sinceridad.Es necesario que todas las afirmaciones cuenten con una respuesta.IMPORTANTE:  La escala puede aparecer de 'Totalmente en desacuerdo'  a  'Totalmente de acuerdo' o a la INVERSA.",
                "pregunta": "Me da vergüenza devolver un producto a la tienda.",
                "tipo": "CLOSED_AD",
                "opciones": [1,2,3,4]
            },
            {
                "apartado": 3,
                "id": 58,
                "descripcion": "Intrucciones: A continuación hay una lista de afirmaciones, seleccione la opción que le describa.No hay respuestas correctas o equivocadas por lo que es fundamental contestar con sinceridad.Es necesario que todas las afirmaciones cuenten con una respuesta.IMPORTANTE:  La escala puede aparecer de 'Totalmente en desacuerdo'  a  'Totalmente de acuerdo' o a la INVERSA.",
                "pregunta": "Puedo controlar mis emociones ante situaciones críticas.",
                "tipo": "CLOSED_DA",
                "opciones": [1,2,3,4]
            },
            {
                "apartado": 3,
                "id": 59,
                "descripcion": "Intrucciones: A continuación hay una lista de afirmaciones, seleccione la opción que le describa.No hay respuestas correctas o equivocadas por lo que es fundamental contestar con sinceridad.Es necesario que todas las afirmaciones cuenten con una respuesta.IMPORTANTE:  La escala puede aparecer de 'Totalmente en desacuerdo'  a  'Totalmente de acuerdo' o a la INVERSA.",
                "pregunta": "A veces incluso pequeñas dificultades pueden llegar a preocuparme.",
                "tipo": "CLOSED_AD",
                "opciones": [1,2,3,4]
            },
            {
                "apartado": 3,
                "id": 60,
                "descripcion": "Intrucciones: A continuación hay una lista de afirmaciones, seleccione la opción que le describa.No hay respuestas correctas o equivocadas por lo que es fundamental contestar con sinceridad.Es necesario que todas las afirmaciones cuenten con una respuesta.IMPORTANTE:  La escala puede aparecer de 'Totalmente en desacuerdo'  a  'Totalmente de acuerdo' o a la INVERSA.",
                "pregunta": "Mi estado de ánimo depende de la interacción con otras personas.",
                "tipo": "CLOSED_AD",
                "opciones": [1,2,3,4]
            },
            {
                "apartado": 3,
                "id": 61,
                "descripcion": "Intrucciones: A continuación hay una lista de afirmaciones, seleccione la opción que le describa.No hay respuestas correctas o equivocadas por lo que es fundamental contestar con sinceridad.Es necesario que todas las afirmaciones cuenten con una respuesta.IMPORTANTE:  La escala puede aparecer de 'Totalmente en desacuerdo'  a  'Totalmente de acuerdo' o a la INVERSA.",
                "pregunta": "Me es muy molesto si me interrumpen cuando estoy trabajando.",
                "tipo": "CLOSED_AD",
                "opciones": [1,2,3,4]
            },
            {
                "apartado": 3,
                "id": 62,
                "descripcion": "Intrucciones: A continuación hay una lista de afirmaciones, seleccione la opción que le describa.No hay respuestas correctas o equivocadas por lo que es fundamental contestar con sinceridad.Es necesario que todas las afirmaciones cuenten con una respuesta.IMPORTANTE:  La escala puede aparecer de 'Totalmente en desacuerdo'  a  'Totalmente de acuerdo' o a la INVERSA.",
                "pregunta": "La gente en general suele ser muy irritante.",
                "tipo": "CLOSED_AD",
                "opciones": [1,2,3,4]
            },
            {
                "apartado": 3,
                "id": 63,
                "descripcion": "Intrucciones: A continuación hay una lista de afirmaciones, seleccione la opción que le describa.No hay respuestas correctas o equivocadas por lo que es fundamental contestar con sinceridad.Es necesario que todas las afirmaciones cuenten con una respuesta.IMPORTANTE:  La escala puede aparecer de 'Totalmente en desacuerdo'  a  'Totalmente de acuerdo' o a la INVERSA.",
                "pregunta": "Me define la palabra optimista.",
                "tipo": "CLOSED_DA",
                "opciones": [1,2,3,4]
            },
            {
                "apartado": 3,
                "id": 64,
                "descripcion": "Intrucciones: A continuación hay una lista de afirmaciones, seleccione la opción que le describa.No hay respuestas correctas o equivocadas por lo que es fundamental contestar con sinceridad.Es necesario que todas las afirmaciones cuenten con una respuesta.IMPORTANTE:  La escala puede aparecer de 'Totalmente en desacuerdo'  a  'Totalmente de acuerdo' o a la INVERSA.",
                "pregunta": "A menudo me siento nervioso.",
                "tipo": "CLOSED_AD",
                "opciones": [1,2,3,4]
            },
            {
                "apartado": 3,
                "id": 65,
                "descripcion": "Intrucciones: A continuación hay una lista de afirmaciones, seleccione la opción que le describa.No hay respuestas correctas o equivocadas por lo que es fundamental contestar con sinceridad.Es necesario que todas las afirmaciones cuenten con una respuesta.IMPORTANTE:  La escala puede aparecer de 'Totalmente en desacuerdo'  a  'Totalmente de acuerdo' o a la INVERSA.",
                "pregunta": "Mi humor pasa por altibajos frecuentes.",
                "tipo": "CLOSED_AD",
                "opciones": [1,2,3,4]
            },
            {
                "apartado": 3,
                "id": 66,
                "descripcion": "Intrucciones: A continuación hay una lista de afirmaciones, seleccione la opción que le describa.No hay respuestas correctas o equivocadas por lo que es fundamental contestar con sinceridad.Es necesario que todas las afirmaciones cuenten con una respuesta.IMPORTANTE:  La escala puede aparecer de 'Totalmente en desacuerdo'  a  'Totalmente de acuerdo' o a la INVERSA.",
                "pregunta": "Creo que los plazos fijos son innecesarios.",
                "tipo": "CLOSED_AD",
                "opciones": [1,2,3,4]
            },
            {
                "apartado": 3,
                "id": 67,
                "descripcion": "Intrucciones: A continuación hay una lista de afirmaciones, seleccione la opción que le describa.No hay respuestas correctas o equivocadas por lo que es fundamental contestar con sinceridad.Es necesario que todas las afirmaciones cuenten con una respuesta.IMPORTANTE:  La escala puede aparecer de 'Totalmente en desacuerdo'  a  'Totalmente de acuerdo' o a la INVERSA.",
                "pregunta": "No soporto que alguien me contradiga.",
                "tipo": "CLOSED_AD",
                "opciones": [1,2,3,4]
            },
            {
                "apartado": 3,
                "id": 68,
                "descripcion": "Intrucciones: A continuación hay una lista de afirmaciones, seleccione la opción que le describa.No hay respuestas correctas o equivocadas por lo que es fundamental contestar con sinceridad.Es necesario que todas las afirmaciones cuenten con una respuesta.IMPORTANTE:  La escala puede aparecer de 'Totalmente en desacuerdo'  a  'Totalmente de acuerdo' o a la INVERSA.",
                "pregunta": "Suelo sufrir de dolor de cabeza o insomnio a causa de mi trabajo.",
                "tipo": "CLOSED_AD",
                "opciones": [1,2,3,4]
            },
            {
                "apartado": 3,
                "id": 69,
                "descripcion": "Intrucciones: A continuación hay una lista de afirmaciones, seleccione la opción que le describa.No hay respuestas correctas o equivocadas por lo que es fundamental contestar con sinceridad.Es necesario que todas las afirmaciones cuenten con una respuesta.IMPORTANTE:  La escala puede aparecer de 'Totalmente en desacuerdo'  a  'Totalmente de acuerdo' o a la INVERSA.",
                "pregunta": "En general no me irrito, ni siquiera en situaciones en las que tendría motivos.",
                "tipo": "CLOSED_DA",
                "opciones": [1,2,3,4]
            },
            {
                "apartado": 3,
                "id": 70,
                "descripcion": "Intrucciones: A continuación hay una lista de afirmaciones, seleccione la opción que le describa.No hay respuestas correctas o equivocadas por lo que es fundamental contestar con sinceridad.Es necesario que todas las afirmaciones cuenten con una respuesta.IMPORTANTE:  La escala puede aparecer de 'Totalmente en desacuerdo'  a  'Totalmente de acuerdo' o a la INVERSA.",
                "pregunta": "Las personas me suelen definir como impulsivo.",
                "tipo": "CLOSED_AD",
                "opciones": [1,2,3,4]
            },
            {
                "apartado": 3,
                "id": 71,
                "descripcion": "Intrucciones: A continuación hay una lista de afirmaciones, seleccione la opción que le describa.No hay respuestas correctas o equivocadas por lo que es fundamental contestar con sinceridad.Es necesario que todas las afirmaciones cuenten con una respuesta.IMPORTANTE:  La escala puede aparecer de 'Totalmente en desacuerdo'  a  'Totalmente de acuerdo' o a la INVERSA.",
                "pregunta": "Reanudo fácilmente mi trabajo después de que me interrumpen.",
                "tipo": "CLOSED_DA",
                "opciones": [1,2,3,4]
            },
            {
                "apartado": 3,
                "id": 72,
                "descripcion": "Intrucciones: A continuación hay una lista de afirmaciones, seleccione la opción que le describa.No hay respuestas correctas o equivocadas por lo que es fundamental contestar con sinceridad.Es necesario que todas las afirmaciones cuenten con una respuesta.IMPORTANTE:  La escala puede aparecer de 'Totalmente en desacuerdo'  a  'Totalmente de acuerdo' o a la INVERSA.",
                "pregunta": "Me suele ser difícil elegir entre varias opciones.",
                "tipo": "CLOSED_AD",
                "opciones": [1,2,3,4]
            },
            {
                "apartado": 3,
                "id": 73,
                "descripcion": "Intrucciones: A continuación hay una lista de afirmaciones, seleccione la opción que le describa.No hay respuestas correctas o equivocadas por lo que es fundamental contestar con sinceridad.Es necesario que todas las afirmaciones cuenten con una respuesta.IMPORTANTE:  La escala puede aparecer de 'Totalmente en desacuerdo'  a  'Totalmente de acuerdo' o a la INVERSA.",
                "pregunta": "Suelo experimentar varios estados de ánimo en un solo día.",
                "tipo": "CLOSED_AD",
                "opciones": [1,2,3,4]
            },
            {
                "apartado": 3,
                "id": 74,
                "descripcion": "Intrucciones: A continuación hay una lista de afirmaciones, seleccione la opción que le describa.No hay respuestas correctas o equivocadas por lo que es fundamental contestar con sinceridad.Es necesario que todas las afirmaciones cuenten con una respuesta.IMPORTANTE:  La escala puede aparecer de 'Totalmente en desacuerdo'  a  'Totalmente de acuerdo' o a la INVERSA.",
                "pregunta": "Puedo mantener la concentración incluso con varios distractores.",
                "tipo": "CLOSED_DA",
                "opciones": [1,2,3,4]
            },
            {
                "apartado": 3,
                "id": 75,
                "descripcion": "Intrucciones: A continuación hay una lista de afirmaciones, seleccione la opción que le describa.No hay respuestas correctas o equivocadas por lo que es fundamental contestar con sinceridad.Es necesario que todas las afirmaciones cuenten con una respuesta.IMPORTANTE:  La escala puede aparecer de 'Totalmente en desacuerdo'  a  'Totalmente de acuerdo' o a la INVERSA.",
                "pregunta": "Suelo sentirme al límite.",
                "tipo": "CLOSED_AD",
                "opciones": [1,2,3,4]
            },
            {
                "apartado": 3,
                "id": 76,
                "descripcion": "Intrucciones: A continuación hay una lista de afirmaciones, seleccione la opción que le describa.No hay respuestas correctas o equivocadas por lo que es fundamental contestar con sinceridad.Es necesario que todas las afirmaciones cuenten con una respuesta.IMPORTANTE:  La escala puede aparecer de 'Totalmente en desacuerdo'  a  'Totalmente de acuerdo' o a la INVERSA.",
                "pregunta": "Me desanimo con facilidad.",
                "tipo": "CLOSED_AD",
                "opciones": [1,2,3,4]
            },
            {
                "apartado": 3,
                "id": 77,
                "descripcion": "Intrucciones: A continuación hay una lista de afirmaciones, seleccione la opción que le describa.No hay respuestas correctas o equivocadas por lo que es fundamental contestar con sinceridad.Es necesario que todas las afirmaciones cuenten con una respuesta.IMPORTANTE:  La escala puede aparecer de 'Totalmente en desacuerdo'  a  'Totalmente de acuerdo' o a la INVERSA.",
                "pregunta": "Se perfectamente que actividades me tranquilizan y me ayudan a retomar la calma.",
                "tipo": "CLOSED_DA",
                "opciones": [1,2,3,4]
            },
            {
                "apartado": 3,
                "id": 78,
                "descripcion": "Intrucciones: A continuación hay una lista de afirmaciones, seleccione la opción que le describa.No hay respuestas correctas o equivocadas por lo que es fundamental contestar con sinceridad.Es necesario que todas las afirmaciones cuenten con una respuesta.IMPORTANTE:  La escala puede aparecer de 'Totalmente en desacuerdo'  a  'Totalmente de acuerdo' o a la INVERSA.",
                "pregunta": "Suelo comer cuando siento preocupación.",
                "tipo": "CLOSED_AD",
                "opciones": [1,2,3,4]
            },
            {
                "apartado": 3,
                "id": 79,
                "descripcion": "Intrucciones: A continuación hay una lista de afirmaciones, seleccione la opción que le describa.No hay respuestas correctas o equivocadas por lo que es fundamental contestar con sinceridad.Es necesario que todas las afirmaciones cuenten con una respuesta.IMPORTANTE:  La escala puede aparecer de 'Totalmente en desacuerdo'  a  'Totalmente de acuerdo' o a la INVERSA.",
                "pregunta": "Me preocupa que mi trabajo me esté endureciendo emocionalmente.",
                "tipo": "CLOSED_AD",
                "opciones": [1,2,3,4]
            },
            {
                "apartado": 3,
                "id": 80,
                "descripcion": "Intrucciones: A continuación hay una lista de afirmaciones, seleccione la opción que le describa.No hay respuestas correctas o equivocadas por lo que es fundamental contestar con sinceridad.Es necesario que todas las afirmaciones cuenten con una respuesta.IMPORTANTE:  La escala puede aparecer de 'Totalmente en desacuerdo'  a  'Totalmente de acuerdo' o a la INVERSA.",
                "pregunta": "Mi día se arruina cuando algo no ocurre como yo quiero.",
                "tipo": "CLOSED_AD",
                "opciones": [1,2,3,4]
            },
            {
                "apartado": 3,
                "id": 81,
                "descripcion": "Intrucciones: A continuación hay una lista de afirmaciones, seleccione la opción que le describa.No hay respuestas correctas o equivocadas por lo que es fundamental contestar con sinceridad.Es necesario que todas las afirmaciones cuenten con una respuesta.IMPORTANTE:  La escala puede aparecer de 'Totalmente en desacuerdo'  a  'Totalmente de acuerdo' o a la INVERSA.",
                "pregunta": "Me define la palabra impaciente.",
                "tipo": "CLOSED_AD",
                "opciones": [1,2,3,4]
            },
            {
                "apartado": 3,
                "id": 82,
                "descripcion": "Intrucciones: A continuación hay una lista de afirmaciones, seleccione la opción que le describa.No hay respuestas correctas o equivocadas por lo que es fundamental contestar con sinceridad.Es necesario que todas las afirmaciones cuenten con una respuesta.IMPORTANTE:  La escala puede aparecer de 'Totalmente en desacuerdo'  a  'Totalmente de acuerdo' o a la INVERSA.",
                "pregunta": "Es difícil que algo o alguien me haga perder la paciencia",
                "tipo": "CLOSED_DA",
                "opciones": [1,2,3,4]
            },
            {
                "apartado": 3,
                "id": 83,
                "descripcion": "Intrucciones: A continuación hay una lista de afirmaciones, seleccione la opción que le describa.No hay respuestas correctas o equivocadas por lo que es fundamental contestar con sinceridad.Es necesario que todas las afirmaciones cuenten con una respuesta.IMPORTANTE:  La escala puede aparecer de 'Totalmente en desacuerdo'  a  'Totalmente de acuerdo' o a la INVERSA.",
                "pregunta": "Puedo mantener la atención en una conversación aún con ruidos externos.",
                "tipo": "CLOSED_DA",
                "opciones": [1,2,3,4]
            },
            {
                "apartado": 3,
                "id": 84,
                "descripcion": "Intrucciones: A continuación hay una lista de afirmaciones, seleccione la opción que le describa.No hay respuestas correctas o equivocadas por lo que es fundamental contestar con sinceridad.Es necesario que todas las afirmaciones cuenten con una respuesta.IMPORTANTE:  La escala puede aparecer de 'Totalmente en desacuerdo'  a  'Totalmente de acuerdo' o a la INVERSA.",
                "pregunta": "Me paralizo en situaciones de peligro.",
                "tipo": "CLOSED_AD",
                "opciones": [1,2,3,4]
            },
            {
                "apartado": 4,
                "id": 85,
                "descripcion": "Intrucciones: A continuación hay una lista de afirmaciones, seleccione la opción que le describa.No hay respuestas correctas o equivocadas por lo que es fundamental contestar con sinceridad.Es necesario que todas las afirmaciones cuenten con una respuesta.IMPORTANTE:  La escala puede aparecer de 'Totalmente en desacuerdo'  a  'Totalmente de acuerdo' o a la INVERSA.",
                "pregunta": "Me gusta que retroalimenten mi trabajo.",
                "tipo": "CLOSED_DA",
                "opciones": [1,2,3,4]
            },
            {
                "apartado": 4,
                "id": 86,
                "descripcion": "Intrucciones: A continuación hay una lista de afirmaciones, seleccione la opción que le describa.No hay respuestas correctas o equivocadas por lo que es fundamental contestar con sinceridad.Es necesario que todas las afirmaciones cuenten con una respuesta.IMPORTANTE:  La escala puede aparecer de 'Totalmente en desacuerdo'  a  'Totalmente de acuerdo' o a la INVERSA.",
                "pregunta": "Suelo decir que si llego a las reuniones, pero al final no llegó o canceló de último momento.",
                "tipo": "CLOSED_AD",
                "opciones": [1,2,3,4]
            },
            {
                "apartado": 4,
                "id": 87,
                "descripcion": "Intrucciones: A continuación hay una lista de afirmaciones, seleccione la opción que le describa.No hay respuestas correctas o equivocadas por lo que es fundamental contestar con sinceridad.Es necesario que todas las afirmaciones cuenten con una respuesta.IMPORTANTE:  La escala puede aparecer de 'Totalmente en desacuerdo'  a  'Totalmente de acuerdo' o a la INVERSA.",
                "pregunta": "Expreso mi opinión aunque no necesariamente coincida con la mayoría.",
                "tipo": "CLOSED_DA",
                "opciones": [1,2,3,4]
            },
            {
                "apartado": 4,
                "id": 88,
                "descripcion": "Intrucciones: A continuación hay una lista de afirmaciones, seleccione la opción que le describa.No hay respuestas correctas o equivocadas por lo que es fundamental contestar con sinceridad.Es necesario que todas las afirmaciones cuenten con una respuesta.IMPORTANTE:  La escala puede aparecer de 'Totalmente en desacuerdo'  a  'Totalmente de acuerdo' o a la INVERSA.",
                "pregunta": "Me es difícil cortar la plática cuando ya me tengo que ir.",
                "tipo": "CLOSED_AD",
                "opciones": [1,2,3,4]
            },
            {
                "apartado": 4,
                "id": 89,
                "descripcion": "Intrucciones: A continuación hay una lista de afirmaciones, seleccione la opción que le describa.No hay respuestas correctas o equivocadas por lo que es fundamental contestar con sinceridad.Es necesario que todas las afirmaciones cuenten con una respuesta.IMPORTANTE:  La escala puede aparecer de 'Totalmente en desacuerdo'  a  'Totalmente de acuerdo' o a la INVERSA.",
                "pregunta": "Me es penoso cobrar el dinero que me deben.",
                "tipo": "CLOSED_AD",
                "opciones": [1,2,3,4]
            },
            {
                "apartado": 4,
                "id": 90,
                "descripcion": "Intrucciones: A continuación hay una lista de afirmaciones, seleccione la opción que le describa.No hay respuestas correctas o equivocadas por lo que es fundamental contestar con sinceridad.Es necesario que todas las afirmaciones cuenten con una respuesta.IMPORTANTE:  La escala puede aparecer de 'Totalmente en desacuerdo'  a  'Totalmente de acuerdo' o a la INVERSA.",
                "pregunta": "Prefiero hablar poco o seguir la corriente cuando desconozco de un tema.",
                "tipo": "CLOSED_AD",
                "opciones": [1,2,3,4]
            },
            {
                "apartado": 4,
                "id": 91,
                "descripcion": "Intrucciones: A continuación hay una lista de afirmaciones, seleccione la opción que le describa.No hay respuestas correctas o equivocadas por lo que es fundamental contestar con sinceridad.Es necesario que todas las afirmaciones cuenten con una respuesta.IMPORTANTE:  La escala puede aparecer de 'Totalmente en desacuerdo'  a  'Totalmente de acuerdo' o a la INVERSA.",
                "pregunta": "Cuando cometo un error lo reconozco abiertamente.",
                "tipo": "CLOSED_DA",
                "opciones": [1,2,3,4]
            },
            {
                "apartado": 4,
                "id": 92,
                "descripcion": "Intrucciones: A continuación hay una lista de afirmaciones, seleccione la opción que le describa.No hay respuestas correctas o equivocadas por lo que es fundamental contestar con sinceridad.Es necesario que todas las afirmaciones cuenten con una respuesta.IMPORTANTE:  La escala puede aparecer de 'Totalmente en desacuerdo'  a  'Totalmente de acuerdo' o a la INVERSA.",
                "pregunta": "Me es fácil aceptar un cumplido.",
                "tipo": "CLOSED_DA",
                "opciones": [1,2,3,4]
            },
            {
                "apartado": 4,
                "id": 93,
                "descripcion": "Intrucciones: A continuación hay una lista de afirmaciones, seleccione la opción que le describa.No hay respuestas correctas o equivocadas por lo que es fundamental contestar con sinceridad.Es necesario que todas las afirmaciones cuenten con una respuesta.IMPORTANTE:  La escala puede aparecer de 'Totalmente en desacuerdo'  a  'Totalmente de acuerdo' o a la INVERSA.",
                "pregunta": "Creo que hablar de sentimientos es una pérdida de tiempo.",
                "tipo": "CLOSED_AD",
                "opciones": [1,2,3,4]
            },
            {
                "apartado": 4,
                "id": 94,
                "descripcion": "Intrucciones: A continuación hay una lista de afirmaciones, seleccione la opción que le describa.No hay respuestas correctas o equivocadas por lo que es fundamental contestar con sinceridad.Es necesario que todas las afirmaciones cuenten con una respuesta.IMPORTANTE:  La escala puede aparecer de 'Totalmente en desacuerdo'  a  'Totalmente de acuerdo' o a la INVERSA.",
                "pregunta": "Son inútiles y desagradables las críticas constructivas.",
                "tipo": "CLOSED_AD",
                "opciones": [1,2,3,4]
            },
            {
                "apartado": 4,
                "id": 95,
                "descripcion": "Intrucciones: A continuación hay una lista de afirmaciones, seleccione la opción que le describa.No hay respuestas correctas o equivocadas por lo que es fundamental contestar con sinceridad.Es necesario que todas las afirmaciones cuenten con una respuesta.IMPORTANTE:  La escala puede aparecer de 'Totalmente en desacuerdo'  a  'Totalmente de acuerdo' o a la INVERSA.",
                "pregunta": "Me es difícil demostrar cariño y agradecimiento.",
                "tipo": "CLOSED_AD",
                "opciones": [1,2,3,4]
            },
            {
                "apartado": 4,
                "id": 96,
                "descripcion": "Intrucciones: A continuación hay una lista de afirmaciones, seleccione la opción que le describa.No hay respuestas correctas o equivocadas por lo que es fundamental contestar con sinceridad.Es necesario que todas las afirmaciones cuenten con una respuesta.IMPORTANTE:  La escala puede aparecer de 'Totalmente en desacuerdo'  a  'Totalmente de acuerdo' o a la INVERSA.",
                "pregunta": "Me es fácil decirle a alguien que estoy en desacuerdo.",
                "tipo": "CLOSED_DA",
                "opciones": [1,2,3,4]
            },
            {
                "apartado": 4,
                "id": 97,
                "descripcion": "Intrucciones: A continuación hay una lista de afirmaciones, seleccione la opción que le describa.No hay respuestas correctas o equivocadas por lo que es fundamental contestar con sinceridad.Es necesario que todas las afirmaciones cuenten con una respuesta.IMPORTANTE:  La escala puede aparecer de 'Totalmente en desacuerdo'  a  'Totalmente de acuerdo' o a la INVERSA.",
                "pregunta": "Creo que la gente se aprovecha de mí con frecuencia",
                "tipo": "CLOSED_AD",
                "opciones": [1,2,3,4]
            },
            {
                "apartado": 4,
                "id": 98,
                "descripcion": "Intrucciones: A continuación hay una lista de afirmaciones, seleccione la opción que le describa.No hay respuestas correctas o equivocadas por lo que es fundamental contestar con sinceridad.Es necesario que todas las afirmaciones cuenten con una respuesta.IMPORTANTE:  La escala puede aparecer de 'Totalmente en desacuerdo'  a  'Totalmente de acuerdo' o a la INVERSA.",
                "pregunta": "Cuando platico omito los detalles que no me son convenientes.",
                "tipo": "CLOSED_AD",
                "opciones": [1,2,3,4]
            },
            {
                "apartado": 4,
                "id": 99,
                "descripcion": "Intrucciones: A continuación hay una lista de afirmaciones, seleccione la opción que le describa.No hay respuestas correctas o equivocadas por lo que es fundamental contestar con sinceridad.Es necesario que todas las afirmaciones cuenten con una respuesta.IMPORTANTE:  La escala puede aparecer de 'Totalmente en desacuerdo'  a  'Totalmente de acuerdo' o a la INVERSA.",
                "pregunta": "Me apena expresar mis dudas o preguntas a figuras de autoridad.",
                "tipo": "CLOSED_AD",
                "opciones": [1,2,3,4]
            },
            {
                "apartado": 4,
                "id": 100,
                "descripcion": "Intrucciones: A continuación hay una lista de afirmaciones, seleccione la opción que le describa.No hay respuestas correctas o equivocadas por lo que es fundamental contestar con sinceridad.Es necesario que todas las afirmaciones cuenten con una respuesta.IMPORTANTE:  La escala puede aparecer de 'Totalmente en desacuerdo'  a  'Totalmente de acuerdo' o a la INVERSA.",
                "pregunta": "Me es complicado negarme a prestar dinero.",
                "tipo": "CLOSED_AD",
                "opciones": [1,2,3,4]
            },
            {
                "apartado": 4,
                "id": 101,
                "descripcion": "Intrucciones: A continuación hay una lista de afirmaciones, seleccione la opción que le describa.No hay respuestas correctas o equivocadas por lo que es fundamental contestar con sinceridad.Es necesario que todas las afirmaciones cuenten con una respuesta.IMPORTANTE:  La escala puede aparecer de 'Totalmente en desacuerdo'  a  'Totalmente de acuerdo' o a la INVERSA.",
                "pregunta": "Si pienso que algún comentario mío ha ofendido a alguien, optó por cambiar el tema o retirarme.",
                "tipo": "CLOSED_AD",
                "opciones": [1,2,3,4]
            },
            {
                "apartado": 4,
                "id": 102,
                "descripcion": "Intrucciones: A continuación hay una lista de afirmaciones, seleccione la opción que le describa.No hay respuestas correctas o equivocadas por lo que es fundamental contestar con sinceridad.Es necesario que todas las afirmaciones cuenten con una respuesta.IMPORTANTE:  La escala puede aparecer de 'Totalmente en desacuerdo'  a  'Totalmente de acuerdo' o a la INVERSA.",
                "pregunta": "Suelo decir que estoy de acuerdo solo por no discutir.",
                "tipo": "CLOSED_AD",
                "opciones": [1,2,3,4]
            },
            {
                "apartado": 4,
                "id": 103,
                "descripcion": "Intrucciones: A continuación hay una lista de afirmaciones, seleccione la opción que le describa.No hay respuestas correctas o equivocadas por lo que es fundamental contestar con sinceridad.Es necesario que todas las afirmaciones cuenten con una respuesta.IMPORTANTE:  La escala puede aparecer de 'Totalmente en desacuerdo'  a  'Totalmente de acuerdo' o a la INVERSA.",
                "pregunta": "Puedo admitir cuando no puedo solo y necesito ayuda.",
                "tipo": "CLOSED_DA",
                "opciones": [1,2,3,4]
            },
            {
                "apartado": 4,
                "id": 104,
                "descripcion": "Intrucciones: A continuación hay una lista de afirmaciones, seleccione la opción que le describa.No hay respuestas correctas o equivocadas por lo que es fundamental contestar con sinceridad.Es necesario que todas las afirmaciones cuenten con una respuesta.IMPORTANTE:  La escala puede aparecer de 'Totalmente en desacuerdo'  a  'Totalmente de acuerdo' o a la INVERSA.",
                "pregunta": "Me es muy complicado decirle a mi jefe que no tiene la razón.",
                "tipo": "CLOSED_AD",
                "opciones": [1,2,3,4]
            },
            {
                "apartado": 4,
                "id": 105,
                "descripcion": "Intrucciones: A continuación hay una lista de afirmaciones, seleccione la opción que le describa.No hay respuestas correctas o equivocadas por lo que es fundamental contestar con sinceridad.Es necesario que todas las afirmaciones cuenten con una respuesta.IMPORTANTE:  La escala puede aparecer de 'Totalmente en desacuerdo'  a  'Totalmente de acuerdo' o a la INVERSA.",
                "pregunta": "No tengo ningún miedo.",
                "tipo": "CLOSED_AD",
                "opciones": [1,2,3,4]
            },
            {
                "apartado": 4,
                "id": 106,
                "descripcion": "Intrucciones: A continuación hay una lista de afirmaciones, seleccione la opción que le describa.No hay respuestas correctas o equivocadas por lo que es fundamental contestar con sinceridad.Es necesario que todas las afirmaciones cuenten con una respuesta.IMPORTANTE:  La escala puede aparecer de 'Totalmente en desacuerdo'  a  'Totalmente de acuerdo' o a la INVERSA.",
                "pregunta": "Me resulta complicado acudir a situaciones sociales con nuevas amistades o extraños.",
                "tipo": "CLOSED_DA",
                "opciones": [1,2,3,4]
            },
            {
                "apartado": 4,
                "id": 107,
                "descripcion": "Intrucciones: A continuación hay una lista de afirmaciones, seleccione la opción que le describa.No hay respuestas correctas o equivocadas por lo que es fundamental contestar con sinceridad.Es necesario que todas las afirmaciones cuenten con una respuesta.IMPORTANTE:  La escala puede aparecer de 'Totalmente en desacuerdo'  a  'Totalmente de acuerdo' o a la INVERSA.",
                "pregunta": "Prefiero tratar los problemas o desacuerdos cuando son muchos que de a poco.",
                "tipo": "CLOSED_AD",
                "opciones": [1,2,3,4]
            },
            {
                "apartado": 4,
                "id": 108,
                "descripcion": "Intrucciones: A continuación hay una lista de afirmaciones, seleccione la opción que le describa.No hay respuestas correctas o equivocadas por lo que es fundamental contestar con sinceridad.Es necesario que todas las afirmaciones cuenten con una respuesta.IMPORTANTE:  La escala puede aparecer de 'Totalmente en desacuerdo'  a  'Totalmente de acuerdo' o a la INVERSA.",
                "pregunta": "Es importante aprender de los demás.",
                "tipo": "CLOSED_DA",
                "opciones": [1,2,3,4]
            },
            {
                "apartado": 4,
                "id": 109,
                "descripcion": "Intrucciones: A continuación hay una lista de afirmaciones, seleccione la opción que le describa.No hay respuestas correctas o equivocadas por lo que es fundamental contestar con sinceridad.Es necesario que todas las afirmaciones cuenten con una respuesta.IMPORTANTE:  La escala puede aparecer de 'Totalmente en desacuerdo'  a  'Totalmente de acuerdo' o a la INVERSA.",
                "pregunta": "Me disgusta que me corrijan.",
                "tipo": "CLOSED_AD",
                "opciones": [1,2,3,4]
            },
            {
                "apartado": 4,
                "id": 110,
                "descripcion": "Intrucciones: A continuación hay una lista de afirmaciones, seleccione la opción que le describa.No hay respuestas correctas o equivocadas por lo que es fundamental contestar con sinceridad.Es necesario que todas las afirmaciones cuenten con una respuesta.IMPORTANTE:  La escala puede aparecer de 'Totalmente en desacuerdo'  a  'Totalmente de acuerdo' o a la INVERSA.",
                "pregunta": "Me es difícil pedir que me aclaren un tema cuando no estoy entendiendo.",
                "tipo": "CLOSED_AD",
                "opciones": [1,2,3,4]
            },
            {
                "apartado": 4,
                "id": 111,
                "descripcion": "Intrucciones: A continuación hay una lista de afirmaciones, seleccione la opción que le describa.No hay respuestas correctas o equivocadas por lo que es fundamental contestar con sinceridad.Es necesario que todas las afirmaciones cuenten con una respuesta.IMPORTANTE:  La escala puede aparecer de 'Totalmente en desacuerdo'  a  'Totalmente de acuerdo' o a la INVERSA.",
                "pregunta": "Me es difícil pedir disculpas.",
                "tipo": "CLOSED_AD",
                "opciones": [1,2,3,4]
            },
            {
                "apartado": 4,
                "id": 112,
                "descripcion": "Intrucciones: A continuación hay una lista de afirmaciones, seleccione la opción que le describa.No hay respuestas correctas o equivocadas por lo que es fundamental contestar con sinceridad.Es necesario que todas las afirmaciones cuenten con una respuesta.IMPORTANTE:  La escala puede aparecer de 'Totalmente en desacuerdo'  a  'Totalmente de acuerdo' o a la INVERSA.",
                "pregunta": "Reconozco que yo no puedo hacer todo.",
                "tipo": "CLOSED_DA",
                "opciones": [1,2,3,4]
            },
            {
                "apartado": 4,
                "id": 113,
                "descripcion": "Intrucciones: A continuación hay una lista de afirmaciones, seleccione la opción que le describa.No hay respuestas correctas o equivocadas por lo que es fundamental contestar con sinceridad.Es necesario que todas las afirmaciones cuenten con una respuesta.IMPORTANTE:  La escala puede aparecer de 'Totalmente en desacuerdo'  a  'Totalmente de acuerdo' o a la INVERSA.",
                "pregunta": "Si alguien habla mal de mi sin razón le busco para aclarar el tema",
                "tipo": "CLOSED_DA",
                "opciones": [1,2,3,4]
            },
            {
                "apartado": 4,
                "id": 114,
                "descripcion": "Intrucciones: A continuación hay una lista de afirmaciones, seleccione la opción que le describa.No hay respuestas correctas o equivocadas por lo que es fundamental contestar con sinceridad.Es necesario que todas las afirmaciones cuenten con una respuesta.IMPORTANTE:  La escala puede aparecer de 'Totalmente en desacuerdo'  a  'Totalmente de acuerdo' o a la INVERSA.",
                "pregunta": "Me es fácil iniciar conversaciones con personas que no conozco.",
                "tipo": "CLOSED_DA",
                "opciones": [1,2,3,4]
            },
            {
                "apartado": 4,
                "id": 115,
                "descripcion": "Intrucciones: A continuación hay una lista de afirmaciones, seleccione la opción que le describa.No hay respuestas correctas o equivocadas por lo que es fundamental contestar con sinceridad.Es necesario que todas las afirmaciones cuenten con una respuesta.IMPORTANTE:  La escala puede aparecer de 'Totalmente en desacuerdo'  a  'Totalmente de acuerdo' o a la INVERSA.",
                "pregunta": "Cuando estoy en desacuerdo con una persona me es difícil seguir la conversación.",
                "tipo": "CLOSED_DA",
                "opciones": [1,2,3,4]
            },
            {
                "apartado": 5,
                "id": 116,
                "descripcion": "Intrucciones: A continuación hay una lista de afirmaciones, seleccione la opción que le describa.No hay respuestas correctas o equivocadas por lo que es fundamental contestar con sinceridad.Es necesario que todas las afirmaciones cuenten con una respuesta.IMPORTANTE:  La escala puede aparecer de 'Totalmente en desacuerdo'  a  'Totalmente de acuerdo' o a la INVERSA.",
                "pregunta": "Si las personas no pueden o no quieren hacer algo, pues ni modo, es su problema.",
                "tipo": "CLOSED_AD",
                "opciones": [1,2,3,4]
            },
            {
                "apartado": 5,
                "id": 117,
                "descripcion": "Intrucciones: A continuación hay una lista de afirmaciones, seleccione la opción que le describa.No hay respuestas correctas o equivocadas por lo que es fundamental contestar con sinceridad.Es necesario que todas las afirmaciones cuenten con una respuesta.IMPORTANTE:  La escala puede aparecer de 'Totalmente en desacuerdo'  a  'Totalmente de acuerdo' o a la INVERSA.",
                "pregunta": "Me es muy difícil admitir cuando me he equivocado.",
                "tipo": "CLOSED_AD",
                "opciones": [1,2,3,4]
            },
            {
                "apartado": 5,
                "id": 118,
                "descripcion": "Intrucciones: A continuación hay una lista de afirmaciones, seleccione la opción que le describa.No hay respuestas correctas o equivocadas por lo que es fundamental contestar con sinceridad.Es necesario que todas las afirmaciones cuenten con una respuesta.IMPORTANTE:  La escala puede aparecer de 'Totalmente en desacuerdo'  a  'Totalmente de acuerdo' o a la INVERSA.",
                "pregunta": "Es importante escuchar el punto de vista de otras personas.",
                "tipo": "CLOSED_DA",
                "opciones": [1,2,3,4]
            },
            {
                "apartado": 5,
                "id": 119,
                "descripcion": "Intrucciones: A continuación hay una lista de afirmaciones, seleccione la opción que le describa.No hay respuestas correctas o equivocadas por lo que es fundamental contestar con sinceridad.Es necesario que todas las afirmaciones cuenten con una respuesta.IMPORTANTE:  La escala puede aparecer de 'Totalmente en desacuerdo'  a  'Totalmente de acuerdo' o a la INVERSA.",
                "pregunta": "Si das tienes que recibir lo mismo.",
                "tipo": "CLOSED_AD",
                "opciones": [1,2,3,4]
            },
            {
                "apartado": 5,
                "id": 120,
                "descripcion": "Intrucciones: A continuación hay una lista de afirmaciones, seleccione la opción que le describa.No hay respuestas correctas o equivocadas por lo que es fundamental contestar con sinceridad.Es necesario que todas las afirmaciones cuenten con una respuesta.IMPORTANTE:  La escala puede aparecer de 'Totalmente en desacuerdo'  a  'Totalmente de acuerdo' o a la INVERSA.",
                "pregunta": "Suelo pensar que las demás personas no me entienden.",
                "tipo": "CLOSED_AD",
                "opciones": [1,2,3,4]
            },
            {
                "apartado": 5,
                "id": 121,
                "descripcion": "Intrucciones: A continuación hay una lista de afirmaciones, seleccione la opción que le describa.No hay respuestas correctas o equivocadas por lo que es fundamental contestar con sinceridad.Es necesario que todas las afirmaciones cuenten con una respuesta.IMPORTANTE:  La escala puede aparecer de 'Totalmente en desacuerdo'  a  'Totalmente de acuerdo' o a la INVERSA.",
                "pregunta": "Colocarse en los zapatos de otros es imposible.",
                "tipo": "CLOSED_AD",
                "opciones": [1,2,3,4]
            },
            {
                "apartado": 5,
                "id": 122,
                "descripcion": "Intrucciones: A continuación hay una lista de afirmaciones, seleccione la opción que le describa.No hay respuestas correctas o equivocadas por lo que es fundamental contestar con sinceridad.Es necesario que todas las afirmaciones cuenten con una respuesta.IMPORTANTE:  La escala puede aparecer de 'Totalmente en desacuerdo'  a  'Totalmente de acuerdo' o a la INVERSA.",
                "pregunta": "Creo en la frase o dicho “Es de sabios cambiar de opinión”.",
                "tipo": "CLOSED_DA",
                "opciones": [1,2,3,4]
            },
            {
                "apartado": 5,
                "id": 123,
                "descripcion": "Intrucciones: A continuación hay una lista de afirmaciones, seleccione la opción que le describa.No hay respuestas correctas o equivocadas por lo que es fundamental contestar con sinceridad.Es necesario que todas las afirmaciones cuenten con una respuesta.IMPORTANTE:  La escala puede aparecer de 'Totalmente en desacuerdo'  a  'Totalmente de acuerdo' o a la INVERSA.",
                "pregunta": "Le doy la razón a las demás personas con tal de no discutir.",
                "tipo": "CLOSED_AD",
                "opciones": [1,2,3,4]
            },
            {
                "apartado": 5,
                "id": 124,
                "descripcion": "Intrucciones: A continuación hay una lista de afirmaciones, seleccione la opción que le describa.No hay respuestas correctas o equivocadas por lo que es fundamental contestar con sinceridad.Es necesario que todas las afirmaciones cuenten con una respuesta.IMPORTANTE:  La escala puede aparecer de 'Totalmente en desacuerdo'  a  'Totalmente de acuerdo' o a la INVERSA.",
                "pregunta": "Si primero escucho y entiendo podré llegar a una mejor solución.",
                "tipo": "CLOSED_DA",
                "opciones": [1,2,3,4]
            },
            {
                "apartado": 5,
                "id": 125,
                "descripcion": "Intrucciones: A continuación hay una lista de afirmaciones, seleccione la opción que le describa.No hay respuestas correctas o equivocadas por lo que es fundamental contestar con sinceridad.Es necesario que todas las afirmaciones cuenten con una respuesta.IMPORTANTE:  La escala puede aparecer de 'Totalmente en desacuerdo'  a  'Totalmente de acuerdo' o a la INVERSA.",
                "pregunta": "Creo que todo tiene un orden en esta vida, y todos debemos seguirlo.",
                "tipo": "CLOSED_AD",
                "opciones": [1,2,3,4]
            },
            {
                "apartado": 5,
                "id": 126,
                "descripcion": "Intrucciones: A continuación hay una lista de afirmaciones, seleccione la opción que le describa.No hay respuestas correctas o equivocadas por lo que es fundamental contestar con sinceridad.Es necesario que todas las afirmaciones cuenten con una respuesta.IMPORTANTE:  La escala puede aparecer de 'Totalmente en desacuerdo'  a  'Totalmente de acuerdo' o a la INVERSA.",
                "pregunta": "Es imposible encontrar soluciones que satisfagan a todos.",
                "tipo": "CLOSED_AD",
                "opciones": [1,2,3,4]
            },
            {
                "apartado": 5,
                "id": 127,
                "descripcion": "Intrucciones: A continuación hay una lista de afirmaciones, seleccione la opción que le describa.No hay respuestas correctas o equivocadas por lo que es fundamental contestar con sinceridad.Es necesario que todas las afirmaciones cuenten con una respuesta.IMPORTANTE:  La escala puede aparecer de 'Totalmente en desacuerdo'  a  'Totalmente de acuerdo' o a la INVERSA.",
                "pregunta": "Los problemas de otras personas también son importantes.",
                "tipo": "CLOSED_DA",
                "opciones": [1,2,3,4]
            },
            {
                "apartado": 5,
                "id": 128,
                "descripcion": "Intrucciones: A continuación hay una lista de afirmaciones, seleccione la opción que le describa.No hay respuestas correctas o equivocadas por lo que es fundamental contestar con sinceridad.Es necesario que todas las afirmaciones cuenten con una respuesta.IMPORTANTE:  La escala puede aparecer de 'Totalmente en desacuerdo'  a  'Totalmente de acuerdo' o a la INVERSA.",
                "pregunta": "Las cosas son como son y a quién no le guste ni modo.",
                "tipo": "CLOSED_AD",
                "opciones": [1,2,3,4]
            },
            {
                "apartado": 5,
                "id": 129,
                "descripcion": "Intrucciones: A continuación hay una lista de afirmaciones, seleccione la opción que le describa.No hay respuestas correctas o equivocadas por lo que es fundamental contestar con sinceridad.Es necesario que todas las afirmaciones cuenten con una respuesta.IMPORTANTE:  La escala puede aparecer de 'Totalmente en desacuerdo'  a  'Totalmente de acuerdo' o a la INVERSA.",
                "pregunta": "Me es incómodo intervenir cuando existe un desacuerdo.",
                "tipo": "CLOSED_AD",
                "opciones": [1,2,3,4]
            },
            {
                "apartado": 5,
                "id": 130,
                "descripcion": "Intrucciones: A continuación hay una lista de afirmaciones, seleccione la opción que le describa.No hay respuestas correctas o equivocadas por lo que es fundamental contestar con sinceridad.Es necesario que todas las afirmaciones cuenten con una respuesta.IMPORTANTE:  La escala puede aparecer de 'Totalmente en desacuerdo'  a  'Totalmente de acuerdo' o a la INVERSA.",
                "pregunta": "Creo que de todas las personas se puede aprender algo.",
                "tipo": "CLOSED_DA",
                "opciones": [1,2,3,4]
            },
            {
                "apartado": 5,
                "id": 131,
                "descripcion": "Intrucciones: A continuación hay una lista de afirmaciones, seleccione la opción que le describa.No hay respuestas correctas o equivocadas por lo que es fundamental contestar con sinceridad.Es necesario que todas las afirmaciones cuenten con una respuesta.IMPORTANTE:  La escala puede aparecer de 'Totalmente en desacuerdo'  a  'Totalmente de acuerdo' o a la INVERSA.",
                "pregunta": "Creo en la frase o dicho “Preguntando se llega a Roma”.",
                "tipo": "CLOSED_DA",
                "opciones": [1,2,3,4]
            },
            {
                "apartado": 5,
                "id": 132,
                "descripcion": "Intrucciones: A continuación hay una lista de afirmaciones, seleccione la opción que le describa.No hay respuestas correctas o equivocadas por lo que es fundamental contestar con sinceridad.Es necesario que todas las afirmaciones cuenten con una respuesta.IMPORTANTE:  La escala puede aparecer de 'Totalmente en desacuerdo'  a  'Totalmente de acuerdo' o a la INVERSA.",
                "pregunta": "Intentó negociar ante situaciones de conflicto.",
                "tipo": "CLOSED_DA",
                "opciones": [1,2,3,4]
            },
            {
                "apartado": 6,
                "id": 133,
                "descripcion": "En este apartado encontrarás algunas preguntas con imágenes, observa el siguiente ejemplo:Coloca en orden la siguiente secuencia de imágenes. ",
                "pregunta": "(CADENA DE LETRAS MAYÚSCULAS SIN ESPACIOS)RESPUESTA: CBA",
                "imageUrl": "images/A6-R0.png",
                "tipo": "SAMPLE"
            },
            {
                "apartado": 6,
                "id": 134,
                "descripcion": "Selecciona la categoría de palabras a la que corresponde la siguiente lista.",
                "pregunta": "Tú -  Él -  Ella - Ustedes - Nosotras",
                "tipo": "MULTI",
                "opciones": ["Adjetivos calificativos","Sustantivos","Pronombres","Preposiciones","Adverbios"],
                "respuestaCorrecta": "Pronombres"
            },
            {
                "apartado": 6,
                "id": 135,
                "descripcion": "Selecciona la categoría de palabras a la que corresponde la siguiente lista.",
                "pregunta": "Rojo - Azul - Verde - Morado - Amarillo",
                "tipo": "MULTI",
                "opciones": ["Colores","Medios de transporte","Dias de la semana","Animales","Deportes"],
                "respuestaCorrecta": "Colores"
            },
            {
                "apartado": 6,
                "id": 136,
                "descripcion": "Coloca en orden la siguiente secuencia de imágenes.",
                "pregunta": "(CADENA DE LETRAS MAYÚSCULAS SIN ESPACIOS)",
                "imageUrl": "images/A6-R3.png",
                "tipo": "OPEN",
                "opciones": [],
                "respuestaCorrecta": "EBFDACG"
            },
            {
                "apartado": 6,
                "id": 137,
                "descripcion": "Selecciona la categoría de palabras a la que corresponde la siguiente lista.",
                "pregunta": "Juan Puerta Comedor Rocío Coche ",
                "tipo": "MULTI",
                "opciones": ["Adjetivos calificativos","Sustantivos","Pronombres","Preposiciones","Adverbios"],
                "respuestaCorrecta": "Sustantivos"
            },
            {
                "apartado": 6,
                "id": 138,
                "descripcion": "Coloca en orden la siguiente secuencia de imágenes.",
                "pregunta": "(CADENA DE LETAS MAYÚSCULAS SIN ESPACIOS)",
                "imageUrl": "images/A6-R5.png",
                "tipo": "OPEN",
                "opciones": [],
                "respuestaCorrecta": "ECDAB"
            },
            {
                "apartado": 6,
                "id": 139,
                "descripcion": "Coloca en orden la siguiente secuencia de imágenes.",
                "pregunta": "(CADENA DE LETAS MAYÚSCULAS SIN ESPACIOS)",
                "imageUrl": "images/A6-R6.png",
                "tipo": "OPEN",
                "opciones": [],
                "respuestaCorrecta": "BAFECD"
            },
            {
                "apartado": 6,
                "id": 140,
                "descripcion": "Coloca la letra que complete la siguiente secuencia.",
                "pregunta": "C, L, L, Q, C, L, S, _.",
                "tipo": "OPEN",
                "opciones": [],
                "respuestaCorrecta": "S"
            },
            {
                "apartado": 6,
                "id": 141,
                "descripcion": "Selecciona la categoría de palabras a la que corresponde la siguiente lista.",
                "pregunta": "Rojo Grande Dulce Raro Barato ",
                "tipo": "MULTI",
                "opciones": ["Adjetivos calificativos","Sustantivos","Pronombres","Preposiciones","Adverbios"],
                "respuestaCorrecta": "Adjettivos calificativos"
            },
            {
                "apartado": 6,
                "id": 142,
                "descripcion": "Coloca el número que completen las siguientes secuencias numéricas.",
                "pregunta": "76, 56, 78, 44, 3377, 56, 71, 42, 3375, 57, 77, 41, 33 _5, 56, 79, 44, 39 ",
                "tipo": "OPEN",
                "opciones": [],
                "respuestaCorrecta": 7
            },
            {
                "apartado": 6,
                "id": 143,
                "descripcion": "Coloca en orden la siguiente secuencia de imágenes.",
                "pregunta": "(CADENA DE LETAS MAYÚSCULAS SIN ESPACIOS)",
                "imageUrl": "images/A6-R10.png",
                "tipo": "OPEN",
                "opciones": [],
                "respuestaCorrecta": "BA"
            },
            {
                "apartado": 6,
                "id": 144,
                "descripcion": "Escribe los números que completen las siguientes secuencias numéricas.",
                "pregunta": "65, 58, __, 47, 43, 40, 38 ",
                "tipo": "OPEN",
                "opciones": [],
                "respuestaCorrecta": 52
            },
            {
                "apartado": 7,
                "id": 145,
                "descripcion": "Instrucciones: Selecciona la afirmación que te describa ",
                "pregunta": "Para mi arreglo diarioa) Opto por algo más cotidianob) Trato de romper los estándares",
                "tipo": "MULTI",
                "opciones": ["a","b"],
                "respuestaCorrecta": "b"
            },
            {
                "apartado": 7,
                "id": 146,
                "descripcion": "Instrucciones: Selecciona la afirmación que te describa ",
                "pregunta": "Los convencionalismosa) Me aburrenb) Orientan y tranquilizan",
                "tipo": "MULTI",
                "opciones": ["a","b"],
                "respuestaCorrecta": "a"
            },
            {
                "apartado": 7,
                "id": 147,
                "descripcion": "Instrucciones: Selecciona la afirmación que te describa ",
                "pregunta": "Si estás leyendo una noticia en una página de internet, y el siguiente fragmento no cargaa) Esperas a que cargue y si no lo hace sigues con tus demás pendientesb) Buscas en otra página la información que te falto por leer",
                "tipo": "MULTI",
                "opciones": ["a","b"],
                "respuestaCorrecta": "b"
            },
            {
                "apartado": 7,
                "id": 148,
                "descripcion": "Instrucciones: Selecciona la afirmación que te describa ",
                "pregunta": "Mi conocimiento es más limitado a ciertas áreas, trato de estar enfocado siempre.a) Verdaderob) Falso",
                "tipo": "MULTI",
                "opciones": ["a","b"],
                "respuestaCorrecta": "b"
            },
            {
                "apartado": 7,
                "id": 149,
                "descripcion": "Instrucciones: Selecciona la afirmación que te describa ",
                "pregunta": "Cuando tengo que resolver un problema\\na) Opto por la opción habitual\\nb) Propongo alguna alternativa distinta",
                "tipo": "MULTI",
                "opciones": ["a","b"],
                "respuestaCorrecta": "b"
            },
            {
                "apartado": 7,
                "id": 150,
                "descripcion": "Instrucciones: Selecciona la afirmación que te describa ",
                "pregunta": "El conocimiento que adquieres en un área es imposible se pueda aplicar a otraa) Falsob) Verdadero",
                "tipo": "MULTI",
                "opciones": ["a","b"],
                "respuestaCorrecta": "a"
            },
            {
                "apartado": 7,
                "id": 151,
                "descripcion": "Instrucciones: Selecciona la afirmación que te describa ",
                "pregunta": "Si alguien me plantea un proyecto o negocio nuevo\\na) Se me ocurren muchas ideas al respecto\\nb) Realizó un análisis exhaustivo al respecto",
                "tipo": "MULTI",
                "opciones": ["a","b"],
                "respuestaCorrecta": "a"
            },
            {
                "apartado": 7,
                "id": 152,
                "descripcion": "Instrucciones: Selecciona la afirmación que te describa ",
                "pregunta": "Yo creo que cuando invitas a alguien a salira) La opción habitual es la mejor opciónb) Ser diferentes es la mejor opción",
                "tipo": "MULTI",
                "opciones": ["a","b"],
                "respuestaCorrecta": "b"
            },
            {
                "apartado": 7,
                "id": 153,
                "descripcion": "Instrucciones: Selecciona la afirmación que te describa ",
                "pregunta": "Las cosas deben hacersea) Según lo establecidob) Adaptándose a cada caso",
                "tipo": "MULTI",
                "opciones": ["a","b"],
                "respuestaCorrecta": "b"
            },
            {
                "apartado": 7,
                "id": 154,
                "descripcion": "Instrucciones: Selecciona la afirmación que te describa ",
                "pregunta": "Para mi oficina o lugar de trabajo yo prefieroa) Optar por lo habitualb) Que refleje mi personalidad",
                "tipo": "MULTI",
                "opciones": ["a","b"],
                "respuestaCorrecta": "b"
            },
            {
                "apartado": 7,
                "id": 155,
                "descripcion": "Instrucciones: Selecciona la afirmación que te describa ",
                "pregunta": "“El que no arriesga no gana”a) Verdaderob) Falso",
                "tipo": "MULTI",
                "opciones": ["a","b"],
                "respuestaCorrecta": "a"
            },
            {
                "apartado": 7,
                "id": 156,
                "descripcion": "Instrucciones: Selecciona la afirmación que te describa ",
                "pregunta": "Cuando me encomiendan trabajar en un proyecto nuevoa) Me baso en proyectos ya establecidosb) Intento meter algún toque original",
                "tipo": "MULTI",
                "opciones": ["a","b"],
                "respuestaCorrecta": "b"
            }
        ]
    }
}

const FinalComponent = () => {

    const { useState } = React;
    const [state, setState] = useState({});

    const sendAnswers = (ev) => {

        ev.preventDefault();
        console.log(userAnswers);
        console.log(JSON.stringify(userAnswers));
        document.cookie = 'finished=true';

        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(userAnswers)
        };
        fetch('http://localhost:8080/exam/end', requestOptions)
            .then(response => response.json())
            .then(data => console.log("test") );

        //console.log(setState)

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

const QuestionComponent = ({change, description, type, question, questionNumber, options, section}) =>
{
    const { useState} = React;

    const [answered, setAnswered] = useState(false);
    const [value, setNewValue] = useState(questionNumber);

    function handleChange(event) {
        let _qn =  questionNumber;
        setNewValue(_qn + 1);
        change(value);
    }
    //console.log(answered);

    const mapArr = (arr) => {
        const mapping = {
            1: "Completamente Desacuerdo",
            2: "Desacuerdo",
            3: "Deacuerdo",
            4: "Completamente Deacuerdo"
        }
        return options.map(e => mapping[e]);
    }

    console.log(options)

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
            143: "../../images/A6-R10.png"
        }
        if(mapping.hasOwnProperty(id)) {
            return mapping[id]
        } else {
            return null;
        }

    }
        console.log(mapImages(questionNumber))

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

                if(answer.value != null ) {
                    userAnswers.answers.push(
                        {
                            "question": questionNumber,
                            "section": section,
                            "answer": answer.value
                        }
                    )
                }

                //alert(answer.value)
                handleChange(e)
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
                            <input name="answer" style={{ margin:"80px 20px;" }} className="answer" type="text" onClick={ev => {selectOpenAnswer(ev)} }/>
                        </div>
                    )

                }


            case 'SAMPLE':
                return (
                    <div className="pregunta-opcion-abierta-img">
                        <img className="open-image answer selected" src={mapImages(questionNumber)}></img>
                        <p>Esta es una pregunta de ejemplo, no afectará la ponderación total</p>
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

const ParentComponent = () => {
    const { useState } = React;

    let [currentQuestion, setCurrentQuestion] = useState(startedQuestion - 1);
    function handleState(newValue) {
        setCurrentQuestion(newValue);
    }


    console.log(JSON.stringify(userAnswers));
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
            />
        )})

    //console.log(currentQuestion);

    return (
        <>
            {
                questionComponents[currentQuestion] != null ? questionComponents[currentQuestion] : <FinalComponent/>
                /*
                                                questionComponents[132]


                */
            }
        </>
    )
}
//const sampleQuestion = "Trato de solucionar los problemas antes de que se hagan más grandes";
//const opciones = ['Totalmente Desacuerdo','Desacuerdo','Deacuerdo','Totalmente Deacuerdo'];

const JSONSample = {
    "apartado1": {
        "acumulador": 0,
        "no_pregs": 36,
        "instrucciones": "Estas son las instrucciones, de la sección 1",
        "preguntas": [
            {
                "tipo": "CLOSED_AD",
                "pregunta": "Si un vendedor hizo un gran esfuerzo para mostrarme un producto que no me convence del todo, es difícil para mí decirle que no.",
                "opciones": [1, 2, 3, 4],
                "id": 1,
                "respuestaUsuario": " ",
                "respuestaCorrecta:": " ",
                "section":"Apartado 1"
            },
            {
                "tipo": "CLOSED_AD",
                "pregunta": "Me identifico con personas que trabajan muy duro pero que no consiguen sus objetivos.",
                "opciones": [1, 2, 3, 4],
                "id": 2,
                "respuestaUsuario": " ",
                "respuestaCorrecta:": " ",
                "section":"Apartado 1"
            },
            {
                "tipo": "CLOSED_DA",
                "pregunta": "Prefiero presentar una solicitud por escrito para contratarme o inscribirme que pasar por una entrevista.",
                "opciones": [1, 2, 3, 4],
                "id": 3,
                "respuestaUsuario": " ",
                "respuestaCorrecta:": " ",
                "section":"Apartado 1"
            }]
    }
};

const questions = examJSON.examen.preguntas;

// Tipos de preguntas:
// - CLOSED_DA
// - CLOSED_AD
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

