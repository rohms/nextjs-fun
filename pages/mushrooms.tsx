import Link from "next/link";
import styles from "../styles/veggie.module.css";

const Mushrooms = () => {
  return (
    <div className={styles["my-veggies"]}>
      <h1>Mushrooms</h1>
      <p>Mushrooms are great. 🍄</p>
      <p>
        <span className={styles["heading"]}>Mushrooms</span>, the enigmatic
        wonders of the fungal kingdom, hold a mystique that captivates the
        senses. From their earthy aroma to their intricate shapes and colors,
        these organisms possess an allure that beckons exploration. Within the
        shadows of the forest, mushrooms emerge, silently weaving their mycelial
        networks beneath the soil, forming a delicate symbiotic dance with the
        world around them.
      </p>

      <p>
        Beyond their aesthetic appeal, mushrooms play a crucial role in
        ecosystems, acting as nature&apos;s recyclers. They break down decaying
        organic matter, releasing vital nutrients back into the soil, nurturing
        the cycle of life. Yet, while some mushrooms serve as delicious culinary
        delights, others hide potent secrets within their caps, concealing both
        medicinal and poisonous properties.
      </p>

      <p>
        Now, for a bizarre twist: Did you know that mushrooms are more closely
        related to humans than to plants? Yes, you read that right. Fungi,
        including mushrooms, share a closer evolutionary lineage with humans
        than with the green kingdom. It&apos;s a peculiar connection that
        highlights the fascinating intricacies of life on this planet.
      </p>

      <p>
        So next time you stumble upon a mushroom during a woodland stroll, take
        a moment to ponder its mysterious existence. In this seemingly simple
        organism, lies a testament to nature&apos;s complexity and a reminder
        that the world around us is full of astonishing wonders, waiting to be
        discovered.
      </p>
      <Link href="/">Go Back</Link>
    </div>
  );
};

export default Mushrooms;
