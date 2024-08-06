import React, { useState, useEffect } from "react";
import styled from "styled-components";

// Define the styled-components
const CalendarTable = styled.table`
    border-collapse: collapse;
    width: 100%;
    margin-top: 20px;
`;

const CalendarHeader = styled.thead`
	color: #333;
	background-color: #f2f2f2;
`;

const Day = styled.td`
	border: 1px solid #ddd;
	padding: 8px;
	text-align: center;

	&.active {
		background-color: #4caf50;
		color: #333;
	}
`;

const Button = styled.button`
	background-color: #4caf50;
	border: none;
	color: white;
	padding: 15px 32px;
	text-align: center;
	text-decoration: none;
	display: inline-block;
	font-size: 16px;
	cursor: pointer;

	&:hover {
		background-color: #45a049;
	}
`;

const Calendar = () => {
	const [calendar, setCalendar] = useState([]);
	const [currentDate, setCurrentDate] = useState({});
	const [month, setMonth] = useState(new Date().getMonth());
	const [year, setYear] = useState(new Date().getFullYear());

	useEffect(() => {
		generateCalendar();
	}, [month, year]);

	const generateCalendar = () => {
		const fecha = new Date();
		const ahora = fecha.getDate();
		let hora = fecha.getHours();
		const min = fecha.getMinutes();

		const fecha2 = new Date(year, month, 1);
		let semana = fecha2.getDay();
		let semana2 = semana === 0 ? 6 : semana - 1;

		const meses = [
			"Enero",
			"Febrero",
			"Marzo",
			"Abril",
			"Mayo",
			"Junio",
			"Julio",
			"Agosto",
			"Septiembre",
			"Octubre",
			"Noviembre",
			"Diciembre",
		];

		let maxdia;
		if (month !== 1) {
			if (month === 3 || month === 5 || month === 8 || month === 10) {
				maxdia = 30;
			} else {
				maxdia = 31;
			}
		} else {
			maxdia = 28;
			if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
				maxdia = 29;
			}
		}

		let calendario = [];
		for (let i = 0; i < semana2; i++) {
			calendario.push("");
		}

		for (let i = 1; i <= maxdia; i++) {
			calendario.push(i);
		}

		let texto = "";
		if (hora > 12) {
			texto = "pm";
			hora = hora - 12;
		} else {
			texto = "am";
		}

		setCalendar(calendario);
		setCurrentDate({ dia: ahora, hora: hora, min: min, texto: texto });
	};

	const renderCalendar = () => {
		let dia = 0;
		const rows = [];
		let cells = [];

		for (let i = 0; i < calendar.length; i++) {
			if (dia === 0) {
				cells = [];
			}
			cells.push(
				<Day
					key={ i }
					className={
						calendar[i] === currentDate.dia &&
							month === new Date().getMonth() &&
							year === new Date().getFullYear()
							? "active"
							: ""
					}
				>
					{ calendar[i] }
					{ calendar[i] === currentDate.dia &&
						month === new Date().getMonth() &&
						year === new Date().getFullYear() && (
							<>
								<br />
								{ currentDate.hora }:{ currentDate.min } { currentDate.texto }
							</>
						) }
				</Day>
			);
			dia++;

			if (dia === 7) {
				rows.push(<tr key={ i }>{ cells }</tr>);
				dia = 0;
			}
		}

		if (dia !== 0) {
			rows.push(<tr key={ calendar.length }>{ cells }</tr>);
		}

		return rows;
	};

	const prevMonth = () => {
		if (month === 0) {
			setMonth(11);
			setYear(year - 1);
		} else {
			setMonth(month - 1);
		}
	};

	const nextMonth = () => {
		if (month === 11) {
			setMonth(0);
			setYear(year + 1);
		} else {
			setMonth(month + 1);
		}
	};

	const monthName = [
		"Enero",
		"Febrero",
		"Marzo",
		"Abril",
		"Mayo",
		"Junio",
		"Julio",
		"Agosto",
		"Septiembre",
		"Octubre",
		"Noviembre",
		"Diciembre",
	][month];

	return (
		<div>
			<div>
				<Button onClick={ prevMonth }>Mes Anterior</Button>
				<span>
					{ monthName } { year }
				</span>
				<Button onClick={ nextMonth }>Mes Siguiente</Button>
			</div>
			<CalendarTable>
				<CalendarHeader>
					<tr>
						<td colSpan="7">
							{ monthName } { year }
						</td>
					</tr>
					<tr>
						<td>Lunes</td>
						<td>Martes</td>
						<td>Miércoles</td>
						<td>Jueves</td>
						<td>Viernes</td>
						<td>Sábado</td>
						<td>Domingo</td>
					</tr>
				</CalendarHeader>
				<tbody>{ renderCalendar() }</tbody>
			</CalendarTable>
		</div>
	);
};

export default Calendar;
