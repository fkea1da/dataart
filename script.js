// Data Art «Орбиты Летней школы»
const DATA = {"P":[{"id":1,"c":"Санкт-Петербург","g":10,"l":0,"i":["be"],"t":0},{"id":2,"c":"Санкт-Петербург","g":null,"l":1,"i":["ai","be","mo","en","pm"],"t":0},{"id":3,"c":"Санкт-Петербург","g":null,"l":1,"i":["unk"],"t":0},{"id":4,"c":"Санкт-Петербург","g":null,"l":0,"i":["unk"],"t":0},{"id":5,"c":"Санкт-Петербург","g":11,"l":1,"i":["ai","unk"],"t":2},{"id":6,"c":"Санкт-Петербург","g":10,"l":0,"i":["ai","pm"],"t":0},{"id":7,"c":"Санкт-Петербург","g":9,"l":1,"i":["be","ai"],"t":0},{"id":8,"c":"Санкт-Петербург","g":9,"l":2,"i":["ai","be","mo","pm"],"t":1},{"id":9,"c":"Москва","g":11,"l":0,"i":["ai","pm"],"t":0},{"id":10,"c":"Санкт-Петербург","g":9,"l":0,"i":["ai"],"t":2},{"id":11,"c":"Санкт-Петербург","g":9,"l":0,"i":["ai","mo","en","ux"],"t":0},{"id":12,"c":"Санкт-Петербург","g":11,"l":2,"i":["ai","be","mo","en","pm"],"t":2},{"id":13,"c":"Санкт-Петербург","g":9,"l":2,"i":["pm","mo","ai"],"t":0},{"id":14,"c":"Екатеринбург","g":9,"l":1,"i":["ai","mo","ux","pm"],"t":0},{"id":15,"c":"Санкт-Петербург","g":10,"l":2,"i":["ai"],"t":0},{"id":16,"c":"Санкт-Петербург","g":11,"l":1,"i":["ai"],"t":0},{"id":17,"c":"Не указано","g":10,"l":1,"i":["unk"],"t":0},{"id":18,"c":"Санкт-Петербург","g":8,"l":0,"i":["unk"],"t":0},{"id":19,"c":"Санкт-Петербург","g":11,"l":1,"i":["ai","be"],"t":0},{"id":20,"c":"Санкт-Петербург","g":11,"l":2,"i":["ai"],"t":0},{"id":21,"c":"Боровичи","g":10,"l":3,"i":["be","ai","pm"],"t":0},{"id":22,"c":"Донецк","g":null,"l":2,"i":["mo","en","pm","ai"],"t":0},{"id":23,"c":"Санкт-Петербург","g":10,"l":2,"i":["ai","be","unk","pm"],"t":1},{"id":24,"c":"Санкт-Петербург","g":10,"l":1,"i":["ai","en","unk"],"t":0},{"id":25,"c":"Санкт-Петербург","g":10,"l":1,"i":["unk"],"t":0},{"id":26,"c":"Санкт-Петербург","g":10,"l":1,"i":["be","en","unk"],"t":0},{"id":27,"c":"Сергиев Посад","g":9,"l":0,"i":["ai","be","en","pm"],"t":0},{"id":28,"c":"Санкт-Петербург","g":9,"l":1,"i":["ai","be","mo","en","ux","pm","unk"],"t":2},{"id":29,"c":"Омск","g":11,"l":2,"i":["ai","mo","be","pm"],"t":0},{"id":30,"c":"Самара","g":null,"l":1,"i":["ai","unk"],"t":0},{"id":31,"c":"Санкт-Петербург","g":8,"l":2,"i":["ai","pm","ux","unk"],"t":0},{"id":32,"c":"Самара","g":null,"l":2,"i":["ai","en","pm","unk"],"t":1},{"id":33,"c":"Кемерово","g":10,"l":1,"i":["en"],"t":0},{"id":34,"c":"Санкт-Петербург","g":9,"l":0,"i":["unk","ai"],"t":0},{"id":35,"c":"Не указано","g":null,"l":0,"i":["unk"],"t":2},{"id":36,"c":"Санкт-Петербург","g":9,"l":0,"i":["unk"],"t":0},{"id":37,"c":"Санкт-Петербург","g":9,"l":3,"i":["ai","be","mo","en","ux","pm"],"t":1},{"id":38,"c":"Санкт-Петербург","g":10,"l":2,"i":["ai","mo","en","ux"],"t":0},{"id":39,"c":"Санкт-Петербург","g":8,"l":0,"i":["ai","ux","unk"],"t":0},{"id":40,"c":"Кадуй","g":10,"l":2,"i":["pm","ai","ux","be"],"t":0},{"id":41,"c":"Санкт-Петербург","g":null,"l":0,"i":["mo","en","ux"],"t":2},{"id":42,"c":"Мурманск","g":10,"l":1,"i":["ai","be","ux"],"t":0},{"id":43,"c":"Арзамас","g":10,"l":0,"i":["ux","pm"],"t":0},{"id":44,"c":"Санкт-Петербург","g":8,"l":2,"i":["ai","be","mo","en","ux","pm"],"t":0},{"id":45,"c":"Долгопрудный","g":11,"l":1,"i":["be","en","mo"],"t":0},{"id":46,"c":"Волхов","g":11,"l":2,"i":["ai","be"],"t":0},{"id":47,"c":"Уфа","g":9,"l":2,"i":["be","ux"],"t":0},{"id":48,"c":"Алматы","g":11,"l":2,"i":["ux","pm","ai","mo","be"],"t":0},{"id":49,"c":"Калининград","g":9,"l":0,"i":["ai","be","mo","ux","pm"],"t":0},{"id":50,"c":"Санкт-Петербург","g":9,"l":0,"i":["ai","be","en","ux","pm","mo"],"t":0},{"id":51,"c":"Уфа","g":null,"l":1,"i":["ai","be","mo","en","pm","unk"],"t":2},{"id":52,"c":"Санкт-Петербург","g":10,"l":1,"i":["ai","mo"],"t":0},{"id":53,"c":"Санкт-Петербург","g":10,"l":0,"i":["ux","pm","unk","ai"],"t":0},{"id":54,"c":"Самара","g":10,"l":0,"i":["ux","be"],"t":0},{"id":55,"c":"Москва","g":9,"l":2,"i":["ai"],"t":2},{"id":56,"c":"Санкт-Петербург","g":9,"l":1,"i":["ai","be","en","mo"],"t":0},{"id":57,"c":"Санкт-Петербург","g":9,"l":2,"i":["ai","be","mo","en","pm"],"t":0},{"id":58,"c":"Санкт-Петербург","g":11,"l":1,"i":["ai"],"t":0},{"id":59,"c":"Не указано","g":9,"l":1,"i":["en","ux"],"t":0},{"id":60,"c":"Омск","g":null,"l":1,"i":["en","ux"],"t":0},{"id":61,"c":"Не указано","g":null,"l":1,"i":["ai","unk","ux"],"t":0},{"id":62,"c":"Санкт-Петербург","g":null,"l":1,"i":["unk","ux","en","be"],"t":2},{"id":63,"c":"Санкт-Петербург","g":11,"l":3,"i":["ai"],"t":1},{"id":64,"c":"Новосибирск","g":8,"l":2,"i":["ai","mo","en","ux","pm"],"t":0},{"id":65,"c":"Киров","g":10,"l":2,"i":["be","mo","ai","pm"],"t":0},{"id":66,"c":"Всеволожск","g":9,"l":1,"i":["unk"],"t":2},{"id":67,"c":"Санкт-Петербург","g":9,"l":2,"i":["mo","en","be","pm","ai"],"t":1},{"id":68,"c":"Санкт-Петербург","g":null,"l":1,"i":["ai","be"],"t":0},{"id":69,"c":"Санкт-Петербург","g":null,"l":0,"i":["unk"],"t":2},{"id":70,"c":"Санкт-Петербург","g":9,"l":0,"i":["unk"],"t":0},{"id":71,"c":"Санкт-Петербург","g":null,"l":1,"i":["ai","en"],"t":0},{"id":72,"c":"Санкт-Петербург","g":10,"l":1,"i":["ai","be","en","pm"],"t":0},{"id":73,"c":"Санкт-Петербург","g":8,"l":0,"i":["unk"],"t":0},{"id":74,"c":"Санкт-Петербург","g":null,"l":1,"i":["unk"],"t":2},{"id":75,"c":"Курган","g":10,"l":1,"i":["unk"],"t":0},{"id":76,"c":"Санкт-Петербург","g":11,"l":2,"i":["be","ai","mo","en"],"t":0},{"id":77,"c":"Санкт-Петербург","g":9,"l":0,"i":["unk"],"t":0},{"id":78,"c":"Уфа","g":null,"l":1,"i":["unk"],"t":0},{"id":79,"c":"Санкт-Петербург","g":9,"l":1,"i":["ai","pm","ux","be"],"t":2},{"id":80,"c":"Санкт-Петербург","g":null,"l":3,"i":["ai"],"t":0},{"id":81,"c":"Калининград","g":null,"l":3,"i":["ai","pm"],"t":0},{"id":82,"c":"Не указано","g":9,"l":0,"i":["unk"],"t":0},{"id":83,"c":"Санкт-Петербург","g":9,"l":0,"i":["unk"],"t":0},{"id":84,"c":"Санкт-Петербург","g":10,"l":0,"i":["unk","pm","ai","en"],"t":0},{"id":85,"c":"Санкт-Петербург","g":8,"l":0,"i":["ai","en","ux","pm"],"t":0},{"id":86,"c":"Гатчина","g":10,"l":2,"i":["be","mo","en","ux","pm"],"t":1},{"id":87,"c":"Сочи","g":11,"l":1,"i":["en","pm"],"t":0},{"id":88,"c":"Санкт-Петербург","g":9,"l":0,"i":["ai","unk"],"t":0},{"id":89,"c":"Санкт-Петербург","g":11,"l":1,"i":["unk","pm","en","ai"],"t":0},{"id":90,"c":"Санкт-Петербург","g":9,"l":2,"i":["unk"],"t":0},{"id":91,"c":"Тольятти","g":10,"l":2,"i":["en","pm","be"],"t":0},{"id":92,"c":"Санкт-Петербург","g":9,"l":3,"i":["ai","en","be","mo"],"t":2},{"id":93,"c":"Санкт-Петербург","g":null,"l":2,"i":["ai","mo","be","en","ux","pm","unk"],"t":0},{"id":94,"c":"Не указано","g":10,"l":1,"i":["ai","en","ux","pm"],"t":0},{"id":95,"c":"Санкт-Петербург","g":11,"l":2,"i":["ai","be","mo"],"t":0},{"id":96,"c":"Санкт-Петербург","g":13,"l":0,"i":["unk","be","ai"],"t":0},{"id":97,"c":"Санкт-Петербург","g":8,"l":0,"i":["ux","en","be"],"t":0},{"id":98,"c":"Черкесск","g":9,"l":0,"i":["mo","be","en","pm"],"t":0},{"id":99,"c":"Иркутск","g":10,"l":1,"i":["ai","en","ux","mo","be"],"t":2},{"id":100,"c":"Смоленск","g":null,"l":0,"i":["ai","unk"],"t":0},{"id":101,"c":"Санкт-Петербург","g":11,"l":0,"i":["ai","ux"],"t":0},{"id":102,"c":"Санкт-Петербург","g":8,"l":1,"i":["ai","be","ux"],"t":0},{"id":103,"c":"Санкт-Петербург","g":8,"l":1,"i":["ai","be","mo","en","ux","pm","unk"],"t":2},{"id":104,"c":"Санкт-Петербург","g":9,"l":1,"i":["ai","ux","pm"],"t":0},{"id":105,"c":"Не указано","g":null,"l":2,"i":["ai","unk"],"t":0},{"id":106,"c":"Гатчина","g":9,"l":2,"i":["mo","en","ux","be"],"t":1},{"id":107,"c":"Санкт-Петербург","g":8,"l":0,"i":["unk"],"t":0},{"id":108,"c":"Санкт-Петербург","g":9,"l":2,"i":["ai","be","mo","ux"],"t":0},{"id":109,"c":"Санкт-Петербург","g":9,"l":1,"i":["ai","ux","en"],"t":2},{"id":110,"c":"Пермь","g":11,"l":2,"i":["ai","ux","be","en"],"t":0},{"id":111,"c":"Санкт-Петербург","g":9,"l":0,"i":["pm","ux","en","mo","be","ai"],"t":2},{"id":112,"c":"Санкт-Петербург","g":null,"l":0,"i":["en"],"t":0},{"id":113,"c":"Саратов","g":null,"l":2,"i":["ai","en","pm"],"t":0},{"id":114,"c":"Санкт-Петербург","g":9,"l":1,"i":["ai","be","en","ux","pm","unk"],"t":0},{"id":115,"c":"Екатеринбург","g":null,"l":1,"i":["unk"],"t":0},{"id":116,"c":"Ухта","g":11,"l":0,"i":["unk"],"t":2},{"id":117,"c":"Санкт-Петербург","g":9,"l":0,"i":["ai","mo","ux","pm"],"t":0},{"id":118,"c":"Екатеринбург","g":11,"l":1,"i":["ai","be","pm"],"t":0},{"id":119,"c":"Санкт-Петербург","g":null,"l":1,"i":["ai"],"t":0},{"id":120,"c":"Москва","g":7,"l":2,"i":["unk"],"t":2},{"id":121,"c":"Санкт-Петербург","g":10,"l":1,"i":["en","mo","be","ux"],"t":2},{"id":122,"c":"Не указано","g":null,"l":1,"i":["ai","be"],"t":0},{"id":123,"c":"Санкт-Петербург","g":10,"l":1,"i":["ai","pm"],"t":0},{"id":124,"c":"Не указано","g":9,"l":0,"i":["ai","ux","pm","be"],"t":0},{"id":125,"c":"Санкт-Петербург","g":10,"l":0,"i":["ai","unk"],"t":0},{"id":126,"c":"Омск","g":10,"l":0,"i":["unk"],"t":1},{"id":127,"c":"Санкт-Петербург","g":10,"l":0,"i":["be","mo","en","ux","pm"],"t":0},{"id":128,"c":"Санкт-Петербург","g":null,"l":0,"i":["unk"],"t":2},{"id":129,"c":"Великий Новгород","g":11,"l":0,"i":["ai","pm"],"t":0},{"id":130,"c":"Санкт-Петербург","g":11,"l":2,"i":["ai","be","en","pm"],"t":2},{"id":131,"c":"Георгиевск","g":11,"l":1,"i":["ai","en"],"t":0},{"id":132,"c":"Санкт-Петербург","g":8,"l":2,"i":["ai","be","mo","en"],"t":0},{"id":133,"c":"Красноярск","g":8,"l":0,"i":["ai","be"],"t":0},{"id":134,"c":"Бузулук","g":8,"l":1,"i":["unk"],"t":0},{"id":135,"c":"Санкт-Петербург","g":10,"l":1,"i":["ai","be","mo"],"t":0},{"id":136,"c":"Омск","g":null,"l":1,"i":["ai","be","mo","en","pm"],"t":1},{"id":137,"c":"Кемерово","g":8,"l":0,"i":["ai","be"],"t":0},{"id":138,"c":"Санкт-Петербург","g":11,"l":1,"i":["ai","unk"],"t":2},{"id":139,"c":"Санкт-Петербург","g":9,"l":0,"i":["unk"],"t":2},{"id":140,"c":"Санкт-Петербург","g":9,"l":0,"i":["ai"],"t":2},{"id":141,"c":"Санкт-Петербург","g":8,"l":2,"i":["be","ai","mo","en"],"t":0},{"id":142,"c":"Санкт-Петербург","g":8,"l":0,"i":["unk"],"t":0},{"id":143,"c":"Санкт-Петербург","g":null,"l":1,"i":["unk"],"t":0},{"id":144,"c":"Ярославль","g":9,"l":0,"i":["unk"],"t":0},{"id":145,"c":"Санкт-Петербург","g":10,"l":1,"i":["ai","be"],"t":0},{"id":146,"c":"Санкт-Петербург","g":8,"l":0,"i":["en","ai"],"t":1},{"id":147,"c":"Санкт-Петербург","g":null,"l":2,"i":["ux","pm","unk"],"t":2},{"id":148,"c":"Екатеринбург","g":11,"l":3,"i":["ai","en","ux","pm"],"t":0},{"id":149,"c":"Санкт-Петербург","g":11,"l":0,"i":["ai","be","en","pm"],"t":1},{"id":150,"c":"Санкт-Петербург","g":8,"l":1,"i":["en","unk"],"t":0},{"id":151,"c":"Санкт-Петербург","g":11,"l":3,"i":["ai","be","mo","en"],"t":2},{"id":152,"c":"Санкт-Петербург","g":8,"l":0,"i":["en","ai"],"t":1},{"id":153,"c":"Деревянка","g":10,"l":0,"i":["be","unk"],"t":0},{"id":154,"c":"Великий Новгород","g":11,"l":1,"i":["ai","mo"],"t":2},{"id":155,"c":"Иркутск","g":null,"l":2,"i":["be","en"],"t":0},{"id":156,"c":"Санкт-Петербург","g":8,"l":2,"i":["unk"],"t":0},{"id":157,"c":"Воронеж","g":10,"l":2,"i":["pm","be","ai"],"t":0},{"id":158,"c":"Киров","g":10,"l":1,"i":["ai","en"],"t":0},{"id":159,"c":"Санкт-Петербург","g":10,"l":0,"i":["ai"],"t":2},{"id":160,"c":"Санкт-Петербург","g":10,"l":0,"i":["ux","en"],"t":2},{"id":161,"c":"Владикавказ","g":9,"l":0,"i":["unk"],"t":0},{"id":162,"c":"Кирения","g":10,"l":0,"i":["unk"],"t":0},{"id":163,"c":"Санкт-Петербург","g":8,"l":2,"i":["be","ai","mo"],"t":2},{"id":164,"c":"Санкт-Петербург","g":9,"l":1,"i":["unk","mo"],"t":2},{"id":165,"c":"Москва","g":9,"l":3,"i":["en","pm","unk","ux"],"t":2},{"id":166,"c":"Победа","g":10,"l":0,"i":["unk","ai","en"],"t":0},{"id":167,"c":"Кудрово","g":9,"l":1,"i":["unk"],"t":0},{"id":168,"c":"Георгиевск","g":9,"l":1,"i":["ai","be","mo","ux","en","pm"],"t":0},{"id":169,"c":"Санкт-Петербург","g":8,"l":1,"i":["ai","be","mo","en","ux","pm","unk"],"t":0},{"id":170,"c":"Магнитогорск","g":11,"l":2,"i":["ai"],"t":0},{"id":171,"c":"Санкт-Петербург","g":9,"l":2,"i":["be","en"],"t":2},{"id":172,"c":"Санкт-Петербург","g":9,"l":0,"i":["ai"],"t":2},{"id":173,"c":"Санкт-Петербург","g":null,"l":0,"i":["unk"],"t":2},{"id":174,"c":"Не указано","g":9,"l":0,"i":["en"],"t":0},{"id":175,"c":"Санкт-Петербург","g":9,"l":0,"i":["unk","ux"],"t":2},{"id":176,"c":"Санкт-Петербург","g":null,"l":0,"i":["unk"],"t":2},{"id":177,"c":"Санкт-Петербург","g":9,"l":1,"i":["unk"],"t":0},{"id":178,"c":"Калининград","g":null,"l":0,"i":["ai","be","en"],"t":0},{"id":179,"c":"Санкт-Петербург","g":9,"l":0,"i":["ai","mo"],"t":0},{"id":180,"c":"Санкт-Петербург","g":9,"l":0,"i":["ai"],"t":2},{"id":181,"c":"Москва","g":10,"l":2,"i":["ai","en","pm"],"t":0},{"id":182,"c":"Санкт-Петербург","g":8,"l":1,"i":["ai"],"t":0},{"id":183,"c":"Москва","g":10,"l":1,"i":["ai"],"t":0},{"id":184,"c":"Сириус","g":10,"l":2,"i":["ai"],"t":0},{"id":185,"c":"Санкт-Петербург","g":11,"l":1,"i":["ai","pm"],"t":2},{"id":186,"c":"Санкт-Петербург","g":11,"l":1,"i":["ai","be","pm"],"t":0},{"id":187,"c":"Санкт-Петербург","g":8,"l":1,"i":["ai","be","mo","ux","pm","unk"],"t":0},{"id":188,"c":"Гатчина","g":8,"l":1,"i":["ai","en"],"t":0},{"id":189,"c":"Подольск","g":null,"l":0,"i":["ai","en"],"t":0},{"id":190,"c":"Чайковский","g":10,"l":1,"i":["ai","be","pm","mo","en","ux"],"t":0},{"id":191,"c":"Санкт-Петербург","g":8,"l":3,"i":["ai","be","mo","en","ux","pm"],"t":0},{"id":192,"c":"Санкт-Петербург","g":8,"l":1,"i":["ux","ai","mo"],"t":0},{"id":193,"c":"Омск","g":8,"l":2,"i":["pm","en","ai"],"t":1},{"id":194,"c":"Ростов-на-Дону","g":8,"l":0,"i":["unk"],"t":0},{"id":195,"c":"Не указано","g":null,"l":0,"i":["unk"],"t":2},{"id":196,"c":"Санкт-Петербург","g":11,"l":1,"i":["mo","be","ux"],"t":0},{"id":197,"c":"Санкт-Петербург","g":11,"l":2,"i":["pm","ux"],"t":1},{"id":198,"c":"Москва","g":null,"l":3,"i":["ai","be"],"t":0},{"id":199,"c":"Санкт-Петербург","g":10,"l":1,"i":["ai","be","pm"],"t":0},{"id":200,"c":"Екатеринбург","g":8,"l":1,"i":["ai","mo","ux","pm"],"t":0},{"id":201,"c":"Санкт-Петербург","g":9,"l":2,"i":["ai","be","mo","pm"],"t":1},{"id":202,"c":"Санкт-Петербург","g":null,"l":2,"i":["ai","pm","be"],"t":0},{"id":203,"c":"Санкт-Петербург","g":11,"l":1,"i":["be","unk"],"t":2},{"id":204,"c":"Не указано","g":null,"l":3,"i":["ai","be"],"t":1},{"id":205,"c":"Омск","g":9,"l":2,"i":["ai","be","mo","en","pm","unk"],"t":1},{"id":206,"c":"Санкт-Петербург","g":10,"l":1,"i":["be","pm"],"t":2},{"id":207,"c":"Санкт-Петербург","g":9,"l":0,"i":["unk"],"t":2},{"id":208,"c":"Екатеринбург","g":8,"l":0,"i":["unk"],"t":0},{"id":209,"c":"Артём","g":15,"l":2,"i":["be","ai","mo","ux","unk"],"t":0},{"id":210,"c":"Санкт-Петербург","g":null,"l":2,"i":["ai","en"],"t":0},{"id":211,"c":"Салават","g":null,"l":1,"i":["unk"],"t":0},{"id":212,"c":"Не указано","g":10,"l":0,"i":["unk"],"t":2},{"id":213,"c":"Санкт-Петербург","g":null,"l":1,"i":["unk"],"t":0},{"id":214,"c":"Георгиевск","g":9,"l":2,"i":["ai","be","pm"],"t":1},{"id":215,"c":"Санкт-Петербург","g":10,"l":2,"i":["ai","be","pm","en"],"t":0},{"id":216,"c":"Санкт-Петербург","g":8,"l":1,"i":["ai","be","mo","en"],"t":0},{"id":217,"c":"Кудрово","g":null,"l":1,"i":["en"],"t":0},{"id":218,"c":"Не указано","g":8,"l":1,"i":["ai","unk"],"t":2},{"id":219,"c":"Санкт-Петербург","g":null,"l":0,"i":["ai","pm","be"],"t":0},{"id":220,"c":"Санкт-Петербург","g":9,"l":1,"i":["ai","be","unk"],"t":2},{"id":221,"c":"Сочи","g":null,"l":0,"i":["unk"],"t":2},{"id":222,"c":"Санкт-Петербург","g":10,"l":1,"i":["en","ux"],"t":0},{"id":223,"c":"Не указано","g":null,"l":1,"i":["ai","unk","ux"],"t":0},{"id":224,"c":"Не указано","g":null,"l":1,"i":["ai"],"t":0},{"id":225,"c":"Не указано","g":null,"l":1,"i":["unk"],"t":0},{"id":226,"c":"Не указано","g":null,"l":2,"i":["ai","be","mo"],"t":0},{"id":227,"c":"Не указано","g":null,"l":1,"i":["unk"],"t":0},{"id":228,"c":"Не указано","g":null,"l":0,"i":["unk"],"t":0},{"id":229,"c":"Не указано","g":null,"l":2,"i":["ai"],"t":0},{"id":230,"c":"Не указано","g":null,"l":2,"i":["ai","be","en","ux","pm","unk"],"t":0}],"T":[{"id":1,"n":3,"p":[3,2,0,2]},{"id":2,"n":3,"p":[2,1,1,1]},{"id":3,"n":1,"p":[2,1,0,0]},{"id":4,"n":3,"p":[3,0,2,0]},{"id":5,"n":2,"p":[2,0,0,1]},{"id":6,"n":3,"p":[3,2,3,1]},{"id":7,"n":1,"p":[3,0,2,0]},{"id":8,"n":2,"p":[3,1,3,1]},{"id":9,"n":3,"p":[0,2,1,2]},{"id":10,"n":3,"p":[2,3,1,2]},{"id":11,"n":3,"p":[1,1,1,0]},{"id":12,"n":1,"p":[2,3,0,2]},{"id":13,"n":2,"p":[0,1,2,2]},{"id":14,"n":1,"p":[0,0,0,0]},{"id":15,"n":1,"p":[0,0,0,1]},{"id":16,"n":3,"p":[3,0,0,3]},{"id":17,"n":1,"p":[1,0,0,0]}]};
const NS="http://www.w3.org/2000/svg";
const DIRS=[
  {k:"ai",short:"ИИ и данные"},{k:"be",short:"Backend / Web"},{k:"mo",short:"Mobile"},
  {k:"en",short:"Инженерные системы"},{k:"ux",short:"Дизайн интерфейсов"},{k:"pm",short:"Проекты и команда"}];
