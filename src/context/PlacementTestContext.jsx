import { createContext, useState } from 'react';

const PlacementTestContext = createContext();

export const PlacementTestProvider = ({ children }) => {
  const [questions, setQuestions] = useState([
    {
      question: '¿Cuál es la capital de España?',
      answers: [
        {
          answer: 'Madrid',
          correct: true,
        },
        {
          answer: 'Barcelona',
          correct: false,
        },
        {
          answer: 'Valencia',
          correct: false,
        },
        {
          answer: 'Sevilla',
          correct: false,
        },
      ],
    },
    {
      question: '¿Cuál es la capital de Francia?',
      answers: [
        {
          answer: 'París',
          correct: true,
        },
        {
          answer: 'Marsella',
          correct: false,
        },
        {
          answer: 'Lyon',
          correct: false,
        },
        {
          answer: 'Niza',
          correct: false,
        },
      ],
    },
    {
      question: '¿Cuál es la capital de México?',
      answers: [
        {
          answer: 'Ciudad de México',
          correct: true,
        },
        {
          answer: 'Guadalajara',
          correct: false,
        },
        {
          answer: 'Monterrey',
          correct: false,
        },
        {
          answer: 'Tijuana',
          correct: false,
        },
      ],
    },
    {
      question: '¿Cuál es la capital de Estados Unidos?',
      answers: [
        {
          answer: 'Washington D.C.',
          correct: true,
        },
        {
          answer: 'Nueva York',
          correct: false,
        },
        {
          answer: 'Los Ángeles',
          correct: false,
        },
        {
          answer: 'Chicago',
          correct: false,
        },
      ],
    },
    {
      question: '¿Cuál es la capital de Japón?',
      answers: [
        {
          answer: 'Tokio',
          correct: true,
        },
        {
          answer: 'Osaka',
          correct: false,
        },
        {
          answer: 'Kyoto',
          correct: false,
        },
        {
          answer: 'Nagoya',
          correct: false,
        },
      ],
    },
  ]);
  const [answers, setAnswers] = useState([]);

  const addAnswer = (answer) => {
    setAnswers([...answers, answer]);
  };

  return (
    <PlacementTestContext.Provider value={{ questions, answers, addAnswer }}>
      {children}
    </PlacementTestContext.Provider>
  );
};

export default PlacementTestContext;
