import NarutoImg from "../../assets/images/naruto.png";
import { Title, Image, Container } from "./style";

export function Home() {
	return (
		<Container>
			<div>
				<Title>Quote to - Speaker</Title>
				<button>Quote no Jutsu</button>
			</div>
			<Image src={NarutoImg} alt="naruto" />
		</Container>
	);
}