const TRACKS=[{name:"Интеллектуальные системы",k:"ai"},{name:"Бэкенд-разработка",k:"be"},{name:"Мобильная разработка",k:"mo"},{name:"Компьютерные системы",k:"en"}];
const LEVELS=["Начальный","Базовый","Средний","Продвинутый"];
const TEAM=["нет команды","есть команда","пока не знает"];
const COL={ai:"#F0A33A",be:"#3E93E0",mo:"#E2587A",en:"#9A7BE6",ux:"#35C09C",pm:"#A9C43A"};
const el=(t,a={},p)=>{const e=document.createElementNS(NS,t);for(const k in a)e.setAttribute(k,a[k]);if(p)p.appendChild(e);return e;};
function rng(s){return function(){s|=0;s=s+0x6D2B79F5|0;let t=Math.imul(s^s>>>15,1|s);t=t+Math.imul(t^t>>>7,61|t)^t;return((t^t>>>14)>>>0)/4294967296;};}
const R=rng(20260710);
const C=500, RAD={3:155,2:240,1:325,0:405}, BELT=468, CORE=44;
const svg=document.getElementById("svg");
const rad=a=>a*Math.PI/180;
const pol=(r,a)=>[C+r*Math.cos(rad(a)),C+r*Math.sin(rad(a))];

