"use client"
import React from "react";

const UserPage = ({ params }) => {
    console.log(params)
    return (
    <div>
      <button
        onClick={() => {
          alert("it works!");
            console.log("it works!")
        }}
      >
        Click
      </button>
    </div>
  );
};

export default UserPage;
