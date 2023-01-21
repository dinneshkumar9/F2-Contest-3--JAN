const storedData = localStorage.getItem('userData');
const userData = JSON.parse(storedData);

const sampleData = [
    {
      question: "What is a dog?",
      answer: "A dog is a four-legged mammal and a common household pet.",
      imageLink: "https://upload.wikimedia.org/wikipedia/commons/e/ed/Huskamute_facial_expression.jpg"
    },
    {
      question: "What is the capital of France?",
      answer: "The capital of France is Paris.",
      imageLink: "https://live.staticflickr.com/65535/49952647016_fbe9be59dd_z.jpg"
    },
    {
      question: "What is the largest planet in our solar system?",
      answer: "The largest planet in our solar system is Jupiter.",
      imageLink: "https://i.stack.imgur.com/MiFTU.jpg"
    }
  ];
  
const submitButton = document.querySelector('#submit-button');
const questionInput = document.querySelector('#question');
const answerContainer = document.querySelector('#answer-container');
const tokenContainer = document.querySelector('#token-container');
const speakTextButton = document.querySelector('#speak-text-button');
const tokenInput = document.querySelector('#token');

submitButton.addEventListener('click', () => {
  const question = questionInput.value;
  const data = sampleData.find((data) => data.question === question);

  if(data) {
    const { answer, imageLink } = data;
    answerContainer.innerHTML = 
    `
      <p>Answer: ${answer}</p>
      <img src="${imageLink}" width="200px" height="200px" alt="Image">
    `;
    tokenContainer.style.display = 'block';
  } else {
    alert('Question not found');
  }
});

speakTextButton.addEventListener('click', () => {
    const token = tokenInput.value;
    // check if the entered token matches the user's token
    const user = userData.find((user) => user.token === token);
    if (!user) {
      alert('Invalid token');
      return;
    }
    if (!user.callsLeft) {
      user.callsLeft = 10;
    }
    if (user.callsLeft > 0) {
      //speak the text
      // code for speaking the text
      user.callsLeft--;
      alert(`Welcome ${user.name}, you have ${user.callsLeft} calls left`);
    } else {
      alert(`Welcome ${user.name}, you have reached the maximum limit of 10 calls. Please contact the administrator to increase the number of calls.`);
    }
});