/* background: space */
const defs=el("defs",{},svg);
const rg=el("radialGradient",{id:"space",cx:"50%",cy:"50%",r:"60%"},defs);
el("stop",{offset:"0","stop-color":"#1B2340"},rg);el("stop",{offset:"1","stop-color":"#070A14"},rg);
const cg=el("radialGradient",{id:"core"},defs);
el("stop",{offset:"0","stop-color":"#FFF4D6"},cg);el("stop",{offset:".6","stop-color":"#F6C76A"},cg);el("stop",{offset:"1","stop-color":"#C97F2A"},cg);
el("rect",{x:0,y:0,width:1000,height:1000,fill:"url(#space)"},svg);
for(let i=0;i<220;i++) el("circle",{cx:R()*1000,cy:R()*1000,r:R()*.9+.2,fill:"#fff",opacity:.08+R()*.25},svg);

/* orbit rings */
[3,2,1,0].forEach(l=>el("circle",{cx:C,cy:C,r:RAD[l],fill:"none",stroke:"rgba(200,215,255,.16)","stroke-width":1},svg));
el("circle",{cx:C,cy:C,r:BELT,fill:"none",stroke:"rgba(200,215,255,.07)","stroke-width":18},svg);

/* planet glyph */
function arcPath(r,a0,a1){const [x0,y0]=[r*Math.cos(rad(a0)),r*Math.sin(rad(a0))],[x1,y1]=[r*Math.cos(rad(a1)),r*Math.sin(rad(a1))];return `M0 0 L${x0} ${y0} A${r} ${r} 0 ${a1-a0>180?1:0} 1 ${x1} ${y1}Z`;}
function drawPlanet(parent,p,x,y,scale=1){
  const g=el("g",{transform:`translate(${x} ${y}) scale(${scale})`,class:"dimmable"},parent);
  const ks=p.i.filter(k=>k!=="unk"), r=ks.length? 3.4+ks.length*1.25 : 3.2;
  if(p.i.includes("unk")) el("circle",{r:r+3.6,fill:"none",stroke:"#C9D2E8","stroke-width":1,"stroke-dasharray":"1.5 2.2",opacity:.8},g);
  if(!ks.length) el("circle",{r,fill:"#3A4258",stroke:"#8E98B3","stroke-width":1},g);
  else if(ks.length===1) el("circle",{r,fill:COL[ks[0]]},g);
  else { const s=360/ks.length; ks.forEach((k,i)=>el("path",{d:arcPath(r,-90+i*s,-90+(i+1)*s),fill:COL[k]},g)); }
  if(ks.length) el("circle",{r,fill:"none",stroke:"rgba(0,0,0,.35)","stroke-width":.7},g);
  if(p.t===1){ el("circle",{r:r+6,fill:"none",stroke:"rgba(180,230,140,.45)","stroke-width":.8},g); el("circle",{cx:r+6,cy:0,r:1.9,fill:"#B9E68C"},g); }
  return g;
}

