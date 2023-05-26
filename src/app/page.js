import React from 'react'
import Card from './components/Card'

export const metadata = {
  title: "Home Page",
  description: "This is the home page",
};
const getData = async () => {
  const res = await fetch('https://api.escuelajs.co/api/v1/products?limit=20&offset=0');
  const data = res.json();
  return data;
}

export default async function page() {
  const products = await getData()
  return (
    <main className="flex min-h-screen flex-wrap items-center justify-between p-16">
      {
        products.map((product) => (
          <Card
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            image={product.images} />
        ))
      }
    </main>
  )
}
