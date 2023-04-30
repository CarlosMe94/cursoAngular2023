export interface Product {
  description: string;
  price: number;
}

const phone: Product = {
  description: "Nokia a1",
  price: 150.0,
};

const tablet: Product = {
  description: "iPad Air",
  price: 250.0,
};

interface TaxCalculationOptions {
  tax: number;
  products: Product[];
}

export function taxCalculation({
  products,
  tax,
}: TaxCalculationOptions): [number, number] {
  let total = 0;
  products.forEach(({ price }) => {
    total += price;
  });

  return [total, total * tax];
}

const shoppingCar = [phone, tablet];

const tax = 0.15;

const [total, resultTax] = taxCalculation({
  products: shoppingCar,
  tax,
});

console.log("Total", total);
console.log("Tax", resultTax);
