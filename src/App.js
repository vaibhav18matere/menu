import React, { useState } from "react";
import "./styles.css";
import items from "./data";
import Menu from "./Menu";
import Categories from "./Categories";

//to get only unique categories
const allCategories = ["all", ...new Set(items.map((item) => item.category))];
console.log(allCategories);

export default function App() {
  const [menuItems, setMenuItems] = useState(items);
  const [categories, setCategories] = useState([allCategories]);

  const filterItems = (category) => {
    const newItems = items.filter((item) => item.category === category);
    setMenuItems(newItems);
  };

  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>Our menu</h2>
          <div className="underline"></div>
        </div>
        <Categories filterItems={filterItems} categories={categories} />
        <Menu items={menuItems} />
      </section>
    </main>
  );
}
