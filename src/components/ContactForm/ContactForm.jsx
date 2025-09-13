import { FaRegMessage } from "react-icons/fa6";
import Button from "../Button/Button";
import styles from "./ContactForm.module.css";
import { IoCallOutline } from "react-icons/io5";
import { CiMail } from "react-icons/ci";
import { useState } from "react";

const ContactForm = () => {
  const [name, setName] = useState("Shviam")
  const [email, setEmail] = useState("support@gamil.com")
  const [text, setText] = useState("Hello Shivam")
  const onSubmit = (event) => {
    event.preventDefault();
    setName(event.target[0].value)
    setEmail(event.target[1].value)
    setText(event.target[2].value)
    // console.log("name",event.target[0].value); 'name' | 'Shivam'
    // console.log("name",event.target[1].value); 'email' | 'Shivam@gmail'
    // console.log("name",event.target[2].value); 'text' | 'Shivam'
  }
  return (
    <section className={`${styles.contaner}`}>
      <div className={`${styles.contact_form}`}>
        <div className={`${styles.top_btn}`}>
          <Button
            text="VIA SUPPORT CHAT"
            icon={<FaRegMessage fontSize={20} />}
          />
          <Button 
          text="VIA CALL" icon={<IoCallOutline fontSize={20} />} />
        </div>
        <Button
          isOutline={true}
          text="VIA Email Form"
          icon={<CiMail fontSize={20} />}
        />
        <form onSubmit={onSubmit}>
          <div className={styles.form_control}>
            <label htmlFor="name">Name</label>
            <input type="text" name="name" id="" />
          </div>
          <div className={styles.form_control}>
            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="" />
          </div>
          <div className={styles.form_control}>
            <label htmlFor="text">Text</label>
            <textarea type="text" id="" name="text" rows={8}/>
          </div>
          <div style={{display: "flex",
            justifyContent:"end"
          }}>
          <Button text="Submit Button" />
          </div>
          <div>{name + " " + email + " " + text}</div>
        </form>
      </div>
      <div className={`${styles.contact_image}`}>
        <img src="./images/Service.svg" alt="" />
      </div>
    </section>
  );
};

export default ContactForm;
