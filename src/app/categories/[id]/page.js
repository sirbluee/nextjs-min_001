const getCategories = async (id) => {
  const response = await fetch(`https://api.escuelajs.co/api/v1/categories/${id}`);
  const data = await response.json();
  return data;
};
export const metadata = {
  title: "Categories",
  description: "This is the categories page",
}

import React from 'react'
export default async function page({params}) {
  const {id} = params;
  const category = await getCategories(id)
  console.log(category)
  return (
    <div>
      <img src={category.image}/>
    </div>
  )
}



