import React from 'react';
import Hero from '../containers/Hero';
import CallToAction from '../containers/CallToAction';
import FourColWrap from '../containers/FourColWrap';
import ThreeColWrap from '../containers/ThreeColWrap';

import axios from 'axios';

export default class Skills extends React.Component {
	state = {
		frontEnd : {},
		backEnd: {},
		marketing : {},
		contentCreation : {},
	}

	componentDidMount(){
	  axios.get(`/skills-data`)
	  .then(response => {
		const frontEnd = response.data.frontEnd,
		backEnd = response.data.backEnd;
		this.setState({
		  frontEnd,
		  backEnd
		})
	  })
	  .catch(function(error){
		console.log(error);
	  })
	}

	render() {
		return (
			<div>
				<Hero
					header="How I Get Things Online"
					subHeader="Skills to get your idea off the ground"
					backGround="skills-hero-backGround"
				/>

				<FourColWrap 
					header={this.state.frontEnd.header}
					para={this.state.frontEnd.para}
					skills={this.state.frontEnd.skills}
				/>

				<ThreeColWrap 
					header={this.state.backEnd.header}
					para={this.state.backEnd.para}
					skills={this.state.backEnd.skills}
				/>

				<CallToAction
					ctaHeader="Need A Website?"
					ctaPara="I'm ready to dig deep into my crafts, techniques to help you achieve your goals. Just drop me a line to start a business."
					ctaBtnText="Reach Out"
				/>
			</div>
		);
	}
}