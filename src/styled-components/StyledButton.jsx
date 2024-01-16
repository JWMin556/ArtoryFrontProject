import styled from 'styled-components';

const StyledButton = styled.button`
  height: ${(props) => props.height || '40px'};
  width: ${(props) => props.width || '123px'};
  background-color: ${(props) => (props.disabled ? '#dadada' : '#121212')};
  color: white;
  border: none;
  border-radius: 10px;
  font-weight: 600;
  font-size: 20px;
  word-wrap: break-word;
  cursor: pointer;
  font-family: Pretendard;
  box-shadow: 0px 2px 8px rgba(0, 58.18, 103.06, 0.4);
`;

export default StyledButton;

/*  버튼 사용하실때, 다음과 같이 생성해서 사용하시면 됩니다. 
import StyledButton from '../styled-components/StyledButton' 먼저 파일 맨 위에 이 코드를 붙여서 import해주시고
<StyledButton height="" width="" fonSize="">저장</StyledButton>  그 다음 해당 컴포넌트를 통해 너비와 높이를 바꾸시면 됩니다. 디폴트는 너비 123px, 높이 40px입니다. 
*/
