import { useContext } from 'react';
import { dataContext } from '../utils/Wrapper';

const Footer = () => {
	const [data, setdata] = useContext(dataContext);
	return <div>Footer: {data}</div>;
};

export default Footer;
