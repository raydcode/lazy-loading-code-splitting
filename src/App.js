import React, { Component, Suspense } from 'react';
import './App.css';

import Page1 from './components/Page1';
// import Page2 from './components/Page2';
// import Page3 from './components/Page3';

import AsyncComponent from './AsyncComponent';

const Page2Lazy = React.lazy(() => import('./components/Page2'));
const Page3Lazy = React.lazy(() => import('./components/Page3'));

class App extends Component {
  constructor() {
    super();
    this.state = {
      route: 'page1',
      // component:null
    };
  }

  onPageChange = (page) => {
    /**
     *  WithOut Code Splitting:
     */
    this.setState({ route: page });

    /**
     *  Manually Code Splitting:
     */

    //   if (page === 'page1') {
    //     this.setState({ route: page });
    //   } else if (page === 'page2') {
    //     import('./components/Page2').then((Page2) => {
    //       this.setState({ route: page, component: Page2.default });
    //     });
    //   } else {
    //     import('./components/Page3').then((Page3) => {
    //       this.setState({ route: page, component: Page3.default });
    //     });
    //   }
    // };
  };

  render() {
    // if (this.state.route === 'page1') {
    //   return <Page1 onPageChange={this.onPageChange} />
    // } else if (this.state.route === 'page2') {

    //   const AsyncPage2 = AsyncComponent(() => import('./components/Page2'))
    //   return <AsyncPage2 onPageChange={this.onPageChange} />
    // } else{
    //   const AsyncPage3 = AsyncComponent(() => import('./components/Page3'))
    //   return <AsyncPage3 onPageChange={this.onPageChange} />
    // }

    /**
     *  WithOut Code Splitting:
     */

    // if (this.state.route === 'page1') {
    //   return <Page1 onPageChange={this.onPageChange} />;
    // } else if (this.state.route === 'page2') {
    //   return <Page2 onPageChange={this.onPageChange} />;
    // } else if (this.state.route === 'page3') {
    //   return <Page3 onPageChange={this.onPageChange} />;
    // }

    /**
     *  Manually Code Splitting:
     */

    // if (this.state.route === 'page1') {
    //   return <Page1 onPageChange={this.onPageChange} />;
    // } else {
    //   return <this.state.component onPageChange={this.onPageChange} />;
    // }

    /**
     *  React.Lazy
     */
    if (this.state.route === 'page1') {
      return <Page1 onPageChange={this.onPageChange} />;
    } else if (this.state.route === 'page2') {
      return (
        <Suspense fallback={<div>Loading...</div>}>
          <Page2Lazy onPageChange={this.onPageChange} />
        </Suspense>
      );
    } else {
      return (
        <Suspense fallback={<div>Loading...</div>}>
          <Page3Lazy onPageChange={this.onPageChange} />
        </Suspense>
      );
    }
  }
}

export default App;