/* planets on orbits; a gap at 12 o'clock holds the orbit label */
const planetNodes=[];
const labW=l=>(LEVELS[l].length+5)*7.4+16;
[3,2,1,0].forEach(l=>{
  const arr=DATA.P.filter(p=>p.l===l).sort(()=>R()-.5);
  const og=el("g",{},svg);
  const gap=((labW(l)/2+12)/RAD[l])*180/Math.PI, span=360-2*gap, n=arr.length;
  arr.forEach((p,i)=>{
    const a=-90+gap+span*(i+.5)/n+(R()-.5)*span/n*.5;
    const [x,y]=pol(RAD[l]+(R()-.5)*18,a);
    const g=drawPlanet(og,p,x,y); g.__p=p; planetNodes.push(g);
    g.addEventListener("pointerenter",e=>showTip(e,planetTip(p)));
    g.addEventListener("pointermove",moveTip); g.addEventListener("pointerleave",hideTip);
  });
  const w=labW(l), y=C-RAD[l], txt=`${LEVELS[l].toUpperCase()} · ${n}`;
  el("rect",{x:C-w/2,y:y-11,width:w,height:22,rx:11,fill:"#0B1020",stroke:"rgba(200,215,255,.25)"},svg);
  const t=el("text",{x:C,y:y+4.5,"text-anchor":"middle","font-family":"JetBrains Mono, monospace","font-size":12,fill:"#DCE3F5"},svg); t.textContent=txt;
});

