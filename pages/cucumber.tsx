import Link from "next/link";
import styles from "../styles/veggie.module.css";
import React, { useEffect, useRef } from "react";

const Cucumber = () => {
  const verseRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    if (verseRef.current) {
      verseRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  return (
    <div className={styles["my-veggies"]}>
      <h1>Cucumber</h1>
      <h4 ref={verseRef}>
        Cucumber is so great so here is a limerick about cucumber.
      </h4>
      <p>
        In a garden, a cucumber grew,
        <br />
        Its freshness and crunch, it would woo.
        <br />
        With a vibrant green hue,
        <br />
        It was loved by a few,
        <br />
        Oh, cucumber, you're quite the veggie, it's true!
      </p>
      <p>
        From salads to pickles, you're grand,
        <br />
        A veggie so versatile, oh so in demand.
        <br />
        With each crispy bite,
        <br />
        You bring pure delight,
        <br />
        Cucumber, the champion in hand!
      </p>
      <p>
        In the summer heat, you're a savior,
        <br />
        Refreshing and cool, our flavor savor.
        <br />
        Low in calories, you're light,
        <br />
        A snack that's just right,
        <br />
        Cucumber, you're everyone's favorite flavor!
      </p>
      <p>
        So here's to you, cucumber divine,
        <br />
        In the veggie world, you brightly shine.
        <br />
        With your limerick complete,
        <br />
        You're a treat we'll always greet,
        <br />
        Cucumber, oh cucumber, you're simply sublime!
      </p>

      <Link href="/">Go Back</Link>
    </div>
  );
};

export default Cucumber;
