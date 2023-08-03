import styled from "styled-components";

export const Container = styled.button`
   all: unset;
   width: 100%;
   max-width: 14.5rem;

   border-radius: 8px;

   flex-shrink: 0;

   cursor: pointer;
   
   > img {
   object-fit: cover;
    width: 14.5rem;
    height: 14.5rem;
    border-radius: 8px;
   }
`