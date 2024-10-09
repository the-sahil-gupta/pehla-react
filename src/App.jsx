import { createContext, useState } from 'react';
// import { useForm } from 'react-hook-form';

import Nav from './components/Nav';

// CONTEXT API

// Step 1. Creating Context
export const DataContext = createContext(null);
const App = () => {
	const [data, setdata] = useState('Data he');
	return (
		<>
			<DataContext.Provider value={[data, setdata]}>
				<Nav />
			</DataContext.Provider>
		</>
	);
};

// PURA NAHI HUA KARLENA
// const App = () => {
// 	const {
// 		watch,
// 		register,
// 		handleSubmit,
// 		formState: { errors },
// 	} = useForm();
// 	const SubmitHandler = (data) => {
// 		console.log(data);
// 		console.log('Submitted');
// 	};

// 	console.log(errors);
// 	// Use this ------>   (...register)   --- kaha karna h voh dhundh le
// 	return (
// 		<form
// 			onSubmit={SubmitHandler(handleSubmit)}
// 			className="bg-zinc-300 flex gap-4 p-4">
// 			<input type="text" name="username" />
// 			<button>Submit</button>
// 		</form>
// 	);
// };

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
// 	const handleSubmit = (e) => {
// 		e.preventDefault();
// 		const { username, firstname, lastname, contact, email } = e.target;
// 		const user = {
// 			username: username.value,
// 			firstname: firstname.value,
// 			lastname: lastname.value,
// 			contact: contact.value,
// 			email: email.value,
// 		};
// 		console.log(user);
// 	};
// 	return (
// 		<div className="w-[40%] mx-auto mt-10 p-6 bg-zinc-300">
// 			<form onSubmit={handleSubmit} className="flex flex-col gap-4">
// 				<input type="text" name="firstname" placeholder="First Name" />
// 				<input type="text" name="lastname" placeholder="Last Name" />
// 				<input type="text" name="username" placeholder="Username" />
// 				<input type="text" name="email" placeholder="Email" />
// 				<input type="text" name="contact" placeholder="Contact" />
// 				<button className="rounded bg-zinc-200 w-fit px-2 py-1">
// 					Submit
// 				</button>
// 			</form>
// 		</div>
// 	);
// };

// const App = () => {
// 	const [username, setusername] = useState('');
// 	const [gender, setgender] = useState('others');
// 	const [error, seterror] = useState(false);
// 	const submitHandler = (e) => {
// 		e.preventDefault();
// 		console.log(username, gender);
// 	};
// 	return (
// 		<div className="w-[80%] mt-10 mx-auto bg-zinc-300">
// 			<form
// 				onSubmit={submitHandler}
// 				className="m-3 p-4 flex flex-col content-center gap-4 items-start">
// 				<input
// 					type="text"
// 					name="username"
// 					placeholder="Username"
// 					onInput={(e) =>
// 						e.target.value.length < 5
// 							? seterror(true)
// 							: seterror(false)
// 					}
// 					onChange={(e) => setusername(e.target.value)}
// 					value={username}
// 				/>
// 				{error && (
// 					<p className="text-red-500">
// 						Username must be 5 characters long
// 					</p>
// 				)}
// 				<input
// 					type="radio"
// 					name="gender"
// 					defaultValue="male"
// 					checked={gender === 'male' ? true : false}
// 					onChange={(e) => setgender(e.target.value)}
// 				/>{' '}
// 				Male
// 				<input
// 					type="radio"
// 					name="gender"
// 					defaultValue="female"
// 					checked={gender === 'female' ? true : false}
// 					onChange={(e) => setgender(e.target.value)}
// 				/>{' '}
// 				Female
// 				<input
// 					type="radio"
// 					name="gender"
// 					defaultValue="others"
// 					checked={gender === 'others' ? true : false}
// 					onChange={(e) => setgender(e.target.value)}
// 				/>{' '}
// 				Others
// 				<button type="submit" className="bg-zinc-200 px-2 py-1 rounded">
// 					Submit
// 				</button>
// 			</form>
// 		</div>
// 	);
// };

// const App = () => {
// 	const [username, setusername] = useState('');
// 	const submitHandler = (e) => {
// 		e.preventDefault();
// 		console.log(username);
// 	};
// 	return (
// 		<div className="w-[80%] mt-10 mx-auto bg-zinc-300">
// 			<form className="p-4 flex gap-4" onSubmit={submitHandler}>
// 				<input
// 					onChange={(e) => setusername(e.target.value)}
// 					value={username}
// 					type="text"
// 					name="username"
// 					placeholder="Username"
// 				/>
// 				<button
// 					type="submit"
// 					className="bg-zinc-100 shadow-md px-2 py-1 rounded">
// 					Submit
// 				</button>
// 			</form>
// 		</div>
// 	);
// };

// FRAGEMENTS are just containers, syntax is "<></>", they are used to wrap multiple elements, they are empty tags

export default App;
