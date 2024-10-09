import React, { useContext } from 'react';
import { DataContext } from '../App';

const Nav = () => {
	const [data] = useContext(DataContext);
	return <div>Nav: {data}</div>;
};

export default Nav;
