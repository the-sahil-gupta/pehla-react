import About from './components/About';
import Home from './components/Home';
import Nav from './components/Nav';

let data = 'data from the server';
let subjects = ['Math', 'English', 'Science'];
let profile = {
	name: 'John Doe',
	age: 25,
	email: 'johndoe99@gmail.com',
};

const App = () => {
	return (
		<div>
			<h1>{data}</h1>

			<h1>{subjects}</h1>

			<h1>{profile.name}</h1>
			<h1>{profile.age}</h1>
			<h1>{profile.email}</h1>
		</div>
	);
};

export default App;
