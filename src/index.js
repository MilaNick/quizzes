import data from './db.js';
const state = {
    pageType: 'home',
    quizId: null,
    taskId: null,
    correctAnswerCount: null
};
const container = document.querySelector('.container');
const objectKeys = Object.keys;
const keys = objectKeys(data.quizzes); // тождественно, но bad practice const keys1 = Object.keys(data.quizzes) as (keyof TQuizzes)[];
const renderPage = () => {
    if (!container) {
        return;
    }
    container.innerHTML = '';
    const section = document.createElement('section');
    section.classList.add('page', `page-${state.pageType}`);
    switch (state.pageType) {
        case 'home':
            section.innerHTML = `
                <div class="wrap-img">
                    <img class="title-img" src="src/assets/images/quiz_1.png" alt="quiz">
                </div>
                <h2>с 6 до 12 лет</h2>
                ${keys.map(key => {
                return (`<button class="btn btn-grad quiz" id=${data.quizzes[key].id}>${data.quizzes[key].title}</button>`);
            }).join('')}
               `;
            break;
        case 'quiz':
            section.classList.add('page', `bg-${state.quizId}`);
            if (!state.quizId) {
                return;
            }
            section.innerHTML = `
                <div>Привет</div>
            `;
            //     `
            // <div class="question-wrap"><div class="question" id=${data.quizzes.(state.keyQuiz)?.question}>${data.quizzes.(state.keyQuiz)?.question}</div></div>
            //     <div class="question-wrap"><div class="question">Вопрос</div></div>
            //     <div class="indicator"></div>
            //     <button class="btn btn-grad">Сказки</button>
            //     <button class="btn btn-grad">Впросы</button>
            //     <button class="btn btn-grad">Матека</button>
            //     <button class="btn btn-grad next" disabled>Далее</button>
            // </section>`
            break;
        case 'result':
            section.innerHTML = `
                <h2>result</h2>
                <div class="output">Результаты</div>
            `;
            break;
        default:
            console.log('Такой страницы нет!');
    }
    container.append(section);
};
renderPage();
const pagesQuiz = document.querySelectorAll('.quiz');
[...pagesQuiz].forEach(page => {
    page.addEventListener('click', (e) => {
        e.preventDefault();
        state.pageType = 'quiz';
        const key = page.getAttribute('id');
        if (!key) {
            return;
        }
        state.quizId = key;
        const d = data.quizzes;
        // @ts-ignore
        console.log('d', d[state.quizId].tasks);
        renderPage();
        // renderPage();
        // state.taskId
        // state.correctAnswerCount
    });
});
