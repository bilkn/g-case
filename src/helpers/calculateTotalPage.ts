const calculateTotalPage = (totalItemCount: number, pageLimit: number = 16) =>
  Math.ceil(totalItemCount / pageLimit);

export default calculateTotalPage;
