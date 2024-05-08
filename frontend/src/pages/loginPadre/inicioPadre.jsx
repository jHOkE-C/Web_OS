import React from "react";
import HPadre from "../../components/loginPadre/headerPadre";
function inicioPadre() {
  return (
    <div>
      <HPadre></HPadre>
      <h1
        style={{
          color: "#F57D0D",
          fontFamily: "Raleway",
          fontSize: "48px",
          fontStyle: "normal",
          fontWeight: 900,
          lineHeight: "normal",
          marginLeft: "10%",
        }}
      >
        Niños Registrados
      </h1>

      <div
        style={{
          display: "flex",
          flexDirection: "column", // Add this line
          justifyContent: "center",
          alignItems: "center",
          marginTop: "20px",
          width: "80%",
          margin: "0 auto",
        }}
      >
        <div
          style={{
            display: "inline-flex",
            justifyContent: "space-between",
            border: "2px solid orange",
            borderRadius: "5px",
            padding: "10px",
            width: "100%",
            height: "50px",
            fontFamily: "Raleway",
          }}
        >
          <p style={{ marginRight: "10px" }}>Jhon corrales garcia</p>

          <div style={{ alignContent: "center", justifyContent: "flex-end" }}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              style={{ width: "30px", height: "30px" }}
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="m20.25 7.5-.625 10.632a2.25 2.25 0 0 1-2.247 2.118H6.622a2.25 2.25 0 0 1-2.247-2.118L3.75 7.5m6 4.125 2.25 2.25m0 0 2.25 2.25M12 13.875l2.25-2.25M12 13.875l-2.25 2.25M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              style={{ width: "30px", height: "30px" }}
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

export default inicioPadre;
