import React,{useState} from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {

	const [shadowDanger, setShadowDanger] = useState("shadow-lg");
	const [shadowWarning, setShadowWarning] = useState("shadow-lg");
	const [shadowGreen, setShadowGreen] = useState("shadow-lg");

	function activeShadowDanger() {
		console.log("entramos en on Click")
		setShadowDanger("shadow-lg")
		setShadowWarning("")
		setShadowGreen("")
	};

	function activeShadowWarning() {
		console.log("entramos en on Click")

		setShadowDanger("")
		setShadowWarning("shadow-lg")
		setShadowGreen("")
	};

	function activeShadowGreen() {
		console.log("entramos en on Click")

		setShadowDanger("")
		setShadowWarning("")
		setShadowGreen("shadow-lg")
	};

	return (
		<div className="d-flex justify-content-center">
			<div className="trafficLight">
				<button className={`btn btn-danger rounded-circle ${shadowDanger}`} onClick={activeShadowDanger}>R</button>
				<button className={`btn btn-warning rounded-circle ${shadowWarning}`} onClick={activeShadowWarning}>W</button>
				<button className={`btn btn-success rounded-circle ${shadowGreen}`} onClick={activeShadowGreen}>S</button>
			</div>
		</div>
	);
};

export default Home;
