const getCategories = async () => {
  const response = await fetch("https://api.escuelajs.co/api/v1/categories");
  const data = await response.json();
  return data;
};
export const metadata = {
  title: "Categories",
  description: "This is the categories page",
}
import React from 'react'
export default async function page() {
  const items = await getCategories();
  console.log(items)
  return (
    <div>{items.name}</div>
  )
}

