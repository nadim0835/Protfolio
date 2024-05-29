import Header from "./Components/Header";
import Navber from "./Components/Navber";
import MySkill from "./Components/MySkill";
import MyExperience from "./Components/MyExperience";
import AboutMe from "./Components/AboutMe";
import MyProjects from "./Components/MyProjects";
import MyTestimonial from "./Components/MyTestimonial";
import Letstalk from "./Components/Let’stalk";
import Footer from "./Components/Footer";

const App = () => {
  return (
    <>
      <Navber />
      <Header />
      <MySkill />
      <MyExperience/>
      <AboutMe/>
      <MyProjects/>
      <MyTestimonial/>
      <Letstalk/>
      <Footer/>
    </>
  );
};

export default App;
