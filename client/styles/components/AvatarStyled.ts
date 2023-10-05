import styled from 'styled-components'

export const Avatar = styled.div`
  position: relative;
  border-radius: 100%;
  background-color: ${({ theme }) => theme.backgroundSecondary};
  width: 2.5rem;
  height: 2.5rem;
  overflow: hidden;
`

export const AvatarImg = styled.img`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  object-fit: cover;
  width: 100%;
  height: 100%;
`
