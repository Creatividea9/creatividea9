import React from 'react'
import Hover from './Hover'
import Footer from './Footer';
function About() {
 
  
     return (
        <div>
              <div>
      <h1>Welcom to Creatividdea ABout page</h1>
      <Hover/>
    </div>
          
          <link href="https://fonts.googleapis.com/css?family=Oswald:400,700" rel="stylesheet" type="text/css" />
          <div className="aboutAuthor">
            <div className="K2_bio">
              <img alt="About " src="logo.jpeg" />
              <h2> Creatividea9</h2>
              <div className="h-divider">
                <div className="shadow" />
                <div className="text2" /> 
              </div>
              <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris pretium augue non orci pharetra, eget dictum ante sagittis. Suspendisse eu nibh justo. Cras scelerisque urna lectus. Praesent rhoncus ut risus quis convallis. Praesent nec lorem eros.</p>
              <div className="h-divider">
                <div className="shadow" />
              </div>
              <Footer/>
            </div>
          </div>
          <style dangerouslySetInnerHTML={{__html: "\n  .aboutAuthor {\n      padding: 60px 0 20px 0;\n  }\n  .aboutAuthor .K2_bio {\n      justify-content: center;\n      position: relative;\n      display: flex;\n      flex-direction: column;\n      justify-content: center;\n      align-content: center;\n      align-items: center;\n      max-width: 70%;\n      margin: auto;\n      padding: 80px 15px 65px 15px;\n      /*background-color: #FFF;*/\nbox-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);\n      border-radius: 10px;\n      border: 2px solid #404040;\n    font-family:'Oswald',serif;\n  }\n  .aboutAuthor .K2_bio img {\n      background-image: linear-gradient(to top right,#ffffff,#ffa24d);\n      box-shadow: 0 5px 20px rgba(0,0,0,.2);\n      padding: 0;\n      border: 7px solid #ffc2b4;\n      width: 120px;\n      height: 120px;\n      position: absolute;\n      border-radius: 50%;\n      top: -60px;\n      pointer-events: none;\n      \n  }\n     .aboutAuthor .K2_bio h2{\n    margin:0px!important;\n      padding: 0;\n    }\n  .aboutAuthor .K2_bio p {\n      margin: 1em 0!important;\n      text-align: center;\n  }\n  .aboutAuthor .K2_bio .k2About-bt {\n      text-align: center;\n      position: absolute;\n      bottom: 10px;\n  }\n  .k2About-bt   {\n      width: 100px;\n      height: 30px;\n      background:#C8102E;\n      text-align: center;\n      padding: 0 10px ;\n      line-height:1.8em;\n      border-radius: 5px ;\n      }\n  .k2About-bt :link  {\n      text-decoration: none;\n  }  \n    .h-divider {\n  margin: auto;\n  margin-top: 15px;\n  width: 80%;\n  position: relative;\n}\n.h-divider .shadow {\n  overflow: hidden;\n  height: 20px;\n}\n\n.h-divider .shadow:after {\n  content: '';\n  display: block;\n  margin: -25px auto 0;\n  width: 100%;\n  height: 25px;\n  border-radius: 125px/12px;\n  box-shadow: 0 0 8px black;\n}\n.h-divider .text2 {\n  width: 20px;\n  height: 20px;\n  position: absolute;\n  bottom: 100%;\n  margin-bottom: -10px;\n  left: 50%;\n  margin-left: -10px;\n  border-radius: 100%;\n  box-shadow: 0 2px 4px #999;\n  background: white;\n  border: 1px dashed #777;\n}\n   .darkmoade .aboutAuthor .K2_bio {\n    background-color: var(--dark-bgAlt);\n    }\n  " }} />
        </div>
        
      );
    }

  

export default About
