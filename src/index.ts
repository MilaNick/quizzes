import data, { texts } from './db.js';
import { TState, TQuiz, TTask } from './interface.js';

const state: TState = {
    pageType: 'home',
    quizId: null,
    clickedAnswerId: null,
    taskIndex: null,
    correctAnswerCount: null,
    totalCorrectAnswerCount: Number(localStorage.getItem('totalCorrect')),
    lang: 'ru',
};

window.addEventListener('scroll', function(event) {
    window.scrollTo(0, 0);
    event.preventDefault();
}, false);

document.addEventListener("DOMContentLoaded", () => {
    const container  = document.querySelector('.container');
    // const objectKeys = Object.keys as <T extends object>(obj: T) => Array<keyof T>;
    // const quizIds = objectKeys(data.quizzes); // тождественно, но bad practice const keys1 = Object.keys(data.quizzes) as (keyof TQuizzes)[];

    const addHomeToSection = (section: HTMLElement, quizzes: TQuiz[], totalCorrectAnswerCount: null | number) => {
        const menuContainer = document.createElement('div');
        menuContainer.classList.add('menu');
        quizzes.forEach(quiz => {
            const button = document.createElement('button');
            button.classList.add('btn', 'btn-grad');
            button.innerHTML = quiz.title[state.lang];
            button.addEventListener('click', () => {
                state.pageType = 'quiz';
                state.quizId = quiz.id;
                state.taskIndex = 0;
                state.correctAnswerCount = 0;
                renderPage();
            });
            menuContainer.append(button);
        });
        const langs = ['en', 'ru'];
        const selectWrap = document.createElement('div');
        selectWrap.classList.add('select-wrap');
        const select = document.createElement('select');
        select.setAttribute('id', 'lang');
        select.setAttribute('name', 'lang');
        select.classList.add('lang')
        select.addEventListener('change', (e) => {
            e.preventDefault();
            // @ts-ignore
            state.lang = e.target.value;
            renderPage()
        })
        langs.forEach(lang => {
            const option = document.createElement('option');
            option.value = lang;
            option.text = lang;
            option.classList.add('option')
            if (lang === state.lang) {
                option.selected = true;
            }
            select.append(option);
        })
        selectWrap.append(select)
        const metaWrap = document.createElement('div');
        metaWrap.classList.add('meta-wrap');
        metaWrap.innerHTML = `
            <div class="logo-wrap"><img class="logo" src="./src/assets/images/logo.png" alt="logo"></div>
            <div class="meta">
                <p class="desc">${texts.age[state.lang]}</p>
                <p class="total-count">${texts.total[state.lang]}${totalCorrectAnswerCount}</p>
            </div>
        `
        metaWrap.append(selectWrap)
        const captionWrap = document.createElement('div');
        captionWrap.classList.add('caption-wrap');
        captionWrap.innerHTML = `<img class="caption" src=${state.lang === 'ru' ? "./src/assets/images/title_ru.png" :  "./src/assets/images/title_en.png"} alt="title">`
        section.append(captionWrap);
        section.append(metaWrap);
        section.append(menuContainer);
    }

    const addTaskToSection = (section: HTMLElement, task: TTask, currentIndex: number, totalCount: number) => {
        const buttonsContainer = document.createElement('div');
        buttonsContainer.classList.add('answers-wrap');
        task.answers.forEach(answer => {
            const button = document.createElement('button');
            button.classList.add('btn', 'btn-grad');
            button.innerHTML = answer.value[state.lang];
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
        section.innerHTML = `
            <div class="question-wrap">
                <div class="question"><span>${texts.question[state.lang]} ${currentIndex + 1}</span><span>${task.question[state.lang]}</span></div>
            </div>  
           <div class="greyProgress">
              <div class="greenBar" style="width: ${(currentIndex * 100) / totalCount}%">${(Math.round((currentIndex * 100) / totalCount))}%</div>
            </div>        
        `;
        section.append(buttonsContainer);

        const buttonNext = document.createElement('button');
        buttonNext.classList.add('btn', 'btn-next');
        buttonNext.innerHTML = `${texts.next[state.lang]}`;
        if (state.clickedAnswerId) {
            buttonNext.addEventListener('click', () => {
                if (state.taskIndex === null) {
                    throw new Error('state.taskIndex не может быть равен null');
                }
                if (state.taskIndex === totalCount - 1) {
                    const totalCorrectAnswer = localStorage.getItem('totalCorrect');
                    if (!totalCorrectAnswer && state.correctAnswerCount) {
                        localStorage.setItem('totalCorrect', String(state.correctAnswerCount))
                    } else {
                        // @ts-ignore
                        const totalCorrect = parseInt(totalCorrectAnswer) + state.correctAnswerCount
                        localStorage.setItem('totalCorrect', String(totalCorrect))
                    }
                    state.taskIndex = null;
                    state.clickedAnswerId = null;
                    // @ts-ignore
                    state.totalCorrectAnswerCount = parseInt(localStorage.getItem('totalCorrect'))
                    state.pageType = 'result'
                    renderPage();
                } else {
                    state.taskIndex = state.taskIndex + 1;
                    state.clickedAnswerId = null;
                    renderPage();
                }
            });
        } else {
            buttonNext.setAttribute('disabled', 'disabled');
        }
        section.append(buttonNext)
    }

    const addResultToSection = (section: HTMLElement, quizName: string, totalCount: number, correctCount: number, totalCorrectCount: null | number) => {
            const button = document.createElement('button');
            const output = document.createElement('div');

            section.innerHTML = `
            <div class="output-wrap">
                <div class="text-result">${texts.result[state.lang]}</div>
                <div class="text-result">${texts.questions[state.lang]}${totalCount}</div>
                <div class="text-result">${texts.correct[state.lang]}${correctCount}</div>
                <div class="text-result">${texts.quiz[state.lang]}${quizName}</div>
                <div class="text-result">${texts.total[state.lang]}${totalCorrectCount}</div>
            </div>
        `
            output.classList.add('output');
            const startText = `<span>${texts.scored[state.lang]}${correctCount}</br>${texts.from[state.lang]}${totalCount}</br>`
            const endText = (correctCount === totalCount || correctCount === totalCount - 1)  ? `${texts.aristotle[state.lang]}</br>${texts.ovation[state.lang]}</span>` : `${texts.better[state.lang]}</span>`
            output.innerHTML = `${startText}${endText}`
            button.classList.add('btn', 'btn-grad', 'btn-home');
            button.innerHTML = `${texts.home[state.lang]}`;
            button.addEventListener('click', () => {
                state.pageType = 'home';
                renderPage();
            })
            section.append(output);
            section.append(button);
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
                addHomeToSection(section, quizzes, state.totalCorrectAnswerCount);
                break;
            }
            case 'quiz': {
                section.classList.add(`bg-${state.quizId}`)
                if (!state.quizId || state.taskIndex === null) {
                    throw new Error('Рендер quiz: нет quizId или taskIndex');
                }
                const quiz = data.quizzes[state.quizId];
                const task = quiz.tasks[state.taskIndex];
                addTaskToSection(section, task, state.taskIndex, quiz.tasks.length);
                section.querySelector('btn-next');
                break;
            }
            case 'result': {
                if (!state.quizId || state.correctAnswerCount === null) {
                    throw new Error('Рендер result: нет quizId или correctAnswerCount');
                }
                const quiz = data.quizzes[state.quizId];
                addResultToSection(section, quiz.title[state.lang], quiz.tasks.length, state.correctAnswerCount, state.totalCorrectAnswerCount)
                break;
            }
            default:
                throw new Error('Такой страницы нет!');
        }
        container.append(section);
    }

    renderPage();
});

