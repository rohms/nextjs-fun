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
        Oh, cucumber, you&apos;re quite the veggie, it&apos;s true!
      </p>
      <p>
        From salads to pickles, you&apos;re grand,
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
        In the summer heat, you&apos;re a savior,
        <br />
        Refreshing and cool, our flavor savor.
        <br />
        Low in calories, you&apos;re light,
        <br />
        A snack that&apos;s just right,
        <br />
        Cucumber, you&apos;re everyone&apos;s favorite flavor!
      </p>
      <p>
        So here&apos;s to you, cucumber divine,
        <br />
        In the veggie world, you brightly shine.
        <br />
        With your limerick complete,
        <br />
        You&apos;re a treat we&apos;ll always greet,
        <br />
        Cucumber, oh cucumber, you&apos;re simply sublime!
      </p>

      <Link href="/">Go Back</Link>
    </div>
  );
};

export default Cucumber;
