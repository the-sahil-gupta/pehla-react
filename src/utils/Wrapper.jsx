import { createContext, useState } from 'react';

// 1. export and create context
export const dataContext = createContext(null);

const Wrapper = (props) => {
	// 2. wrap the children with context.provider and pass the value
	const [data, setdata] = useState('Data hai ye');
	return (
		<dataContext.Provider value={[data, setdata]}>
			<div className="p-10 bg-red-200 w-[80%] mx-auto">
				{props.children}
			</div>
		</dataContext.Provider>
	);
};

export default Wrapper;
