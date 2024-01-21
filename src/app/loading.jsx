import Image from "next/image"
import styles from "./loading.module.css"

const Loading = () => {
  return (
    <div className={styles.container}>
      <span>...Loading </span>
      <Image
        className=""
        src={"/chibi3.gif"}
        alt="running"
        width={100}
        height={100}
      />
    </div>
  );
}
export default Loading