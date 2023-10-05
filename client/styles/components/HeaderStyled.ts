import styled from 'styled-components'

import { breakpoints } from '../../constants/breakpoints'

export const HeaderStyled = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  background-color: ${({ theme }) => theme.backgroundPrimary};
  border-bottom: 1px solid ${({ theme }) => theme.borderPrimary};
  width: 100%;
  padding: 1rem 2rem;
  z-index: 1;

  @media (max-width: ${breakpoints.screenMD}) {
    padding: 1rem 1.5rem;
  }

  @media (max-width: ${breakpoints.screenSM}) {
    padding: 0.75rem 1rem;
  }
`

export const MenuBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.backgroundDark};
  border: 0px;
  border-radius: 100%;
  width: 3rem;
  height: 3rem;
  cursor: pointer;
`

export const BtnIcon = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 1.125rem;
  height: 0.875rem;

  span {
    display: block;
    height: 2px;
    width: 100%;
    background-color: ${({ theme }) => theme.backgroundPrimary};
    border-radius: 8px;
  }
`
