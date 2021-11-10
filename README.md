# Frontend Projekt

## IDE
Det kan være en fordel at bruge en IDE (Integrated development environment) til køresel af projekterne. Vi kan varmt anbefale [JetBrains IntelliJ Idea Community Edition](https://www.jetbrains.com/idea/download/) men [Visual Studio Code](https://code.visualstudio.com/) er også et fint alternativ.

## Installation
 * Installer [Node.js](https://nodejs.org/en/) på din maskine. Nu skulle du gerne have `npm` tilgængelig i din terminal eller foretrukne IDE.
 * Kør `npm install` i projektmappen.

## Kørsel
Du kan køre projektet i udvikler tilstand med live coding ved at bruge kommandoen `start` fra `package.json` med

```
npm start
```

Serveren starter nu på [http://localhost:4200/]() og opdatere hvis du laver ændringer i koden.

Bemærk at [backend projektet](https://github.com/Bankdata-Challenge-2021/backend) også skal køre for at føde data til frontend projektet.

## Backend
Hvis du laver ændringer til *strukturen* i [backend projektet](https://github.com/Bankdata-Challenge-2021/backend) skal du huske at hente den nye API specifikation på [http://localhost:8080/q/openapi](), gemme den til `swagger/api/openapi` og køre `npm start` på ny.

## Angular og Angular Material
Projektet bruger [Angular](https://angular.io/docs) og [Angular Material](https://material.angular.io/).
