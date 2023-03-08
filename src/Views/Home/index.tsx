import React, { useEffect, useState } from "react";
import { getAllProducts } from "../../services";

export const Home = () => {
  const [data, setData] = useState<any[]>([]);
  const alldata = () => {
    try {
      const response = getAllProducts();
    } catch (error) {
      
    }
  };
  useEffect(() => {}, []);
  return <>home</>;
};
