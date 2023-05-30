import {TDb} from "./interface";

const animal = [
    {
        question: {
            en: 'How does the platypus differ from other mammals?',
            ru: 'Чем утконос отличается от других млекопитающих? ',
        },
        answers: [
            {
                id: '001',
                value: {
                    en: 'He doesn\'t drink water',
                    ru: 'Он не пьет воду',
                },
            },
            {
                id: '002',
                value: {
                    en: 'Lays eggs',
                    ru: 'Откладывает яйца',
                },
            },
            {
                id: '003',
                value: {
                    en: 'He builds his own house',
                    ru: 'Сам себе строит дом',
                },
            }
        ],
        correct: '002',
    },
    {
        question: {
            en: 'Why are sea otters hold hands?',
            ru: 'Почему морские выдры держатся за руки?',
        },
        answers: [
            {
                id: '004',
                value: {
                    en: 'Because they\'re friends',
                    ru: 'Потому что дружат',
                },
            },
            {
                id: '005',
                value: {
                    en: 'So as not to sail away when they are sleeping',
                    ru: 'Чтобы не уплыть, когда они будут спать',
                },
            },
            {
                id: '006',
                value: {
                    en: 'They are afraid of getting lost',
                    ru: 'Боятся потеряться',
                },
            }
        ],
        correct: '005',
    },
    {
        question: {
            en: 'Which bird doesn\'t have feathers?',
            ru: 'У какой птицы нет перьев?',
        },
        answers: [
            {
                id: '007',
                value: {
                    en: 'The grey partridge has no feathers',
                    ru: 'У серой куропатки',
                },
            },
            {
                id: '008',
                value: {
                    en: 'The albatross\' has no feathers',
                    ru: 'У альбатроса',
                },
            },
            {
                id: '009',
                value: {
                    en: 'The penguin has no feathers',
                    ru: 'У пингвина',
                },
            }
        ],
        correct: '009',
    },
    {
        question: {
            en: 'What kind of mammal can fly?',
            ru: 'Какое млекопитающее умеет летать?',
        },
        answers: [
            {
                id: '010',
                value: {
                    en: 'Flying Squirrel',
                    ru: 'Белка-летяга',
                },
            },
            {
                id: '011',
                value: {
                    en: "The Bat",
                    ru: 'Летучая мышь',
                },
            },
            {
                id: '012',
                value: {
                    en: 'Sloth',
                    ru: 'Ленивец',
                },
            }
        ],
        correct: '011'
    },
    {
        question: {
            en: 'Which cat doesn\'t have fur?',
            ru: 'У какого кота нет шерсти?',
        },
        answers: [
            {
                id: '013',
                value: {
                    en: 'the sphinx has no fur',
                    ru: 'у сфинкса',
                },
            },
            {
                id: '014',
                value: {
                    en: 'the Maine coon has no fur',
                    ru: 'у мейн куна',
                },
            },
            {
                id: '015',
                value: {
                    en: "munchkin has no wool",
                    ru: 'у манчкина',
                },
            }
        ],
        correct: '013',
    },
    {
        question: {
            en: 'Who is called the "King of Beasts"?',
            ru: 'Кого называют «Царь зверей»?',
        },
        answers: [
            {
                id: '016',
                value: {
                    en: 'boa constrictor',
                    ru: 'Удава',
                },
            },
            {
                id: '017',
                value: {
                    en: 'lion',
                    ru: 'Льва',
                },
            },
            {
                id: '018',
                value: {
                    en: 'panther',
                    ru: 'Пантеру',
                },
            }
        ],
        correct: '017'
    },
    {
        question: {
            en: 'Which bird runs fast but doesn\'t fly?',
            ru: 'Какая птица быстро бегает, но не летает?',
        },
        answers: [
            {
                id: '019',
                value: {
                    en: 'Ostrich',
                    ru: 'Страус',
                },
            },
            {
                id: '020',
                value: {
                    en: 'Penguin',
                    ru: 'Пингвин',
                },
            },
            {
                id: '021',
                value: {
                    en: 'Guinea Fowl',
                    ru: 'Цесарка',
                },
            }
        ],
        correct: '019'
    },
    {
        question: {
            en: 'What are the cow cubs called?',
            ru: 'Как называются детёныши коровы?',
        },
        answers: [
            {
                id: '022',
                value: {
                    en: 'kids',
                    ru: 'Бычата',
                },
            },
            {
                id: '023',
                value: {
                    en: 'Calves',
                    ru: 'Телята',
                },
            },
            {
                id: '024',
                value: {
                    en: 'Foals',
                    ru: 'Жеребята',
                },
            }
        ],
        correct: '023'
    },
    {
        question: {
            en: 'Who is the largest animal on Earth?',
            ru: 'Кто является самым крупным животным на Земле?',
        },
        answers: [
            {
                id: '025',
                value: {
                    en: 'Turtle',
                    ru: 'Черепаха',
                },
            },
            {
                id: '026',
                value: {
                    en: 'Rhinoceros',
                    ru: 'Носорог',
                },
            },
            {
                id: '027',
                value: {
                    en: 'Blue Whale',
                    ru: 'Синий кит',
                },
            }
        ],
        correct: '027',
    },
    {
        question: {
            en: 'What is the owl considered a symbol of?',
            ru: 'Символом чего считается сова?',
        },
        answers: [
            {
                id: '028',
                value: {
                    en: 'kindness',
                    ru: 'Доброты',
                },
            },
            {
                id: '029',
                value: {
                    en: 'patience',
                    ru: 'Терпения',
                },
            },
            {
                id: '030',
                value: {
                    en: 'wisdom',
                    ru: 'Мудрости',
                },
            }
        ],
        correct: '030',
    },
    {
        question: {
            en: 'Which land animal opens its mouth most widely?',
            ru: 'Какое сухопутное животное наиболее широко открывает рот?',
        },
        answers: [
            {
                id: '031',
                value: {
                    en: 'Behemoth',
                    ru: 'Бегемот',
                },
            },
            {
                id: '032',
                value: {
                    en: 'Elephant',
                    ru: 'Слон',
                },
            },
            {
                id: '033',
                value: {
                    en: 'Hare',
                    ru: 'Заяц',
                },
            }
        ],
        correct: '031'
    },
    {
        question: {
            en: 'What kind of fish doesn\'t exist?',
            ru: 'Какой рыбы не существует?',
        },
        answers: [
            {
                id: '034',
                value: {
                    en: 'Pliers fish',
                    ru: 'Рыба-плоскогубцы',
                },
            },
            {
                id: '035',
                value: {
                    en: 'Hammer fish',
                    ru: 'Рыба-молот',
                },
            },
            {
                id: '036',
                value: {
                    en: 'Sawfish',
                    ru: 'Рыба-пила',
                },
            }
        ],
        correct: '034',
    },
    {
        question: {
            en: 'What kind of animal builds a house for itself? ',
            ru: 'Какой зверь сам себе строит дом? ',
        },
        answers: [
            {
                id: '037',
                value: {
                    en: 'monkey',
                    ru: 'мартышка',
                },
            },
            {
                id: '038',
                value: {
                    en: 'beaver',
                    ru: 'бобер',
                },
            },
            {
                id: '039',
                value: {
                    en: 'donkey',
                    ru: 'осёл',
                },
            }
        ],
        correct: '038'
    },
    {
        question: {
            en: 'Who is the biggest cat on the planet?',
            ru: 'Кто является самой большой кошкой на планете?',
        },
        answers: [
            {
                id: '040',
                value: {
                    en: 'Lynx',
                    ru: 'Рысь',
                },
            },
            {
                id: '041',
                value: {
                    en: 'Tiger',
                    ru: 'Тигр',
                },
            },
            {
                id: '042',
                value: {
                    en: 'Cheetah',
                    ru: 'Гепард',
                },
            }
        ],
        correct: '041',
    },
    {
        question: {
            en: 'What animal can easily exist without water?',
            ru: 'Какому животному легко существовать без воды?',
        },
        answers: [
            {
                id: '043',
                value: {
                    en: 'camel',
                    ru: 'верблюду',
                },
            },
            {
                id: '044',
                value: {
                    en: 'giraffe',
                    ru: 'жирафу',
                },
            },
            {
                id: '045',
                value: {
                    en: 'rhinoceros',
                    ru: 'носорогу',
                },
            }
        ],
        correct: '043',
    },
]

