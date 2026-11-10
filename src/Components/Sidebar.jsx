import React, { Component } from 'react';
import './Sidebar.css';

const navItems = [
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'skills', label: 'Skills' },
  { id: 'education', label: 'Education' },
];

class Sidebar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false,
      activeSection: 'about',
    };
    this.menuButton = React.createRef();
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll, { passive: true });
    window.addEventListener('keydown', this.handleKeyDown);
    this.handleScroll();
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleScroll = () => {
    let activeSection = 'about';

    navItems.forEach((item) => {
      const section = document.getElementById(item.id);
      if (section && section.getBoundingClientRect().top <= 150) {
        activeSection = item.id;
      }
    });

    if (activeSection !== this.state.activeSection) {
      this.setState({ activeSection });
    }
  };

  handleKeyDown = (event) => {
    if (event.key === 'Escape' && this.state.isOpen) {
      this.closeSidebar();
      this.menuButton.current.focus();
    }
  };

  toggleSidebar = () => {
    this.setState((state) => ({ isOpen: !state.isOpen }));
  };

  closeSidebar = () => {
    this.setState({ isOpen: false });
  };

  render() {
    const { isOpen, activeSection } = this.state;
    const { sidebarData } = this.props;
    const firstName = sidebarData.firstName.trim();
    const initials = `${firstName.charAt(0)}${sidebarData.lastName.charAt(0)}`;

    return (
      <header className="site-header">
        <div className="site-header-inner">
          <a className="site-brand" href="#about" onClick={this.closeSidebar}>
            <span className="brand-mark" aria-hidden="true">{initials}<span>.</span></span>
            <span className="brand-name">{firstName} {sidebarData.lastName}</span>
          </a>

          <button
            ref={this.menuButton}
            className="mobile-toggle"
            type="button"
            onClick={this.toggleSidebar}
            aria-label={isOpen ? 'Close navigation' : 'Open navigation'}
            aria-expanded={isOpen}
            aria-controls="portfolio-navigation"
          >
            <span className={`menu-icon ${isOpen ? 'is-open' : ''}`} aria-hidden="true">
              <span></span>
              <span></span>
            </span>
          </button>

          <nav
            id="portfolio-navigation"
            className={`site-nav ${isOpen ? 'is-open' : ''}`}
            aria-label="Main navigation"
          >
            <ul className="site-nav-list">
              {navItems.map((item) => (
                <li key={item.id}>
                  <a
                    className={activeSection === item.id ? 'is-active' : ''}
                    href={`#${item.id}`}
                    onClick={this.closeSidebar}
                    aria-current={activeSection === item.id ? 'location' : undefined}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
            <a className="nav-contact" href={`mailto:${sidebarData.email}`} onClick={this.closeSidebar}>
              Get in touch <span aria-hidden="true">↗</span>
            </a>
          </nav>
        </div>
      </header>
    );
  }
}

export default Sidebar;
