import React, { Component } from 'react';
import image from '../Assets/profile.jpg';
import './Sidebar.css';

class Sidebar extends Component {
  constructor(props) {
    super(props);

    this.sidebarData = props.sidebarData;
    this.state = {
      isOpen: false,
      activeSection: 'about'
    };
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = () => {
    const sections = ['about', 'experience', 'education', 'skills', 'projects'];
    const scrollPosition = window.scrollY + 200;

    for (let section of sections) {
      const element = document.getElementById(section);
      if (element) {
        const offsetTop = element.offsetTop;
        const offsetBottom = offsetTop + element.offsetHeight;

        if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
          this.setState({ activeSection: section });
          break;
        }
      }
    }
  };

  toggleSidebar = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  closeSidebar = () => {
    this.setState({ isOpen: false });
  };

  render() {
    const { isOpen, activeSection } = this.state;
    const navItems = [
      { id: 'about', label: 'About', icon: '👋' },
      { id: 'experience', label: 'Experience', icon: '💼' },
      { id: 'education', label: 'Education', icon: '🎓' },
      { id: 'skills', label: 'Skills', icon: '⚡' },
      { id: 'projects', label: 'Projects', icon: '🚀' }
    ];

    return (
      <>
        {/* Mobile Header */}
        <div className="mobile-header">
          <div className="mobile-header-content">
            <span className="mobile-name">{this.sidebarData.firstName} {this.sidebarData.lastName}</span>
            <button className="mobile-toggle" onClick={this.toggleSidebar} aria-label="Toggle navigation">
              <span className={`hamburger ${isOpen ? 'open' : ''}`}>
                <span></span>
                <span></span>
                <span></span>
              </span>
            </button>
          </div>
        </div>

        {/* Sidebar Overlay */}
        {isOpen && <div className="sidebar-overlay" onClick={this.closeSidebar}></div>}

        {/* Sidebar */}
        <nav className={`modern-sidebar ${isOpen ? 'open' : ''}`}>
          <div className="sidebar-content">
            {/* Profile Section */}
            <div className="sidebar-profile">
              <div className="profile-image-wrapper">
                <img className="profile-image" src={image} alt={`${this.sidebarData.firstName} ${this.sidebarData.lastName}`} />
                <div className="profile-image-border"></div>
              </div>
              <h2 className="profile-name">
                {this.sidebarData.firstName}<br />
                <span className="gradient-text">{this.sidebarData.lastName}</span>
              </h2>
            </div>

            {/* Navigation */}
            <ul className="sidebar-nav">
              {navItems.map((item) => (
                <li key={item.id}>
                  <a
                    className={`nav-link-modern ${activeSection === item.id ? 'active' : ''}`}
                    href={`#${item.id}`}
                    onClick={this.closeSidebar}
                  >
                    <span className="nav-icon">{item.icon}</span>
                    <span className="nav-label">{item.label}</span>
                    <span className="nav-indicator"></span>
                  </a>
                </li>
              ))}
            </ul>

            {/* Footer */}
            <div className="sidebar-footer">
              <p className="sidebar-footer-text">© 2025 {this.sidebarData.firstName}</p>
            </div>
          </div>
        </nav>
      </>
    );
  }
}

export default Sidebar;