const tales = [
    {
        question: {
            en: 'Russian fairy tales\' most used number?',
            ru: 'Самое популярное число в русских сказках?',
        },
        answers: [
            {
                id: '046',
                value: {
                    en: '2',
                    ru: '2',
                },
            },
            {
                id: '047',
                value: {
                    en: '3',
                    ru: '3',
                },
            },
            {
                id: '048',
                value: {
                    en: '10',
                    ru: '10',
                },
            }
        ],
        correct: '047',
    },
    {
        question: {
            en: 'Sivka-Burka is...?',
            ru: 'Сивка-Бурка – это …?',
        },
        answers: [
            {
                id: '049',
                value: {
                    en: 'Grass',
                    ru: 'Трава',
                },
            },
            {
                id: '050',
                value: {
                    en: 'Horse',
                    ru: 'Конь',
                },
            },
            {
                id: '051',
                value: {
                    en: 'Clothes',
                    ru: 'Одежда',
                },
            }
        ],
        correct: '050',
    },
    {
        question: {
            en: 'What killed Koshchei?',
            ru: 'Что убило Кощея?',
        },
        answers: [
            {
                id: '052',
                value: {
                    en: 'spell',
                    ru: 'заклинание',
                },
            },
            {
                id: '053',
                value: {
                    en: 'sword',
                    ru: 'меч',
                },
            },
            {
                id: '054',
                value: {
                    en: 'needle',
                    ru: 'игла',
                },
            }
        ],
        correct: '054',
    },
    {
        question: {
            en: 'What does Ivan the Fool sleep on?',
            ru: 'На чём отдыхает Иванушка-дурачок?',
        },
        answers: [
            {
                id: '055',
                value: {
                    en: 'On the bench',
                    ru: 'На лавочке',
                },
            },
            {
                id: '056',
                value: {
                    en: 'On the stove',
                    ru: 'На печке',
                },
            },
            {
                id: '057',
                value: {
                    en: 'At the cinema',
                    ru: 'В кинотеатре',
                },
            }
        ],
        correct: '056',
    },
    {
        question: {
            en: 'Which king was the firebird stolen from?',
            ru: 'У какого царя похитили жар-птицу?',
        },
        answers: [
            {
                id: '058',
                value: {
                    en: 'Afron',
                    ru: 'у Афрона',
                },
            },
            {
                id: '059',
                value: {
                    en: 'Theodore',
                    ru: 'у Федора',
                },
            },
            {
                id: '060',
                value: {
                    en: 'Martin',
                    ru: 'у Мартына',
                },
            }
        ],
        correct: '058',
    },
    {
        question: {
            en: 'What does Baba Yaga fly in all the time?',
            ru: 'В чём постоянно летает Баба-Яга?',
        },
        answers: [
            {
                id: '061',
                value: {
                    en: 'helicopter',
                    ru: 'в вертолете',
                },
            },
            {
                id: '062',
                value: {
                    en: 'mortar',
                    ru: 'в ступе',
                },
            },
            {
                id: '063',
                value: {
                    en: 'ball',
                    ru: 'на шаре',
                },
            }
        ],
        correct: '062',
    },
    {
        question: {
            en: 'In what fairy tale did the evil stepmother bake pancakes for the wake?',
            ru: 'В какой сказке злая мачеха на поминки блины пекла?',
        },
        answers: [
            {
                id: '064',
                value: {
                    en: 'Frost',
                    ru: 'Морозко',
                },
            },
            {
                id: '065',
                value: {
                    en: 'Snow White and the Seven Dwarfs',
                    ru: 'Белоснежка и семь гномов',
                },
            },
            {
                id: '066',
                value: {
                    en: 'Twelve months',
                    ru: 'Двенадцать месяцев',
                },
            }
        ],
        correct: '064',
    },
    {
        question: {
            en: 'What was the name of the ship that could fly?',
            ru: 'Какое название было у корабля, который умел летать?',
        },
        answers: [
            {
                id: '067',
                value: {
                    en: 'Marina',
                    ru: 'Марина',
                },
            },
            {
                id: '068',
                value: {
                    en: 'The Flying Dutchman',
                    ru: 'Летучий голландец',
                },
            },
            {
                id: '069',
                value: {
                    en: 'Gloria',
                    ru: 'Глория',
                },
            }
        ],
        correct: '068',
    },
    {
        question: {
            en: 'How many heads did the Gorynych Snake have?',
            ru: 'Сколько голов было у Змея-Горыныча?',
        },
        answers: [
            {
                id: '070',
                value: {
                    en: '9',
                    ru: '9',
                },
            },
            {
                id: '071',
                value: {
                    en: '4',
                    ru: '4',
                },
            },
            {
                id: '072',
                value: {
                    en: '3',
                    ru: '3',
                },
            }
        ],
        correct: '072',
    },
    {
        question: {
            en: 'Who did Thumbelina manage to save?',
            ru: 'Кого удалось спасти Дюймовочке?',
        },
        answers: [
            {
                id: '073',
                value: {
                    en: 'swift',
                    ru: 'Стрижа',
                },
            },
            {
                id: '074',
                value: {
                    en: 'cuckoo',
                    ru: 'Кукушку',
                },
            },
            {
                id: '075',
                value: {
                    en: 'swallow',
                    ru: 'Ласточку',
                },
            }
        ],
        correct: '075',
    },
    {
        question: {
            en: 'Which three famous house builders do you know?',
            ru: 'Каких трех известных строителей домов вы знаете?',
        },
        answers: [
            {
                id: '076',
                value: {
                    en: 'Piglets',
                    ru: 'Поросята',
                },
            },
            {
                id: '077',
                value: {
                    en: 'Three Bears',
                    ru: 'Три медведя',
                },
            },
            {
                id: '078',
                value: {
                    en: 'Chanterelles',
                    ru: 'Лисички',
                },
            }
        ],
        correct:'076',
    },
    {
        question: {
            en: 'How many heroes were there?',
            ru: 'Сколько было богатырей?',
        },
        answers: [
            {
                id: '079',
                value: {
                    en: '3',
                    ru: '3',
                },
            },
            {
                id: '080',
                value: {
                    en: '6',
                    ru: '6',
                },
            },
            {
                id: '081',
                value: {
                    en: '12',
                    ru: '12',
                },
            }
        ],
        correct: '079',
    },
    {
        question: {
            en: 'Who managed to cook porridge from an axe?',
            ru: 'У кого получилось приготовить кашу из топора?',
        },
        answers: [
            {
                id: '082',
                value: {
                    en: 'Aladdin',
                    ru: 'у Алладина',
                },
            },
            {
                id: '083',
                value: {
                    en: 'soldier',
                    ru: 'у солдата',
                },
            },
            {
                id: '084',
                value: {
                    en: 'Emelya',
                    ru: 'у Емели',
                },
            }
        ],
        correct: '083',
    },
    {
        question: {
            en: 'Who ate rolls and rode on the stove?',
            ru: 'Кто уплетал калачи и ехал на печи?',
        },
        answers: [
            {
                id: '085',
                value: {
                    en: 'Ivanushka',
                    ru: 'Иванушка',
                },
            },
            {
                id: '086',
                value: {
                    en: 'Emelya',
                    ru: 'Емеля',
                },
            },
            {
                id: '087',
                value: {
                    en: 'Carlson',
                    ru: 'Карлсон',
                },
            }
        ],
        correct: '086',
    },
    {
        question: {
            en: 'Who did Aladdin love?',
            ru: 'Кого любил Алладин?',
        },
        answers: [
            {
                id: '088',
                value: {
                    en: 'princess Jasmine',
                    ru: 'принцессу Жасмин',
                },
            },
            {
                id: '089',
                value: {
                    en: 'Gerda',
                    ru: 'Герду',
                },
            },
            {
                id: '090',
                value: {
                    en: 'Masha',
                    ru: 'Машеньку',
                },
            }
        ],
        correct: '088',
    },
]

