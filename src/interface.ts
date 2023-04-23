import data from "./db";

export type TKeysState = 'pageType' | 'quizId' | 'taskId' | 'correctAnswerCount'

export type TState = {
    pageType: 'home' | 'quiz' | 'result' // TODO: Аня должна показать как написать конкретный для любого типа state
    quizId: null | string
    taskId: null | string
    correctAnswerCount: null | number
}

export type TQuizzes = typeof data.quizzes