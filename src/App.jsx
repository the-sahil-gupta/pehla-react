import About from './components/About';
import Home from './components/Home';
import Nav from './components/Nav';

let data = 'data from the server';
// String, Number, Boolean, NaN, null, undefined, Symbol

let subjects = ['Math', 'English', 'Science'];
let profile = [
	{
		name: 'John Doe',
		age: 25,
		email: 'johndoe99@gmail.com',
	},
	{
		name: 'John be',
		age: 5,
		email: 'johoe99@gmail.com',
	},
	{
		name: 'JohDoe',
		age: 2,
		email: 'john9@gmail.com',
	},
];

let x = profile.map((item, index) => {
	return (
		<div key={index}>
			<h1>Name: {item.name}</h1>
			<h2>Age: {item.age}</h2>
			<p>Email: {item.email}</p>
		</div>
	);
});
// console.log(x);

const App = () => {
	return <div>{x}</div>;

	// return (
	// 	<div>
	// 		<Home></Home>
	// 		<Nav></Nav>
	// 		<About></About>
	// 	</div>
	// );

	// return (
	// 	<div>
	// 		<h1>{data}</h1>
	// 		<h1>{subjects}</h1>
	// 		<h1>{profile.name}</h1>
	// 		<h1>{profile.age}</h1>
	// 		<h1>{profile.email}</h1>
	// 	</div>
	// );
};

export default App;
