import React from "react";

const FormatDate = (dateString) => {
  const date = new Date(dateString);
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0"); //month start to 0 , then i need to add 1
  const year = date.getFullYear();

  return <p className="text-secondary text-sm">{`${day}/${month}/${year}`}</p>;
};

export default FormatDate;
