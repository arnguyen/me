import React from 'react';
import Switch from 'react-switch';
import classNames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithubSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import './App.css';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';


export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      theme: 'dark',
    };
  }

  changeTheme = () => {
    const { theme } = this.state;

    if (theme === 'light') {
        this.setState({ theme: 'dark' });
    } else {
        this.setState({ theme: 'light' });
    }
  };

  render() {
    const { theme } = this.state;

    return (
      <div className="App">

        <header className={classNames("App-header", theme === 'light' ? 'light-header' : 'dark-header')}>
          <Switch
            className="switch"
            onChange={this.changeTheme}
            checked={theme === 'light'}
            checkedIcon={false}
            onColor="#87ceeb"
            onHandleColor="#ffffff"
            uncheckedIcon={false}
            offColor="#000000"
            offHandleColor="#f0c420"
          />
          <h1>Hi. I'm Andrew. It's nice to meet you!</h1>
          <a href="#begin"><FontAwesomeIcon icon={faArrowDown} size="2x"/></a>
        </header>
  
        <div id="begin" className={classNames("main", theme === 'light' ? 'light' : 'dark')}>
          <div className={classNames("about", "section")}>
            <h2>About Me.</h2>
            <img src="/mainpic.jpg" alt="me" />
            <p>
              Hello there! It's great to meet you. I'm Andrew, a senior studying computer science at the University of Michigan. 
              I am a passionate programmer who enjoys coding to life all sorts of things. Outside of programming, 
              I love to run, read, play the guitar, and bake (although admittedly not very well!) 
              Feel free to ask me about any of my interests, technical or otherwise!
            </p>
          </div>
    
          <div className={classNames("experience", "section")}>
            <h2>Experience.</h2>
            <div class="umich">
              <img src="/umich.jpg" alt="block M" />
              <p>With courses such as Web Systems, UI Development, 
                 and Operating Systems, I have gained a broad range of experience 
                 through projects such as an Instagram clone, Pomodoro Web App, and an OS thread library.
                 Due to our school's Honor Code, my repositories are private, but <a href="#connect">reach</a>  
                 &nbsp;out to me and I would love to share my experiences with you!
              </p>
            </div>
            <br />
            <div class="amazon">
              <img src="/amazon.jpg" alt="amazon" />
              <p>
                As a software engineering intern on the Amazon Photos web team, I was able to learn a lot about software development, and, 
                leveraging my skills in front-end development, I used a combination of ReactJS, Flux, and Sass to create a highly 
                requested slideshow feature for users to display their albums, complete with different speed and transition 
                options. 
              </p>
            </div>
            <br />
            <div class="atlassian">
              <img src="atlassian.png" alt="atlassian" />
              <p>
                A current software engineering intern on the Trello Ecosystems team at Atlassian, I have been able 
                to continue to leverage my knowledge of front-end development to build beautiful user interfaces. Utilizing a 
                combination of ReactJS and TypeScript, I am working on making the Trello app look and perform better than ever.
              </p>
            </div>
          </div>
    
          <div className={classNames("skills", "section", theme === 'light' ? 'light' : 'dark')}>
            <h2>Skills.</h2>
            <p>
              <code>C++</code> <code>C</code> <code>Python</code> <code>JavaScript</code> <code>TypeScript</code> <br/> 
              <code>ReactJs</code> <code>Flux</code> <code>jQuery</code> <code>Flask</code> <br/>
              <code>HTML</code> <code>CSS</code> <code>Sass</code> <code>Less CSS</code> <code>SQL</code> <code>Git</code>
            </p>
          </div>
    
          <div id="resume" className={classNames("resume", "section")}>
            <h2>Resume.</h2>
            <iframe src="/Nguyen-Andrew-Resume.pdf" title="Resume"/>
            <p>
              Also feel free to download my resume&nbsp;
              <a href="Nguyen-Andrew-Resume.pdf" download>
                here
              </a>
              .    
            </p>
          </div>
    
          <div id="connect" className={classNames("connect", "section")}>
            <h2>Let's Connect!</h2>
            <a href="mailto: ngandrew@umich.edu"><code id="email">ngandrew@umich.edu</code></a> <br/>
            <a href="https://www.linkedin.com/in/andrew-nguyen-084279179/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGithubSquare} size="5x"/></a>
            <a href="https://github.com/arnguyen" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faLinkedin} size="5x"/></a>
          </div>    
        </div>
      </div>
    );
  }
  
}

