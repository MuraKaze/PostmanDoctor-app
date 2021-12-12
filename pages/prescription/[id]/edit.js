/* eslint-disable react-hooks/exhaustive-deps */
import Link from "next/link";
import { useState, useEffect, createContext } from "react";
import fetch from "isomorphic-unfetch";
import { Button, Form, Loader } from "semantic-ui-react";
import { useRouter } from "next/router";

const EditPrescription = ({prescription}) => {
  const [form, setForm] = useState({ title: prescription.title, description: prescription.description });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({});
  const router = useRouter();

    useEffect(() =>{
        if (isSubmitting){
            if (Object.keys(errors).length === 0){
                updatePrescription();
            }
            else{
                setIsSubmitting(false);
            }
        }
    })

    const updatePrescription = async () =>{
        try {
            const res = await fetch(`http://localhost:3000/api/prescriptions/${router.query.id}`, {
                method: 'PUT',
                headers:{
                    "Accept": "application/json",
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(form)
            })
            router.push("/");
        } catch (error) {
            console.log(error);
        }
    }

  const handleSubmit = (e) => {
    e.preventDefault();
    let errs = validate();
    setErrors(errs);
    setIsSubmitting(true);
  };
  const validate = () => {
    let err = {};
    if (!form.title) {
      err.title = "Title is Required";
    }
    if (!form.description) {
      err.title = "Description is Required";
    }

    return err;
  };
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="form-container">
      <h1>Update Prescription</h1>
      <div>
        {isSubmitting ? (
          <Loader active inline="centered" />
        ) : (
            <Form onSubmit={handleSubmit}>
            <Form.Input
              fluid
              error={
                errors.title
                  ? { content: "Enter a Title", pointing: "below" }
                  : null
              }
              label="Title"
              placeholder="Title"
              name="title"
              value={form.title}
              onChange={handleChange}
            />
            <Form.Input
              fluid
              error={
                errors.title
                  ? { content: "Enter Name of Doctor", pointing: "below" }
                  : null
              }
              label="Doctor Name"
              placeholder="Doctor Name"
              name="doctorName"
              value={form.doctorName}
              onChange={handleChange}
            />
            <Form.Input
              fluid
              error={
                errors.title
                  ? { content: "Enter Name of Patient", pointing: "below" }
                  : null
              }
              label="Patient Name"
              placeholder="Patient Name"
              name="patientName"
              value={form.patientName}
              onChange={handleChange}
            />
            <Form.TextArea
              fluid
              error={
                errors.title
                  ? { content: "Enter a Description", pointing: "below" }
                  : null
              }
              label="Description"
              placeholder="Description"
              name="description"
              value={form.description}
              onChange={handleChange}
            />
            <Button type="submit">Create</Button>
          </Form>
        )}
      </div>
    </div>
  );
};

EditPrescription.getInitialProps = async ({ query: { id } }) => {
    const res = await fetch(`http://localhost:3000/api/prescriptions/${id}`);
    const { data } = await res.json();
    return { prescription: data };
  };

export default EditPrescription;
