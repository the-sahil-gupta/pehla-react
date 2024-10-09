import { useContext } from 'react';
import { dataContext } from '../utils/Wrapper';

const Navigation = () => {
	const [data, setdata] = useContext(dataContext);
	return <div>Navigation: {data}</div>;
};

export default Navigation;
