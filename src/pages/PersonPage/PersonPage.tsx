import { Card, Result } from "antd";
import { useParams } from "react-router-dom";
import CabinetLayout from "../../Layouts/CabinetLayout";
import { useGetPersonQuery } from "../../services/swapi";
import PersonInfo from "../../features/PersonInfo";
import PersonEditor from "../../features/PersonEditor";
import './PersonPage.css'

export const PersonPage = () => {
  const { peopleId: personId } = useParams();
  const { error, isLoading, data: person } = useGetPersonQuery({ personId });

  if (error) {
    return (
      <Result
        status="404"
        title="Something went wrong."
        subTitle="Sorry, the page you visited does not exist."
      />
    );
  }

  return (
    <CabinetLayout title="People">
      <Card
        loading={isLoading}
        className="personal-page-card"
        actions={personId ? [<PersonEditor personId={personId} />] : undefined}
      >
        {person && <PersonInfo person={person} />}
      </Card>
    </CabinetLayout>
  );
};
