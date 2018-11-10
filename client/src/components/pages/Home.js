import React from 'react';
import Hero from '../containers/Hero';
import TwoCol from '../containers/TwoCol';
import PrimaryTwoCol from '../containers/PrimaryTwoCol';

import axios from 'axios';

class HomePage extends React.Component {
  state = {
    TwoColdata: []
  }

  componentDidMount(){
    axios.get(`/index-two-col-data`)
    .then((response) => {
      this.setState({TwoColdata: response.data});
    })
    .catch(function(error){
      console.log(error);
    })
  }
  
  render(){
    return (
      <div>
        <Hero 
          header="Mark"
          subHeader="Helping you get online."
          backGround="home-hero-backGround"
          btnPara="Get In Touch"
        />
        <PrimaryTwoCol />

        {
          this.state.TwoColdata.map((data, i) => {
            return (
              <TwoCol 
                key={i}
                header={data.header}
                para={data.para}
                img={data.img}
                altText={data.altText}
                btnPara={data.btnPara}
                internalLink={data.internalLink}
                link={data.link}
                pullImg={data.pullImg}
                bg={i % 2 === 0 ? null : 'cta-bg'}
              />
            );
          })
        }
      </div>
    );
  }
}

export default HomePage;