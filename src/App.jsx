import { useState } from 'react';

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
// 	let message = 'Hello World';
// 	const [msg, setmsg] = useState(message);
// 	const changeMessage = () => {
// 		setmsg((prevMsg) =>
// 			prevMsg === 'Hello World' ? 'Helloo React' : 'Hello World'
// 		);
// 	};

// 	return (
// 		<div>
// 			<h1>
// 				The message is changing, on clicking this button, try it...
// 				<br />
// 				<button
// 					onClick={changeMessage}
// 					className="px-3 py-1 text-zinc-900 rounded bg-zinc-300">
// 					Click me
// 				</button>
// 				<br />
// 				{msg}
// 			</h1>
// 		</div>
// 	);
// };

// const App = () => {
// 	const submitHandler = (e) => {
// 		e.preventDefault();
// 		console.log(e.target.username.value);
// 	};
// 	return (
// 		<div className="rounded mx-auto w-[80%] mt-10 p-5 bg-zinc-200">
// 			<form onSubmit={submitHandler}>
// 				<input placeholder="Username" name="username" type="text" />
// 				<button type="submit">Submit</button>
// 			</form>
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

// CREATE A FORM WHICH TAKES FIRSTNAME, LASTNAME, USERNAME, EMAIL, CONTACT AND ON SUBMITTING THE FOR IT SHOULD CONSOLE THE VALUES IN OBJECT
// const App = () => {
// 	const [formData, setFormData] = useState({
// 		firstName: '',
// 		lastName: '',
// 		username: '',
// 		email: '',
// 		contact: '',
// 	});

// 	const handleChange = (e) => {
// 		const { name, value } = e.target;
// 		setFormData((prevData) => ({
// 			...prevData,
// 			[name]: value,
// 		}));
// 	};

// 	const handleSubmit = (e) => {
// 		e.preventDefault();
// 		console.log('Form submitted:', formData);
// 		// The formData object already contains all the form values
// 	};

// 	return (
// 		<div className="w-[40%] mx-auto mt-10 p-6 bg-white rounded-lg shadow-xl">
// 			<h2 className="text-2xl font-bold mb-5">
// 				Fill this form to show in console as Object
// 			</h2>
// 			<form onSubmit={handleSubmit}>
// 				<div className="mb-4">
// 					<label htmlFor="firstName" className="block mb-2">
// 						First Name
// 					</label>
// 					<input
// 						type="text"
// 						id="firstName"
// 						name="firstName"
// 						value={formData.firstName}
// 						onChange={handleChange}
// 						className="w-full px-3 py-2 border rounded-lg"
// 						required
// 					/>
// 				</div>
// 				<div className="mb-4">
// 					<label htmlFor="lastName" className="block mb-2">
// 						Last Name
// 					</label>
// 					<input
// 						type="text"
// 						id="lastName"
// 						name="lastName"
// 						value={formData.lastName}
// 						onChange={handleChange}
// 						className="w-full px-3 py-2 border rounded-lg"
// 						required
// 					/>
// 				</div>
// 				<div className="mb-4">
// 					<label htmlFor="username" className="block mb-2">
// 						Username
// 					</label>
// 					<input
// 						type="text"
// 						id="username"
// 						name="username"
// 						value={formData.username}
// 						onChange={handleChange}
// 						className="w-full px-3 py-2 border rounded-lg"
// 						required
// 					/>
// 				</div>
// 				<div className="mb-4">
// 					<label htmlFor="email" className="block mb-2">
// 						Email
// 					</label>
// 					<input
// 						type="email"
// 						id="email"
// 						name="email"
// 						value={formData.email}
// 						onChange={handleChange}
// 						className="w-full px-3 py-2 border rounded-lg"
// 						required
// 					/>
// 				</div>
// 				<div className="mb-4">
// 					<label htmlFor="contact" className="block mb-2">
// 						Contact
// 					</label>
// 					<input
// 						type="tel"
// 						id="contact"
// 						name="contact"
// 						value={formData.contact}
// 						onChange={handleChange}
// 						className="w-full px-3 py-2 border rounded-lg"
// 						required
// 					/>
// 				</div>
// 				<button
// 					type="submit"
// 					className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600">
// 					Submit
// 				</button>
// 			</form>
// 		</div>
// 	);
// };

export default App;
