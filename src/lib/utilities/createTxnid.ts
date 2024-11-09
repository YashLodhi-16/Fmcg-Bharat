const createTxnid = () => {
  const thirteen = Math.floor(Math.random());
  const date = Date.now();
  const id: number = thirteen + date;
  return `TNX${id.toString().slice(0, 13)}`;
};
export default createTxnid;
