import React from 'react';

const Table = (props) => {
	return (
		<table>
			<thead>
				<tr>
					<th>Airport</th>
					<th>Jan</th>
					<th>Feb</th>
					<th>Mar</th>
					<th>Apr</th>
					<th>May</th>
					<th>Jun</th>
					<th>Jul</th>
					<th>Aug</th>
					<th>Sep</th>
					<th>Oct</th>
					<th>Nov</th>
					<th>Dec</th>
					<th>{props.stat}</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td>---</td>
					<td>x</td>
					<td>x</td>
					<td>x</td>
					<td>x</td>
					<td>x</td>
					<td>x</td>
					<td>x</td>
					<td>x</td>
					<td>x</td>
					<td>x</td>
					<td>x</td>
					<td>x</td>
					<td>x</td>
				</tr>
			</tbody>
		</table>
	);
};

Table.defaultProps = {
	stat: 'Mean',
};

export default Table;
