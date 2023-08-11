// Danh sách câu hỏi và đáp án
const allQuestions = [
    {
        images: [ 'img/Question01.jpg','img/question1.jpg'],
        answer: 'Imply',
        hint: 'To communicate an idea or feeling without saying it directly'
    },
    {
        images: [ 'img/Question02.jpg','img/question1.jpg'],
        answer: 'Implication',
        hint: 'Implicit meaning or message inferred from context or language.'
    },
    {
        images: [ 'img/Question03.jpg','img/question3.jpg'],
        answer: 'Repercussion',
        hint: 'Consequence is the result or effect of an action, decision, or event'
    },
    {
        images: [ 'img/Question04.jpg','img/question4.jpg'],
        answer: 'Initiative',
        hint: 'A new plan or process to achieve something or solve a problem'
    },
    {
        images: [ 'img/Question05.jpg','img/question5.jpg'],
        answer: 'Commitment',
        hint: 'A promise or firm decision to do something'
    },
    {
        images: [ 'img/Question06.jpg','img/question6.jpg'],
        answer: 'Executive',
        hint: 'Governance is the act of governing or managing.'
    },
    {
        images: [ 'img/Question07.jpg','img/question7.jpg'],
        answer: 'Equator',
        hint: '______ is the center circle on the surface of the earth'
    },
    {
        images: [ 'img/Question08.jpg','img/question8.jpg'],
        answer: 'Extinction',
        hint: 'A situation in which something no longer exists'
    },
    {
        images: [ 'img/Question09.jpg','img/question9.jpg'],
        answer: 'Output',
        hint: '______is the end result of a process or system.'
    },
    {
        images: [ 'img/Question010.jpg','img/question10.jpg'],
        answer: 'Accelerate',
        hint: 'To happen or make something happen sooner or faster'
    },
    {
        images: [ 'img/Question011.jpg','img/question11.jpg'],
        answer: 'Saturate',
        hint: 'To completely fill to the point of no more addition.'
    },
    {
        images: [ 'img/Question012.jpg','img/question12.jpg'],
        answer: 'Sexist',
        hint: 'Unequal treatment based on sex.'
    },
    {
        images: [ 'img/Question013.jpg','img/question13.jpg'],
        answer: 'Tendency',
        hint: '"A trend" is the current popular direction'
    },
    {
        images: [ 'img/Question014.jpg','img/question14.jpg'],
        answer: 'Optimism',
        hint: 'A belief that good things will happen'
    },
    {
        images: [ 'img/Question015.jpg','img/question15.jpg'],
        answer: 'Vulnerable',
        hint: 'Weak and easily hurt physically or emotionally'
    },
    {
        images: [ 'img/Question016.jpg','img/question16.jpg'],
        answer: 'Biodiversity',
        hint: 'the variety of life within ecosystems'
    },
    {
        images: [ 'img/Question017.jpg','img/question17.jpg'],
        answer: 'Consumption',
        hint: 'The act of buying and using products'
    },
    {
        images: [ 'img/Question018.jpg','img/question18.jpg'],
        answer: 'Atmosphere',
        hint: 'the mixture of gases around the earth'
    },
    {
        images: [ 'img/Question019.jpg','img/question19.jpg'],
        answer: 'Reverse',
        hint: 'to change the direction, result, etc. of something to its opposite'
    },
    {
        images: [ 'img/Question020.jpg','img/question20.jpg'],
        answer: 'Input',
        hint: '_____is the data or information fed into a system for processing'
    },
    {
        images: [ 'img/Question021.jpg','img/question21.jpg'],
        answer: 'Myth',
        hint: 'Ancient stories that explain early group history or natural events.'
    },
    {
        images: [ 'img/Question022.jpg','img/question14.jpg'],
        answer: 'Pessimistic',
        hint: 'Anticipating negative future outcomes.'
    },
    {
        images: [ 'img/Question023.jpg','img/question23.jpg'],
        answer: 'Flutuate',
        hint: 'To often change dramatically in size, amount, or quality.'
    },
    {
        images: [ 'img/Question024.jpg','img/question24.jpg'],
        answer: 'Expand',
        hint: 'To become greater in size, number or importance'
    },
    {
        images: [ 'img/Question025.jpg','img/question25.jpg'],
        answer: 'Thaw',
        hint: 'Ice melting or disappearing due to an increase in temperature.'
    },
    {
        images: [ 'img/Question026.jpg','img/question26.jpg'],
        answer: 'Sweeping',
        hint: 'Having an important effect on a large part of something'
    },
    {
        images: [ 'img/Question027.jpg','img/question12.jpg'],
        answer: 'Boundary',
        hint: 'To establish a separation or division between two entities'
    },
    {
        images: [ 'img/Question028.jpg','img/question28.jpg'],
        answer: 'Presume',
        hint: 'The assumption is imagining without proof.'
    },
    {
        images: [ 'img/question14.jpg','img/question29.jpg'],
        answer: 'Perspective',
        hint: 'A viewpoint is how someone sees and understands a situation.'
    },
    {
        images: [ 'img/Question030.jpg','img/question30.jpg'],
        answer: 'Dimension',
        hint: 'An aspect, or way of looking at or thinking about something'
    },
    

    // Thêm các câu hỏi và đáp án khác tại đây
];

let questions = [];
let score = 0;
let attemptsLeft = 3;
let currentQuestion;
let displayedQuestions = [];

