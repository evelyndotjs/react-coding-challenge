import React from "react";
import styled from "styled-components";

const StatsContainer = styled.table`
  display: flex;
  text-align: center;
  font-size: 0.9375rem;
  font-family: "Roboto", "Helvetica", "Arial", sans-serif;
  line-height: 1.5;
  margin: 80px 0;
`;

const RightTable = styled.table`
  margin-left: 100px;
`;

export default function Stats(props) {
  const officeCity = props.data.map((item) => item.officeCity);
  const bookingGrade = props.data.map((item) => item.bookingGrade);

  const officeCityCount = officeCity.reduce((acc, curr) => {
    if (typeof acc[curr] == "undefined") {
      acc[curr] = 1;
    } else {
      acc[curr] += 1;
    }
    return acc;
  }, {});

  const bookingGradeCount = bookingGrade.reduce((acc, curr) => {
    if (typeof acc[curr] == "undefined") {
      acc[curr] = 1;
    } else {
      acc[curr] += 1;
    }
    return acc;
  }, {});

  const sortedOfficeCityCount = Object.entries(officeCityCount).sort(
    (a, b) => b[1] - a[1]
  );

  const sortedBookingGradeCount = Object.entries(bookingGradeCount).sort(
    (a, b) => b[1] - a[1]
  );

  return (
    <>
      <StatsContainer>
        <table>
          <thead>
            <tr>
              <th>Booking Grade</th>
              <th>Count</th>
            </tr>
          </thead>
          <tbody>
            {sortedBookingGradeCount.map((item) => (
              <tr>
                <td>{item[0] === "" ? "Unspecified" : item[0]}</td>
                <td>{item[1]}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <RightTable>
          <thead>
            <tr>
              <th>Office City</th>
              <th>Count</th>
            </tr>
          </thead>
          <tbody>
            {sortedOfficeCityCount.slice(0, 7).map((item) => (
              <tr>
                <td>{item[0]}</td>
                <td>{item[1]}</td>
              </tr>
            ))}
          </tbody>
        </RightTable>
      </StatsContainer>
    </>
  );
}
