export default function CalendarHeader (props) {
	const { monthName, year } = props;

	const weekDays = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"];

	return (
		<>
			<thead>
				<tr>
					<td colSpan="7">
						{ monthName } { year }
					</td>
				</tr>
				<tr>
					{ weekDays.map((day) => (
						<td key={ day }>{ day }</td>
					)) }
				</tr>
			</thead>
		</>
	);

}