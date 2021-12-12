//import Prescriptions from "../../components/prescription.components/prescriptions";
import Link from "next/link";
import fetch from "isomorphic-unfetch";
import { Button, Card } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";

const Index = ({ prescription }) => {
  return (
    <div className="object-container">
      <h1>THE PAGE OF PRESCRIPTIONS</h1>

      <div className="grid wrapper">
        {prescription.map((prescription) => {
          return (
            <div key={prescription._id}>
              <Card>
                <Card.Content>
                  <Card.Header>
                    <Link href={`prescription/${prescription._id}`}>
                      <a>{prescription.title}</a>
                    </Link>
                  </Card.Header>
                </Card.Content>
                <Card.Content extra>
                  <Link href={`prescription/${prescription._id}`}>
                    <Button primary>View</Button>
                  </Link>
                  <Link href={`prescription/${prescription._id}/edit`}>
                    <Button primary>Edit</Button>
                  </Link>
                </Card.Content>
              </Card>
            </div>
          );
        })}
      </div>
      <a href="/prescription/new" className="buttgreen">
        Prescribe some Prescription
      </a>
    </div>
  );
};

Index.getInitialProps = async () => {
  const res = await fetch("http://localhost:3000/api/prescription");
  const { data } = await res.json();
  return { prescription: data };
};

export default Index;
