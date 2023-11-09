import styled from 'styled-components';
import { useQuery } from 'react-query';

// components
import Table from '@components/core/Table';
import Button from '@components/core/Button';

// hooks
import { useSearchFilter } from '@hooks/useSearchFilter';
import useModal from '@hooks/useModal';

// apis
import AuthApi from '@apis/services/AuthApi';

// types
import { IColumn } from '@components/core/Table';

interface IProps {
  searchKeyword?: string;
  selectAdmin: (row: any) => void;
}

/** 어드민 목록 컴포넌트 */
const AdminList = ({ searchKeyword = '', selectAdmin }: IProps) => {
  const { data: adminList } = useQuery(['adminList'], () => AuthApi.getAdmins(), {
    suspense: true,
    useErrorBoundary: true,
    retry: false,
    refetchOnWindowFocus: false,
  });
  const filteredData = useSearchFilter(adminList?.data || [], searchKeyword, 'name');

  // 테이블 컬럼
  const columns: IColumn[] = [
    {
      Header: '아이디',
      accessor: 'id',
      width: '10%',
    },
    {
      Header: '관리자명',
      accessor: 'adminNm',
      width: '20%',
    },
    {
      Header: '생성일자',
      accessor: 'createdAt',
      width: '40%',
    },
    {
      Header: '',
      accessor: (row: any) => (
        <ButtonWrap>
          <Button onClick={() => selectAdmin(row)}>수정</Button>
          <Button buttonType="cancel">삭제</Button>
        </ButtonWrap>
      ),
      width: '40%',
      align: 'right',
    },
  ];

  return <TableWrap>{adminList && <Table data={filteredData} columns={columns} />}</TableWrap>;
};

export default AdminList;

const ButtonWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 1rem;
`;

const TableWrap = styled.div`
  width: 100%;
  height: 100%;
`;