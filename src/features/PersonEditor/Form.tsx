import { TPeople } from "../../services/swapi";
import { Button, Form as FromAntd, Input, Select } from "antd";
import "./Form.css";
import { useState } from "react";

const DEFAULT_VALUE = "n/a";

const { Item, useForm } = FromAntd;

type FormProps = Readonly<{
  person: TPeople;
  onSubmit: (person: TPeople) => void;
}>;

export const Form = ({ person, onSubmit }: FormProps) => {
  const [form] = useForm<TPeople>();
  const [isLoading, setIsLoading] = useState(false);

  const onFinish = async (person: TPeople) => {
    const deal = () => {
      return new Promise((resolve) => setTimeout(resolve, 2000));
    };

    setIsLoading(true);

    await deal();

    onSubmit(person);
    setIsLoading(false);
  };

  return (
    <FromAntd
      onFinish={onFinish}
      form={form}
      className="form"
      layout="vertical"
      initialValues={person}
    >
      <Item
        label="Name"
        name="name"
        rules={[{ required: true, message: "Enter a name!" }]}
      >
        <Input />
      </Item>
      <Item
        label="Birth year"
        name="birth_year"
        rules={[
          { required: true, message: "Enter a birth year!" },
          {
            pattern: /^(\d{1,4}(BBY|ABY)|unknown)$/,
            message:
              "Please enter a valid birth year using the BBY or ABY standard.",
          },
        ]}
      >
        <Input />
      </Item>
      <Item label="Gender" name="gender">
        <Select allowClear>
          <Select.Option value="Male">Male</Select.Option>
          <Select.Option value="Female">Female</Select.Option>
          <Select.Option value={DEFAULT_VALUE}>{DEFAULT_VALUE}</Select.Option>
        </Select>
      </Item>
      <Item label="Eye color" name="eye_color">
        <Input allowClear />
      </Item>
      <Item label="Hair color" name="hair_color">
        <Input allowClear />
      </Item>
      <Item
        label="Skin color"
        name="skin_color"
        rules={[{ required: true, message: "Enter a skin!" }]}
      >
        <Input allowClear />
      </Item>
      <Item
        label="Height"
        name="height"
        rules={[{ required: true, message: "Enter a height!" }]}
      >
        <Input type="number" prefix="cm" />
      </Item>
      <Item
        label="Mass"
        name="mass"
        rules={[{ required: true, message: "Enter a mass!" }]}
      >
        <Input type="number" prefix="kg" />
      </Item>
      <Item>
        <Button
          type="primary"
          htmlType="submit"
          className="submit-button"
          loading={isLoading}
        >
          Submit
        </Button>
      </Item>
    </FromAntd>
  );
};
