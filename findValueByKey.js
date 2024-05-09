const company = {
    name: 'Велика Компанія',
    type:'Головна компанія',
    platform: 'Платформа для продажу квитків',
    sellsSolution: 'Рішення для продажу квитків',
    clients: [
      {
        name: 'Клієнт 1',
        type: 'subCompany',
        uses: 'ПО для продажу квитків',
        sells: 'Рішення для продажу квитків',
        partners: [
          {
            name: 'Клієнт 1.1',
            type: 'subSubCompany',
            uses: 'Рішення для продажу квитків',
            sells: 'Рішення для продажу квитків',
          },
          {
            name: 'Клієнт 1.2',
            type: 'subSubCompany',
            uses: 'Рішення для продажу квитків',
            sells: 'Рішення для продажу квитків',
            partners: [
              {
                name: 'Клієнт 1.2.3',
                type: 'subSubCompany',
                uses: 'Рішення для продажу квитків',
                sells: 'Рішення для продажу квитків',
              }
            ]
          }
        ]
      },
      {
        name: 'Клієнт 2',
        type: 'subCompany',
        uses: 'ПО для продажу квитків',
        sells: 'Рішення для продажу квитків'
      }
    ]
  };




  function findValueByKey(companyName, clients) {
  
    for (const client of clients) { // Перевіряємо чи має поточний клієнт назву яку ми шукаємо
     if (client.name === companyName) {
        return client  // Якщо так то повертаємо обєкт клієнта
     }

     if (client.partners) { // Якщо у поточного клієнта є партнери, рекурсивно шукаємо серед них
      const result = findValueByKey(companyName, client.partners);
      if (result) { // Якщо знайдено відповідного клієнта серед партнерів, повертаємо його
          return result;
      }
     }
    }
    return `Client with name '${companyName}' does not exist` // Якщо клієнт з вказаною назвою не знайдено, повертаємо відповідне повідомлення

  }

  const clients = company.clients

  console.log(findValueByKey('Клієнт 1.2.3', clients));
