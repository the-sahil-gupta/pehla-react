import React, { useContext } from 'react';
import { DataContext } from '../App';

const Nav = () => {
	// Step 3. using context
	const [data] = useContext(DataContext);
	return <div>Nav: {data}</div>;
};

export default Nav;
