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
    this.lgmHandler = this.lgmHandler.bind(this)
    this.relatedHandler = this.relatedHandler.bind(this)
    this.quistoryHandler = this.quistoryHandler.bind(this)

  }

  aboutHandler() { this.setState({ page: 'about' }) }
  projectsHandler() { this.setState({ page: 'projects' }) }
  returnHome() { this.setState({ page: 'landing' }) }
  lgmHandler() { this.setState({ page: 'lgm' }) }
  relatedHandler() { this.setState({ page: 'related' }) }
  quistoryHandler() { this.setState({ page: 'quistory' }) }

  render() {
    return (
      <div id='full-app'>
        <Banner return={this.returnHome} />
        <center>
          <Landing
            about={this.aboutHandler}
            projects={this.projectsHandler}
            lgm={this.lgmHandler}
            page={this.state.page}
            related={this.relatedHandler}
            quistory={this.quistoryHandler}
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