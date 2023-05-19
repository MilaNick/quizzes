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
    // const objectKeys = Object.keys as <T extends object>(obj: T) => Array<keyof T>;
    // const quizIds = objectKeys(data.quizzes); // тождественно, но bad practice const keys1 = Object.keys(data.quizzes) as (keyof TQuizzes)[];
    const addHomeToSection = (section, quizzes, totalCorrectAnswerCount) => {
        const buttonsContainer = document.createElement('div');
        buttonsContainer.classList.add('btns-wrap');
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
            buttonsContainer.append(button);
        });
        section.innerHTML = `
            <div class="wrap-img">
                <img class="title-img" src="src/assets/images/quiz_1.png" alt="quiz">
             </div>
             <h2>с 6 до 12 лет</h2>
             <h2>всего баллов: ${totalCorrectAnswerCount}</h2>
        `;
        section.append(buttonsContainer);
    };
    const addTaskToSection = (section, task, currentIndex, totalCount) => {
        const buttonsContainer = document.createElement('div');
        buttonsContainer.classList.add('wrap-btns');
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
                <div class="question">Вопрос ${currentIndex}<br/> ${task.question}</div>
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
                state.taskIndex = state.taskIndex + 1;
                state.clickedAnswerId = null;
                renderPage();
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
                    // @ts-ignore
                    state.totalCorrectAnswerCount = parseInt(localStorage.getItem('totalCorrect'));
                    state.pageType = 'result';
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
        section.innerHTML = `
            <div class="output-wrap">
                <div class="output">Результаты</div>
                <div>всего вопросов: ${totalCount}</div>
                <div>правильных ответов: ${correctCount}</div>
                <div>название квиза: ${quizName}</div>
                <div>всего баллов: ${totalCorrectCount}</div>
            </div>
        `;
        button.classList.add('btn', 'btn-grad');
        button.innerHTML = 'На главную';
        button.addEventListener('click', () => {
            state.pageType = 'home';
            renderPage();
        });
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
