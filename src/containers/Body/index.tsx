import { Row } from 'antd';
import styled from 'styled-components';

const CRow = styled(Row)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: calc(100vh - 50px);
`;

function Body() {
  return <CRow>body</CRow>;
}

export default Body;
