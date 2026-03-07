import React, { Component } from 'react';
import Sidebar from './Components/Sidebar';
import Landing from './Components/Landing';
import Experience from './Components/Experience';
import Education from './Components/Education';
import Skills from './Components/Skills';
import Projects from './Components/Projects';
import Footer from './Components/Footer';
import ParticleBackground from './Components/ParticleBackground';
import AIAssistant from './Components/AIAssistant';
import MatrixRain from './Components/MatrixRain';
import AIStats from './Components/AIStats';
import profileData from './profileData.json';
import ReactGA from 'react-ga';
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
    return (
      <div className="App">
        <ParticleBackground />
        <MatrixRain />
        <AIAssistant />
        <Sidebar sidebarData={this.state.landingData} />
        <main className="main-content">
          <Landing landingData={this.state.landingData} />
          <AIStats />
          <Experience experience={this.state.experience} />
          <Education education={this.state.education} />
          <Skills skills={this.state.skills} />
          <Projects projects={this.state.projects} />
        </main>
        <Footer />
      </div>
    );
  }
}

export default App;
