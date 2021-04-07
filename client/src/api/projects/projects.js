import waldo from "../../assets/img/projects/wheres_waldo.png";
import chat from "../../assets/img/projects/chat_app.png";
import weather from "../../assets/img/projects/weather_app.png";
import dictionary from "../../assets/img/projects/react_dictionary.png";

const projects = [
	{
		name: "Where's Waldo?",
		pic: waldo,
		desc: 'A simple implementation of the "Where\'s Waldo?" game in the browser',
		demo: "https://daniel-ulises.github.io/whereswaldo/#/waldo",
		repo: "https://github.com/daniel-ulises/whereswaldo",
		stack: ["React", "NodeJS", "Express", "MongoDB"],
	},
	{
		name: "Chat App",
		pic: chat,
		desc: "A basic chat app with upcoming features!",
		demo: "https://daniel-ulises.github.io/chat-app/#/welcome",
		repo: "https://github.com/daniel-ulises/chat-app",
		stack: ["React", "NodeJS", "Express", "SocketIO"],
	},
	{
		name: "Weather App",
		pic: weather,
		desc: "A weather app built with the OpenWeather API",
		demo: "https://daniel-ulises.github.io/weather-app",
		repo: "https://github.com/daniel-ulises/weather-app",
		stack: ["React", "OpenWeather API"],
	},
	{
		name: "Simple dictionary",
		pic: dictionary,
		desc: "A really simple dictionary built using the OwlBot API",
		demo: "https://daniel-ulises.github.io/react-dictionary",
		repo: "https://github.com/daniel-ulises/react-dictionary",
		stack: ["React", "OwlBot API"],
	},
];

export default projects;