/* outer belt = attrition funnel */
const kinds=Array(230).fill(0), idx=[...Array(230).keys()].sort(()=>R()-.5);
idx.slice(0,175).forEach(i=>kinds[i]=1); idx.slice(0,52).forEach(i=>kinds[i]=2);
const belt=el("g",{},svg);
kinds.forEach((k,i)=>{
  const a=360*i/230+(R()-.5)*1.2, [x,y]=pol(BELT+(R()-.5)*14,a);
  if(k===2){ el("circle",{cx:x,cy:y,r:4.5,fill:"#FFE7A8",opacity:.18},belt); el("circle",{cx:x,cy:y,r:2.1,fill:"#FFF3CF"},belt); }
  else if(k===1) el("circle",{cx:x,cy:y,r:1.5,fill:"#A9B6D6",opacity:.75},belt);
  else el("circle",{cx:x,cy:y,r:1,fill:"#5D6680",opacity:.7},belt);
});

/* core corona = team progress (4 sectors × 17 rays) */
const teams=[...DATA.T].map(t=>({...t,s:t.p.reduce((a,b)=>a+b,0)})).sort((a,b)=>b.s-a.s||a.id-b.id);
const rayNodes=[];
TRACKS.forEach((tr,j)=>{
  const a0=-90+j*90+7, a1=-90+(j+1)*90-7, step=(a1-a0)/(teams.length-1);
  // sector guide
  const [gx0,gy0]=pol(CORE+4+3*22,a0-3),[gx1,gy1]=pol(CORE+4+3*22,a1+3);
  el("path",{d:`M${pol(CORE+4,a0-3).join(" ")} L${gx0} ${gy0} A${CORE+70} ${CORE+70} 0 0 1 ${gx1} ${gy1} L${pol(CORE+4,a1+3).join(" ")}Z`,fill:COL[tr.k],opacity:.07},svg);
  teams.forEach((t,i)=>{
    const a=a0+i*step, v=t.p[j];
    const g=el("g",{class:"dimmable ray","data-k":tr.k,"data-t":t.id},svg);
    if(v===0){ const [x,y]=pol(CORE+8,a); el("circle",{cx:x,cy:y,r:1.4,fill:"#5D6680"},g); }
    else{
      const [x0,y0]=pol(CORE+5,a),[x1,y1]=pol(CORE+5+v*22,a);
      el("line",{x1:x0,y1:y0,x2:x1,y2:y1,stroke:COL[tr.k],"stroke-width":3.2,"stroke-linecap":"round"},g);
      el("circle",{cx:x1,cy:y1,r:2.4,fill:COL[tr.k]},g);
    }
    // hit area
    const [hx0,hy0]=pol(CORE+2,a),[hx1,hy1]=pol(CORE+75,a);
    el("line",{x1:hx0,y1:hy0,x2:hx1,y2:hy1,stroke:"transparent","stroke-width":8},g);
    g.__t=t; rayNodes.push(g);
    g.addEventListener("pointerenter",e=>{showTip(e,teamTip(t)); focusTeam(t.id);});
    g.addEventListener("pointermove",moveTip); g.addEventListener("pointerleave",()=>{hideTip(); focusTeam(null);});
  });
});
el("circle",{cx:C,cy:C,r:CORE,fill:"url(#core)"},svg);
const ct=el("text",{x:C,y:C-2,"text-anchor":"middle","font-family":"Unbounded, sans-serif","font-size":20,fill:"#3A2408","font-weight":600},svg); ct.textContent="17";
const ct2=el("text",{x:C,y:C+15,"text-anchor":"middle","font-family":"Golos Text, sans-serif","font-size":11,fill:"#5A3A12"},svg); ct2.textContent="команд";

