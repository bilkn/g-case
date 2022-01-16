export const createMockItems = (count: number) =>
  Array.from(new Array(count)).map(() => ({
    price: "₺14,99",
    name: "Gorgeous Office Mug",
  }));
