import { Typography } from 'antd';

const { Text } = Typography;

type FieldProps = Readonly<{
  title: string;
  children: React.ReactNode;
}>;

export const Field = ({ title, children }: FieldProps) => {
  return (
    <div>
      <div>
        <Text type="secondary">{title}</Text>
      </div>
      <div>{children}</div>
    </div>
  );
};