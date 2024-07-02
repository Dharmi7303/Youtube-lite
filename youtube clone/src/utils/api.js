import axios from "axios";

const BASE_URL = "https://youtube138.p.rapidapi.com";
const options = {
  params: { hl: "en", gl: "US" },
  headers: {
    "X-RapidAPI-Key": '3cc57d5a45msh120752db2659c77p1a8293jsn60c127205656',
    "X-RapidAPI-Host": "youtube138.p.rapidapi.com",
  },
};

export const fetchDataFromApi = async (url) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);
  console.log(data);
  return data;
};
