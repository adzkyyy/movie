import React from 'react'
import './Card.css'

function Card(props){
    return(
        <div className='card'>
            <span className='title'>Manusia ikan</span>
            <img src='https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_SX300.jpg' alt='' className='image'/>
        </div>
    );
}
export default Card