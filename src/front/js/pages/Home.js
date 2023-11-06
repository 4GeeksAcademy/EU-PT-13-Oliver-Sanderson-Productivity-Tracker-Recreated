import React, { useContext } from "react";
import { Context } from "../store/appContext";
import NavbarDash from "../component/NavbarDash";
import "../../styles/home.css";
import Dashboard from "./Dashboard";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
       <div>
		<NavbarDash/> 
		<div className="text-center mt-5">

			<h1>My Weekly Activity </h1>
			
			<Dashboard/>
			
		
		</div>
		</div>
	);
};


export default Home