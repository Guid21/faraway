import CabinetLayout from "../Layouts/CabinetLayout";
import PeopleTable from "../features/PeopleTable";

const RootPage = () => {
  return (
    <CabinetLayout title="List of people">
      <PeopleTable />
    </CabinetLayout>
  );
};

export default RootPage;
