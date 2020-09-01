import { $content, createHtmlElement } from "./index";

function render() {
  const $main = document.createElement("main");

  const $bienvenidos = createHtmlElement(
    "p",
    null,
    ["cursive", "golden"],
    "Bienvenidos"
  );
  const $title = createHtmlElement("h1", null, ["white"], "La panaderia");

  const $hr = document.createElement("hr");
  const $subtitle = createHtmlElement(
    "p",
    null,
    ["text-center", "white"],
    "El placer de comer con las manos. Bien tierruo!"
  );
  const $button = createHtmlElement("button", null, null, "Ver el menu");

  $main.appendChild($bienvenidos);
  $main.appendChild($title);
  $main.appendChild($hr);
  $main.appendChild($subtitle);
  $main.appendChild($button);

  $content.appendChild($main);
}

export { render as renderHome };
