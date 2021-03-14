import React from 'react';
import Banner from './components/Banner.jsx';
import Landing from './components/Landing.jsx';
import Resume from './components/Resume.jsx';
import Footer from './components/Footer.jsx';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 'landing',
    };
    this.aboutHandler = this.aboutHandler.bind(this)
    this.returnHome = this.returnHome.bind(this)
    this.projectsHandler = this.projectsHandler.bind(this)
    this.artworkHandler = this.artworkHandler.bind(this)
  }

  aboutHandler() { this.setState({ page: 'about' }) }
  projectsHandler() { this.setState({ page: 'projects' }) }
  returnHome() { this.setState({ page: 'landing' }) }
  artworkHandler() { this.setState({ page: 'artwork' }) }

  render() {
    return (
      <div>
        <Banner return={this.returnHome} />
        <Landing
          about={this.aboutHandler}
          projects={this.projectsHandler}
          artwork={this.artworkHandler}
          page={this.state.page}
        />
        <Resume />
        <Footer />
      </div>
    );
  }
}
export default App;