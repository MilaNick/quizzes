export type TKeysState = 'pageType' | 'quizId' | 'taskId' | 'correctAnswerCount'

export type TState = {
    pageType: 'home' | 'quiz' | 'result'
    quizId: null | TQuizId
    clickedAnswerId: null | string,
    taskIndex: null | number
    correctAnswerCount: null | number
    totalCorrectAnswerCount: null | number
}

export type TAnswer = {
    id: string,
    value: string,
}

export type TTask = {
    question: string,
    answers: TAnswer[],
    correct: string,
}


export type TQuiz = {
    id: TQuizId,
    title: string,
    tasks: TTask[],
    bgSrc: string,
}

export type TQuizId = 'animal' | 'tales' | 'cartoons' | 'mathematics' | 'nature';

export type TDb = {
    quizzes: {
        [quizId in TQuizId]: TQuiz
    }
}
