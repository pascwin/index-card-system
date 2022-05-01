import React from "react";
import { Alert } from 'react-bootstrap';

const AlertInfo = ({ status }) => {
  if (status === "neutral") {
    return (
      <Alert variant="dark" id="alert">
        Bitte gebe deine Lösung ein
      </Alert>
    )
  } else if (status === "richtig") {
      return (
      <Alert variant="success" id="alert">
        Deine Antwort war richtig!
      </Alert>
      )
  } else {
    return (
      <Alert variant="danger" id="alert">
        Die Antwort war leider falsch!
      </Alert>
    )
  }
}

export default AlertInfo;