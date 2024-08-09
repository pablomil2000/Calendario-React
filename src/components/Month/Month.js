import React, { useState } from "react";
import styled from "styled-components";


export default function Month (props) {

  // Styles
  const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    div {
      padding: 10px;
      border: 1px solid #ccc;
      text-align: center;
    }
  `;

  const Pagina = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
  `;



  // Variables
  const [month, setMonth] = useState(props.month);
  const [year, setYear] = useState(props.year);
  const [today, setToday] = useState(new Date());
  const [days, setDays] = useState(30);
  const date = new Date(year, month.id, '1');
  const firstDay = date.getDay();
  // Functions
  const yearBisiesto = (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;


  const renderDays = () => {
    let daysArray = [];
    for (let i = 0; i < firstDay - 1; i++) {
      daysArray.push(<div key={ i }></div>);
    }
    if (firstDay === 0) {
      for (let i = 0; i < 6; i++) {
        daysArray.push(<div key={ month.id + '-' + i }></div>);
      }
    }
    for (let i = 1; i <= (yearBisiesto ? month.maxDaysBisiesto : month.maxDays); i++) {
      if (i === today.getDate() && month.id === today.getMonth()) {
        daysArray.push(<div key={ month.id + '-' + i } style={ { backgroundColor: 'red' } }>{ i }</div>);
      } else {
        daysArray.push(<div key={ i }>{ i }</div>);
      }
    }
    return daysArray;
  }

  return (
    <>
      <Pagina>
        <div>{ month.mes }</div>
        <Grid>
          { renderDays() }
        </Grid>
      </Pagina>
    </>
  );

}