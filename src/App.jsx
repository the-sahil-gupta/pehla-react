import { useState } from 'react';

const App = () => {
	const submitHandler = (e) => {
		e.preventDefault();
		console.log(e.target.username.value);
	};
	return (
		<div className="rounded mx-auto w-[80%] mt-10 p-5 bg-zinc-200">
			<form onSubmit={submitHandler}>
				<input placeholder="Username" name="username" type="text" />
				<button type="submit">Submit</button>
			</form>
		</div>
	);
};

// import About from './components/About';
// import Home from './components/Home';
// import Nav from './components/Nav';

// let data = 'data from the server';
// // String, Number, Boolean, NaN, null, undefined, Symbol

// let subjects = ['Math', 'English', 'Science'];
// let profile = [
// 	{
// 		name: 'John Doe',
// 		age: 25,
// 		email: 'johndoe99@gmail.com',
// 	},
// 	{
// 		name: 'John be',
// 		age: 5,
// 		email: 'johoe99@gmail.com',
// 	},
// 	{
// 		name: 'JohDoe',
// 		age: 2,
// 		email: 'john9@gmail.com',
// 	},
// ];

// let x = profile.map((item, index) => {
// 	return (
// 		<div key={index}>
// 			<h1>Name: {item.name}</h1>
// 			<h2>Age: {item.age}</h2>
// 			<p>Email: {item.email}</p>
// 		</div>
// 	);
// });
// console.log(x);

// const App = () => {
// 	return <div>{x}</div>;

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
// };

// const getInfo = () => {
// 	console.log('Clicked');
// };
// const takeInfo = (info) => {
// 	console.log(info);
// };
// const App = () => {
// 	return (
// 		<div>
// 			<button onClick={getInfo} className="bg-red-400 px-4 py-3 ">
// 				Click me!
// 			</button>
// 			<button
// 				onClick={() => takeInfo('take vala clicked')}
// 				className="bg-red-400 px-4 py-3 mx-4 ">
// 				Take vala click me
// 			</button>
// 		</div>
// 	);
// };

// const App = () => {
// 	const [time, settime] = useState(new Date().toLocaleTimeString());
// 	setInterval(() => {
// 		settime(new Date().toLocaleTimeString());
// 	}, 1000);

// 	return (
// 		<div>
// 			<h1 className="text-center mt-10 text-8xl">{time}</h1>
// 		</div>
// 	);
// };

export default App;