const cartoons = [
    {
        question: {
            en: 'Who will always come to the rescue?',
            ru: 'Кто всегда придёт на помощь?',
        },
        answers: [
            {
                id: '091',
                value: {
                    en: 'Pechkin',
                    ru: 'Печкин',
                },
            },
            {
                id: '092',
                value: {
                    en: 'Chip and Dale',
                    ru: 'Чип и Дейл',
                },
            },
            {
                id: '093',
                value: {
                    en: 'Crocodile Gene',
                    ru: 'Крокодил Гена',
                },
            }
        ],
        correct: '092',
    },
    {
        question: {
            en: 'What was the name of the washbasins of the chief and commander of the washcloths from Chukovsky\'s fairy tale?',
            ru: 'Как звали умывальников начальника и командира мочалок из сказки Чуковского?',
        },
        answers: [
            {
                id: '094',
                value: {
                    en: 'Scrooge McDuck',
                    ru: 'Скрудж Макдак',
                },
            },
            {
                id: '095',
                value: {
                    en: 'Moidodyr',
                    ru: 'Мойдодыр',
                },
            },
            {
                id: '096',
                value: {
                    en: 'Cipollino',
                    ru: 'Чиполлино',
                },
            }
        ],
        correct: '095'
    },
    {
        question: {
            en: 'Who was the smartest in Flower City?',
            ru: 'Кто был самый умный в Цветочном городе?',
        },
        answers: [
            {
                id: '097',
                value: {
                    en: 'Cog',
                    ru: 'Винтик',
                },
            },
            {
                id: '098',
                value: {
                    en: 'Silent',
                    ru: 'Молчун',
                },
            },
            {
                id: '099',
                value: {
                    en: 'Znayka',
                    ru: 'Знайка',
                },
            }
        ],
        correct: '099',
    },
    {
        question: {
            en: 'Who played the role of Santa Claus in "Well, wait!"?',
            ru: 'Кто играл роль Деда Мороза в «Ну, погоди!»?',
        },
        answers: [
            {
                id: '100',
                value: {
                    en: 'Santa Claus',
                    ru: 'Дед Мороз',
                },
            },
            {
                id: '101',
                value: {
                    en: 'Hare',
                    ru: 'Заяц',
                },
            },
            {
                id: '102',
                value: {
                    en: 'The Snow Maiden',
                    ru: 'Снегурочка',
                },
            }
        ],
        correct: '101',
    },
    {
        question: {
            en: 'Which fairy tale character shot pigeons with a slingshot?',
            ru: 'Какой персонаж сказки расстреливал голубей из рогатки?',
        },
        answers: [
            {
                id: '103',
                value: {
                    en: 'The Old Woman Shapoklyak',
                    ru: 'Старуха Шапокляк',
                },
            },
            {
                id: '104',
                value: {
                    en: 'Fedora',
                    ru: 'Федора',
                },
            },
            {
                id: '105',
                value: {
                    en: 'Peppa',
                    ru: 'Пеппа',
                },
            }
        ],
        correct: '103',
    },
    {
        question: {
            en: 'Who was Ariel\'s friend?',
            ru: 'Кто был другом Ариэль?',
        },
        answers: [
            {
                id: '106',
                value: {
                    en: 'SpongeBob',
                    ru: 'Губка Боб',
                },
            },
            {
                id: '107',
                value: {
                    en: 'Crab',
                    ru: 'Краб',
                },
            },
            {
                id: '108',
                value: {
                    en: 'Squid',
                    ru: 'Кальмар',
                },
            }
        ],
        correct: '107',
    },
    {
        question: {
            en: 'Who was Mushu from the cartoon "Mulan"?',
            ru: 'Кем был Мушу из мультфильма «Мулан»?',
        },
        answers: [
            {
                id: '109',
                value: {
                    en: 'Dragon',
                    ru: 'Драконом',
                },
            },
            {
                id: '110',
                value: {
                    en: 'Bird',
                    ru: 'Птицей',
                },
            },
            {
                id: '111',
                value: {
                    en: 'Varan',
                    ru: 'Вараном',
                },
            }
        ],
        correct: '109',
    },
    {
        question: {
            en: 'What, in Carlson\'s opinion, is the best cure for the disease?',
            ru: 'Какое, по мнению Карлсона, лучшее лекарство от болезни?',
        },
        answers: [
            {
                id: '112',
                value: {
                    en: 'Chocolate',
                    ru: 'Шоколад',
                },
            },
            {
                id: '113',
                value: {
                    en: 'Jam',
                    ru: 'Варенье',
                },
            },
            {
                id: '114',
                value: {
                    en: 'Meatballs',
                    ru: 'Тефтельки',
                },
            }
        ],
        correct: '113',
    },
    {
        question: {
            en: 'What are the round heroes of the popular cartoon called?',
            ru: 'Как называются круглые герои популярного мультика?',
        },
        answers: [
            {
                id: '115',
                value: {
                    en: 'Roundels',
                    ru: 'Кругляшки',
                },
            },
            {
                id: '116',
                value: {
                    en: 'Fatties',
                    ru: 'Толстяки',
                },
            },
            {
                id: '117',
                value: {
                    en: 'Smeshariki',
                    ru: 'Смешарики',
                },
            }
        ],
        correct: '117',
    },
    {
        question: {
            en: 'What is the name of the cartoon about the kind character from the moon?',
            ru: 'Как называется мультик про доброго персонажа с Луны?',
        },
        answers: [
            {
                id: '118',
                value: {
                    en: 'Fixik',
                    ru: 'Фиксик',
                },
            },
            {
                id: '119',
                value: {
                    en: 'Lunokhod',
                    ru: 'Луноход',
                },
            },
            {
                id: '120',
                value: {
                    en: 'The Adventures of Luntik',
                    ru: 'Приключения Лунтика',
                },
            }
        ],
        correct: '120',
    },
    {
        question: {
            en: 'Winnie the Pooh\'s favorite treat?',
            ru: 'Любимое лакомство Винни-Пуха?',
        },
        answers: [
            {
                id: '121',
                value: {
                    en: 'Honey',
                    ru: 'Мед',
                },
            },
            {
                id: '122',
                value: {
                    en: 'Shish kebab',
                    ru: 'Шашлык',
                },
            },
            {
                id: '123',
                value: {
                    en: 'Strawberries',
                    ru: 'Клубника',
                },
            }
        ],
        correct: '121',
    },
    {
        question: {
            en: 'The name of the cat that can\'t catch the little mouse in any way?',
            ru: 'Имя кота, который никак не может поймать маленького мышонка?',
        },
        answers: [
            {
                id: '124',
                value: {
                    en: 'Tom',
                    ru: 'Том',
                },
            },
            {
                id: '125',
                value: {
                    en: 'Kuzya',
                    ru: 'Кузя',
                },
            },
            {
                id: '126',
                value: {
                    en: 'Mowgli',
                    ru: 'Маугли',
                },
            }
        ],
        correct: '124',
    },
    {
        question: {
            en: 'What prevented the princess from sleeping on the mattress?',
            ru: 'Что мешало спать принцессе на матрасе?',
        },
        answers: [
            {
                id: '127',
                value: {
                    en: 'bean',
                    ru: 'фасолина',
                },
            },
            {
                id: '128',
                value: {
                    en: 'pea',
                    ru: 'горошина',
                },
            },
            {
                id: '129',
                value: {
                    en: 'millet',
                    ru: 'пшено',
                },
            }
        ],
        correct: '128',
    },
    {
        question: {
            en: 'What is the number of monkeys equal to the length of the boa constrictor?',
            ru: 'Какое количество мартышек равно длине удава?',
        },
        answers: [
            {
                id: '130',
                value: {
                    en: '39',
                    ru: '39',
                },
            },
            {
                id: '131',
                value: {
                    en: '5',
                    ru: '5',
                },
            },
            {
                id: '132',
                value: {
                    en: '12',
                    ru: '12',
                },
            }
        ],
        correct: '131',
    },
    {
        question: {
            en: 'What came to the frog princess?',
            ru: 'Что прилетело к царевне-лягушке?',
        },
        answers: [
            {
                id: '133',
                value: {
                    en: 'arrow',
                    ru: 'стрела',
                },
            },
            {
                id: '134',
                value: {
                    en: 'chocolate',
                    ru: 'шоколадка',
                },
            },
            {
                id: '135',
                value: {
                    en: 'mirror',
                    ru: 'зеркальце',
                },
            }
        ],
        correct: '133',
    },
]

