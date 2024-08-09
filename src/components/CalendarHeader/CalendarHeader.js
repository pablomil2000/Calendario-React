import styled from "styled-components";
export default function CalendarHeader (props) {
	const weekDays = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"];

	const Column = styled.td`
		text-align: center;
		padding: 0.5em;
		margin: 20;
	`;

	return (
		<>
			<thead>
				<tr>
					{ weekDays.map((day) => (
						<Column key={ day }>{ day }</Column>
					)) }
				</tr>
			</thead>
		</>
	);

}