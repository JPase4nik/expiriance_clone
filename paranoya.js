const infos = [
    {
        userName:"Test",
        lastName:"Test",
        email:"test.test@gmail.com>"
    },
    {
        userName:"Dmitro",
        lastName:"Porohov",
        email:"dmitro.porohov@yahoo.com>"
    },
    {
        userName:"Andrii",
        lastName:"",
        email:"andrii@mail.ru>" // Нам такі не підходять
    },
];

const pattern = /^[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)?@(gmail|yahoo)\.com/g; // створюємо регулярний вираз

const result = []
for (const info of infos) {  // перебираєм масив об'єктів
    pattern.lastIndex = 0;
    if (pattern.test(info.email)) {  // перевіряєм чи містить рядок патерн
        result.push(info)
    }
}

console.table(result);