const mathematics = [
    {
        question: {
            en: 'How many times a year does the sun rise?',
            ru: 'Сколько раз в году поднимается солнце?',
        },
        answers: [
            {
                id: '136',
                value: {
                    en: '12',
                    ru: '12',
                },
            },
            {
                id: '137',
                value: {
                    en: '365',
                    ru: '365',
                },
            },
            {
                id: '138',
                value: {
                    en: '52',
                    ru: '52',
                },
            }
        ],
        correct: '137',
    },
    {
        question: {
            en: 'Which statement does not need to be proved?',
            ru: 'Какое утверждение не надо доказывать?',
        },
        answers: [
            {
                id: '139',
                value: {
                    en: 'Argument',
                    ru: 'Аргумент',
                },
            },
            {
                id: '140',
                value: {
                    en: 'Axiom',
                    ru: 'Аксиома',
                },
            },
            {
                id: '141',
                value: {
                    en: 'Theorem',
                    ru: 'Теорема',
                },
            }
        ],
        correct: '140',
    },
    {
        question: {
            en: 'If one corner is obtuse in a triangle, then the rest... ?',
            ru: 'Если один угол тупой в треугольнике, то остальные … ?',
        },
        answers: [
            {
                id: '142',
                value: {
                    en: 'smart',
                    ru: 'умные',
                },
            },
            {
                id: '143',
                value: {
                    en: 'beautiful',
                    ru: 'красивые',
                },
            },
            {
                id: '144',
                value: {
                    en: 'sharp',
                    ru: 'острые',
                },
            }
        ],
        correct: '144',
    },
    {
        question: {
            en: 'What is the total sum of all the angles in a triangle?',
            ru: 'Какая общая сумма всех углов в треугольнике?',
        },
        answers: [
            {
                id: '145',
                value: {
                    en: '360',
                    ru: '360',
                },
            },
            {
                id: '146',
                value: {
                    en: '180',
                    ru: '180',
                },
            },
            {
                id: '147',
                value: {
                    en: '270',
                    ru: '270',
                },
            }
        ],
        correct: '146',
    },
    {
        question: {
            en: 'How much is the full number of percentages?',
            ru: 'Полное число процентов?',
        },
        answers: [
            {
                id: '148',
                value: {
                    en: '100',
                    ru: '100',
                },
            },
            {
                id: '149',
                value: {
                    en: '200',
                    ru: '200',
                },
            },
            {
                id: '150',
                value: {
                    en: '500',
                    ru: '500',
                },
            }
        ],
        correct: '148',
    },
    {
        question: {
            en: 'What is the name of a ray with a starting and ending point?',
            ru: 'Как называется луч с начальной и конечной точкой?',
        },
        answers: [
            {
                id: '151',
                value: {
                    en: 'vector',
                    ru: 'вектор',
                },
            },
            {
                id: '152',
                value: {
                    en: 'segment',
                    ru: 'отрезок',
                },
            },
            {
                id: '153',
                value: {
                    en: 'line',
                    ru: 'линия',
                },
            }
        ],
        correct: '152',
    },
    {
        question: {
            en: 'Count how much is 1% of 1000?',
            ru: 'Сосчитайте, сколько будет 1% от 1000?',
        },
        answers: [
            {
                id: '154',
                value: {
                    en: '10',
                    ru: '10',
                },
            },
            {
                id: '155',
                value: {
                    en: '100',
                    ru: '100',
                },
            },
            {
                id: '156',
                value: {
                    en: '1',
                    ru: '1',
                },
            }
        ],
        correct: '154',
    },
    {
        question: {
            en: 'What is the number Pi?',
            ru: 'Чему равно число Пи?',
        },
        answers: [
            {
                id: '157',
                value: {
                    en: '4.32',
                    ru: '4.32',
                },
            },
            {
                id: '158',
                value: {
                    en: '3.14',
                    ru: '3.14',
                },
            },
            {
                id: '159',
                value: {
                    en: '5.34',
                    ru: '5.34',
                },
            }
        ],
        correct: '158',
    },
    {
        question: {
            en: 'How many numbers are there in total?',
            ru: 'Сколько всего существует цифр?',
        },
        answers: [
            {
                id: '160',
                value: {
                    en: 'A lot',
                    ru: 'Много',
                },
            },
            {
                id: '161',
                value: {
                    en: '100',
                    ru: '100',
                },
            },
            {
                id: '162',
                value: {
                    en: '10',
                    ru: '10',
                },
            }
        ],
        correct: '162',
    },
    {
        question: {
            en: '2 sons and 2 fathers ate 3 eggs. How many eggs did everyone eat?',
            ru: '2 сына и 2 отца съели 3 яйца. Сколько яиц съел каждый?',
        },
        answers: [
            {
                id: '163',
                value: {
                    en: 'Two by two',
                    ru: 'По два',
                },
            },
            {
                id: '164',
                value: {
                    en: 'less than one',
                    ru: 'меньше одного',
                },
            },
            {
                id: '165',
                value: {
                    en: 'one',
                    ru: 'одно',
                },
            }
        ],
        correct: '165',
    },
    {
        question: {
            en: 'What was the word for a million in Ancient Russia? ',
            ru: 'Каким словом обозначался миллион в Древней Руси? ',
        },
        answers: [
            {
                id: '166',
                value: {
                    en: 'darkness',
                    ru: 'тьма',
                },
            },
            {
                id: '167',
                value: {
                    en: 'a lot',
                    ru: 'много',
                },
            },
            {
                id: '168',
                value: {
                    en: 'lemon',
                    ru: 'лимон',
                },
            }
        ],
        correct: '166',
    },
    {
        question: {
            en: 'What numbers are used in the decimal system? ',
            ru: 'Какие цифры употребляются в десятичной системе? ',
        },
        answers: [
            {
                id: '169',
                value: {
                    en: 'arabic',
                    ru: 'арабские',
                },
            },
            {
                id: '170',
                value: {
                    en: 'Roman',
                    ru: 'римские',
                },
            },
            {
                id: '171',
                value: {
                    en: 'egyptian',
                    ru: 'египетские',
                },
            }
        ],
        correct: '169',
    },
    {
        question: {
            en: 'What is the largest negative integer? ',
            ru: 'Какое наибольшее целое отрицательное число? ',
        },
        answers: [
            {
                id: '172',
                value: {
                    en: '-infinity',
                    ru: '-бесконечность',
                },
            },
            {
                id: '173',
                value: {
                    en: '-1',
                    ru: '-1',
                },
            },
            {
                id: '174',
                value: {
                    en: '-0.5',
                    ru: '-0.5',
                },
            }
        ],
        correct: '173',
    },
    {
        question: {
            en: 'What is the name of the science of numbers, their properties and actions on them?',
            ru: 'Как называется наука о числах, их свойствах и действиях над ними?',
        },
        answers: [
            {
                id: '175',
                value: {
                    en: 'algebra',
                    ru: 'алгебра',
                },
            },
            {
                id: '176',
                value: {
                    en: 'arithmetic',
                    ru: 'арифметика',
                },
            },
            {
                id: '177',
                value: {
                    en: 'geometry',
                    ru: 'геометрия',
                },
            }
        ],
        correct: '176',
    },
    {
        question: {
            en: 'There are 10 fingers on the hands. How many fingers on 10 hands?',
            ru: 'На руках 10 пальцев. Сколько пальцев на 10 руках?',
        },
        answers: [
            {
                id: '178',
                value: {
                    en: '50',
                    ru: '50',
                },
            },
            {
                id: '179',
                value: {
                    en: '100',
                    ru: '100',
                },
            },
            {
                id: '180',
                value: {
                    en: 'more than 100',
                    ru: 'больше, чем 100',
                },
            }
        ],
        correct: '178',
    },
]

