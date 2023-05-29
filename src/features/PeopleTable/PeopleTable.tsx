import { Input, Table, TableProps } from 'antd';
import { TPeople, useGetPeopleQuery } from '../../services/swapi';
import { useEffect, useState } from 'react';
import { ColumnsType } from 'antd/es/table';
import { SearchOutlined } from '@ant-design/icons';
import { Link, useSearchParams } from 'react-router-dom';
import { updateAndSetSearchParams } from '../../utils/update-and-set-search-params';
import { formattedHeight } from '../../utils/formatted-height';
import { getIdFromUrl } from '../../utils/get-id-from-url';
import './PeopleTable.css'

const DEFAULT_PAGE = '1';

export const PeopleTable = (props: TableProps<TPeople>) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [page, setPage] = useState(searchParams.get('page') ?? DEFAULT_PAGE);
  const [name, setName] = useState(searchParams.get('name') ?? '');
  const { data, isLoading } = useGetPeopleQuery({ page, name });

  useEffect(() => {
    updateAndSetSearchParams({ params: { name, page }, setSearchParams });
  }, [name, page, setSearchParams]);

  const columns: ColumnsType<TPeople> = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      filterDropdown: () => {
        return (
          <Input
            placeholder="name"
            value={name}
            onChange={(event) => {
              setPage(DEFAULT_PAGE);
              setName(event.target.value);
            }}
            allowClear
          />
        );
      },
      filterIcon: () => (
        <SearchOutlined className={Boolean(name) ? 'active-search-outlined' : ''} />
      ),
    },
    {
      title: 'Height',
      render: ({ height }) => formattedHeight(height),
      width: '100px',
    },
    {
      title: 'Gender',
      dataIndex: 'gender',
      key: 'gender',
      width: '200px',
    },
    {
      title: 'Hair Color',
      dataIndex: 'hair_color',
      key: 'hair_color',
      width: '100px',
    },
    {
      title: '',
      width: '50px',
      render: ({ url }) => (
        <Link to={`/people/${getIdFromUrl(url)}`}>Show</Link>
      ),
    },
  ];

  return (
    <Table
      dataSource={data?.results}
      columns={columns}
      loading={isLoading}
      rowKey={({ url }) => url}
      pagination={{
        total: data?.count,
        onChange: (page) => setPage(String(page)),
        showSizeChanger: false,
        current: Number(page),
      }}
      className='table'
      {...props}
    />
  );
};
