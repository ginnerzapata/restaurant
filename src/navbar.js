import { $content, createHtmlElement } from "./index";

function render() {
  const navItems = ["home", "menu", "about"];
  const $ul = document.createElement("ul");

  navItems.forEach((item) =>
    $ul.appendChild(createHtmlElement("li", null, null, item))
  );

  const $nav = document.createElement("nav");
  $nav.appendChild($ul);

  $content.appendChild($nav);
}

export { render as renderNav };
