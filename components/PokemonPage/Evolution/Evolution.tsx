import { motion } from "framer-motion";
import { useRouter } from "next/router";
import Image from "next/image";
import { useAppSelector } from "../../../store/reduxHooks";
import { getIDfromURL, getPokemonImage } from "../../../utils/GlobalFunctions";
import styles from "./evolution.module.scss";

export const Evoltuion = () => {
  const { evolutionData } = useAppSelector((state) => state.pokemon);
  const router = useRouter();

  return (
    <motion.div
      className={styles.evolution}
      initial={{
        scale: 0,
        y: 0,
        opacity: 0,
      }}
      animate={{
        scale: 1,
        y: 0,
        opacity: 1,
      }}
    >
      {evolutionData &&
        evolutionData.map(({ name, url }) => (
          <div key={url} className={styles.card}>
            <p>#{getIDfromURL(url)}</p>
            <motion.div
              className={styles.img}
              onClick={() => router.push(`/pokemon/${+getIDfromURL(url)}`)}
              initial={{
                scale: 0,
                y: 0,
                opacity: 0,
              }}
              animate={{
                scale: 1,
                y: 0,
                opacity: 1,
              }}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0px 15px 0px rgba(0,0,0,.25)",
              }}
              whileTap={{
                scale: 1,
                boxShadow: "0 0px 0px 0px rgba(0,0,0,.25)",
              }}
            >
              <Image
                src={getPokemonImage(+getIDfromURL(url))}
                alt={name}
                width={80}
                height={80}
                quality={50}
                priority
              />
            </motion.div>
            <p className={styles.capitalize}>{name}</p>
          </div>
        ))}
    </motion.div>
  );
};

//  <motion.div
//       className={styles.wrapper}
//       initial={{
//         scale: 0,
//         y: 0,
//         opacity: 0,
//       }}
//       animate={{
//         scale: 1,
//         y: 0,
//         opacity: 1,
//       }}
//     >
//   {evolutionData &&
//     evolutionData.map(({ name, url }) => (
//       <div key={url} className="evolution-card">
//         <p>#{getIDfromURL(url)}</p>
//         <motion.div
//           className={styles.img}
//           onClick={() => router.push(`/pokemon/${+getIDfromURL(url)}`)}
//           initial={{
//             scale: 0,
//             y: 0,
//             opacity: 0,
//           }}
//           animate={{
//             scale: 1,
//             y: 0,
//             opacity: 1,
//           }}
//           whileHover={{
//             scale: 1.05,
//             boxShadow: "0 0px 15px 0px rgba(0,0,0,.25)",
//           }}
//           whileTap={{
//             scale: 1,
//             boxShadow: "0 0px 0px 0px rgba(0,0,0,.25)",
//           }}
//         >
//           <Image
//             src={getPokemonImage(+getIDfromURL(url))}
//             alt={name}
//             width={80}
//             height={80}
//             quality={50}
//             priority
//           />
//         </motion.div>
//         <p className="text-xs capitalize">{name}</p>
//       </div>
//     ))}
// </motion.div>
