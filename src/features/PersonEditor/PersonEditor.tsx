import { Button, Modal } from "antd";
import { useState } from "react";
import { TPeople, useGetPersonQuery } from "../../services/swapi";
import { swapiApi } from "../../services/swapi";
import { useAppDispatch } from "../../store";
import { Form } from "./Form";

type TPersonEditorProps = Readonly<{ personId: string }>;

export const PersonEditor = ({ personId }: TPersonEditorProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const setOpen = () => setIsOpen(true);
  const setClose = () => setIsOpen(false);

  const { data: person, isLoading } = useGetPersonQuery({ personId });

  const dispatch = useAppDispatch();

  const onSubmit = async (person: TPeople) => {
    const edited = new Date().toISOString();

    dispatch(
      swapiApi.util.updateQueryData(
        "getPerson",
        { personId },
        (draftPerson) => ({ ...draftPerson, ...person, edited })
      )
    );

    setClose();
  };

  return (
    <>
      <Button onClick={setOpen} loading={isLoading} type="primary">
        Edit
      </Button>
      {person && (
        <Modal
          open={isOpen}
          onCancel={setClose}
          title={`Edit ${person.name}`}
          footer={null}
        >
          <Form person={person} onSubmit={onSubmit} />
        </Modal>
      )}
    </>
  );
};
