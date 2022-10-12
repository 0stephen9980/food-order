import Category from "./components/Category";
import Food from "./components/Food";
import HeadLineCards from "./components/HeadLineCards";
import Hero from "./components/Hero";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div>
      <NavBar />
      <Hero />
      <HeadLineCards />
      <Food />
      <Category />
    </div>
  );
}

export default App;
