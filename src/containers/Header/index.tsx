import { Col, Row } from 'antd';
import styled from 'styled-components';

const CRow = styled(Row)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 50px;
`;

const CCol = styled(Col)`
  display: inline-block;
`;

function Nav() {
  return (
    <CRow justify="end" gutter={50}>
      <CCol>nav1</CCol>
      <CCol>nav2</CCol>
      <CCol>nav3</CCol>
    </CRow>
  );
}

export default Nav;
