import Image from "next/image"
import styles from "./about.module.css"

const AboutPage = () => {
  return (
    <div>
      <div className={styles.imgContainer}>
        <Image src={"/about.png"} alt="" fill />
        {/* <Image
          src={
            "https://images.pexels.com/photos/2825033/pexels-photo-2825033.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          }
          alt=""
          fill
        /> */}
      </div>
    </div>
  );
}
export default AboutPage