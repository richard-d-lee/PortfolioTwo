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
  }

  aboutHandler() {this.setState({page: 'about'})}
  returnHome() {this.setState({page: 'landing'})}

  render() {
    return (
      <div>
        <Banner return={this.returnHome}/>
        <Landing about={this.aboutHandler} page={this.state.page}/>
        <Resume />
        <Footer />
      </div>
    );
  }
}
export default App;