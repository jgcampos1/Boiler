import { createRoot } from "react-dom/client";
import App from "./App";

const Container = document.querySelector("#root");
const root = createRoot(Container!);

root.render(<App />);
