import { useEffect, useState } from 'react';
import './App.css';
import { Button, Form, Col } from 'react-bootstrap';
import { vokabeln } from "../vokabeln"
import AlertInfo from "../components/AlertInfo/AlertInfo"

export const App = () => {
    const [vocabulary, setVocabulary] = useState(vokabeln)
    const [question, setQuestion] = useState("")
    const [solution, setSolution] = useState("")
    const [alertStatus, setAlertStatus] = useState("neutral")


    useEffect(() => {
        let position = Math.floor(Math.random() * vocabulary.length);
        document.getElementById("question").innerHTML = setQuestion(vocabulary[position].frage)
        setSolution(vocabulary[position].antwort)
    }, [])

    const checkInput = () => {
        const answerFromUser = document.getElementById("solution").value
        if (solution.toLowerCase() !== answerFromUser.toLowerCase()) {
            console.log(alertStatus)
            setAlertStatus("falsch")
        } else if (solution.toLowerCase() === answerFromUser.toLowerCase()) {
            solutionRight(answerFromUser)
        } else {
            this.setAlert("falsch")
        }
    }

    const solutionRight = (solution) => {
        setAlert("richtig")
        document.getElementById("textfield").hidden = true
        document.getElementById("answer").hidden = false
        document.getElementById("answerCorrect").innerHTML = solution
        document.getElementById("checkAnswer").hidden = true
        document.getElementById("nextQuestion").hidden = false
    }

    const nextVocabulary = () => {
        resetForm()
        let vocabulary = generateVocabulary()
        let position = Math.floor(Math.random() * vocabulary.length);
        document.getElementById("question").innerHTML = vocabulary[position].frage
        setSolution(vocabulary[position].antwort)
    }

    const generateVocabulary = () => {
        let array = vocabulary
        const value = document.getElementById("question").innerHTML
        array = array.filter(item => item.frage !== value)
        setVocabulary(array)
        return array
    }

    const resetForm = () => {
        setAlert("neutral")
        document.getElementById("checkAnswer").hidden = false
        document.getElementById("nextQuestion").hidden = true
        document.getElementById("textfield").hidden = false
        document.getElementById("answer").hidden = true
        document.getElementById("solution").value = ""
    }

    const setAlert = (status) => {
        setAlertStatus(status)
    }

    return (
        <div className="App">
            <br />
            <AlertInfo status={alertStatus} />
            <br />
            <Form.Group>
                <Form.Row>
                    <Form.Label column="lg" lg={2}>Eingabe:</Form.Label>
                    <Col className="text-left">
                        <Form.Label column="lg" lg={2} type="text" placeholder="Gebe eine Lösung ein">
                            <div id="question">{question}</div></Form.Label>
                    </Col>
                </Form.Row>
                <br />
                <Form.Row>
                    <Form.Label column="lg" lg={2}>Antwort:</Form.Label>
                    <Col id="textfield">
                        <Form.Control size="lg" type="text" placeholder="Gebe eine Lösung ein" id="solution" />
                    </Col>
                    <Col hidden className="text-left" id="answer">
                        <Form.Label column="lg" lg={2} type="text" placeholder="Gebe eine Lösung ein">
                            <div id="answerCorrect"></div></Form.Label>
                    </Col>
                    <Col id="checkAnswer" lg={2}><Button size="lg" onClick={checkInput}>abgeben!</Button></Col>
                    <Col hidden id="nextQuestion" lg={2}><Button size="lg" onClick={nextVocabulary}>Nächste Vokabel!</Button></Col>
                    <Col lg={4}></Col>
                </Form.Row>
            </Form.Group>
        </div>
    );

}