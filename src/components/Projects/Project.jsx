import React from 'react'
import styled from 'styled-components';
import './index.css'

const Project = (props) => {
    
    const { img, disc } = props.item;

  return (
    <Container className='project'>
        <img src={img} alt="project" />

        <div>
        <div className="disc">
            <h1>{disc}</h1>

        </div>    
        </div>
        
    </Container>
  )
}

export default Project;

const Container = styled.div`
    height: 10rem;
    background-color: #4e5156;
    margin: 0 0.5rem;
    padding: 0.5rem;
    border-radius: 5px;
    cursor: pointer;
    position: relative;


    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: transform 400ms ease-in-out;

        margin-bottom: 100px;
    }
    .disc{
        z-index: 1;
        right: 0;
        left: 0;

        text-align: left;
        padding: 0.5rem;
        background: linear-gradient(rgba(0,0,0, 0.100), rgba(0,0,0, 0.80));
        transition: all 400ms ease-in-out;
        h1{
            font-size: 1rem;
        }
    
        p{
            width: 90%;
            font-size: 0.8rem;
            a{
                margin-left: 0.4rem;
                color: red;
            }
        }
    }

    :hover > img{
        transform: scale(1.3);
    }


`