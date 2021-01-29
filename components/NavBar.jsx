import axios from 'axios';
import { useEffect, useState } from 'react';
import moment from 'moment';
import { NavBarItem, Text, StyledNavBar } from './NavBar.styles';


export default function NavBar () {

	const [duration, setDuration] = useState(undefined);


	useEffect(() => {
		axios.get("http://worldtimeapi.org/api/timezone/America/Argentina/Buenos_Aires")
		.then(response => response.data)
		.then(data => {
			console.log(data)
			const now = moment.utc(data['datetime'], moment.ISO_8601);
			const lanzamiento = moment.utc("2021-03-01T00:00:00.151826-03:00", moment.ISO_8601);

			let timeDiff = lanzamiento - now;

			let dur = moment.duration(timeDiff);
			setDuration(dur)

		})

	}, []);

	useEffect(() => {
		let timer;
		if(duration) {
			timer = setInterval(() => {
				console.log("Cambiando", duration)
				setDuration(duration.subtract(1, 'seconds'));
		  }, 1000);
		}
		

	  return () => clearInterval(timer);
	})

	return (
		<StyledNavBar className="navbar navbar-expand-lg navbar-dark" >
			<div className="container-fluid">
    <a className="navbar-brand" href="#">Moony</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">About</a>
        </li>

      </ul>
		<Text className="me-4">
			Launch Date: {
				duration &&
				`${duration['_data']['months']} m ${duration['_data']['days']} d ${duration['_data']['hours']} hrs ${duration['_data']['minutes']} min ${duration['_data']['seconds']} sec`
			}
		</Text>
        <button className="btn btn-light me-2">Join Us</button>
    </div>
  </div>	
		</StyledNavBar>
	);
}