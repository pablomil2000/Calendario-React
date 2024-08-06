import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Calendario = () => {
    const [calendar, setCalendar] = useState([]);
    const [currentDate, setCurrentDate] = useState({});
    const [monthName, setMonthName] = useState('');
    const [year, setYear] = useState(0);

    useEffect(() => {
        const fecha = new Date();
        const mes = fecha.getMonth();
        const anio = fecha.getFullYear();
        const ahora = fecha.getDate();
        let hora = fecha.getHours();
        const min = fecha.getMinutes();

        const mes2 = mes + 1;
        const fecha2 = new Date(anio + "-" + mes2 + "-01");

        let semana = fecha2.getDay(); //domingo == 0, lunes == 1
        let semana2 = semana - 1;

        const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

        let maxdia;
        if (mes !== 1) {
            if (mes === 3 || mes === 5 || mes === 8 || mes === 10) {
                maxdia = 30;
            } else {
                maxdia = 31;
            }
        } else {
            maxdia = 28;
        }

        let calendario = [];
        let a = 0;
        for (let i = 0; i < semana2; i++) {
            calendario.push("");
            a++;
        }

        for (let i = 0; i < maxdia; i++) {
            calendario[a] = i + 1;
            a++;
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
        setMonthName(meses[mes]);
        setYear(anio);

    }, []);

    const renderCalendar = () => {
        let dia = 0;
        const rows = [];
        let cells = [];

        for (let i = 0; i < calendar.length; i++) {
            if (dia === 0) {
                cells = [];
            }
            cells.push(
                <Day key={ i } className={ calendar[i] === currentDate.dia ? 'active' : '' }>
                    { calendar[i] !== currentDate.dia ? calendar[i] : '' }
                    { calendar[i] === currentDate.dia && (
                        <>{ currentDate.hora }:{ currentDate.min } { currentDate.texto }</>
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


    const Calendar = styled.table`
    border-collapse: collapse;
    width: 100%;
    margin-top: 20px;
    `;

    const CalendarHeader = styled.thead`
    // color: #333;
    // background-color: #f2f2f2;
    `;

    const Day = styled.td`
    border: 1px solid #ddd;
    padding: 8px;
    text-align: center;

    // if className is active
    &.active {
        background-color: #f2f2f2;
        color: #333;
    }
    `;

    const Button = styled.button`
    background-color: #4CAF50;
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

    return (
        <Calendar >
            <CalendarHeader>
                <tr>
                    <Button>previus</Button>
                    <td colSpan="7">{ monthName }</td>
                    next
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
            <tbody>
                { renderCalendar() }
            </tbody>
        </Calendar>
    );
};

export default Calendario;
