                     /* ДЗ */

    const obj = {}
for(let i = 1; i <= 10; i++) {
    let name = prompt('Введите имя')
    let age = +prompt('Введите возраст')

    obj[i] = {
        name: name,
        age: age
    }
}

for(const key in obj) {
    console.log(`Пользователь ${key}`);
    for(const newKey in obj[key]) {
        console.log(newKey == 'name' ? `Ваше имя ${obj[key][newKey]}` : `Ваш возраст ${obj[key][newKey]}`);
    }
}