/* tooltip */
const tip=document.getElementById("tip"), art=document.getElementById("art");
function planetTip(p){
  const ints=p.i.map(k=>k==="unk"?"пока не знаю":DIRS.find(d=>d.k===k).short).join(", ");
  const grade=p.g==null?"класс не указан":(p.g<=11?`${p.g} класс`:`${p.g-11} курс`);
  return `<b>Школьник ${p.id}</b><div class="m">${grade} · ${p.c}</div>Опыт: ${LEVELS[p.l].toLowerCase()}<br>Интересы: ${ints}<br>Команда: ${TEAM[p.t]}`;
}
function teamTip(t){ return `<b>Команда ${t.id}</b><div class="m">${t.n} чел. · прогресс ${t.s} из 12</div>`+TRACKS.map((tr,j)=>`${tr.name}: ${"●".repeat(t.p[j])}${"○".repeat(3-t.p[j])}`).join("<br>"); }
function showTip(e,h){tip.innerHTML=h;tip.hidden=false;moveTip(e);}
function moveTip(e){const r=art.getBoundingClientRect();let x=e.clientX-r.left+art.scrollLeft+14,y=e.clientY-r.top+14;const w=tip.offsetWidth,h=tip.offsetHeight;if(x+w>art.scrollLeft+r.width-8)x=e.clientX-r.left+art.scrollLeft-w-14;if(y+h>r.height-8)y=e.clientY-r.top-h-14;tip.style.left=x+"px";tip.style.top=y+"px";}
function hideTip(){tip.hidden=true;}
function focusTeam(id){ rayNodes.forEach(g=>g.style.opacity= id==null? "" : (g.__t.id===id?1:.15)); if(id==null) apply(); }

