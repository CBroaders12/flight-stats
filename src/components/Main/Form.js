const Form = (props) => {
	return (
		<form>
			<fieldset>
				<label htmlFor='statistic'>Statistic</label>
				<br />
				<select
					name='statistic'
					id='statistic'
					onChange={(e) => {
						props.setStatistic(e.target.value);
					}}
				>
					{/* TODO: Set values for each statistic */}
					<option value=''>Choose a Statistic</option>
					<option>Number of Flights</option>
					<option>% of Flights on Time</option>
					<option>% of Flights Cancelled</option>
					<option>% of Flights Diverted</option>
					<option>% of Flights Delayed</option>
					<optgroup label='Delay Reasons'>
						<option>Carrier Delay</option>
						<option>Late Aircraft</option>
						<option>Weather</option>
						<option>Security</option>
						<option>Air Traffic Control</option>
					</optgroup>
				</select>
			</fieldset>
			<fieldset>
				<label htmlFor='year'>Year</label>
				<br />
				<select
					name='year'
					id='year'
					onChange={(e) => props.setYear(Number(e.target.value))}
				>
					<option value=''>Choose a Year</option>
					<option value='2003'>2003</option>
					<option value='2004'>2004</option>
					<option value='2005'>2005</option>
					<option value='2006'>2006</option>
					<option value='2007'>2007</option>
					<option value='2008'>2008</option>
					<option value='2009'>2009</option>
					<option value='2010'>2010</option>
					<option value='2011'>2011</option>
					<option value='2012'>2012</option>
					<option value='2013'>2013</option>
					<option value='2014'>2014</option>
					<option value='2015'>2015</option>
					<option value='2016'>2016</option>
				</select>
			</fieldset>
			<fieldset>
				<label htmlFor='airport'>Airport</label>
				<br />
				<select
					name='airport'
					id='airport'
					multiple
					onChange={(e) => props.setAirportCode(e.target.value)}
				>
					{props.airportCodes.map((code, index) => {
						return (
							<option value={code} key={index}>
								{code}
							</option>
						);
					})}
				</select>
			</fieldset>
		</form>
	);
};

export default Form;
