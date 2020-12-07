import { createElement } from "react";
import "./App.css";

function App() {
  return createElement(
    "body",
    null,
    createElement("header", null, createElement("h3", { class: "greeting" })),
    createElement(
      "div",
      null,
      createElement(
        "ul",
        { id: "agenda" },
        createElement("li", { class: "agenda-item" }, "toy problem"),
        createElement("li", { class: "agenda-item" }, "Learn module")
      )
    )
  );
}

export default App;
