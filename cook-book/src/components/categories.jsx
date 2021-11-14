import React from "react";
import Card from "./common/card";
import "../styles/categories.css";

const Categories = () => {
  const categories = [
    { title: "Chicken", imageID: "637999" },
    { title: "Pasta", imageID: "511728" },
    { title: "Soup", imageID: "649933" },
    { title: "Vegan", imageID: "664396" },
    { title: "Beef", imageID: "769754" },
    { title: "Pork", imageID: "656795" },
    { title: "Fish", imageID: "663108" },
    { title: "Desserts", imageID: "641445" },
  ];
  return (
    <div className="categories-box">
      {categories.map((category) => (
        <Card
          key={category.title}
          title={category.title}
          imageID={category.imageID}
        ></Card>
      ))}
    </div>
  );
};

export default Categories;
