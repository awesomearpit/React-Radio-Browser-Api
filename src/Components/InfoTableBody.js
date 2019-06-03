import React from "react";

const InfoTableBody = props => {
  return (
    <tbody>
      {props.userData.map((data, index) => {
        return (
          <tr key={index}>
            <th scope="row">{data.id}</th>
            <td>{data.name}</td>
            <td>{data.codec}</td>
            <td>{data.country}</td>
            <td>{data.lastchecktime}</td>
            <td>{data.votes}</td>
            <td>
              <a href={data.url} target="_blank">
                {data.url}
              </a>
            </td>
          </tr>
        );
      })}
    </tbody>
  );
};

export default InfoTableBody;
