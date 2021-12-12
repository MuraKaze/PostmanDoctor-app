/* eslint-disable react-hooks/exhaustive-deps */
import fetch from "isomorphic-unfetch";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { Confirm, Button, Loader } from "semantic-ui-react";

const Prescription = ({ prescription }) => {
  const [confirm, setConfirm] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (isDeleting) {
      deletePrescription();
    }
  }, [isDeleting]);

  const open = () => setConfirm(true);
  const close = () => setConfirm(false);
  const deletePrescription = async () => {
    const prescriptionId = router.query.id;
    try {
      const deleted = await fetch(
        `http://localhost:3000/api/prescriptions/${prescriptionId}`,
        {
          method: "DELETE",
        }
      );
      router.push("/");
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = async () => {
    setIsDeleting(true);
    close();
  };

  return (
    <div className="prescription-container">
      {isDeleting ? (
        <Loader active />
      ) : (
        <>
          <h1>Title: {prescription.title}</h1>
          <h2>Doctor Name: </h2> <h3>{prescription.doctorName}</h3>
          <h2>Patient Name: </h2> <h3>{prescription.patientName}</h3>
          <h2>Description</h2>
          <p>{prescription.description}</p>
          <Button color="red" onClick={open}>
            Delete
          </Button>
        </>
      )}
      <Confirm open={confirm} onCancel={close} onConfirm={handleDelete} />
    </div>
  );
};

Prescription.getInitialProps = async ({ query: { id } }) => {
  const res = await fetch(`http://localhost:3000/api/prescription/${id}`);
  const { data } = await res.json();
  return { prescription: data };
};

export default Prescription;
