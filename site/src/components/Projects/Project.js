import React from 'react'
import styled from 'styled-components';
import './index.css'
import { useNavigate } from 'react-router-dom';
import { BuscarImagem } from '../../api/prod';

const Project = (props) => {

    const navigate = useNavigate();
    
    const item = props.item;


  return (
    <Container onClick={() => navigate('/produto/' + item.id_produto)} className='project'>
        <img src={BuscarImagem(item.ds_img1)} alt='erro no carregamento'/>

        <div className='divdodisc'>
        <div className="disc">
            <h1>{item.nm_produto}</h1>
            <h1></h1>
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
        position: relative;
        left: 50px;
        width: auto;
        height: 300px;
        object-fit: cover;
        transition: transform 400ms ease-in-out;

        margin-bottom: 50px;
    }

    .divdodisc{
        display: flex;
        justify-content: center;
    }
    .disc{
        z-index: 1;
        right: 0;
        left: 0;

        width: 300px;

        text-align: left;
        padding: 0.5rem;
        transition: all 400ms ease-in-out;
        h1{
            font-size: 1rem;
        }
    
        h1{
            width: 90%;
            font-size: 0.8rem;

            width: 300px;
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