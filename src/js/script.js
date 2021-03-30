//85 урок
//стрелочные функции
/* let obj = {
    number: 5,
    sayNumber: function() {
        say = () => {
            console.log(this);
        }
        say();
    }
};

obj.sayNumber(); */

//Методы фильтр и мап

/* let names = ['Ivan', 'Harik', 'John', 'Kate', 'Ann'];

let shortNames = names.filter((name) => {
    return name.length < 5
});

console.log(shortNames);

let answers = ['HArik', 'KaTE', 'RicCI'];

answers = answers.map((item) => item.toLowerCase());

console.log(answers); */

//Интерполяция

/* console.log(`Пользователь ${name}, ${age} лет`);

function fetchData(data, count = 0) {
    console.log(`Данные: ${data} в количестве ${count}`);
}

fetchData('something'); */

//Rest параметр

/* function max (a,b,...numbers) {
    console.log(numbers);
}

max(3, 4, 67, 99);
 */
//Spread оператор

/* const arr1 = [ 1, 2, 5],
      arr2 = [43, 2, 6];

const ab = Math.max(200, ...arr1,16 ,...arr2);

console.log(ab); */

//Object sperad operator
/* const avatar = 'Photo';
const user = {
    name: 'default',
    pass: 'qwerty',
    rights: 'user'
};

const admin = {
    name: 'admin',
    pass: 'root'
} */

/* const res = Object.assign(user, admin); */

/* const res = {...user, ...admin, avatar};
console.log(res); */

//Объекты в новых стандартах
/* 
const x = 25, y = 10;
const coords = {x,y,
    calcSq() {
        console.log(this.x*this.y)
    }
};

coords.calcSq();
console.log(coords); */

//Деструктуризация

/* const user = {
    name: 'default',
    pass: 'qwerty',
    rights: 'user'
};

const {name ,pass, rights} = user;

console.log(pass, rights); */

//Деструктуризация со сложным форматом с вложенным объектом

/* const user = {
    name: {
        first: 'Sam',
        second: 'Smith'
    },
    pass: 'qwerty',
    rights: 'user'
};

const {name:{first, second} ,pass, rights} = user;

console.log(first, second); */

//Типичный паттерн javascript

/* function connect({
    host = 'localhost',
    port = 3000,
    user = 'default'
}) {
    console.log(`host: ${host}, port: ${port}, user: ${user}`)
}

connect({
    port: 232,
    host: 'sdsd'
}); */

//Деструктуризация массивов данных

/* const numbers = [3, 5, 6, 7]; */

/* const [a, b ,c ] = numbers;

console.log(a, b, c); */

/* const [ , , c ] = numbers;

console.log(c) *//* ; */

/* const numbers = [[3, 5], [6, 7]];

const [[a, b], [c, d]] = numbers;

console.log(a,c) *//* ;
 */
//Пример 
/* const country = {
    name: 'England',
    popukation: 2000000,
    gender: {
        male: ['15%', '40%'],
        female: ['16%', '29%']
    }
}

const {gender: {male:[maleUnder18, maleAdult], female: [femaleUnder18, femaleAdult]}} = country;

console.log(maleUnder18, femaleAdult); */

//Урок 87

function button() {
    return 'button';
}

class Slider {
    constructor(width, height, count) {
        this.width = width;
        this.height = height;
        this.count = count;
    }
    nextSlide() {
        console.log('Moving forward');
    }
    prevSlide() {
        console.log('Moving back');
    }
    whoAmI() {
        console.log(this.width, this.height, this.count);
    }
}

/* const slider = new Slider(600, 400,5),
      someSlider = new Slider(300, 450, 10);
slider.whoAmI();
someSlider.whoAmI(); */

/* class AutoSlider extends Slider {
    constructor (width, hegith, count, auto) {
      super(width, hegith, count);
      this.auto = auto;
    }
    play() {
        console.log(`Autoplay: ${this.auto}`);
    }
} */

/* const slider = new AutoSlider(500,500,4, true);
slider.whoAmI();
slider.play(); */

/* export {button, Slider}; */

//Урок 96

/* fetch('https://jsonplaceholder.typicode.com/posts/1')
    .then((response) => response.json())
    .then((myJson) => console.log(myJson));
 */

/* fetch('https://jsonplaceholder.typicode.com/posts/1')
    .then((response) => {
        console.log(response.json());
        return response.json();
    })
    .then((myJson) => console.log(myJson)); */

/* let url = 'https://jsonplaceholder.typicode.com/posts/',
    data = {username: 'example'};

fetch(url, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
        'Content-Type': 'application/json'
    }
    })
    .then((response) => response.json())
    .then((myJson) => console.log('Success',myJson))
    .catch(error => console.log('Error', error)); */

/* const getResource = async (url) => {
    const res = await fetch(url),
          some = await res.json();

    return some;
};

getResource('https://jsonplaceholder.typicode.com/todos/10000')
        .then((res) => console.log('Success',res))
        .catch(error => console.log('Error', error));  */   

/* const getResource = async (url) => {
    const res = await fetch(url);

    if (!res.ok) {
        throw new Error (`Could not fetch ${url}, status: ${res.status}`);
    }

    const some = await res.json();

    return some;
};
        
getResource('https://jsonplaceholder.typicode.com/todos/10000')
        .then((res) => console.log('Success',res))
        .catch(error => console.log(error));  */

class GotService {

    constructor() {
        this._apiBase = 'https://www.anapioficeandfire.com/api';
    }

    async getResource(url) {
        const res = await fetch(`${this._apiBase}${url}`);
    
        if (!res.ok) {
            throw new Error (`Could not fetch ${url}, status: ${res.status}`);
        }
    
        return await res.json();
    }
    getAllCharacters() {
        return this.getResource('/characters?page=5&pageSize=10');
    }
    getCharacter(id) {
        return this.getResource(`/characters/${id}`);
    }
}

const got = new GotService();

got.getAllCharacters()
    .then(res => console.log(res));

got.getAllCharacters() 
    .then(res => {
        res.forEach( item => console.log(item.name));
    });

got.getAllCharacters()
    .then(res => console.log(res));
