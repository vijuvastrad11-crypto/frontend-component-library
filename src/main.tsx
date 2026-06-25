import { render } from "preact";
import "./index.css";
import { App } from "./app.tsx";
import { ThemeProvider } from "./theme/ThemeProvider";
import "./styles/globals.css";

render(
  <ThemeProvider>
    <App />
  </ThemeProvider>,
  document.getElementById("app")!,
);
