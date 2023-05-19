import React, { useState } from "react";
import styles from "../styles/index.module.css";
import Card from "../src/app/components/Card";
import { options } from "../src/app/types/options";
import Link from "next/link";

const Home: React.FC = () => {
  const [selectedOption, setSelectedOption] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>): void => {
    const selectedValue = e.target.value;
    setSelectedOption(selectedValue);
  };

  return (
    <>
      <div className={styles["options-container"]}>
        <h1>My cooking options</h1>
        <p>Choose your ingredient</p>
        <select value={selectedOption} onChange={handleChange}>
          <option value="" selected disabled hidden>
            Choose one
          </option>
          {options.map((option) => (
            <option key={option.label} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
      <div>
        <h3>You have selected:</h3>
        <Card value={selectedOption}>
          <Link href={`/${selectedOption.toLowerCase()}`}>
            <h4>{selectedOption}</h4>
          </Link>
        </Card>
      </div>

      <div className={styles["ingredients-list"]}>
        <h3>Other ingredients:</h3>
        <ul>
          {options
            .filter((option) => option.value !== selectedOption)
            .map((option) => (
              <li key={option.label}>
                <p>{option.value}</p>
              </li>
            ))}
        </ul>
      </div>
    </>
  );
};

export default Home;
