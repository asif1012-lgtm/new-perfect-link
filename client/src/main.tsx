import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

console.log('Main.tsx loaded');

const rootElement = document.getElementById("root");
console.log('Root element:', rootElement);

if (rootElement) {
  const root = createRoot(rootElement);
  console.log('React root created');
  root.render(<App />);
  console.log('App rendered');
} else {
  console.error('Root element not found');
}
