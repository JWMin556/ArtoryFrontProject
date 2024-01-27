import React from 'react'
import styled from 'styled-components'
import Search from '../Exhibition/Search'
const WrapModal = styled.div`
    width : 313px;
    height : 516px;
    background-color : #D9D9D9;
    // position : absolute;
    // top : 10%;
    // left : 30%;
`;
export default function modal() {
return (
    <WrapModal>
        <Search/>
        <div>전시</div>
    </WrapModal>
)
}
