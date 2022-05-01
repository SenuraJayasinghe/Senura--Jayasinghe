import styled from 'styled-components'


export const ImageContainer = styled.div`
  text-align: center;
  background-image: radial-gradient(50% 50% at 50% 50%, rgba(79, 108, 176, 0.25) 53.8%, rgba(79, 108, 176, 0) 100%);
  width: 100%;
  padding: 60px;
  margin-top: 48px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media ${props => props.theme.breakpoints.lg} {
    background-image: none;
    padding: 0;
    margin-top: 40px;
  }
  @media ${props => props.theme.breakpoints.md} {
    background-image: none;
    padding: 0;
    margin-top: 16px;
  }
`

export const MainImage = styled.img`
  width: 100%;
`

export const List = styled.ul`
  list-style-type:none;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px 10px;
  margin: 3rem 0;
  
  
  @media ${props => props.theme.breakpoints.lg}{
    margin: 64px 0;
  }

  @media ${props => props.theme.breakpoints.md}{
    margin: 64px 0;
    gap: 24px
  }
  
  @media ${props => props.theme.breakpoints.sm}{
    display: flex;
    flex-direction: column;
    margin: 32px 0;
  }

  @media ${props => props.theme.breakpoints.esm}{
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    flex-direction: column;
   
  }
`

export const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  

  @media ${props => props.theme.breakpoints.sm}{
    display: flex;
    margin-left: 18px;
  }
`

export const ListTitle = styled.h4`
  font-weight: 100;
  font-size: 15px;
  line-height: 32px;
  letter-spacing: 0.02em;
  color: hsl(204,23.8%,95.9%);
  margin-top: 10px;
  margin-bottom: 10px;
  text-align: center;

@media ${props => props.theme.breakpoints.md}{
  font-size: 24px;
  line-height: 28px;
}

@media ${props => props.theme.breakpoints.sm}{
  font-size: 20px;
  line-height: 28px;
  letter-spacing: 0.02em;
  margin-bottom: 4px;
}

@media ${props => props.theme.breakpoints.esm}{
  font-size: 13px;
  line-height: 28px;
  letter-spacing: 0.02em;
  margin-bottom: 4px;
  text-align: center;
}
`

export const ListParagraph = styled.p`
  font-size: 18px;
  line-height: 30px;
  color: rgba(255, 255, 255, 0.75);
  

  @media ${props => props.theme.breakpoints.md}{
    font-size: 16px;
    line-height: 28px;
  }

  @media ${props => props.theme.breakpoints.sm}{
    font-size: 14px;
    line-height: 22px;
  }
`

export const ListItem = styled.li`
  max-width: 220px;
  display: flex;
  flex-direction: column;
  box-shadow: 3px 3px 20px rgba(77, 182, 172, 0.2);

  border-radius: 10px;


@media ${props => props.theme.breakpoints.md}{
  max-width: 203px;
}

@media ${props => props.theme.breakpoints.sm}{
  margin-bottom: 14px;
  max-width: 320px;
  flex-direction: row;
  align-items:center;
}

@media ${props => props.theme.breakpoints.esm}{
  margin-bottom: 14px;
  max-width: 175px;
  flex-direction: row;
  align-items:center;
}
`

export const ListIcon = styled.img`
  display: block;
  width: 48px;
  height: 48px;
  margin-bottom: 50px;
 
  
  @media ${props => props.theme.breakpoints.md}{
    width: 40px;
    height: 40px;
    margin-bottom: 8px;
  }

  @media ${props => props.theme.breakpoints.sm}{
    width: 32px;
    height: 32px;
    margin-bottom: 0px;
  
    
  }
`
export const Icon = styled.div`
 display:flex;
 justify-content:center;
 margin-top:15px;
`


