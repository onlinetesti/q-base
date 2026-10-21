// База вопросов с поддержкой двух языков.
// correct_ru и correct_kz должны ТОЧНО совпадать с текстом в options_ru/options_kz соответственно.

const questions = [
    {
        text_ru: "Дана реляционная схема базы данных интернет-магазина:\n`Customers` (CustomerID, Name, Email)\n`Orders` (OrderID, CustomerID, OrderDate, TotalAmount)\n\nКакая из следующих SQL-инструкций выведет имена всех клиентов (`Name`), у которых общая сумма заказов (`TotalAmount`) превышает 50000, используя правильное соединение таблиц и группировку?",
        text_kz: "Интернет-дүкен дерекқорының реляциялық схемасы берілген:\n`Customers` (CustomerID, Name, Email)\n`Orders` (OrderID, CustomerID, OrderDate, TotalAmount)\n\nТөмендегі SQL нұсқаулықтарының қайсысы кестелерді дұрыс біріктіру және топтастыру арқылы жалпы тапсырыс сомасы (`TotalAmount`) 50000-нен асатын барлық клиенттердің (`Name`) есімдерін шығарады?",
        options_ru: [
            "SELECT c.Name FROM Customers c JOIN Orders o ON c.CustomerID = o.CustomerID WHERE SUM(o.TotalAmount) > 50000",
            "SELECT c.Name FROM Customers c GROUP BY c.Name HAVING o.TotalAmount > 50000 JOIN Orders o ON c.CustomerID = o.CustomerID",
            "SELECT c.Name FROM Customers c JOIN Orders o ON c.CustomerID = o.CustomerID GROUP BY c.Name HAVING SUM(o.TotalAmount) > 50000",
            "SELECT Name FROM Customers WHERE TotalAmount > 50000 GROUP BY CustomerID"
        ],
        options_kz: [
            "SELECT c.Name FROM Customers c JOIN Orders o ON c.CustomerID = o.CustomerID WHERE SUM(o.TotalAmount) > 50000",
            "SELECT c.Name FROM Customers c GROUP BY c.Name HAVING o.TotalAmount > 50000 JOIN Orders o ON c.CustomerID = o.CustomerID",
            "SELECT c.Name FROM Customers c JOIN Orders o ON c.CustomerID = o.CustomerID GROUP BY c.Name HAVING SUM(o.TotalAmount) > 50000",
            "SELECT Name FROM Customers WHERE TotalAmount > 50000 GROUP BY CustomerID"
        ],
        correct_ru: "SELECT c.Name FROM Customers c JOIN Orders o ON c.CustomerID = o.CustomerID GROUP BY c.Name HAVING SUM(o.TotalAmount) > 50000",
        correct_kz: "SELECT c.Name FROM Customers c JOIN Orders o ON c.CustomerID = o.CustomerID GROUP BY c.Name HAVING SUM(o.TotalAmount) > 50000"
    },
    {
        text_ru: "Что такое первичный ключ (Primary Key) в реляционной базе данных?",
        text_kz: "Реляциялық дерекқордағы негізгі кілт (Primary Key) дегеніміз не?",
        options_ru: [
            "Поле, которое может содержать NULL значения",
            "Поле или набор полей, уникально идентифицирующих каждую строку таблицы",
            "Поле, которое ссылается на другую таблицу",
            "Инструмент для создания резервных копий"
        ],
        options_kz: [
            "NULL мәндерді қамти алатын өріс",
            "Кестенің әр жолын бірегей түрде анықтайтын өріс немесе өрістер жиынтығы",
            "Басқа кестеге сілтеме жасайтын өріс",
            "Резервтік көшірмелерді жасау құралы"
        ],
        correct_ru: "Поле или набор полей, уникально идентифицирующих каждую строку таблицы",
        correct_kz: "Кестенің әр жолын бірегей түрде анықтайтын өріс немесе өрістер жиынтығы"
    }
];
