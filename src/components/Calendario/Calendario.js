import React, { useState, useEffect } from "react";

import Month from "../Month";
import styled from "styled-components";

const Calendar = () => {

	// Styles
	const Grid = styled.div`
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		grid-gap: 10px;
	`;

	// variables
	const [year, setYear] = useState(new Date().getFullYear());

	// json meses
	const meses = [
		{
			"id": 0,
			"mes": "Enero",
			"maxDays": 31,
			"maxDaysBisiesto": 31
		}, {
			"id": 1,
			"mes": "Febrero",
			"maxDays": 28,
			"maxDaysBisiesto": 29
		}, {
			"id": 2,
			"mes": "Marzo",
			"maxDays": 31,
			"maxDaysBisiesto": 31
		}, {
			"id": 3,
			"mes": "Abril",
			"maxDays": 30,
			"maxDaysBisiesto": 30
		}, {
			"id": 4,
			"mes": "Mayo",
			"maxDays": 31,
			"maxDaysBisiesto": 31
		}, {
			"id": 5,
			"mes": "Junio",
			"maxDays": 30,
			"maxDaysBisiesto": 30
		}, {
			"id": 6,
			"mes": "Julio",
			"maxDays": 31,
			"maxDaysBisiesto": 31
		}, {
			"id": 7,
			"mes": "Agosto",
			"maxDays": 31,
			"maxDaysBisiesto": 31
		}, {
			"id": 8,
			"mes": "Septiembre",
			"maxDays": 30,
			"maxDaysBisiesto": 30
		}, {
			"id": 9,
			"mes": "Octubre",
			"maxDays": 31,
			"maxDaysBisiesto": 31

		}, {
			"id": 10,
			"mes": "Noviembre",
			"maxDays": 30,
			"maxDaysBisiesto": 30

		}, {
			"id": 11,
			"mes": "Diciembre",
			"maxDays": 31,
			"maxDaysBisiesto": 31
		}
	];

	// Funtions
	useEffect(() => {
	}, [year]);


	return (
		<Grid>
			{ meses.map((mes) => (
				<Month key={ mes.id } year={ year } month={ mes } />
			)) }
		</Grid>
	);
};

export default Calendar;
