// Array de preguntas y respuestas con la respuesta correcta
const questions = [
    {
      question: "¿Cuál es mi nombre completo?",
      answers: ["Sullivan Guiton Martin", "Ivan Martin Guiton", "Ivan Guiton Martin", "Sullivan Martin Guiton"],
      correctAnswerIndex: 3 // Índice de la respuesta correcta en el array de respuestas
    },
    {
      question: "¿Cuál es mi fecha de nacimiento?",
      answers: ["11 de Abril de 2000", "11 de Abril de 1997", "11 de Noviembre de 1997", "11 de Noviembre de 2000"],
      correctAnswerIndex: 1
    },
    {
      question: "¿Cuál es mi color favorito?",
      answers: ["Beige", "Negro", "Rosa", "Azul"],
      correctAnswerIndex: 1
    },
    {
      question: "¿Cuál es mi comida favorita?",
      answers: ["No comer", "Pizza", "Hamburguesa", "Espinacas"],
      correctAnswerIndex: 2
    },
    {
      question: "¿Cuál es mi película favorita?",
      answers: ["El señor de los anillos", "Barbie", "Blade Runner", "Star Wars"],
      correctAnswerIndex: 0
    },
    {
      question: "¿Cuál es mi género musical favorito?",
      answers: ["RAP", "Clasica", "LoFi", "Reggueton"],
      correctAnswerIndex: 2
    },
    {
      question: "¿Cuál es mi hobby o pasatiempo preferido?",
      answers: ["Videojuegos", "Leer", "Follarte", "Coser"],
      correctAnswerIndex: 0
    },
    {
      question: "¿Cuál es mi deporte favorito?",
      answers: ["Boxeo", "Rugby", "Correr", "Bici"],
      correctAnswerIndex: 1
    },
    {
      question: "¿Cuál es mi lugar favorito para viajar?",
      answers: ["India", "Japon", "Noruega", "Estados Unidos"],
      correctAnswerIndex: 1
    },
    {
      question: "¿Cuál es mi miedo más grande?",
      answers: ["Sangre", "Pajaros", "Arañas", "Altura"],
      correctAnswerIndex: 1
    },
    {
      question: "¿Cuál es mi libro favorito?",
      answers: ["El principito", "Harry Potter", "Rebelión en la granja", "Naruto"],
      correctAnswerIndex: 2
    },
    {
      question: "¿Cuál es mi animal favorito?",
      answers: ["Todos", "Gato", "Perro", "Caballo"],
      correctAnswerIndex: 0
    },
    {
      question: "¿Cuál es mi sueño o meta en la vida?",
      answers: ["Ser famoso", "Ser feliz y vivir tranquilo", "Ser rico", "Viajar"],
      correctAnswerIndex: 1
    },
    {
      question: "¿Cuál es mi mejor habilidad o talento?",
      answers: ["Cantar", "Cocinar", "Hacer reir", "Pintar"],
      correctAnswerIndex: 2
    },
    {
      question: "¿Cuál es mi peor hábito?",
      answers: ["Comer mal", "Domir mal", "Fumar", "Beber"],
      correctAnswerIndex: 1
    },
    {
      question: "¿Cuál es mi canción favorita?",
      answers: ["bohemian rhapsody", "100k pasos", "Lover", "Song of storms"],
      correctAnswerIndex: 1
    },
    {
      question: "¿Cuál es mi programa de televisión favorito?",
      answers: ["Shinchan", "Cyberpunk", "Amar en tiempos revueltos", "Salvame"],
      correctAnswerIndex: 1
    },
    {
      question: "¿Cuál es mi marca de ropa preferida?",
      answers: ["Vans", "Nike", "Dior", "Versace"],
      correctAnswerIndex: 0
    }
  ];
  
  
  let currentQuestionIndex = 0;
  let score = 0; // Puntuación inicial
  const questionElement = document.getElementById('question');
  const answersElement = document.getElementById('answers');
  const scoreElement = document.getElementById('score');
  
  function displayQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;
    answersElement.innerHTML = ''; // Limpiar respuestas anteriores
  
    currentQuestion.answers.forEach((answer, index) => {
      const answerButton = document.createElement('button');
      answerButton.textContent = answer;
      answerButton.classList.add('btn', 'answer');
      answerButton.setAttribute('onclick', `selectAnswer(${index})`);
      answersElement.appendChild(answerButton);
    });
  }
  
  function selectAnswer(index) {
    const currentQuestion = questions[currentQuestionIndex];
    const selectedButton = event.target;
    if (!selectedButton.classList.contains('selected')) {
      const answerButtons = answersElement.querySelectorAll('.answer');
      answerButtons.forEach(button => button.classList.remove('selected'));
      selectedButton.classList.add('selected');
  
      if (index === currentQuestion.correctAnswerIndex) {
        currentQuestion.answeredCorrectly = true;
      } else {
        currentQuestion.answeredCorrectly = false;
      }
    }
  }
  
  function nextQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    const selectedButton = answersElement.querySelector('.selected');
  
    if (selectedButton && currentQuestion.answeredCorrectly) {
      score++;
    }
  
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
      displayQuestion();
      scoreElement.textContent = `Puntuación: ${score}`; // Actualizar la puntuación al pasar a la siguiente pregunta
    } else {
      alert(`Has completado todas las preguntas, tu puntuación es de ${score}`);
      currentQuestionIndex = 0; // Reiniciar el juego si se llega al final
      score = 0; // Reiniciar la puntuación
      scoreElement.textContent = `Puntuación: ${score}`; // Actualizar la puntuación al reiniciar el juego
      displayQuestion();
    }
  }
  
  // Mostrar la primera pregunta al cargar la página
  displayQuestion();