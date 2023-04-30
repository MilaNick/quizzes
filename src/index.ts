import data from './db.js';
import { TState, TQuiz, TTask } from './interface.js';

const state: TState = {
    pageType: 'home',
    quizId: null,
    clickedAnswerId: null,
    taskIndex: null,
    correctAnswerCount: null
};

document.addEventListener("DOMContentLoaded", () => {
    const container  = document.querySelector('.container');
    // const objectKeys = Object.keys as <T extends object>(obj: T) => Array<keyof T>;
    // const quizIds = objectKeys(data.quizzes); // тождественно, но bad practice const keys1 = Object.keys(data.quizzes) as (keyof TQuizzes)[];

    const addHomeToSection = (section: HTMLElement, quizzes: TQuiz[]) => {
        const buttonsContainer = document.createElement('div');
        quizzes.forEach(quiz => {
            const button = document.createElement('button');
            button.classList.add('btn', 'btn-grad');
            button.innerHTML = quiz.title;
            button.addEventListener('click', () => {
                state.pageType = 'quiz';
                state.quizId = quiz.id;
                state.taskIndex = 0;
                state.correctAnswerCount = 0;
                renderPage(); // todo: написать свой объект, который будет вызвать render
            })
            buttonsContainer.append(button);
        });

        section.innerHTML = `
            <div class="wrap-img">
                <img class="title-img" src="src/assets/images/quiz_1.png" alt="quiz">
             </div>
             <h2>с 6 до 12 лет</h2>
        `;
        section.append(buttonsContainer);
    }
// TODO вопрос последний - нет?
// TODO картинки bg, сделать и рендерить через js, а не стили
// TODO стили кнопок вопросов и кнопки далее
// TODO про животных два ответа не записаны
// TODO реализовать result
//
    const addTaskToSection = (section: HTMLElement, task: TTask, currentIndex: number, totalCount: number) => {
        const buttonsContainer = document.createElement('div');
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
            } else {
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
                })
            }
            buttonsContainer.append(button);
        })
        // const width: number = (currentIndex + 1) * 100);
        // console.log('((currentIndex + 1) * 100)', width)
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
        buttonNext.classList.add('btn', 'btn-grad');
        buttonNext.innerHTML = 'Далее';
        if (state.clickedAnswerId) {
            buttonNext.addEventListener('click', () => {
                if (state.taskIndex === null) {
                    throw new Error('state.taskIndex не может быть равен null');
                }
                state.taskIndex = state.taskIndex + 1;
                state.clickedAnswerId = null;
                renderPage();
                // if () { // todo: добавить проверку на то, что это не последний вопрос
                // если это последний вопрос то приведи весь state к корректному значению
                // }
            });
        } else {
            buttonNext.setAttribute('disabled', 'disabled');
        }
        section.append(buttonNext)
    }

    const addResultToSection = (section: HTMLElement, quizName: string, totalCount: number, correctCount: number) => {
        return `
            <h2>result</h2>
            <div class="output">Результаты</div>
            <div>всего вопросов: ${totalCount}</div>
            <div>правильных ответов: ${correctCount}</div>
            <div>название квиза: ${quizName}</div>
        `
    }

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
                addHomeToSection(section, quizzes);
                break;
            }
            case 'quiz': {
                section.classList.add(`bg-${state.quizId}`) // todo: bg-${state.quizId}
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
                section.innerHTML = addResultToSection(section, quiz.title, quiz.tasks.length, state.correctAnswerCount);
                break;
            }
            default:
                throw new Error('Такой страницы нет!');
        }
        container.append(section);
    }

    renderPage();
});
