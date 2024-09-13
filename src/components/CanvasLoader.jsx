import { Html } from "@react-three/drei";

const CanvasLoader = () => {
	return (
		<Html
			as='div'
			center
			style={{
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
				flexDirection: "column",
			}}
		>
			<p
				style={{
					fontSize: 24,
					color: "white",
					fontWeight: 800,
					marginTop: 40,
				}}
			>
				loading...
			</p>
		</Html>
	);
};

export default CanvasLoader;
