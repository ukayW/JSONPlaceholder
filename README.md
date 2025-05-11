# JSON Placeholder App

Пет проект для работы с REST

## 1. Используемые технологии

Основные технологии: React
Код пишем на TypeScript
Собираем на Vite

## 2. Список технологий

| Технология | Версия | Описание                        | Ссылка                          |
| ---------- | ------ | ------------------------------- | ------------------------------- |
| React      | 19.0.0 | Библиотека для разработки UI    | https://react.dev               |
| Typescript | 5.7.2  | Надстройка типов над JavaScript | https://www.typescriptlang.org/ |

## 3. Установка

1. Склонировать репозиторий в текущую директорию
   ```shell
   git clone https://github.com/ukayW/JSONPlaceholder
   ```
2. Перейти в директорию с проектом
   ```shell
   cd ./JSONPlaceholder
   ```
3. Установить зависимости
   ```shell
   npm install
   ```

## 4. Запуск (в режиме разработки)

```shell
npm run dev
```

## 5. Версионность

При обозначении версионности используем формат `major.minor.patch`

- major (Мажор) - изменения ломающие обратную совместимость для сторонних клиентов _(Пример: новый обязательный параметр)_
- minor (Минор) - изменения не ломающие обратную совместимость для сторонних клиентов _(Пример: расширение ответа, добавление нового необязательно параметра)_
- path (Патч) - дополнения в коде не меняющие поведение для сторонних клиентов _(Пример: рефакторинг, обновление библиотек, замена логгера, и.т.д..)_

## 6. Требования к именам коммитов

- Названия коммитов должны быть согласно [гайдлайну](https://www.conventionalcommits.org/en/v1.0.0/)
- Тип коммита должен быть только в нижнием регистре (`feat`, `fix`, `refactor`, `docs` и т.д.)
- Должен использоваться present tense ("add feature" not "added feature")
- Должен использоваться imperative mood ("move cursor to..." not "moves cursor to...")

### Примеры имен коммитов

```
init: start project
feat: implement search box
fix: adjust social links for mobile
refactor: change structure of the project
docs: update readme with additional information
```
