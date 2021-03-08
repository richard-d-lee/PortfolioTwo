import React from 'react';
import Banner from './components/Banner.jsx';
import Landing from './components/Landing.jsx';
import Resume from './components/Resume.jsx';
import Footer from './components/Footer.jsx';
import controllers from './controllers.js';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 'landing',
    };
    this.aboutHandler = this.aboutHandler.bind(this)
  }

  aboutHandler() {this.setState({page: 'about'})}

  render() {
    return (
      <div>
        <Banner />
        <Landing about={this.aboutHandler} page={this.state.page}/>
        <Resume />
        <Footer />
      </div>
    );
  }
}
export default App;