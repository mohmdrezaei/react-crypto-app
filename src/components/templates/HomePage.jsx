import React, { useEffect, useState } from "react";
import TableCoin from "../modules/TableCoin";
import { getCoinList } from "../../services/cryptoApi";
import Pagination from "../modules/Pagination";
import Search from "../modules/Search";

function HomePage() {
  const [coins, setCoins] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [currency , setCurrency] =useState("usd")

  useEffect(() => {
    setIsLoading(true)
    const getData = async () => {
      const res = await fetch(getCoinList(page , currency));
      const json = await res.json();
      setCoins(json);
      setIsLoading(false);
    };
    getData();
  }, [page, currency]);
  return (
    <div>
      <Search currency={currency} setCurrency={setCurrency}/>
      <TableCoin coins={coins} isLoading={isLoading} />
      <Pagination page={page} setPage={setPage} />
    </div>
  );
}

export default HomePage;
