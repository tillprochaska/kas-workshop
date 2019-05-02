# Coding-Workshop

Dieses Repository enthält alle wichtigen Informationen für die Coding-Übung während des Workshops. Wir wollen hier außerdem den Quelltext, den ihr während des Workshops schreibt, versionieren.

* [Der Datensatz](#der-datensatz)
* [Referenzen & Hilfe](#referenzen--hilfe)
* [Code-Grundgerüst](#code-grundgerüst)
* [Zum Weiterentwickeln nach dem Seminar](#zum-weiterentwickeln-nach-dem-seminar)

## Der Datensatz
Wir arbeiten mit einem Auszug der Daten, die der [Bundestag zu namentlichen Abstimmungen bereitstellt](https://www.bundestag.de/abstimmung). Diese Daten stellen wir über eine einfache Schnittstelle (auch *API* genannt) bereit, die wir während des Seminars abfragen werden.

#### Liste aller verfügbaren Abstimmungen
`http://kas-workshop-api.netlify.com/polls/index.json`
 
#### Details zu einer bestimmten Abstimmung
`http://kas-workshop-api.netlify.com/polls/{id}.json`

(Die Daten haben wir über die Schnittstelle des [Democracy-Projektes](https://www.democracy-deutschland.de/) zusammengestellt. Vielen Dank dafür!)

## Referenzen & Hilfe
* HTML-Referenz: [englisch](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference), [deutsch](https://developer.mozilla.org/de/docs/Web/JavaScript/Reference)
* Javascript-Referenz: [englisch](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference), [deutsch](https://developer.mozilla.org/de/docs/Web/HTML/Referenz)
* [StackOverflow](https://stackoverflow.com/) ist die unter EntwicklerInnen wohl beliebteste QA-Webseite. Die meisten Fragen hatte schon einmal eine andere Person. Und für viele dieser Fragen gibt es Antworten auf StackOverflow.

## Code-Grundgerüst

HTML-Grundgerüst (`index.html`):

```html
<!DOCTYPE html>
<html>
<head>
  <title>KAS Coding Workshop</title>
  <link href="./index.css" rel="stylesheet" />
</head>
<body>
  
  <input type="text" placeholder="Nach Namen oder Wahlkreis suchen…" />
  
  <div class="wrapper">
    Hello World!
  </div>
  
  <script src="./index.js" ></script>
  
</body>
</html>
```

Javascript-Grundgerüst (`index.js`):

```js
console.log('Hello World!')
```

CSS-Grundgerüst (`index.css`):

```css
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  font-family: system-ui;
  line-height: 1.5;
}

body {
  max-width: 35rem;
  margin: 0 auto;
  padding: 1.5rem;
}

h1 {
  font-size: 1.5rem;
  margin-bottom: .75rem;
}

h2 {
  font-size: 1rem;
  margin: 0;
  margin-top: .75rem;
}

input {
  width: 100%;
  font-size: 1rem;
  margin: .75rem 0;
  padding: .75rem;
}
```

## Zum Weiterentwickeln nach dem Seminar:

* *Mozilla*, das Unternehmen, das den Firefox-Browser entwickelt, hat nicht nur für viele Webtechnologien eine umfangreiche Referenz zusammengestellt, sondern bietet für Einsteiger auch ein Tutorial an, das Schritt für Schritt in die Details einführt: *[Getting started with the web](https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web)*

* [*Observable*](https://observablehq.com) ist ein Online-Dienst zum erstellen interaktiver Notebooks. Notebooks können u. a. Text, Visualisierung und auch Javascript-Code enthalten. Der Code kann direkt im Browser bearbeitet werden; Ergebnisse sind direkt sichtbar. Beispielsweise gibt es z. B. eine [kleine, interaktive Einführung in die Javascript-Programmiersprache](https://observablehq.com/@uwdata/a-minimal-introduction-to-javascript-and-observable). Ein ähnliches Tool, das schon etwas länger existiert, sind [Jupyter Notebooks](https://jupyter.org/).
