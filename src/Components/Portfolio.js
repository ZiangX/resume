import React, { Component } from 'react'
import Fade from 'react-reveal'

let id = 0
class Portfolio extends Component {
	render() {
		if (!this.props.data) return null

		const projects = this.props.data.projects.map(function (projects) {
			let projectImage = 'images/portfolio/' + projects.image

			return (
				<div key={id++} className='columns portfolio-item'>
					<div className='item-wrap'>
						<a href={`${projects.url}`}>
							<img alt={projects.title} src={projectImage} style={{ width: '320px', height: '150px' }} />
							<div style={{ textAlign: 'center' }}>{projects.title}</div>
						</a>
					</div>
				</div>
			)
		})

		return (
			<section id='portfolio'>
				<Fade left duration={1000} distance='40px'>
					<div className='row'>
						<div className='twelve columns collapsed'>
							<h1>Check Out Some of My Previous Works.</h1>

							<div id='portfolio-wrapper' className='bgrid-quarters s-bgrid-thirds cf'>
								{projects}
							</div>
						</div>
					</div>
				</Fade>
			</section>
		)
	}
}

export default Portfolio
