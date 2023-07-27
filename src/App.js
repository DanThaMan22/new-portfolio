import "./index.css";
import Hero from "./hero/Hero";
import About from "./about/About";
import Navigation from "./header/Navigation";
import Experience from "./experience/Experience";
import Skillbar from "./skillbar/Skillbar";
import Projects from "./projects/Projects";
import styles from "./about/About.module.css";
import Footer from "./footer/footer";
function App() {
  return (
    <div className="everythingCont">
      <Navigation></Navigation>
      <div className={styles.rowCont}>
        <Hero></Hero>
        <About></About>
      </div>
      <Experience></Experience>
      <Skillbar></Skillbar>
      <Projects></Projects>
      <Footer></Footer>
    </div>
  );
}

export default App;
