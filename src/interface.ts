export type TKeysState = 'pageType' | 'quizId' | 'taskId' | 'correctAnswerCount'

export type TState = {
    pageType: 'home' | 'quiz' | 'result'
    quizId: null | TQuizId
    clickedAnswerId: null | string,
    taskIndex: null | number
    correctAnswerCount: null | number
    totalCorrectAnswerCount: null | number
    lang: 'en' | 'ru'
}

export type TAnswer = {
    id: string,
    value: {
        en: string,
        ru: string,
    },
}

export type TTask = {
    question: {
        en: string,
        ru: string,
    },
    answers: TAnswer[],
    correct: string,
}


export type TQuiz = {
    id: TQuizId,
    title: {
        en: string,
        ru: string,
    },
    tasks: TTask[],
    bgSrc: string,
}

export type TQuizId = 'animal' | 'tales' | 'cartoons' | 'mathematics' | 'nature';

export type TDb = {
    quizzes: {
        [quizId in TQuizId]: TQuiz
    }
}
