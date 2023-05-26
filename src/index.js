import data from './db.js';
const state = {
    pageType: 'home',
    quizId: null,
    clickedAnswerId: null,
    taskIndex: null,
    correctAnswerCount: null,
    totalCorrectAnswerCount: Number(localStorage.getItem('totalCorrect'))
};
document.addEventListener("DOMContentLoaded", () => {
    const container = document.querySelector('.container');
    // const containerForParticles = document.createElement('div')
    // containerForParticles.setAttribute('id','container');
    // const objectKeys = Object.keys as <T extends object>(obj: T) => Array<keyof T>;
    // const quizIds = objectKeys(data.quizzes); // тождественно, но bad practice const keys1 = Object.keys(data.quizzes) as (keyof TQuizzes)[];
    const addHomeToSection = (section, quizzes, totalCorrectAnswerCount) => {
        const menuContainer = document.createElement('div');
        menuContainer.classList.add('menu');
        quizzes.forEach(quiz => {
            const button = document.createElement('button');
            button.classList.add('btn', 'btn-grad');
            button.innerHTML = quiz.title;
            button.addEventListener('click', () => {
                state.pageType = 'quiz';
                state.quizId = quiz.id;
                state.taskIndex = 0;
                state.correctAnswerCount = 0;
                renderPage();
            });
            menuContainer.append(button);
        });
        section.innerHTML = `
            <div class="caption-wrap">
                <img class="caption" src="src/assets/images/quiz.png" alt="quiz">
            </div>
            <div class="meta-wrap">
                <div class="logo-wrap"><img class="logo" src="src/assets/images/logo.png" alt="logo"></div>
                <div class="meta">
                    <h2 class="desc">с 6 до 12 лет</h2>
                    <h2 class="total-count">всего баллов: ${totalCorrectAnswerCount}</h2>
                </div>
            </div>
        `;
        section.append(menuContainer);
    };
    const addTaskToSection = (section, task, currentIndex, totalCount) => {
        const buttonsContainer = document.createElement('div');
        buttonsContainer.classList.add('answers-wrap');
        task.answers.forEach(answer => {
            const button = document.createElement('button');
            button.classList.add('btn', 'btn-grad');
            button.innerHTML = answer.value;
            if (state.clickedAnswerId) {
                button.classList.add('btn-disabled');
                const isCorrectAnswer = task.correct === answer.id;
                if (isCorrectAnswer) {
                    button.classList.add('btn-correct');
                }
                if (state.clickedAnswerId === answer.id && !isCorrectAnswer) {
                    button.classList.add('btn-incorrect');
                }
            }
            else {
                button.addEventListener('click', () => {
                    const correctAnswer = task.correct;
                    if (state.correctAnswerCount === null) {
                        throw new Error('correctAnswerCount не может быть null');
                    }
                    if (correctAnswer === answer.id) {
                        state.correctAnswerCount = state.correctAnswerCount + 1;
                    }
                    state.clickedAnswerId = answer.id;
                    renderPage();
                });
            }
            buttonsContainer.append(button);
        });
        section.innerHTML = `
            <div class="question-wrap">
                <div class="question"><span>Вопрос ${currentIndex + 1}</span><span>${task.question}</span></div>
            </div>  
           <div class="greyProgress">
              <div class="greenBar" style="width: ${(currentIndex * 100) / totalCount}%">${(Math.round((currentIndex * 100) / totalCount))}%</div>
            </div>        
        `;
        section.append(buttonsContainer);
        const buttonNext = document.createElement('button');
        buttonNext.classList.add('btn', 'btn-next');
        buttonNext.innerHTML = 'Далее';
        if (state.clickedAnswerId) {
            buttonNext.addEventListener('click', () => {
                if (state.taskIndex === null) {
                    throw new Error('state.taskIndex не может быть равен null');
                }
                if (state.taskIndex === totalCount - 1) {
                    const totalCorrectAnswer = localStorage.getItem('totalCorrect');
                    if (!totalCorrectAnswer && state.correctAnswerCount) {
                        localStorage.setItem('totalCorrect', String(state.correctAnswerCount));
                    }
                    else {
                        // @ts-ignore
                        const totalCorrect = parseInt(totalCorrectAnswer) + state.correctAnswerCount;
                        localStorage.setItem('totalCorrect', String(totalCorrect));
                    }
                    state.taskIndex = null;
                    state.clickedAnswerId = null;
                    // @ts-ignore
                    state.totalCorrectAnswerCount = parseInt(localStorage.getItem('totalCorrect'));
                    state.pageType = 'result';
                    renderPage();
                }
                else {
                    state.taskIndex = state.taskIndex + 1;
                    state.clickedAnswerId = null;
                    renderPage();
                }
            });
        }
        else {
            buttonNext.setAttribute('disabled', 'disabled');
        }
        section.append(buttonNext);
    };
    const addResultToSection = (section, quizName, totalCount, correctCount, totalCorrectCount) => {
        const button = document.createElement('button');
        const output = document.createElement('div');
        section.innerHTML = `
            <div class="output-wrap">
                <div class="text-result">Результаты</div>
                <div class="text-result">всего вопросов: ${totalCount}</div>
                <div class="text-result">правильных ответов: ${correctCount}</div>
                <div class="text-result">название квиза: ${quizName}</div>
                <div class="text-result">всего баллов: ${totalCorrectCount}</div>
            </div>
        `;
        output.classList.add('output');
        output.innerHTML = `${correctCount === totalCount || correctCount === totalCount - 1 ? ('<span>ты набрал ' + correctCount + ' из ' + totalCount + ' возможных.</br>Ты Аристотель наших дней</br>аплодирую тебе стоя!</span>') : ('<span>ты набрал ' + correctCount + ' из ' + totalCount + ' возможных.</br> Ты можешь лучше.</span>')}`;
        button.classList.add('btn', 'btn-grad', 'btn-home');
        button.innerHTML = 'На главную';
        button.addEventListener('click', () => {
            state.pageType = 'home';
            renderPage();
        });
        section.append(output);
        section.append(button);
    };
    const renderPage = () => {
        if (!container) {
            return;
        }
        container.innerHTML = '';
        const section = document.createElement('section');
        section.classList.add('page', `page-${state.pageType}`);
        const quizzes = Object.values(data.quizzes);
        switch (state.pageType) {
            case 'home': {
                addHomeToSection(section, quizzes, state.totalCorrectAnswerCount);
                break;
            }
            case 'quiz': {
                section.classList.add(`bg-${state.quizId}`);
                if (!state.quizId || state.taskIndex === null) {
                    throw new Error('Рендер quiz: нет quizId или taskIndex');
                }
                const quiz = data.quizzes[state.quizId];
                const task = quiz.tasks[state.taskIndex];
                addTaskToSection(section, task, state.taskIndex, quiz.tasks.length);
                // навешиваем обработчики
                section.querySelector('btn-next');
                break;
            }
            case 'result': {
                if (!state.quizId || state.correctAnswerCount === null) {
                    throw new Error('Рендер result: нет quizId или correctAnswerCount');
                }
                const quiz = data.quizzes[state.quizId];
                addResultToSection(section, quiz.title, quiz.tasks.length, state.correctAnswerCount, state.totalCorrectAnswerCount);
                break;
            }
            default:
                throw new Error('Такой страницы нет!');
        }
        container.append(section);
    };
    renderPage();
});
