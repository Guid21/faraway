import { Avatar, Col, Row, Space } from "antd";
import { TPeople } from "../../services/swapi";
import { formattedHeight } from "../../utils/formatted-height";
import { formattedMass } from "../../utils/formatted-mass";
import { formattedDate } from "../../utils/formatted-date";
import Field from "../../atoms/Field";
import Meta from "antd/es/card/Meta";

type TPersonInfoProps = Readonly<{ person: TPeople }>;

export const PersonInfo = ({
  person: {
    name,
    eye_color: eyeColor,
    gender,
    hair_color: hairColor,
    height,
    birth_year: birthYear,
    mass,
    skin_color: skinColor,
    created,
    edited,
  },
}: TPersonInfoProps) => {
  return (
    <Space size="middle" direction="vertical">
      <Meta
        avatar={
          <Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel" />
        }
        title={name}
        description={`Created: ${formattedDate(
          created
        )} / Edited ${formattedDate(edited)}`}
      />
      <Row>
        <Col span={12}>
          <Space size="middle" direction="vertical">
            <Field title="Name">{name}</Field>
            <Field title="Birth year">{birthYear}</Field>
            <Field title="Eye color">{eyeColor}</Field>
            <Field title="Hair color">{hairColor}</Field>
            <Field title="Skin color">{skinColor}</Field>
          </Space>
        </Col>
        <Col span={12}>
          <Space size="middle" direction="vertical">
            <Field title="Gender">{gender}</Field>
            <Field title="Height">{formattedHeight(height)}</Field>
            <Field title="Mass">{formattedMass(mass)}</Field>
            <Field title="Hair color">{hairColor}</Field>
          </Space>
        </Col>
      </Row>
    </Space>
  );
};
