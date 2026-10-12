export const getQuantity = (quantity: number): Promise<number> => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res(quantity);
    }, 2000);
  });
};
