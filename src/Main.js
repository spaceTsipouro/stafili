import React from 'react';
import ReactDOM from 'react-dom';

import { formatAmount } from './utils.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faBolt } from '@fortawesome/free-solid-svg-icons'

import { Nav } from './Nav.js';
import { MapComponent } from './Map.js';
import { submit_image, get_image } from './client.js';
import { Modal } from './Modal';

export class Main extends React.Component {
  constructor() {
    super();
    this.state = {
      jobs: [ ],
      finished_images: [ ]
    }
    this.test = this.test.bind(this);
    this.checkJobs = this.checkJobs.bind(this);
    this.checkJob = this.checkJob.bind(this);
  }

  test () {
    submit_image({ lon: 10.5, lat: 20.5, deg: 20 }).then((result) => {
      const { data } = result;
      this.addJob(data["job_id"]);
      window.setInterval(this.checkJobs, 10000);
    });
  }

  addJob(job_id)  {
    const { jobs } = this.state;
    const newJobs = jobs.slice(0);
    newJobs.push(job_id);
    this.setState({ jobs: newJobs });
  }

  removeJob(job_id) {
    const { jobs } = this.state;
    let newJobs = jobs.slice(0);
    const index = newJobs.indexOf(job_id);
    newJobs = newJobs.splice(index, 1);
    this.setState({ jobs: newJobs });
  }

  checkJobs() {
    const { jobs } = this.state;
    jobs.forEach((id) => {
      this.checkJob(id);
    });
  }

  checkJob(id) {
    get_image(id).then((result) => {
      const { status } =  result;
      console.log(result)
      if(status === 200) {
        this.addToFinnished(id);
      }
    });
  }

  addToFinnished(job_id) {
    this.removeJob(job_id);
    const { finished_images } = this.state;
    const newFinishedImages = finished_images.slice(0);
    newFinishedImages.push(job_id);
    this.setState({ finished_images: newFinishedImages });
  }

  render() {
    const { jobs } = this.state;
    const buttonClassNames = "button " + ( jobs.length > 0 ? "is-loading" : "")
    return (
      <div>
        <Nav></Nav>
        <main role="main">
          <nav className="level">
            <div className="level-left">
              <MapComponent></MapComponent>
            </div>
            <div className="level-right">
              <button className={buttonClassNames} onClick={this.test} disabled={jobs.length > 0}>Fractify</button>
            </div>
          </nav>
        </main>
      </div>
    )
  }
}
