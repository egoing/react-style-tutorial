import { Header } from "./Header";
import { Nav } from "./Nav";
import { Article } from "./Article";
import "./app.css";

export default function App() {
  return (
    <div>
      <Header />
      <div className="content">
        <Nav />
        <Article />
      </div>
    </div>
  );
}
