import data from './db.js';
import { TState } from './interface.js';

const state: TState = {
    pageType: 'home',
    quizId: null,
    taskId: null,
    correctAnswerCount: null
}

const container  = document.querySelector('.container');
const objectKeys = Object.keys as <T extends object>(obj: T) => Array<keyof T>;
const keys = objectKeys(data.quizzes); // тождественно, но bad practice const keys1 = Object.keys(data.quizzes) as (keyof TQuizzes)[];

const renderPage = () => {
    (container as HTMLElement).innerHTML = '';
    const section = document.createElement('section');
    switch (state.pageType) {
        case 'home':
            section.innerHTML = `
                <div class="wrap-img">
                    <img class="quiz" src="src/assets/images/quiz_1.png" alt="quiz">
                </div>
                <h2>с 6 до 12 лет</h2>
                ${keys.map(key => {
                    return (`<button class="btn btn-grad" id=${data.quizzes[key].id}>${data.quizzes[key].title}</button>`)
                    }).join('')
                }
               `
            break;
        case 'quiz':
            break;
        case 'result':
            break;
        default:
            console.log('Такой страницы нет!')
    }
    (container as HTMLElement).append(section);
}

renderPage();
