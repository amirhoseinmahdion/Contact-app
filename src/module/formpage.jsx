import { useState } from "react";
import styles from "./formpage.module.css";
import AddContact from "./addcontact";
import { v4 } from 'uuid';

const FormPage = () => {
  const [error, setError] = useState("");
  const [form, setForm] = useState({
    name: "",
    lastname: "",
    email: "",
    phone: "",
    id: ""
  });
  const [addcontac, setAddcontac] = useState([]);
  const chnageformhandler = (e) => {
    setForm((form) => ({ ...form, [e.target.name]: e.target.value }));
  };
  const addcontacthandler = () => {
    if (!form.email || !form.lastname || !form.name || !form.phone) {
      setError("Error For Compelete Form");
      return
    }
    setError("")
    const newContac = { ...form, id: v4() }
    setAddcontac((addcontac) => [...addcontac, newContac]);
    setForm({
      name: "",
      lastname: "",
      email: "",
      phone: "",
      id: ""
    })
  };

  return (
    <div>
      <div className={styles.container}>

        <div className={styles.from1}>
          <input
            value={form.name}
            onChange={chnageformhandler}
            name="name"
            placeholder="Name"
          />
          <input
            value={form.lastname}
            onChange={chnageformhandler}
            name="lastname"
            placeholder="Last Name"
          />
        </div>

        <div className={styles.form2}>
          <input
            value={form.email}
            onChange={chnageformhandler}
            name="email"
            placeholder="Email"
          />
          <input
            value={form.phone}
            onChange={chnageformhandler}
            name="phone"
            placeholder="Phone"
            type="Number"
          />
        </div>
        <div className={styles.btn}>
          <button onClick={addcontacthandler}>Add Contact</button>
        </div>
      </div>

      {error && (
        <div className={styles.errormessage}>
          <p>{error}</p>
        </div>
      )}

      <AddContact
        addcontac={addcontac}
        setAddcontac={setAddcontac}
      />
    </div>
  );
};

export default FormPage;
