# Итоговый проект в ESoft School 2021
### Список требований к итоговому проекту:
1. В приложении должна быть реализована регистрация и авторизация пользователя. Пользователь получает доступ к функционалу приложения только после заполнения формы регистрации. Приложение должно сохранять данные, относящиеся к конкретному пользователю (например: история переписок для веб чата). На странице входа при неуспешной попытке авторизации должна отображаться соответствующая ошибка (например: пользователя с таким логином не существует, пользователь ввел неверный пароль). Пароли пользователя нельзя хранить в незашифрованном виде;
2. Используются библиотеки и фреймворки;
3. Для серверной части предпочтительней реализация на nodejs;
4. Все сущности хранятся в реляционной бд, postgresql или другой;
5. Проект нужно предоставить в виде исходного кода залитого на github;
6. Будет плюсом если вы развернете приложение для демонстрации на какой-нибудь платформе, например на heroku.
>Во время защиты проектов будет оцениваться подход к реализации и понимание пройденных на лекциях тем.

## Space in Brains
### Стек и инструменты:
![PERN](https://media.geeksforgeeks.org/wp-content/cdn-uploads/20200402205611/What-is-PERN-Stack.png)
* NodeJS
  * Express
  * WebSocket
* ReactJS
  * MobX
  * Bootstrap Framework
  * Material-UI
* Python
  * Парсинг данных
  * Автоматизация заполнения базы данных
* PostgreSQL
  * ORM Sequelize
* Insomnia
    - ( Для тестирования REST API )
### Описание:
Space in Brains представляет собой некий блокнот. Ваш персональный помощник, который позволяет вам отслеживать технологии и инструменты, которые вы еще не освоили. Почему это важно? Даже опытные инженеры имеют много пробелов в знаниях. Благодаря Space in Brains вы можете отследить свои пробелы. Таким образом вы мотивируете себя и окружающих! Каждая технология или инструмент в нашей системе называется - Брейн. Welcome! My dear friend!

### Для развертывания приложения:

#### Backend:
Создайте в корне .env файл по следующему шаблону: 
```
PORT = 
SOCKET_PORT = 
DB_NAME = 
DB_USER = 
DB_PASSWORD = 
DB_HOST = 
DB_PORT = 
SECRET_KEY = 
```
#### Frontend:
Создайте в корне .env файл по следующему шаблону:
```
REACT_APP_API_URL = 
REACT_APP_SOCKET_URL = 
```