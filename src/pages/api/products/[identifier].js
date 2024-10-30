import data from "../data.json";

export function getProductByIdentifier(identifier) {
  const products = data.filter((product) => product.identifier === identifier);
  return products;
}

export default function handler(req, res) {
  if (req.method !== "GET") {
    res.status(405).json({ message: `Method ${req.method} is not allowed` });
  } else {
    const products = getProductByIdentifier(req.query.identifier);
    res.status(200).json(products);
  }
}
