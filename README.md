## Ogólne

Napotkałem przy tym zadaniu na kilka wyzwań o których chętnie porozmawiam.
Aplikacja poprawnie wysyła zamówienie na endpoint.
Jest kilka niedociągnięć które bym poprawił przy większej ilości czasu, tj. lepiej zorganizowany cart, pokazujący ilość dodanych rzeczy i zwiększając ewentualnie ich liczbę, zamiast dodawać kolejne elementy tego samego rodzaju.
Nie zdąrzyłem niestety już napisać testów do tego zadania.
Nad wyglądem zdecydowanie też bym więcej posiedział, gdybym miał na to czas :D

## Użyte technologie

React
Typescript
Redux toolkit
sass
Bootstrap & Reactstrap
Availity Reactstrap Validation - biblioteka rozszerzająca formularze Reactstrapa
lodash

## Napotkane problemy

Aplikacja funkcjonuje w strict mode, z powodu braku czasu musiałem skorzystać raz z @-ts-expect-error przy imporcie biblioteki formularza walidującego w Checkout.tsx

    // @ts-expect-error
    import { AvForm, AvField } from "availity-reactstrap-validation"

## Uruchomienie aplikacji

```bash root
cd front
npm install
po zainstalowaniu:
npm start
```

## Uruchamianie serwera API

Wymagane jest posiadanie Node.js (zaleca się dodatkowo Yarn). Projekt wymaga
instalacji i uruchomienia API mock serwera:

```bash
cd api
yarn
yarn start
```
