import React from 'react';
import Banner from './components/Banner.jsx';
import Landing from './components/Landing.jsx';
import Resume from './components/Resume.jsx';
import Footer from './components/Footer.jsx';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      screen: 'landing',
    };
  }

  render() {
    return (
      <div>
        <Banner />
        <Landing />
        <Resume />
        <Footer />
      </div>
    );
  }
}
export default App;