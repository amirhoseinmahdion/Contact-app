import styles from "./addcontact.module.css";
import { MdOutlineMail } from "react-icons/md";
import { FiPhone } from "react-icons/fi";
import { MdDeleteOutline } from "react-icons/md";
const AddContact = ({ addcontac, setAddcontac }) => {

  const deleteHnalder = (id) => {
    const itemSelect = addcontac.filter(i => i.id !== id)
    setAddcontac(itemSelect)

  }
  return (
    <div className={styles.conatiner}>
      <h1>Contacts List</h1>
      <div className={styles.card}>
        {addcontac.length ? (
          addcontac.map((i) => (
            <div key={i.id} className={styles.addcontact}>
              <div>
                <div>
                  <p>{i.name}</p>
                </div>
                <div>
                  <p>
                    <span>
                      <MdOutlineMail />
                    </span>
                    {i.email}
                  </p>
                </div>
                <div>
                  <p>
                    <span>
                      <FiPhone />
                    </span>
                    {i.phone}
                  </p>
                </div>

                <button onClick={() => deleteHnalder(i.id)}>
                  <MdDeleteOutline />
                </button>
              </div>
            </div>
          ))
        ) : (
          <h2>not Contact List</h2>
        )}
      </div>
    </div>
  );
};

export default AddContact;
