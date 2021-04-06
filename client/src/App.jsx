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
    this.digitalHandler = this.digitalHandler.bind(this)
  }

  aboutHandler() { this.setState({ page: 'about' }) }
  projectsHandler() { this.setState({ page: 'projects' }) }
  returnHome() { this.setState({ page: 'landing' }) }
  artworkHandler() { this.setState({ page: 'artwork' }) }
  digitalHandler() { this.setState({ page: 'digital' }) }

  render() {
    return (
      <div id='full-app'>
        <Banner return={this.returnHome} />
        <center>
          <Landing
            about={this.aboutHandler}
            projects={this.projectsHandler}
            artwork={this.artworkHandler}
            page={this.state.page}
            digital={this.digitalHandler}
          />
        </center>
        <div className="res-and-foot">
          <Resume />
          <Footer />
        </div>
      </div>
    );
  }
}
export default App;