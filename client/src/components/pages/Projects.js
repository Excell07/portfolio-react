import React from 'react';
import Hero from '../containers/Hero';
import TwoCol from '../containers/TwoCol';
import CallToAction from '../containers/CallToAction';

import axios from 'axios';

export default class HomePage extends React.Component {
	state = {
		TwoColdata: []
	}

	componentDidMount(){
	  axios.get(`/projects-two-col-data`)
		.then(response => {
		  this.setState({TwoColdata: response.data});
		})
		.catch(function(error){
		  console.log(error);
		})
	}

	render() {
		return (
			<div>
				<Hero
					header="Things I've Built"
					subHeader="Because we can build a better world"
					backGround="projects-bg"
				/>
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
					  )
				  })
        }
				<CallToAction
					ctaHeader="Let's Start On Your Project"
					ctaPara="Have a project in mind? Consider hiring me if you are looking for someone to help in the front-end web development."
					ctaBtnText="Send Message"
				/>
			</div>
		);
	}
}