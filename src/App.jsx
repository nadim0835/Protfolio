import Header from "./Components/Header";
import Navber from "./Components/Navber";
import MySkill from "./Components/MySkill";
import MyExperience from "./Components/MyExperience";
import AboutMe from "./Components/AboutMe";
import MyProjects from "./Components/MyProjects";

const App = () => {
  return (
    <>
      <Navber />
      <Header />
      <MySkill />
      <MyExperience/>
      <AboutMe/>
      <MyProjects/>
    </>
  );
};

export default App;
