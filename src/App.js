import React, { Component } from 'react';
import './App.css';
import Fade from 'react-reveal/Fade';
import Toolbar from './components/Toolbar/Toolbar';
import SideBar from './components/SideBar/SideBar';
import Backdrop from './components/Backdrop/Backdrop';
import Selfport from './components/Selfport/Selfport';
import Aboutme from './components/Aboutme/Aboutme';
import Portfolio from './components/Portfolio/Portfolio';
import Carousel from 'nuka-carousel';
// import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from '@fortawesome/fontawesome-svg-core'
import { faHome, faAddressCard, faFolderOpen, faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons';

// import your icons
// import { faMoneyBill } from '@fortawesome/pro-solid-svg-icons';
// import { faCode, faHighlighter } from '@fortawesome/free-regular-svg-icons';

library.add(
  faUserCircle,
  faFolderOpen,
  faAddressCard,
  faHome,
  faLinkedin,
  faGithub,
  faInstagram,
  // faMoneyBill,
  // faCode,
  // faHighlighter
  // more icons go here
);

class App extends Component {
  // state = {
    //   sideBarOpen: false,
    // }; 
    constructor() {
    super();
    this.state = {
      source: [ "https://steamuserimages-a.akamaihd.net/ugc/781784168991145284/150710A93A25AFD1045C9E41F2AABA3FFD5510F9/",
                "https://i.pinimg.com/originals/b7/f4/1b/b7f41b7d12a94aa3f9020bad9781c74e.jpg",
                "https://imagesvc.timeincapp.com/v3/fan/image?url=https://dogoday.com/wp-content/uploads/getty-images/2017/07/651100650.jpeg&",
              ],
      sideBarOpen: false,
      slideIndex:0,
      length: 3,
      wrapAround: false,
      underlineHeader: false,
      slidesToShow: 1,
      cellAlign: "left",
      transitionMode: "scroll",
      heightMode: "max",
      withoutControls: false,
    }; 
    this.sideBarToggleClickHandler = this.sideBarToggleClickHandler.bind(this);
    this.backdropClickHandler = this.backdropClickHandler.bind(this);
    this.handleImageClick = this.handleImageClick.bind(this);
  }
    sideBarToggleClickHandler = () => {
      this.setState((prevState) => {
        return {sideBarOpen: !prevState.sideBarOpen}
      });
    }
    backdropClickHandler = () => {
      this.setState({sideBarOpen:false});
    }
    handleImageClick() {
      this.setState({ underlineHeader: !this.state.underlineHeader });
    }
    
    render() {
      
      let sideBar;
      let backdrop;
      
      if (this.state.sideBarOpen) {
        sideBar = <SideBar />;
        backdrop = <Backdrop click={this.backdropClickHandler} />
      }
      
      return (
        <div className="App" style={{height: '100%'}}>
        <Toolbar sideBarClickHandler={this.sideBarToggleClickHandler}/>
        {sideBar}
        {backdrop}
        <header className="App-header" >
          <h1>Steven Tu</h1>
          <Selfport />

          <div>
          <a href="https://www.instagram.com/anything.augmented/">
            <FontAwesomeIcon style={{ color: 'ffffff' }} size="2x" icon={faUserCircle} />
          </a>
          <a href="https://www.instagram.com/anything.augmented/">
            <FontAwesomeIcon style={{ color: 'ffffff' }} size="2x" icon={faFolderOpen} />
          </a>
          <a href="https://www.instagram.com/anything.augmented/">
            <FontAwesomeIcon style={{ color: 'ffffff' }} size="2x" icon={faGithub} />
          </a>
          <a href="https://www.instagram.com/anything.augmented/">
            <FontAwesomeIcon style={{ color: 'ffffff' }} size="2x" icon={faLinkedin} />
          </a>
          <a href="https://www.instagram.com/anything.augmented/">
            <FontAwesomeIcon style={{ color: 'ffffff' }} size="2x" icon={faInstagram} />
          </a>
          <a href="https://www.instagram.com/anything.augmented/">
            <FontAwesomeIcon style={{ color: 'ffffff' }} size="2x" icon={faAddressCard} />
          </a>

          </div>
          <Fade top>
            <Aboutme />
          </Fade>
          <Fade top cascade>
            <h2>Skills</h2>
            <ul>
              <li>Javascript ES6</li>
              <li>HTML5/CSS</li>
              <li>Express</li>
              <li>React</li>
              <li>NodeJS</li>
              <li>Git</li>
            </ul>
          </Fade>

        <Fade>
          <div style={{ width: "50%", margin: "auto" }}>
      <Carousel
        withoutControls={this.state.withoutControls}
        transitionMode={this.state.transitionMode}
        cellAlign={this.state.cellAlign}
        slidesToShow={this.state.slidesToShow}
        wrapAround={!this.state.wrapAround}
        slideIndex={this.state.slideIndex}
        heightMode={this.state.heightMode}
      >
    
        {this.state.source.slice(0, this.state.length).map((source, index) => (
          <img
            src= {`${source}`}
            alt={`Slide ${index + 1}`}
            key={source}
            onClick={this.handleImageClick}
            style={{
              height:
                this.state.heightMode === "current" ? 100 * (index + 1) : 400
            }}
          />
          
        ))}
        <iframe src='https://www.youtube.com/embed/oVXZTmi2ruI'
        frameBorder='0'
        allow='autoplay; encrypted-media'
        allowFullScreen
        title='video'
        style={{
              height:400,
              width:600
            }}
        />

        {/* {this.state.colors.slice(0, this.state.length).map((color, index) => (
          <img
            src={`http://placehold.it/1000x400/${color}/ffffff/&text=slide${index +
              1}`}
            alt={`Slide ${index + 1}`}
            key={color}
            onClick={this.handleImageClick}
            style={{
              height:
                this.state.heightMode === "current" ? 100 * (index + 1) : 400
            }}
          />
        ))} */}
        
      </Carousel>
      
      {/* {this.state.transitionMode !== "scroll" && (
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          {this.state.slidesToShow > 1.0 && (
            <div>
              <button onClick={() => this.setState({ cellAlign: "left" })}>
                Left
              </button>
              <button onClick={() => this.setState({ cellAlign: "center" })}>
                Center
              </button>
              <button onClick={() => this.setState({ cellAlign: "right" })}>
                Right
              </button>
            </div>
          )}

        </div>
      )}   */}
    </div>
    </Fade>
          <h1> Coming soon Instagram Portion</h1>
        </header>
      </div>
    );
  }
}

export default App;
