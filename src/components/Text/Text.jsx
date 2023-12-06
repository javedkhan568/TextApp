// eslint-disable-next-line react/prop-types
import styles from "./Text.module.css";
const Text = ({ msg }) => {
  return (
    <>
      <h1 className={styles.container}>{msg}</h1>
    </>
  );
};
export default Text;
