import {TDb} from "./interface";

const animal = [
    {
        question: {
            en: 'How to distinguish an insect from a spider?',
            ru: 'Как отличить насекомое от паука?',
        },
        answers: [
            {
                id: '226',
                value: {
                    en: 'Insects have six legs, spiders have eight',
                    ru: 'У насекомых шесть ног, у пауков – восемь',
                },
            },
            {
                id: '227',
                value: {
                    en: 'Insects can have wings, spiders don\'t',
                    ru: 'У насекомых могут быть крылья, у пауков они отсутствуют',
                },
            },
            {
                id: '228',
                value: {
                    en: 'All of the above facts',
                    ru: 'Все вышеперечисленные факты',
                },
            }
        ],
        correct: '228',
    },
    {
        question: {
            en: 'Why do snakes stick out their tongue?',
            ru: 'Почему змеи высовывают язык?',
        },
        answers: [
            {
                id: '229',
                value: {
                    en: 'To lick the prey',
                    ru: 'Чтобы облизать добычу',
                },
            },
            {
                id: '230',
                value: {
                    en: 'To make a hissing sound',
                    ru: 'Чтобы издать шипящий звук',
                },
            },
            {
                id: '231',
                value: {
                    en: 'To "smell" the air',
                    ru: 'Чтобы «понюхать» воздух',
                },
            }
        ],
        correct: '231',
    },
    {
        question: {
            en: 'What is the name of the smallest bird?',
            ru: 'Как называется самая маленькая птичка?',
        },
        answers: [
            {
                id: '232',
                value: {
                    en: 'a Warbler',
                    ru: 'Камышовка',
                },
            },
            {
                id: '233',
                value: {
                    en: 'a hummingbird',
                    ru: 'Колибри',
                },
            },
            {
                id: '234',
                value: {
                    en: 'a goldcrest',
                    ru: 'королёк',
                },
            }
        ],
        correct: '233',
    },
    {
        question: {
            en: 'What do pandas like to eat?',
            ru: 'Что любят кушать панды?',
        },
        answers: [
            {
                id: '235',
                value: {
                    en: 'a Bamboo',
                    ru: 'Бамбук',
                },
            },
            {
                id: '236',
                value: {
                    en: 'ice cream',
                    ru: 'мороженое',
                },
            },
            {
                id: '237',
                value: {
                    en: 'a corn',
                    ru: 'кукурузу',
                },
            }
        ],
        correct: '235',
    },
    {
        question: {
            en: 'Which animal uses its tail as a steering wheel?',
            ru: 'Какое животное использует свой хвост в качестве руля?',
        },
        answers: [
            {
                id: '238',
                value: {
                    en: 'a Rat',
                    ru: 'Крыса',
                },
            },
            {
                id: '239',
                value: {
                    en: 'a Squirrel',
                    ru: 'Белка',
                },
            },
            {
                id: '240',
                value: {
                    en: 'a goat',
                    ru: 'Коза',
                },
            }
        ],
        correct: '239',
    },
    {
        question: {
            en: 'Which bird used to act as a postman?',
            ru: 'Какая птица раньше выполняла роль почтальона?',
        },
        answers: [
            {
                id: '241',
                value: {
                    en: 'a owl',
                    ru: 'сова',
                },
            },
            {
                id: '242',
                value: {
                    en: 'a falcon',
                    ru: 'сокол',
                },
            },
            {
                id: '243',
                value: {
                    en: 'a pigeon',
                    ru: 'голубь',
                },
            }
        ],
        correct: '243',
    },
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
                    ru: 'Он не пьёт воду',
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
                    en: 'a Sloth',
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
                    ru: 'у мейн-куна',
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
                    en: 'a lion',
                    ru: 'Льва',
                },
            },
            {
                id: '018',
                value: {
                    en: 'a panther',
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
                    en: 'a Ostrich',
                    ru: 'Страус',
                },
            },
            {
                id: '020',
                value: {
                    en: 'a Penguin',
                    ru: 'Пингвин',
                },
            },
            {
                id: '021',
                value: {
                    en: 'a Guinea Fowl',
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
                    en: 'a Turtle',
                    ru: 'Черепаха',
                },
            },
            {
                id: '026',
                value: {
                    en: 'a Rhinoceros',
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
                    en: 'a Behemoth',
                    ru: 'Бегемот',
                },
            },
            {
                id: '032',
                value: {
                    en: 'a Elephant',
                    ru: 'Слон',
                },
            },
            {
                id: '033',
                value: {
                    en: 'a Hare',
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
                    en: 'a Sawfish',
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
                    en: 'a monkey',
                    ru: 'мартышка',
                },
            },
            {
                id: '038',
                value: {
                    en: 'a beaver',
                    ru: 'бобер',
                },
            },
            {
                id: '039',
                value: {
                    en: 'a donkey',
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
                    en: 'a Lynx',
                    ru: 'Рысь',
                },
            },
            {
                id: '041',
                value: {
                    en: 'a Tiger',
                    ru: 'Тигр',
                },
            },
            {
                id: '042',
                value: {
                    en: 'a Cheetah',
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
                    en: 'a camel',
                    ru: 'верблюду',
                },
            },
            {
                id: '044',
                value: {
                    en: 'a giraffe',
                    ru: 'жирафу',
                },
            },
            {
                id: '045',
                value: {
                    en: 'a rhinoceros',
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
            en: 'How to summon a genie from a lamp?',
            ru: 'Как вызвать джина из лампы?',
        },
        answers: [
            {
                id: '244',
                value: {
                    en: 'turn it on',
                    ru: 'включить её',
                },
            },
            {
                id: '245',
                value: {
                    en: 'Lose her',
                    ru: 'Потереть её',
                },
            },
            {
                id: '246',
                value: {
                    en: 'say the word',
                    ru: 'сказать слово',
                },
            }
        ],
        correct: '245',
    },
    {
        question: {
            en: 'What was the name of the long-nosed boy made of wood?',
            ru: 'Как звали длинноносого мальчика, сделанного из дерева?',
        },
        answers: [
            {
                id: '247',
                value: {
                    en: 'Pinocchio',
                    ru: 'Буратино',
                },
            },
            {
                id: '248',
                value: {
                    en: 'baby',
                    ru: 'пупсик',
                },
            },
            {
                id: '249',
                value: {
                    en: 'nutcracker',
                    ru: 'щелкунчик',
                },
            }
        ],
        correct: '247',
    },
    {
        question: {
            en: 'Who has the ugly duckling become?',
            ru: 'Кем стал гадкий утёнок?',
        },
        answers: [
            {
                id: '250',
                value: {
                    en: 'a frog',
                    ru: 'лягушкой',
                },
            },
            {
                id: '251',
                value: {
                    en: 'a swan',
                    ru: 'лебедем',
                },
            },
            {
                id: '252',
                value: {
                    en: 'a prince',
                    ru: 'принцем',
                },
            }
        ],
        correct: '251',
    },
    {
        question: {
            en: 'What kind of animal did Shapoklyak carry with her?',
            ru: 'Какое животное носила с собой Шапокляк?',
        },
        answers: [
            {
                id: '253',
                value: {
                    en: 'a rat',
                    ru: 'крысу',
                },
            },
            {
                id: '254',
                value: {
                    en: 'a monkey',
                    ru: 'обезьянку',
                },
            },
            {
                id: '255',
                value: {
                    en: 'a squirrel',
                    ru: 'белку',
                },
            }
        ],
        correct: '253',
    },
    {
        question: {
            en: 'What did Little Red Riding Hood bring to Grandma?',
            ru: 'Что несла Красная Шапочка бабушке?',
        },
        answers: [
            {
                id: '256',
                value: {
                    en: 'a cake',
                    ru: 'торт',
                },
            },
            {
                id: '257',
                value: {
                    en: 'a pies',
                    ru: 'пирожки',
                },
            },
            {
                id: '258',
                value: {
                    en: 'ice cream',
                    ru: 'мороженое',
                },
            }
        ],
        correct: '257',
    },
    {
        question: {
            en: 'Who did the crocodile Gene work for?',
            ru: 'Кем работал крокодил Гена?',
        },
        answers: [
            {
                id: '259',
                value: {
                    en: 'a crocodile',
                    ru: 'крокодилом',
                },
            },
            {
                id: '260',
                value: {
                    en: 'a zookeeper',
                    ru: 'смотрителем',
                },
            },
            {
                id: '261',
                value: {
                    en: 'a toy',
                    ru: 'игрушкой',
                },
            }
        ],
        correct: '259',
    },
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
                    en: 'a Grass',
                    ru: 'Трава',
                },
            },
            {
                id: '050',
                value: {
                    en: 'a Horse',
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
                    en: 'a spell',
                    ru: 'заклинание',
                },
            },
            {
                id: '053',
                value: {
                    en: 'a sword',
                    ru: 'меч',
                },
            },
            {
                id: '054',
                value: {
                    en: 'a needle',
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
                    ru: 'У Фёдора',
                },
            },
            {
                id: '060',
                value: {
                    en: 'Michael',
                    ru: 'у Михаила',
                },
            }
        ],
        correct: '058',
    },
    {
        question: {
            en: 'What does Baba Yaga fly on all the time?',
            ru: 'На чём постоянно летает Баба-Яга?',
        },
        answers: [
            {
                id: '061',
                value: {
                    en: 'by helicopter',
                    ru: 'на вертолете',
                },
            },
            {
                id: '062',
                value: {
                    en: 'by mortar',
                    ru: 'в ступе',
                },
            },
            {
                id: '063',
                value: {
                    en: 'by ball',
                    ru: 'на шаре',
                },
            }
        ],
        correct: '062',
    },
    {
        question: {
            en: 'In which fairy tale did the stepmother bake pancakes for the wake?',
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
                    en: 'the swift',
                    ru: 'Стрижа',
                },
            },
            {
                id: '074',
                value: {
                    en: 'the cuckoo',
                    ru: 'Кукушку',
                },
            },
            {
                id: '075',
                value: {
                    en: 'the swallow',
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
            ru: 'Сколько было богатырей на картине "Богатыри"?',
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
            en: 'Who rode on the stove and ate rolls?',
            ru: 'Кто ехал на печи и уплетал калачи?',
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
            en: 'Who was Alice looking for in a dark hole?',
            ru: 'Кого искала Алиса в темной норе?',
        },
        answers: [
            {
                id: '262',
                value: {
                    en: 'the green frog',
                    ru: 'зелёную лягушку',
                },
            },
            {
                id: '263',
                value: {
                    en: 'dirty squirrel',
                    ru: 'грязную белку',
                },
            },
            {
                id: '264',
                value: {
                    en: 'White Rabbit',
                    ru: 'Белого кролика',
                },
            }
        ],
        correct: '264',
    },
    {
        question: {
            en: 'What was the name of Christopher Robin\'s friend?',
            ru: 'Как звали друга Кристофера Робина?',
        },
        answers: [
            {
                id: '265',
                value: {
                    en: 'Shrek',
                    ru: 'Шрэк',
                },
            },
            {
                id: '266',
                value: {
                    en: 'Winnie the Pooh',
                    ru: 'Винни-Пух',
                },
            },
            {
                id: '267',
                value: {
                    en: 'The Swan Princess',
                    ru: 'Принцесса-лебедь',
                },
            }
        ],
        correct: '266',
    },
    {
        question: {
            en: 'What was the name of Pumbaa\'s best friend?',
            ru: 'Как звали лучшего друга Пумбы?',
        },
        answers: [
            {
                id: '268',
                value: {
                    en: 'Jerry',
                    ru: 'Джерри',
                },
            },
            {
                id: '269',
                value: {
                    en: 'Timon',
                    ru: 'Тимон',
                },
            },
            {
                id: '270',
                value: {
                    en: 'simpson',
                    ru: 'симпсон',
                },
            }
        ],
        correct: '269',
    },
    {
        question: {
            en: 'How should I eat a sandwich according to Matroskin?',
            ru: 'Как надо есть бутерброд по мнению Матроскина?',
        },
        answers: [
            {
                id: '271',
                value: {
                    en: 'with music',
                    ru: 'c музыкой',
                },
            },
            {
                id: '272',
                value: {
                    en: 'under the blanket',
                    ru: 'под одеялом',
                },
            },
            {
                id: '273',
                value: {
                    en: 'Sausage down',
                    ru: 'Колбасой вниз',
                },
            }
        ],
        correct: '273',
    },
    {
        question: {
            en: 'What is the name of the green giant living in the swamp?',
            ru: 'Как зовут зелёного великана, живущего на болоте?',
        },
        answers: [
            {
                id: '274',
                value: {
                    en: 'Theodore',
                    ru: 'Фёдор',
                },
            },
            {
                id: '275',
                value: {
                    en: 'Shrek',
                    ru: 'Шрэк',
                },
            },
            {
                id: '276',
                value: {
                    en: 'Carlson',
                    ru: 'Карлсон',
                },
            }
        ],
        correct: '275',
    },
    {
        question: {
            en: 'What was the name of Kai\'s sister?',
            ru: 'Как звали сестру Кая?',
        },
        answers: [
            {
                id: '277',
                value: {
                    en: 'Gerda',
                    ru: 'Герда',
                },
            },
            {
                id: '278',
                value: {
                    en: 'Emily',
                    ru: 'Эмилия',
                },
            },
            {
                id: '279',
                value: {
                    en: 'Freya',
                    ru: 'Фрея',
                },
            }
        ],
        correct: '277',
    },
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
            en: 'What was the name of the commander of the washcloths?',
            ru: 'Как звали командира мочалок из сказки?',
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
            ru: 'Кто был умнее всех в Цветочном городе?',
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
                    en: 'rabbit',
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
                    en: 'Masha',
                    ru: 'Маша',
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
                    en: 'a Dragon',
                    ru: 'Драконом',
                },
            },
            {
                id: '110',
                value: {
                    en: 'a Bird',
                    ru: 'Птицей',
                },
            },
            {
                id: '111',
                value: {
                    en: 'a Varan',
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
                    en: 'a Chocolate',
                    ru: 'Шоколад',
                },
            },
            {
                id: '113',
                value: {
                    en: 'a Jam',
                    ru: 'Варенье',
                },
            },
            {
                id: '114',
                value: {
                    en: 'a Meatballs',
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
                    en: 'The fixik',
                    ru: 'Фиксик',
                },
            },
            {
                id: '119',
                value: {
                    en: 'The moonwalker',
                    ru: 'Луноход',
                },
            },
            {
                id: '120',
                value: {
                    en: 'Moonzy and his friends',
                    ru: 'Лунтик и его друзья',
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
                    en: 'a aHoney',
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
                    en: 'a Strawberries',
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
                    en: 'a bean',
                    ru: 'фасолина',
                },
            },
            {
                id: '128',
                value: {
                    en: 'a pea',
                    ru: 'горошина',
                },
            },
            {
                id: '129',
                value: {
                    en: 'a millet',
                    ru: 'пшено',
                },
            }
        ],
        correct: '128',
    },
    {
        question: {
            en: 'How many monkeys are required to measure the length of a boa constrictor?',
            ru: 'Какое количество мартышек требуется для измерения длины удава?',
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
                    en: 'a arrow',
                    ru: 'стрела',
                },
            },
            {
                id: '134',
                value: {
                    en: 'a chocolate',
                    ru: 'шоколадка',
                },
            },
            {
                id: '135',
                value: {
                    en: 'a mirror',
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
            en: 'Which geometric shape has no corners?',
            ru: 'У какой геометрической фигуры нет углов?',
        },
        answers: [
            {
                id: '280',
                value: {
                    en: 'a circle',
                    ru: 'у круга',
                },
            },
            {
                id: '281',
                value: {
                    en: 'cylinder',
                    ru: 'у цилиндра',
                },
            },
            {
                id: '282',
                value: {
                    en: 'cone',
                    ru: 'у конуса',
                },
            }
        ],
        correct: '280',
    },
    {
        question: {
            en: 'The distance from the center of the circle to any point on its circumference?',
            ru: 'Расстояние от центра круга до любой точки на его окружности?',
        },
        answers: [
            {
                id: '283',
                value: {
                    en: 'diameter',
                    ru: 'диаметр',
                },
            },
            {
                id: '284',
                value: {
                    en: 'radius',
                    ru: 'радиус',
                },
            },
            {
                id: '285',
                value: {
                    en: 'segment',
                    ru: 'сегмент',
                },
            }
        ],
        correct: '284',
    },
    {
        question: {
            en: 'Which alphabet has 2 characters?',
            ru: 'В какой азбуке 2 знака?',
        },
        answers: [
            {
                id: '286',
                value: {
                    en: 'in the alphabet of the Russian language',
                    ru: 'в азбуке русского языка',
                },
            },
            {
                id: '287',
                value: {
                    en: 'Braille Alphabet',
                    ru: 'В азбуке Брайля',
                },
            },
            {
                id: '288',
                value: {
                    en: 'In Morse code',
                    ru: 'В азбуке Морзе',
                },
            }
        ],
        correct: '288',
    },
    {
        question: {
            en: 'What will always be equal to the product of all digits?',
            ru: 'Чему всегда будет равно произведение всех цифр?',
        },
        answers: [
            {
                id: '289',
                value: {
                    en: '362880',
                    ru: '362880',
                },
            },
            {
                id: '290',
                value: {
                    en: '0',
                    ru: '0',
                },
            },
            {
                id: '291',
                value: {
                    en: 'infinity',
                    ru: 'бесконечность',
                },
            }
        ],
        correct: '290',
    },
    {
        question: {
            en: 'How to calculate the perimeter?',
            ru: 'Как посчитать периметр?',
        },
        answers: [
            {
                id: '292',
                value: {
                    en: 'Add the length of all sides',
                    ru: 'Сложить длины всех сторон',
                },
            },
            {
                id: '293',
                value: {
                    en: 'Call the parents',
                    ru: 'Позвать родителей',
                },
            },
            {
                id: '294',
                value: {
                    en: 'Take a long look at the task',
                    ru: 'Долго смотреть на задачу',
                },
            }
        ],
        correct: '292',
    },
    {
        question: {
            en: 'What does not change when the order of terms is changed?',
            ru: 'Что не меняется от перемены мест слагаемых?',
        },
        answers: [
            {
                id: '295',
                value: {
                    en: 'sum',
                    ru: 'Сумма',
                },
            },
            {
                id: '296',
                value: {
                    en: 'subtraction',
                    ru: 'вычитание',
                },
            },
            {
                id: '297',
                value: {
                    en: 'division',
                    ru: 'деление',
                },
            }
        ],
        correct: '295',
    },
    {
        question: {
            en: 'How many times a year does the sun rise?',
            ru: 'Сколько раз в году восходит солнце?',
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
                    en: '365 or 366',
                    ru: '365 или 366',
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
                    en: 'statement',
                    ru: 'утверждение',
                },
            },
            {
                id: '140',
                value: {
                    en: 'Axiom',
                    ru: 'Аксиому',
                },
            },
            {
                id: '141',
                value: {
                    en: 'Theorem',
                    ru: 'Теорему',
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
            ru: 'Какое наибольшее целое отрицательное число?',
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
            en: 'What is the science of numbers called?',
            ru: 'Как называется наука о числах?',
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
                    ru: 'Электромагнетизма',
                },
            },
            {
                id: '182',
                value: {
                    en: 'Gravity',
                    ru: 'Гравитации',
                },
            },
            {
                id: '183',
                value: {
                    en: 'Nuclear power',
                    ru: 'Ядерной силы',
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
                    ru: 'Клёны',
                },
            },
            {
                id: '195',
                value: {
                    en: 'linden trees',
                    ru: 'липы',
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
            en: 'Which tree is the same color in winter and summer?',
            ru: 'Какое дерево зимой и летом одним цветом?',
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
                    ru: 'клён',
                },
            },
            {
                id: '215',
                value: {
                    en: 'birch',
                    ru: 'березу',
                },
            },
            {
                id: '216',
                value: {
                    en: 'willow',
                    ru: 'иву',
                },
            }
        ],
        correct: '216',
    },
    {
        question: {
            en: 'What to expect if the birds are flying low?',
            ru: 'Чего ожидать, если птицы низко летают?',
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
    {
        question: {
            en: 'How fast does it take to drive so as not to hear the ringing of the jar tied to the rear bumper?',
            ru: 'Скорость перемещения, при которой не слышен стук консервной банки, привязанной к заднему бамперу?',
        },
        answers: [
            {
                id: '298',
                value: {
                    en: '0',
                    ru: '0',
                },
            },
            {
                id: '299',
                value: {
                    en: 'supersonic speed',
                    ru: 'сверхзвуковая скорость',
                },
            },
            {
                id: '300',
                value: {
                    en: 'all of the above',
                    ru: 'всё вышеперечисленное',
                },
            }
        ],
        correct: '300',
    },
    {
        question: {
            en: 'The name of the fairy-tale heroine associated with the solid state of water?',
            ru: 'Имя сказочной героини, связанное с твердым состоянием воды?',
        },
        answers: [
            {
                id: '301',
                value: {
                    en: 'Pocahontas',
                    ru: 'Покахонтас',
                },
            },
            {
                id: '302',
                value: {
                    en: 'Snow maiden',
                    ru: 'Снегурочка',
                },
            },
            {
                id: '303',
                value: {
                    en: 'The Little Mermaid',
                    ru: 'Русалочка',
                },
            }
        ],
        correct: '302',
    },
    {
        question: {
            en: 'What berries can be harvested in winter from under the snow?',
            ru: 'Какие ягоды можно собирать зимой из-под снега?',
        },
        answers: [
            {
                id: '304',
                value: {
                    en: 'Cranberry',
                    ru: 'Клюкву',
                },
            },
            {
                id: '305',
                value: {
                    en: 'Blackberry',
                    ru: 'Ежевику',
                },
            },
            {
                id: '306',
                value: {
                    en: 'Blueberry',
                    ru: 'Голубику',
                },
            }
        ],
        correct: '304',
    },
    {
        question: {
            en: 'What is the name of the berry, which in dried form is called raisins?',
            ru: 'Название ягоды, которая в сушеном виде называется изюм?',
        },
        answers: [
            {
                id: '307',
                value: {
                    en: 'cherry',
                    ru: 'вишня',
                },
            },
            {
                id: '308',
                value: {
                    en: 'Apricot',
                    ru: 'Абрикос',
                },
            },
            {
                id: '309',
                value: {
                    en: 'Grape',
                    ru: 'Виноград',
                },
            }
        ],
        correct: '309',
    },
    {
        question: {
            en: 'The name of the scientist that is added to the temperature?',
            ru: 'Фамилия ученого, которая добавляется к температуре?',
        },
        answers: [
            {
                id: '310',
                value: {
                    en: 'Fahrenheit',
                    ru: 'Фаренгейт',
                },
            },
            {
                id: '311',
                value: {
                    en: 'Celsius',
                    ru: 'Цельсий',
                },
            },
            {
                id: '312',
                value: {
                    en: 'All of the above',
                    ru: 'Все перечисленные',
                },
            }
        ],
        correct: '312',
    },
    {
        question: {
            en: 'What is the name of the phenomenon when the sun sets?',
            ru: 'Как называется явление, когда солнце заходит?',
        },
        answers: [
            {
                id: '313',
                value: {
                    en: 'Sunset',
                    ru: 'Закат',
                },
            },
            {
                id: '314',
                value: {
                    en: 'Dawn',
                    ru: 'Заря',
                },
            },
            {
                id: '315',
                value: {
                    en: 'Sunrise',
                    ru: 'Рассвет',
                },
            }
        ],
        correct: '313',
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
        },
        tales: {
            id: 'tales',
            title: {
                en: 'Fairy tales',
                ru: 'Сказки',
            },
            tasks: tales,
        },
        cartoons: {
            id: 'cartoons',
            title: {
                en: 'Cartoons',
                ru: 'Мультфильмы',
            },
            tasks: cartoons,
        },
        mathematics: {
            id: 'mathematics',
            title: {
                en: 'Mathematics',
                ru: 'Математика',
            },
            tasks: mathematics,
        },
        nature: {
            id: 'nature',
            title: {
                en: 'Nature',
                ru: 'Природа',
            },
            tasks: nature,
        },
    },
}

export const texts = {
    age: {
        en: 'from 6 years old',
        ru: 'с 6 лет',
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
