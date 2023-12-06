import { useState } from "react";
import Input from "../Input/Input";
import Text from "../Text/Text";
import styles from "./InputText.module.css";
import { Button } from "react-bootstrap";

const InputText = () => {
  const [msg, setMsg] = useState("");
  return (
    <>
      <div className={styles.container}>
        <Input
          changeHandler={(data) => {
            setMsg(data);
          }}
          val={msg}
        />

        <Button
          variant="success"
          onClick={() => {
            setMsg("");
          }}
        >
          Reset
        </Button>
        <Text msg={msg} />
      </div>
    </>
  );
};
export default InputText;
