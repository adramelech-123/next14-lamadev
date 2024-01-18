import Image from "next/image"
import styles from "./loading.module.css"

const Loading = () => {
  return (
    <div className={styles.container}>
      <Image
        className=""
        src={"/chibi2.gif"}
        alt="running"
        width={100}
        height={100}
      />
      <span>Loading ...</span>
    </div>
  );
}
export default Loading