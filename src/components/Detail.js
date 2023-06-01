import React from 'react'
import styled from 'styled-components'

function Detail() {
  return (
    <Container>
        <Background>
            <img src='https://static01.nyt.com/images/2018/06/30/arts/30BAO1/merlin_140324043_ec6e4112-b0b6-4b3e-b6c3-05e11c059a2e-superJumbo.jpg' />
        </Background>
        <ImageTitle>
            <img src='data:image/png;base64,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' />
        </ImageTitle>
        <Controls>
            <PlayButton>
                <img src='/images/play-icon-black.png' />
                <span>PLAY</span>
            </PlayButton>
            <TrailerButton>
                <img src='/images/play-icon-white.png' />
                <span>Trailer</span>
            </TrailerButton>
            <AddButton>
                <span>+</span>
            </AddButton>
            <GroupWatchButton>
                <img src='/images/group-icon.png' />
            </GroupWatchButton>
        </Controls>
        <SubTitle>
            2018 . 7m . Family, Fantasy, kids, Animations
        </SubTitle>
        <Description>
            A chinese mom who's sad when her grown son leaves home get another chance at motherhood when one of her dumpling spring to life. But she finds nothing stay cute and small forever
        </Description>
    </Container>
  )
}

export default Detail

const Container = styled.div`
    min-height: calc(100vh - 70px);
    padding:0 calc(3.5vw + 5px);
    position:relative;
`

const Background = styled.div`
    position:fixed;
    top:0;
    left:0;
    bottom:0;
    right:0;
    z-index:-1;
    opacity:0.8;

    img{
        width:100%;
        height:100%;
        object-fit:cover;
    }

`

const ImageTitle = styled.div`
    height: 30vh;
    min-height:170px;
    width: 35vw;
    min-width:200px;

    img{
        width:100%;
        height:100%;
        object-fit: contain;
    }

`

const Controls = styled.div`
    display:flex;
    align-items:center;
`

const PlayButton = styled.button`
    border-radius:4px;
    font-size:15px;
    padding 0 24px;
    margin-right:22px;
    display:flex;
    align-items:center;
    height:56px;
    background:rgb(249, 249, 249);
    border:none;
    letter-spacing:1.8px;
    cursor:pointer;

    &:hover{
        background:rgb(198, 198, 198);
    }

`

const TrailerButton = styled(PlayButton)`
    background: rgba(0, 0, 0, 0.3);
    border: 1px solid rgb(249, 249, 249);
    color: rgb(249, 249, 249);
    text-transform:uppercase;
`

const AddButton = styled.button`
    margin-right:16px;
    width:44px;
    height:44px;
    display:flex;
    align-items:center;
    justify-content:center;
    border-radius:50%;
    border:2px solid white;
    background-color: rgba(0, 0, 0, 0.6);
    cursor:pointer;

    span{
        font-size:30px;
        color:white;
    }

`

const GroupWatchButton = styled(AddButton)`
    background:rgb(0, 0, 0);
`

const SubTitle = styled.div`
    color: rgb(249, 249, 249);
    font-size: 15px;
    min-height: 20px;
    margin-top:26px;
`

const Description = styled.div`
    line-height:1.4;
    font-size:20px;
    margin-top:16px;
    color: rgb(249, 249, 249);
` 