function handleNextButtonClick() {
    if (attemptsLeft > 0) {
        checkAnswer(); // Kiểm tra câu trả lời
    } else {
        continueToNextQuestion(); // Tiếp tục câu hỏi tiếp theo sau khi trả lời sai 3 lần
    }
}
function getRandomQuestion() {
    if (questions.length === 0 && displayedQuestions.length === allQuestions.length) {
        // Nếu không còn câu hỏi mới và tất cả câu hỏi đã được hiển thị, trả về null
        return null;
    }

    if (questions.length === 0) {
        questions = [...allQuestions]; // Sao chép tất cả câu hỏi vào mảng mới
        displayedQuestions = []; // Reset mảng các câu hỏi đã hiển thị khi đã hiển thị hết tất cả câu hỏi
    }

    let randomIndex;
    let selectedQuestion;

    // Lặp cho đến khi lấy được câu hỏi chưa hiển thị
    do {
        randomIndex = Math.floor(Math.random() * questions.length);
        selectedQuestion = questions[randomIndex];
    } while (displayedQuestions.includes(selectedQuestion));

    // Đánh dấu câu hỏi đã hiển thị
    displayedQuestions.push(selectedQuestion);

    return questions.splice(randomIndex, 1)[0]; // Lấy câu hỏi và loại bỏ nó khỏi danh sách
}


function displayQuestion() {
    currentQuestion = getRandomQuestion();
    const questionImages = document.querySelectorAll('.question-image');

    for (let i = 0; i < questionImages.length; i++) {
        questionImages[i].src = currentQuestion.images[i];
        questionImages[i].alt = `Câu đố ${i + 1}`;
    }

    // Lưu đáp án và câu gợi ý vào thuộc tính data-answer và data-hint để so sánh và hiển thị sau này
    const answerInput = document.getElementById('answerInput');
    answerInput.dataset.answer = currentQuestion.answer;
    answerInput.dataset.hint = currentQuestion.hint;

    document.getElementById('result').textContent = '';
    answerInput.value = '';
    hideNextButton();
    hideContinueButton();
    attemptsLeft = 3; // Reset lại số lượt kiểm tra khi có câu hỏi mới

    // Hiển thị câu gợi ý
    const hintElement = document.getElementById('hint');
    hintElement.textContent = `Hint: ${currentQuestion.hint}`;
}
function checkAnswer() {
    if (attemptsLeft > 0) {
        const userInput = document.getElementById('answerInput').value;
        const correctAnswer = document.getElementById('answerInput').dataset.answer;

        if (userInput.toLowerCase() === correctAnswer.toLowerCase()) {
            document.getElementById('result').textContent = 'Correct';

            score += 100; // Cộng thêm 100 điểm nếu trả lời đúng
            document.getElementById('score').textContent = `Score: ${score}`;
            attemptsLeft = 3; // Reset số lần kiểm tra nếu trả lời đúng
            showNextButton();
            document.getElementById('result').style.color = '#00CC00';
        } else {
            attemptsLeft--;
            if (attemptsLeft === 0) {
                document.getElementById('result').textContent = `Incorrect. The answer is: ${currentQuestion.answer}`;
                showContinueButton();
            } else {
                document.getElementById('result').textContent = `Incorrect. You only have ${attemptsLeft} checks left.`;
            }
            
            // Thêm dòng này để thay đổi màu chữ của #result thành đỏ khi câu trả lời sai
            document.getElementById('result').style.color = 'black';
        }
    }
}


function showNextButton() {
    document.getElementById('nextButton').style.display = 'block';
}

function hideNextButton() {
    document.getElementById('nextButton').style.display = 'none';
}

function showContinueButton() {
    document.getElementById('continueButton').style.display = 'block';
}

function hideContinueButton() {
    document.getElementById('continueButton').style.display = 'none';
}

function nextQuestion() {
    hideNextButton();
    hideContinueButton();
    displayRandomQuestion();
    document.getElementById('answerInput').removeAttribute('disabled');
}

function continueToNextQuestion() {
    hideContinueButton();
    displayRandomQuestion();
    document.getElementById('answerInput').removeAttribute('disabled');
} 

// Hiển thị câu hỏi ngẫu nhiên khi trang được tải lần đầu
function displayRandomQuestion() {
    currentQuestion = getRandomQuestion();
    const questionImages = document.querySelectorAll('.question-image');

    for (let i = 0; i < questionImages.length; i++) {
        questionImages[i].src = currentQuestion.images[i];
        questionImages[i].alt = `Câu đố ${i + 1}`;
    }

    // Lưu đáp án và câu gợi ý vào thuộc tính data-answer và data-hint để so sánh và hiển thị sau này
    const answerInput = document.getElementById('answerInput');
    answerInput.dataset.answer = currentQuestion.answer;
    answerInput.dataset.hint = currentQuestion.hint;

    document.getElementById('result').textContent = '';
    answerInput.value = '';
    hideNextButton();
    hideContinueButton();
    attemptsLeft = 3; // Reset lại số lượt kiểm tra khi có câu hỏi mới

    // Hiển thị câu gợi ý
    const hintElement = document.getElementById('hint');
    hintElement.textContent = `Hint: ${currentQuestion.hint}`;
}

// ... (Các phần mã khác vẫn giữ nguyên)

function nextQuestion() {
    hideNextButton();
    hideContinueButton();
    displayRandomQuestion();
    document.getElementById('answerInput').removeAttribute('disabled');
}

function continueToNextQuestion() {
    hideContinueButton();
    displayRandomQuestion();
    document.getElementById('answerInput').removeAttribute('disabled');
}

// Hiển thị câu hỏi ngẫu nhiên khi trang được tải lần đầu
displayRandomQuestion();