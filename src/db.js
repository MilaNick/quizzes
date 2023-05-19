const animal = [
    {
        question: 'Чем утконос отличается от других млекопитающих? ',
        answers: [
            {
                id: '001',
                value: 'он не пьет воду', // todo: title
            },
            {
                id: '002',
                value: 'откладывает яйца',
            },
            {
                id: '003',
                value: 'сам себе строит дом',
            }
        ],
        correct: '002',
    },
    {
        question: 'Почему морские выдры держатся за руки?',
        answers: [
            {
                id: '004',
                value: 'Потому что дружат',
            },
            {
                id: '005',
                value: 'Чтобы не уплыть, когда они будут спать',
            },
            {
                id: '006',
                value: 'Боятся потеряться',
            }
        ],
        correct: '005',
    },
    {
        question: 'У какой птицы нет перьев?',
        answers: [
            {
                id: '007',
                value: 'у серой куропатки',
            },
            {
                id: '008',
                value: 'у альбатроса',
            },
            {
                id: '009',
                value: 'у пингвина',
            }
        ],
        correct: '009',
    },
    {
        question: 'Какое млекопитающее умеет летать?',
        answers: [
            {
                id: '010',
                value: 'Белка-летяга',
            },
            {
                id: '011',
                value: 'Летучая мышь',
            },
            {
                id: '012',
                value: 'Ленивец',
            }
        ],
        correct: '011'
    },
    {
        question: 'У какого кота нет шерсти?',
        answers: [
            {
                id: '013',
                value: 'у сфинкса',
            },
            {
                id: '014',
                value: 'у мейн куна',
            },
            {
                id: '015',
                value: 'у манчкина',
            }
        ],
        correct: '013',
    },
    {
        question: 'Кого называют «Царь зверей»?',
        answers: [
            {
                id: '016',
                value: 'Удава',
            },
            {
                id: '017',
                value: 'Льва',
            },
            {
                id: '018',
                value: 'Пантеру',
            }
        ],
        correct: '017'
    },
    {
        question: 'Какая птица быстро бегает, но не летает?',
        answers: [
            {
                id: '019',
                value: 'Страус',
            },
            {
                id: '020',
                value: 'Пингвин',
            },
            {
                id: '021',
                value: 'Цесарка',
            }
        ],
        correct: '019'
    },
    {
        question: 'Как называются детёныши коровы?',
        answers: [
            {
                id: '022',
                value: 'Бычата',
            },
            {
                id: '023',
                value: 'Телята',
            },
            {
                id: '024',
                value: 'Жеребята',
            }
        ],
        correct: '023'
    },
    {
        question: 'Кто является самым крупным животным на Земле?',
        answers: [
            {
                id: '025',
                value: 'Черепаха',
            },
            {
                id: '026',
                value: 'Носорог',
            },
            {
                id: '027',
                value: 'Синий кит',
            }
        ],
        correct: '027',
    },
    {
        question: 'Символом чего считается сова?',
        answers: [
            {
                id: '028',
                value: 'Доброты',
            },
            {
                id: '029',
                value: 'Терпения',
            },
            {
                id: '030',
                value: 'Мудрости',
            }
        ],
        correct: '030',
    },
    {
        question: 'Какое сухопутное животное наиболее широко открывает рот?',
        answers: [
            {
                id: '031',
                value: 'Бегемот',
            },
            {
                id: '032',
                value: 'Слон',
            },
            {
                id: '033',
                value: 'Заяц',
            }
        ],
        correct: '031'
    },
    {
        question: 'Какой рыбы не существует?',
        answers: [
            {
                id: '034',
                value: 'Рыба-плоскогубцы',
            },
            {
                id: '035',
                value: 'Рыба-молот',
            },
            {
                id: '036',
                value: 'Рыба-пила',
            }
        ],
        correct: '034',
    },
    {
        question: 'Какой зверь сам себе строит дом? ',
        answers: [
            {
                id: '037',
                value: 'мартышка',
            },
            {
                id: '038',
                value: 'бобер',
            },
            {
                id: '039',
                value: 'осёл',
            }
        ],
        correct: '038'
    },
    {
        question: 'Кто является самой большой кошкой на планете?',
        answers: [
            {
                id: '040',
                value: 'Рысь',
            },
            {
                id: '041',
                value: 'Тигр',
            },
            {
                id: '042',
                value: 'Гепард',
            }
        ],
        correct: '041',
    },
    {
        question: 'Какому животному легко существовать без воды?',
        answers: [
            {
                id: '043',
                value: 'верблюду',
            },
            {
                id: '044',
                value: 'жирафу',
            },
            {
                id: '045',
                value: 'носорогу',
            }
        ],
        correct: '043',
    },
];
const tales = [
    {
        question: 'Самое популярное число в русских сказках?',
        answers: [
            {
                id: '046',
                value: '2',
            },
            {
                id: '047',
                value: '3',
            },
            {
                id: '048',
                value: '10',
            }
        ],
        correct: '047',
    },
    {
        question: 'Сивка-Бурка – это …?',
        answers: [
            {
                id: '049',
                value: 'Трава',
            },
            {
                id: '050',
                value: 'Конь',
            },
            {
                id: '051',
                value: 'Одежда',
            }
        ],
        correct: '050',
    },
    {
        question: 'Что убило Кощея?',
        answers: [
            {
                id: '052',
                value: 'заклинание',
            },
            {
                id: '053',
                value: 'меч',
            },
            {
                id: '054',
                value: 'игла',
            }
        ],
        correct: '054',
    },
    {
        question: 'На чём отдыхает Иванушка-дурачок?',
        answers: [
            {
                id: '055',
                value: 'Лавочка',
            },
            {
                id: '056',
                value: 'Печка',
            },
            {
                id: '057',
                value: 'В кинотеатре',
            }
        ],
        correct: '056',
    },
    {
        question: 'У какого царя похитили жар-птицу?',
        answers: [
            {
                id: '058',
                value: 'у Афрона',
            },
            {
                id: '059',
                value: 'у Федора',
            },
            {
                id: '060',
                value: 'у Мартына',
            }
        ],
        correct: '058',
    },
    {
        question: 'В чём постоянно летает Баба-Яга?',
        answers: [
            {
                id: '061',
                value: 'в вертолете',
            },
            {
                id: '062',
                value: 'В ступе',
            },
            {
                id: '063',
                value: 'на шаре',
            }
        ],
        correct: '062',
    },
    {
        question: 'В какой сказке злая мачеха на поминки блины пекла?',
        answers: [
            {
                id: '064',
                value: 'Морозко',
            },
            {
                id: '065',
                value: 'Белоснежка и семь гномов',
            },
            {
                id: '066',
                value: 'Двенадцать месяцев',
            }
        ],
        correct: '064',
    },
    {
        question: 'Какое название было у корабля, который умел летать?',
        answers: [
            {
                id: '067',
                value: 'Марина',
            },
            {
                id: '068',
                value: 'Летучий Голландец',
            },
            {
                id: '069',
                value: 'Глория',
            }
        ],
        correct: '068',
    },
    {
        question: 'Сколько голов было у Змея-Горыныча?',
        answers: [
            {
                id: '070',
                value: '9',
            },
            {
                id: '071',
                value: '4',
            },
            {
                id: '072',
                value: '3',
            }
        ],
        correct: '072',
    },
    {
        question: 'Кого удалось спасти Дюймовочке?',
        answers: [
            {
                id: '073',
                value: 'Стрижа',
            },
            {
                id: '074',
                value: 'Мартышку',
            },
            {
                id: '075',
                value: 'Ласточку',
            }
        ],
        correct: '075',
    },
    {
        question: 'Каких трех известных строителей домов вы знаете?',
        answers: [
            {
                id: '076',
                value: 'Поросята',
            },
            {
                id: '077',
                value: 'Три медведя',
            },
            {
                id: '078',
                value: 'Лисички',
            }
        ],
        correct: '076',
    },
    {
        question: 'Сколько было богатырей?',
        answers: [
            {
                id: '079',
                value: '3',
            },
            {
                id: '080',
                value: '6',
            },
            {
                id: '081',
                value: '12',
            }
        ],
        correct: '079',
    },
    {
        question: 'У кого получилось приготовить кашу из топора?',
        answers: [
            {
                id: '082',
                value: 'у Алладина',
            },
            {
                id: '083',
                value: 'у солдата',
            },
            {
                id: '084',
                value: 'у Емели',
            }
        ],
        correct: '083',
    },
    {
        question: 'Кто уплетал калачи и ехал на печи?',
        answers: [
            {
                id: '085',
                value: 'Иванушка',
            },
            {
                id: '086',
                value: 'Емеля',
            },
            {
                id: '087',
                value: 'Карлсон',
            }
        ],
        correct: '086',
    },
    {
        question: 'Кого любил Алладин?',
        answers: [
            {
                id: '088',
                value: 'принцессу Жасмин',
            },
            {
                id: '089',
                value: 'Герду',
            },
            {
                id: '090',
                value: 'Машеньку',
            }
        ],
        correct: '088',
    },
];
const cartoons = [
    {
        question: 'Кто всегда придёт на помощь?',
        answers: [
            {
                id: '091',
                value: 'Печкин',
            },
            {
                id: '092',
                value: 'Чип и Дейл',
            },
            {
                id: '093',
                value: 'Крокодил Гена',
            }
        ],
        correct: '092',
    },
    {
        question: 'Как звали умывальников начальника и командира мочалок из сказки Чуковского?',
        answers: [
            {
                id: '094',
                value: 'Скрудж Макдак',
            },
            {
                id: '095',
                value: 'Мойдодыр',
            },
            {
                id: '096',
                value: 'Чиполлино',
            }
        ],
        correct: '095'
    },
    {
        question: 'Кто был самый умный в Цветочном городе?',
        answers: [
            {
                id: '097',
                value: 'Винтик',
            },
            {
                id: '098',
                value: 'Молчун',
            },
            {
                id: '099',
                value: 'Знайка',
            }
        ],
        correct: '099',
    },
    {
        question: 'Кто играл роль Деда Мороза в «Ну, погоди!»?',
        answers: [
            {
                id: '100',
                value: 'Дед Мороз',
            },
            {
                id: '101',
                value: 'Заяц',
            },
            {
                id: '102',
                value: 'Снегурочка',
            }
        ],
        correct: '101',
    },
    {
        question: 'Какой персонаж сказки расстреливал голубей из рогатки?',
        answers: [
            {
                id: '103',
                value: 'Старуха Шапокляк',
            },
            {
                id: '104',
                value: 'Федора',
            },
            {
                id: '105',
                value: 'Пеппа',
            }
        ],
        correct: '103',
    },
    {
        question: 'Кто был другом Ариэль?',
        answers: [
            {
                id: '106',
                value: 'Губка Боб',
            },
            {
                id: '107',
                value: 'Краб',
            },
            {
                id: '108',
                value: 'Кальмар',
            }
        ],
        correct: '107',
    },
    {
        question: 'Кем был Мушу из мультфильма «Мулан»?',
        answers: [
            {
                id: '109',
                value: 'Драконом',
            },
            {
                id: '110',
                value: 'Птицей',
            },
            {
                id: '111',
                value: 'Вараном',
            }
        ],
        correct: '109',
    },
    {
        question: 'Какое, по мнению Карлсона, лучшее лекарство от болезни?',
        answers: [
            {
                id: '112',
                value: 'Шоколад',
            },
            {
                id: '113',
                value: 'Варенье',
            },
            {
                id: '114',
                value: 'Тефтельки',
            }
        ],
        correct: '113',
    },
    {
        question: 'Как называются круглые герои популярного мультика?',
        answers: [
            {
                id: '115',
                value: 'Кругляшки',
            },
            {
                id: '116',
                value: 'Толстяки',
            },
            {
                id: '117',
                value: 'Смешарики',
            }
        ],
        correct: '117',
    },
    {
        question: 'Как называется мультик про доброго персонажа с Луны?',
        answers: [
            {
                id: '118',
                value: 'Фиксик',
            },
            {
                id: '119',
                value: 'Луноход',
            },
            {
                id: '120',
                value: 'Приключения Лунтика',
            }
        ],
        correct: '120',
    },
    {
        question: 'Любимое лакомство Винни-Пуха?',
        answers: [
            {
                id: '121',
                value: 'Мед',
            },
            {
                id: '122',
                value: 'Шашлык',
            },
            {
                id: '123',
                value: 'Клубника',
            }
        ],
        correct: '121',
    },
    {
        question: 'Имя у кота, который никак не может поймать маленького мышонка?',
        answers: [
            {
                id: '124',
                value: 'Том',
            },
            {
                id: '125',
                value: 'Кузя',
            },
            {
                id: '126',
                value: 'Маугли',
            }
        ],
        correct: '124',
    },
    {
        question: 'Что мешало спать принцессе на матрасе?',
        answers: [
            {
                id: '127',
                value: 'фасолина',
            },
            {
                id: '128',
                value: 'горошина',
            },
            {
                id: '129',
                value: 'пшено',
            }
        ],
        correct: '128',
    },
    {
        question: 'Какое количество мартышек равно длине удава?',
        answers: [
            {
                id: '130',
                value: '39',
            },
            {
                id: '131',
                value: '5',
            },
            {
                id: '132',
                value: '12',
            }
        ],
        correct: '131',
    },
    {
        question: 'Что прилетело к царевне-лягушке?',
        answers: [
            {
                id: '133',
                value: 'стрела',
            },
            {
                id: '134',
                value: 'шоколадка',
            },
            {
                id: '135',
                value: 'зеркальце',
            }
        ],
        correct: '133',
    },
];
const mathematics = [
    {
        question: 'Сколько раз в году поднимается солнце?',
        answers: [
            {
                id: '136',
                value: '12',
            },
            {
                id: '137',
                value: '365',
            },
            {
                id: '138',
                value: '52',
            }
        ],
        correct: '137',
    },
    {
        question: 'Какое утверждение не надо доказывать?',
        answers: [
            {
                id: '139',
                value: 'Аргумент',
            },
            {
                id: '140',
                value: 'Аксиома',
            },
            {
                id: '141',
                value: 'Теорема',
            }
        ],
        correct: '140',
    },
    {
        question: 'Если один угол тупой в треугольнике, то остальные … ?',
        answers: [
            {
                id: '142',
                value: 'умные',
            },
            {
                id: '143',
                value: 'красивые',
            },
            {
                id: '144',
                value: 'острые',
            }
        ],
        correct: '144',
    },
    {
        question: 'Какая общая сумма всех углов в треугольнике?',
        answers: [
            {
                id: '145',
                value: '360',
            },
            {
                id: '146',
                value: '180',
            },
            {
                id: '147',
                value: '270',
            }
        ],
        correct: '146',
    },
    {
        question: 'Сколько равно полное число процентов?',
        answers: [
            {
                id: '148',
                value: '100',
            },
            {
                id: '149',
                value: '200',
            },
            {
                id: '150',
                value: '150',
            }
        ],
        correct: '148',
    },
    {
        question: 'Как называется луч с начальной и конечной точкой?',
        answers: [
            {
                id: '151',
                value: 'вектор',
            },
            {
                id: '152',
                value: 'отрезок',
            },
            {
                id: '153',
                value: 'линия',
            }
        ],
        correct: '152',
    },
    {
        question: 'Сосчитайте, сколько будет 1 % от 1000?',
        answers: [
            {
                id: '154',
                value: '10',
            },
            {
                id: '155',
                value: '100',
            },
            {
                id: '156',
                value: '1',
            }
        ],
        correct: '154',
    },
    {
        question: 'Чему равно число Пи?',
        answers: [
            {
                id: '157',
                value: '4.32',
            },
            {
                id: '158',
                value: '3.14',
            },
            {
                id: '159',
                value: '5.34',
            }
        ],
        correct: '158',
    },
    {
        question: 'Сколько всего существует цифр?',
        answers: [
            {
                id: '160',
                value: 'Много',
            },
            {
                id: '161',
                value: '100',
            },
            {
                id: '162',
                value: '10',
            }
        ],
        correct: '162',
    },
    {
        question: '2 сына и 2 отца съели 3 яйца. Сколько яиц съел каждый?',
        answers: [
            {
                id: '163',
                value: 'По два',
            },
            {
                id: '164',
                value: 'меньше одного',
            },
            {
                id: '165',
                value: 'одно',
            }
        ],
        correct: '165',
    },
    {
        question: 'Каким словом обозначался миллион в Древней Руси? ',
        answers: [
            {
                id: '166',
                value: 'тьма',
            },
            {
                id: '167',
                value: 'много',
            },
            {
                id: '168',
                value: 'лимон',
            }
        ],
        correct: '166',
    },
    {
        question: 'Какие цифры употребляются в десятичной системе? ',
        answers: [
            {
                id: '169',
                value: 'арабские',
            },
            {
                id: '170',
                value: 'римские',
            },
            {
                id: '171',
                value: 'египетские',
            }
        ],
        correct: '169',
    },
    {
        question: 'Какое наибольшее целое отрицательное число? ',
        answers: [
            {
                id: '172',
                value: '-бесконечность',
            },
            {
                id: '173',
                value: '-1',
            },
            {
                id: '174',
                value: '-0.5',
            }
        ],
        correct: '173',
    },
    {
        question: 'Как называется наука о числах, их свойствах и действиях над ними?',
        answers: [
            {
                id: '175',
                value: 'алгебра',
            },
            {
                id: '176',
                value: 'арифметика',
            },
            {
                id: '177',
                value: 'геометрия',
            }
        ],
        correct: '176',
    },
    {
        question: 'На руках 10 пальцев. Сколько пальцев на 10 руках?',
        answers: [
            {
                id: '178',
                value: '50',
            },
            {
                id: '179',
                value: '100',
            },
            {
                id: '180',
                value: 'больше, чем 100',
            }
        ],
        correct: '178',
    },
];
const nature = [
    {
        question: 'Под воздействием какой силы предметы падают на землю?',
        answers: [
            {
                id: '181',
                value: 'Электромагнетизм',
            },
            {
                id: '182',
                value: 'Гравитация',
            },
            {
                id: '183',
                value: 'Ядерная сила',
            }
        ],
        correct: '182',
    },
    {
        question: 'Какой водоем самый большой на Земле?',
        answers: [
            {
                id: '184',
                value: 'Атлантический океан',
            },
            {
                id: '185',
                value: 'Тихий океан',
            },
            {
                id: '186',
                value: 'Индийский океан',
            }
        ],
        correct: '185',
    },
    {
        question: 'Сколько всего континентов?',
        answers: [
            {
                id: '187',
                value: '7',
            },
            {
                id: '188',
                value: '8',
            },
            {
                id: '189',
                value: '6',
            }
        ],
        correct: '189',
    },
    {
        question: 'Какая самая длинная река в России?',
        answers: [
            {
                id: '190',
                value: 'Волга',
            },
            {
                id: '191',
                value: 'Лена',
            },
            {
                id: '192',
                value: 'Енисей',
            }
        ],
        correct: '191',
    },
    {
        question: 'Какие деревья растут из желудей?',
        answers: [
            {
                id: '193',
                value: 'дубы',
            },
            {
                id: '194',
                value: 'Клены',
            },
            {
                id: '195',
                value: 'грецкие орехи',
            }
        ],
        correct: '193',
    },
    {
        question: 'Сколько цветов в радуге?',
        answers: [
            {
                id: '196',
                value: '6',
            },
            {
                id: '197',
                value: '7',
            },
            {
                id: '198',
                value: '8',
            }
        ],
        correct: '197',
    },
    {
        question: 'Как называется наука о растениях?',
        answers: [
            {
                id: '199',
                value: 'Ботаника',
            },
            {
                id: '200',
                value: 'Биология',
            },
            {
                id: '201',
                value: 'Анатомия',
            }
        ],
        correct: '199',
    },
    {
        question: 'Что зимой, и летом одним цветом?',
        answers: [
            {
                id: '202',
                value: 'Липа',
            },
            {
                id: '203',
                value: 'Ель',
            },
            {
                id: '204',
                value: 'Береза',
            }
        ],
        correct: '203',
    },
    {
        question: 'Как называют самую большую ягоду?',
        answers: [
            {
                id: '205',
                value: 'Киви',
            },
            {
                id: '206',
                value: 'гранат',
            },
            {
                id: '207',
                value: 'Арбуз',
            }
        ],
        correct: '207',
    },
    {
        question: 'Профессия человека, ухаживающего за растениями?',
        answers: [
            {
                id: '208',
                value: 'биолог',
            },
            {
                id: '209',
                value: 'ботаник',
            },
            {
                id: '210',
                value: 'садовник',
            }
        ],
        correct: '210',
    },
    {
        question: 'Чем дышат растения?',
        answers: [
            {
                id: '211',
                value: 'кислородом',
            },
            {
                id: '212',
                value: 'углекислым газом',
            },
            {
                id: '213',
                value: 'паром',
            }
        ],
        correct: '211',
    },
    {
        question: 'Какое дерево называют плакучим?',
        answers: [
            {
                id: '214',
                value: 'клен',
            },
            {
                id: '215',
                value: 'береза',
            },
            {
                id: '216',
                value: 'ива',
            }
        ],
        correct: '216',
    },
    {
        question: 'Чего ждать, если птицы низко летают?',
        answers: [
            {
                id: '217',
                value: 'жару',
            },
            {
                id: '218',
                value: 'дождя',
            },
            {
                id: '219',
                value: 'снег',
            }
        ],
        correct: '218',
    },
    {
        question: 'Какое устройство поможет сориентироваться на местности?',
        answers: [
            {
                id: '220',
                value: 'бинокль',
            },
            {
                id: '221',
                value: 'компас',
            },
            {
                id: '222',
                value: 'барометр',
            }
        ],
        correct: '221',
    },
    {
        question: 'Как называют домик бобров?',
        answers: [
            {
                id: '223',
                value: 'хатка',
            },
            {
                id: '224',
                value: 'избушка',
            },
            {
                id: '225',
                value: 'таунхаус',
            }
        ],
        correct: '223',
    },
];
export const data = {
    quizzes: {
        animal: {
            id: 'animal',
            title: 'Про животных',
            tasks: animal,
            bgSrc: './assets/images/img8.jpg',
        },
        tales: {
            id: 'tales',
            title: 'Сказки',
            tasks: tales,
            bgSrc: './assets/images/img2.jpg',
        },
        cartoons: {
            id: 'cartoons',
            title: 'Мультфильмы',
            tasks: cartoons,
            bgSrc: './assets/images/img6.jpg',
        },
        mathematics: {
            id: 'mathematics',
            title: 'Математика',
            tasks: mathematics,
            bgSrc: './assets/images/img10.jpg',
        },
        nature: {
            id: 'nature',
            title: 'Природа',
            tasks: nature,
            bgSrc: './assets/images/img15.jpg',
        },
    },
};
export default data;