const nature = [
    {
        question: {
            en: 'Under the influence of what force do objects fall to the ground?',
            ru: 'Под воздействием какой силы предметы падают на землю?',
        },
        answers: [
            {
                id: '181',
                value: {
                    en: 'Electromagnetism',
                    ru: 'Электромагнетизм',
                },
            },
            {
                id: '182',
                value: {
                    en: 'Gravity',
                    ru: 'Гравитация',
                },
            },
            {
                id: '183',
                value: {
                    en: 'Nuclear power',
                    ru: 'Ядерная сила',
                },
            }
        ],
        correct: '182',
    },
    {
        question: {
            en: 'What is the largest body of water on Earth?',
            ru: 'Какой водоем самый большой на Земле?',
        },
        answers: [
            {
                id: '184',
                value: {
                    en: 'Atlantic Ocean',
                    ru: 'Атлантический океан',
                },
            },
            {
                id: '185',
                value: {
                    en: 'Pacific Ocean',
                    ru: 'Тихий океан',
                },
            },
            {
                id: '186',
                value: {
                    en: 'Indian Ocean',
                    ru: 'Индийский океан',
                },
            }
        ],
        correct: '185',
    },
    {
        question: {
            en: 'How many continents are there in total?',
            ru: 'Сколько всего континентов?',
        },
        answers: [
            {
                id: '187',
                value: {
                    en: '7',
                    ru: '7',
                },
            },
            {
                id: '188',
                value: {
                    en: '8',
                    ru: '8',
                },
            },
            {
                id: '189',
                value: {
                    en: '6',
                    ru: '6',
                },
            }
        ],
        correct: '189',
    },
    {
        question: {
            en: 'What is the longest river in Russia?',
            ru: 'Какая самая длинная река в России?',
        },
        answers: [
            {
                id: '190',
                value: {
                    en: 'Volga',
                    ru: 'Волга',
                },
            },
            {
                id: '191',
                value: {
                    en: 'Lena',
                    ru: 'Лена',
                },
            },
            {
                id: '192',
                value: {
                    en: 'Yenisei',
                    ru: 'Енисей',
                },
            }
        ],
        correct: '191',
    },
    {
        question: {
            en: 'What trees grow out of acorns?',
            ru: 'Какие деревья растут из желудей?',
        },
        answers: [
            {
                id: '193',
                value: {
                    en: 'oaks',
                    ru: 'дубы',
                },
            },
            {
                id: '194',
                value: {
                    en: 'Maples',
                    ru: 'Клены',
                },
            },
            {
                id: '195',
                value: {
                    en: 'walnuts',
                    ru: 'грецкие орехи',
                },
            }
        ],
        correct: '193',
    },
    {
        question: {
            en: 'How many colors are there in a rainbow?',
            ru: 'Сколько цветов в радуге?',
        },
        answers: [
            {
                id: '196',
                value: {
                    en: '6',
                    ru: '6',
                },
            },
            {
                id: '197',
                value: {
                    en: '7',
                    ru: '7',
                },
            },
            {
                id: '198',
                value: {
                    en: '8',
                    ru: '8',
                },
            }
        ],
        correct: '197',
    },
    {
        question: {
            en: 'What is the name of plant science?',
            ru: 'Как называется наука о растениях?',
        },
        answers: [
            {
                id: '199',
                value: {
                    en: 'Botany',
                    ru: 'Ботаника',
                },
            },
            {
                id: '200',
                value: {
                    en: 'Biology',
                    ru: 'Биология',
                },
            },
            {
                id: '201',
                value: {
                    en: 'Anatomy',
                    ru: 'Анатомия',
                },
            }
        ],
        correct: '199',
    },
    {
        question: {
            en: 'What is the same color in winter and summer?',
            ru: 'Что зимой, и летом одним цветом?',
        },
        answers: [
            {
                id: '202',
                value: {
                    en: 'Linden tree',
                    ru: 'Липа',
                },
            },
            {
                id: '203',
                value: {
                    en: 'Spruce',
                    ru: 'Ель',
                },
            },
            {
                id: '204',
                value: {
                    en: 'Birch',
                    ru: 'Береза',
                },
            }
        ],
        correct: '203',
    },
    {
        question: {
            en: 'What is the biggest berry called?',
            ru: 'Как называют самую большую ягоду?',
        },
        answers: [
            {
                id: '205',
                value: {
                    en: 'Kiwi',
                    ru: 'Киви',
                },
            },
            {
                id: '206',
                value: {
                    en: 'garnet',
                    ru: 'гранат',
                },
            },
            {
                id: '207',
                value: {
                    en: 'Watermelon',
                    ru: 'Арбуз',
                },
            }
        ],
        correct: '207',
    },
    {
        question: {
            en: 'The profession of a person caring for plants?',
            ru: 'Профессия человека, ухаживающего за растениями?',
        },
        answers: [
            {
                id: '208',
                value: {
                    en: 'biologist',
                    ru: 'биолог',
                },
            },
            {
                id: '209',
                value: {
                    en: 'nerd',
                    ru: 'ботаник',
                },
            },
            {
                id: '210',
                value: {
                    en: 'the gardener',
                    ru: 'садовник',
                },
            }
        ],
        correct: '210',
    },
    {
        question: {
            en: 'What do plants breathe?',
            ru: 'Чем дышат растения?',
        },
        answers: [
            {
                id: '211',
                value: {
                    en: 'oxygen',
                    ru: 'кислородом',
                },
            },
            {
                id: '212',
                value: {
                    en: 'carbon dioxide',
                    ru: 'углекислым газом',
                },
            },
            {
                id: '213',
                value: {
                    en: 'steam',
                    ru: 'паром',
                },
            }
        ],
        correct: '211',
    },
    {
        question: {
            en: 'Which tree is called weeping?',
            ru: 'Какое дерево называют плакучим?',
        },
        answers: [
            {
                id: '214',
                value: {
                    en: 'maple',
                    ru: 'клен',
                },
            },
            {
                id: '215',
                value: {
                    en: 'birch',
                    ru: 'береза',
                },
            },
            {
                id: '216',
                value: {
                    en: 'willow',
                    ru: 'ива',
                },
            }
        ],
        correct: '216',
    },
    {
        question: {
            en: 'What to expect if the birds are flying low?',
            ru: 'Чего ждать, если птицы низко летают?',
        },
        answers: [
            {
                id: '217',
                value: {
                    en: 'heat',
                    ru: 'жару',
                },
            },
            {
                id: '218',
                value: {
                    en: 'rain',
                    ru: 'дождя',
                },
            },
            {
                id: '219',
                value: {
                    en: 'snow',
                    ru: 'снег',
                },
            }
        ],
        correct: '218',
    },
    {
        question: {
            en: 'Which device will help you navigate the terrain?',
            ru: 'Какое устройство поможет сориентироваться на местности?',
        },
        answers: [
            {
                id: '220',
                value: {
                    en: 'binoculars',
                    ru: 'бинокль',
                },
            },
            {
                id: '221',
                value: {
                    en: 'compass',
                    ru: 'компас',
                },
            },
            {
                id: '222',
                value: {
                    en: 'barometer',
                    ru: 'барометр',
                },
            }
        ],
        correct: '221',
    },
    {
        question: {
            en: 'What is the name of the beaver house?',
            ru: 'Как называют домик бобров?',
        },
        answers: [
            {
                id: '223',
                value: {
                    en: 'beaver house',
                    ru: 'хатка',
                },
            },
            {
                id: '224',
                value: {
                    en: 'hut',
                    ru: 'избушка',
                },
            },
            {
                id: '225',
                value: {
                    en: 'townhouse',
                    ru: 'таунхаус',
                },
            }
        ],
        correct: '223',
    },
]

