import React, { useState } from "react";

//include images into your bundle


//create your first component
const Home = () => {

	const [ShadowGreen, setShadowGreen] = useState();
	const [ShadowWarning, setShadowWarning] = useState();
	const [ShadowDanger, setShadowDanger] = useState();

	function ActiveDanger() {
		setShadowDanger("redshine")
		setShadowGreen("")
		setShadowWarning("")
	};
	function ActiveWarning() {
		setShadowDanger("")
		setShadowGreen("")
		setShadowWarning("ambershine")

	};
	function ActiveGreen() {
		setShadowDanger("")
		setShadowGreen("greenshine")
		setShadowWarning("")
	};


	return (
		
			
			<div className="trafficLight">
				<button type="button" className={`red ${ShadowDanger}`} onClick={ActiveDanger}></button>
				<button type="button" className={`amber ${ShadowWarning}`} onClick={ActiveWarning}></button>
				<button type="button" className={`green ${ShadowGreen}`} onClick={ActiveGreen}></button>
			</div>

	);

};
export default Home;
