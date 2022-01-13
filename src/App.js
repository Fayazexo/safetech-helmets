import React from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import DigitalAgency from "./pages/home/DigitalAgency"
import ContactCreative from "./pages/contact/ContactCreative"
import Page404 from "./pages/others/Page404"
import FullFace from "./pages/shops/FullFace"
import VisorProduct from "./pages/shops/Visor/VisorProduct"
import FullFaceProduct from "./pages/shops/FullFace/FullFaceProduct"
import ScrollToTop from "./helpers/ScrollToTop"
import Dealers from "./pages/contact/Dealers"

function App() {
	return (
		<Router basename={"/"}>
			<ScrollToTop>
				<Switch>
					<Route
						exact
						path={`${process.env.PUBLIC_URL}/`}
						component={DigitalAgency}
					/>
					<Route
						exact
						path={`${process.env.PUBLIC_URL}/full-face/:productId`}
						component={FullFaceProduct}
					/>
					<Route
						exact
						path={`${process.env.PUBLIC_URL}/visor/:productId`}
						component={VisorProduct}
					/>
					<Route
						exact
						path={`${process.env.PUBLIC_URL}/full-face`}
						component={FullFace}
					/>
					<Route
						exact
						path={`${process.env.PUBLIC_URL}/contact`}
						component={ContactCreative}
					/>
					<Route
						exact
						path={`${process.env.PUBLIC_URL}/dealers`}
						component={Dealers}
					/>
					<Route component={Page404} />
				</Switch>
			</ScrollToTop>
		</Router>
		// <>
		// 	<div
		// 		style={{
		// 			display: "flex",
		// 			justifyContent: "center",
		// 			alignItems: "center",
		// 		}}
		// 	>
		// 		<h1
		// 			style={{
		// 				backgroundColor: "#ff9933",
		// 				padding: "20px",
		// 				borderRadius: "20px",
		// 			}}
		// 		>
		// 			Site Disabled!
		// 		</h1>
		// 	</div>
		// 	<div
		// 		style={{
		// 			display: "flex",
		// 			justifyContent: "center",
		// 			alignItems: "center",
		// 		}}
		// 	>
		// 		<h6
		// 			style={{
		// 				backgroundColor: "#1d1d1d",
		// 				color: "#ffffff",
		// 				padding: "15px",
		// 				borderRadius: "40px",
		// 			}}
		// 		>
		// 			<a href="https://safetechhelmets.com">https://safetechhelmets.com</a>
		// 		</h6>
		// 	</div>
		// 	<div
		// 		style={{
		// 			display: "flex",
		// 			justifyContent: "center",
		// 			alignItems: "center",
		// 		}}
		// 	>
		// 		<h6
		// 			style={{
		// 				padding: "10px",
		// 			}}
		// 		>
		// 			Domain for sale, contact{" "}
		// 			<span
		// 				style={{
		// 					color: "#b9189b",
		// 				}}
		// 			>
		// 				admin@nodecandy.com
		// 			</span>
		// 		</h6>
		// 	</div>
		// </>
	)
}

export default App
