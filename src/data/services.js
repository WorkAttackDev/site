import Service from "../model/Service";
import ServiceArea from "../model/ServiceArea";

const designAreas = [
	new ServiceArea("Flyer's", "/teste.jpg"),
	new ServiceArea("Branding", "/teste.jpg"),
	new ServiceArea("Logos", "/teste.jpg"),
	new ServiceArea("Patterns", "/teste.jpg"),
	new ServiceArea("Ilustrações", "/teste.jpg"),
	new ServiceArea("Edição", "/teste.jpg"),
	new ServiceArea("Manipulação", "/teste.jpg"),
	new ServiceArea("Cover", "/teste.jpg")
];

const motionAreas = [
	new ServiceArea("Animação de Logo", "/teste.jpg"),
	new ServiceArea("Vinheta", "/teste.jpg"),
	new ServiceArea("Animação de Personagens", "/teste.jpg"),
	new ServiceArea("Desenhos Animados", "/teste.jpg"),
	new ServiceArea("Animações Intitucionais", "/teste.jpg"),
	new ServiceArea("Animações de Conteúdo", "/teste.jpg")
];

const ProgrammingAreas = [
	new ServiceArea("Sites Dinámicos", "/teste.jpg"),
	new ServiceArea("Sites Estáticos", "/teste.jpg"),
	new ServiceArea("App Android/IOS", "/teste.jpg"),
	new ServiceArea("Jogos", "/teste.jpg"),
	new ServiceArea("Animações", "/teste.jpg"),
	new ServiceArea("Programas Desktop", "/teste.jpg"),
	new ServiceArea("Web App", "/teste.jpg"),
	new ServiceArea("Sistemas Distribuídos", "/teste.jpg")
];

export default [
	new Service(
		"Design 2D/3D",
		"Na área de design realizamos os mais diversos tipos de trabalhos, desde flyers publicitários até modelagem e animações em 3D.",
		designAreas,
		"/services/design.jpg"
	),
	new Service(
		"Animação",
		"Realizamos animação das mais diversas categorias, desde informativas à logo marcas, também trabalhamos com criação de desenhos animados e muito mais. Confira a nossa lista.",
		motionAreas,
		"/teste.jpg"
	),
	new Service(
		"Programação",
		"Somos profissionais na criação  de wbpages, blogs e até serviços mais complexos como criação de aplicações mobile e serviços de delivery e streming. O que necessitar nós fazemos, confira a nossa lista.",
		ProgrammingAreas,
		"/services/programming.jpg"
	)
];
