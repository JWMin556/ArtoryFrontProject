import React from 'react'
import styled from 'styled-components'
const WrapModal = styled.div`
    border : 1px solid #000;
    width : 313px;
    height : 516px;
`;
export default function modal() {
return (
    <WrapModal>
        <div>검색</div>
        <div>전시</div>
    </WrapModal>
)
}
