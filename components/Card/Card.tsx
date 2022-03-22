import { useRouter } from "next/router";
import { memo } from "react";
import { FaInfoCircle } from "react-icons/fa";
import { toFirstUppercase } from "../../utils/GlobalFunctions";
import styles from "./card.module.scss";
import Image from "next/image";
import { motion } from "framer-motion";

type CardProps = {
  pokemons: any[];
};

export const Card = memo<CardProps>(({ pokemons }) => {
  const router = useRouter();
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.3, duration: 1 }}
      className={styles.wrapper}
    >
      {pokemons.map(({ name, id, sprite, types }) => (
        <motion.div key={id} className={styles.card}>
          {!router.query.pid && (
            <button className={styles.info} type="button" onClick={() => router.push(`/pokemon/${id}`)}>
              <motion.p whileHover={{ scale: 1.5 }} className={styles.icon}>
                <FaInfoCircle />
              </motion.p>
            </button>
          )}

          <p>#{id}</p>
          <Image width={70} height={70} src={sprite} alt={name} />
          <h4>{toFirstUppercase(name)}</h4>
          <li>{toFirstUppercase(types[0])}</li>
        </motion.div>
      ))}
    </motion.div>
  );
});

Card.displayName = "Cards";