const data: TDb = {
    quizzes: {
        animal: {
            id: 'animal',
            title: {
                en: 'About animals',
                ru: 'Про\&nbspживотных',
            },
            tasks: animal,
            bgSrc: './assets/images/img8.jpg',
        },
        tales: {
            id: 'tales',
            title: {
                en: 'Fairy tales',
                ru: 'Сказки',
            },
            tasks: tales,
            bgSrc: './assets/images/img2.jpg',
        },
        cartoons: {
            id: 'cartoons',
            title: {
                en: 'Cartoons',
                ru: 'Мультфильмы',
            },
            tasks: cartoons,
            bgSrc: './assets/images/img6.jpg',
        },
        mathematics: {
            id: 'mathematics',
            title: {
                en: 'Mathematics',
                ru: 'Математика',
            },
            tasks: mathematics,
            bgSrc: './assets/images/img10.jpg',
        },
        nature: {
            id: 'nature',
            title: {
                en: 'Nature',
                ru: 'Природа',
            },
            tasks: nature,
            bgSrc: './assets/images/img15.jpg',
        },
    },
}

export const texts = {
    age: {
        en: 'from 6 to 12 years old',
        ru: 'с 6 до 12 лет',
    },
    total: {
        en: 'total points: ',
        ru: 'всего баллов: ',
    },
    next: {
        en: 'next',
        ru: 'далее',
    },
    result: {
        en: 'result',
        ru: 'результаты',
    },
    question: {
        en: 'question ',
        ru: 'вопрос ',
    },
    questions: {
        en: 'total questions: ',
        ru: 'всего вопросов: ',
    },
    correct: {
        en: 'correct answers: ',
        ru: 'правильных ответов: ',
    },
    quiz: {
        en: 'name of the quiz: ',
        ru: 'название квиза: ',
    },
    home: {
        en: 'home',
        ru: 'на главную',
    },
    scored: {
        en: 'you scored ',
        ru: 'ты набрал ',
    },
    points: {
        en: 'points ',
        ru: 'балл(а/ов) ',
    },
    from: {
        en: 'from ',
        ru: 'из ',
    },
    better: {
        en: 'You can do better...',
        ru: 'ты можешь лучше...',
    },
    aristotle: {
        en: 'Aristotle of our days. ',
        ru: 'Аристотель наших дней. ',
    },
    ovation: {
        en: 'I give you a standing ovation!',
        ru: 'аплодирую тебе стоя!',
    },
}

export default data;