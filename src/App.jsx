import React, { Component } from 'react';
import ReactGA from 'react-ga';
import Sidebar from './Components/Sidebar';
import Landing from './Components/Landing';
import AIStats from './Components/AIStats';
import Projects from './Components/Projects';
import Experience from './Components/Experience';
import Skills from './Components/Skills';
import Education from './Components/Education';
import Footer from './Components/Footer';
import profileData from './profileData.json';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      landingData: profileData.landing,
      experience: profileData.experience,
      education: profileData.education,
      skills: profileData.skills,
      projects: profileData.projects,
    };

    ReactGA.initialize('UA-158818625-1');
    ReactGA.pageview(window.location.pathname);
  }

  render() {
    const { landingData, experience, education, skills, projects } = this.state;

    return (
      <div className="App">
        <a className="skip-link" href="#main-content">Skip to content</a>
        <Sidebar sidebarData={landingData} />
        <main className="main-content" id="main-content" tabIndex="-1">
          <Landing landingData={landingData} currentRole={experience[0]} />
          <AIStats />
          <Projects projects={projects} githubUrl={landingData.github} />
          <Experience experience={experience} />
          <Skills skills={skills} />
          <Education education={education} />
        </main>
        <Footer landingData={landingData} />
      </div>
    );
  }
}

export default App;
