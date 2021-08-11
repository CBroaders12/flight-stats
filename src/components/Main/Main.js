import { useState, useEffect } from 'react';
import Form from './Form';
import Table from './Table';

const Main = () => {
	const [airportData, setAirportData] = useState([]);
	const [year, setYear] = useState(null);
	const [airportCode, setAirportCode] = useState('');
	const [statistic, setStatistic] = useState('');
	const [codeList, setCodeList] = useState([]);

	const fetchData = async () => {
		let response = await fetch(
			'https://flare-code-exercise-data.s3.amazonaws.com/airlines.json'
		);
		let data = await response.json();
		setAirportData(data);
	};

	const parseCodes = () => {
		let tempList = [];
		airportData.forEach((item) => {
			let airportCode = item.Airport.Code;
			if (tempList.indexOf(airportCode) === -1) {
				tempList.push(airportCode);
			}
		});
		return tempList;
	};

	useEffect(async () => {
		await fetchData();
		setCodeList(parseCodes());
	}, []);

	return (
		<main>
			<h1>Flight Stats</h1>
			<Form
				setYear={setYear}
				setAirportCode={setAirportCode}
				setStatistic={setStatistic}
				airportCodes={codeList}
			/>
			<Table />
		</main>
	);
};

export default Main;
