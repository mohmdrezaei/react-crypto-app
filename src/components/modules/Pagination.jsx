

function Pagination({page , setPage}) {
 
  const previosHandler = () => {
    if(page <= 1) return;
    setPage((page) => page - 1);
  };
  const nextHandler = () => {
    if(page >= 10) return;
    setPage((page) => page + 1);
  };

  return (
    <div>
      <button onClick={previosHandler}>Previos</button>
      <p style={{color : page === 1 ? "red" : "inherit"}}>1</p>
      <p style={{color : page === 2 ? "red" : "inherit"}}>2</p>
      {page > 2 && page < 9 && (
        <>
        <span>...</span>
        <p>{page}</p>
        </>
      ) }
      <p>...</p>
      <p style={{color : page === 9 ? "red" : "inherit"}}>9</p>
      <p style={{color : page === 10 ? "red" : "inherit"}}>10</p>
      <button onClick={nextHandler}>Next</button>
    </div>
  );
}

export default Pagination;
