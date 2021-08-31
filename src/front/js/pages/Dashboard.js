import React from "react";
import { Context } from "../store/appContext";

export function Dashboard() {
	const { store, actions } = React.useContext(Context);
	return (
		<div className="container">
			<h2>Dashboard</h2>
			<button className="btn btn-outline-primary" onClick={() => actions.logout()}>
				Log out
			</button>
		</div>
	);
}
