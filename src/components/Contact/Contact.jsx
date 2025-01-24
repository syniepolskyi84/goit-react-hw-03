import css from "./Contact.module.css";
import { FaUser } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";

export default function Contact({data:{ id, name, number}, onDelete}){
    return (
        <div className={css.div}>
            <p className={css.p}><FaUser />      {name}</p>
            <p className={css.p}><FaPhoneAlt />     {number}</p>
            <button className={css.btn} onClick={() => {
                onDelete(id)
            }}>Delete</button>
        </div>
    )
}