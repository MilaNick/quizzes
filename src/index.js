"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const db_js_1 = __importDefault(require("./db.js"));
const state = {
    pageType: 'home',
    quizId: null,
    taskId: null,
    correctAnswerCount: null
};
const container = document.querySelector('.container');
const objectKeys = Object.keys;
const keys = objectKeys(db_js_1.default.quizzes); // тождественно, но bad practice const keys1 = Object.keys(data.quizzes) as (keyof TQuizzes)[];
const renderPage = () => {
    container.innerHTML = '';
    const section = document.createElement('section');
    switch (state.pageType) {
        case 'home':
            section.innerHTML = `
                <div class="wrap-img">
                    <img class="quiz" src="src/assets/images/quiz_1.png" alt="quiz">
                </div>
                <h2>с 6 до 12 лет</h2>
                ${keys.map(key => {
                return (`<button class="btn btn-grad" id=${db_js_1.default.quizzes[key].id}>${db_js_1.default.quizzes[key].title}</button>`);
            }).join('')}
               `;
            break;
        case 'quiz':
            break;
        case 'result':
            break;
        default:
            console.log('Такой страницы нет!');
    }
    container.append(section);
};
renderPage();