/* chips */
const counts={}; DATA.P.forEach(p=>p.i.forEach(k=>counts[k]=(counts[k]||0)+1));
const chips=document.getElementById("chips"); let active=null;
[...DIRS,{k:"unk",short:"Пока не знаю"}].forEach(d=>{
  const b=document.createElement("button"); b.className="chip"; b.id="chip-"+d.k; b.setAttribute("aria-pressed","false");
  b.innerHTML=`<i style="${d.k==="unk"?"background:transparent;border:1.5px dashed var(--muted)":"background:"+COL[d.k]}"></i>${d.short}<span class="n">${counts[d.k]}</span>`;
  b.onclick=()=>{active=active===d.k?null:d.k;apply();}; chips.appendChild(b);
});
function apply(){
  chips.querySelectorAll(".chip").forEach(c=>c.setAttribute("aria-pressed",String(c.id==="chip-"+active)));
  planetNodes.forEach(g=>g.style.opacity=!active||g.__p.i.includes(active)?1:.1);
  const hasTrack=TRACKS.some(t=>t.k===active);
  rayNodes.forEach(g=>g.style.opacity=!active||!hasTrack||g.dataset.k===active?1:.12);
}

/* side table + track totals */
const tb=document.querySelector("#tbl tbody");
[3,2,1,0].forEach(l=>{
  const a=DATA.P.filter(p=>p.l===l), n=a.length;
  const unk=a.filter(p=>p.i.includes("unk")).length/n, ai=a.filter(p=>p.i.includes("ai")).length/n;
  const nd=a.reduce((s,p)=>s+p.i.filter(k=>k!=="unk").length,0)/n;
  const tr=document.createElement("tr");
  tr.innerHTML=`<td>${LEVELS[l]}</td><td>${n}</td><td><span class="bar"><span style="width:${unk*100}%;background:var(--muted)"></span></span>${Math.round(unk*100)}%</td><td><span class="bar"><span style="width:${ai*100}%;background:${COL.ai}"></span></span>${Math.round(ai*100)}%</td><td>${nd.toFixed(1).replace(".",",")}</td>`;
  tb.appendChild(tr);
});
const tk=document.getElementById("tracks");
TRACKS.forEach((tr,j)=>{
  const s=DATA.T.reduce((a,t)=>a+t.p[j],0), max=DATA.T.length*3;
  const d=document.createElement("div"); d.className="trk";
  d.innerHTML=`<span class="nm"><i style="background:${COL[tr.k]}"></i>${tr.name}</span><span class="bar wide"><span style="width:${s/max*100}%;background:${COL[tr.k]}"></span></span><span class="v">${s} / ${max}</span>`;
  tk.appendChild(d);
});

/* key glyphs */
(function(){
  const k=document.getElementById("k1");
  el("rect",{x:0,y:0,width:300,height:70,rx:6,fill:"#0B1020"},k);
  [{i:["unk"],t:0},{i:["ai","unk"],t:0},{i:["ai","be","pm"],t:0},{i:["ai","be","mo","en","ux","pm"],t:1}]
    .forEach((p,i)=>drawPlanet(k,p,40+i*72,35,2));
})();