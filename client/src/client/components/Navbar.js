import React from 'react';


const  Navbar = ()=> {
    const imageRender = {
        width: '40px',
        height: '40px',
        borderRadius: '50px',
        display: 'flex',
        marginLeft: '10px',
        cursor : 'pointer',
        transition: 'transform 0.3s ease'
        
        
       
        
    };
    const TextRender = {
        width: '40px',
        height: '40px',
        display: 'flex',
        marginLeft: '10px',
        cursor : 'pointer',
        transition: 'transform 0.3s ease',
        margin: '20px',
        

    }
    //creating a object for further use 
    const information = {
        //i will not create the id 
         image: "https://cdn.vectorstock.com/i/500p/96/64/cyber-hacker-anonymous-logo-vector-50369664.jpg",
       

    };
    return(
        <div className='container'>
            
            <div className='pages'>
            <div className='image'>
                <img src={information.image} 
                style ={imageRender} 
                onMouseOver={(e)=>e.currentTarget.style.transform = 'scale(1.3)'}
                onMouseOut={(e)=>e.currentTarget.style.transform = 'scale(1.0)'}></img>
            </div>
                <p className='text' style={TextRender}
                onMouseOver={(e)=>e.currentTarget.style.transform = 'scale(1.1)'}
                  onMouseOut = {(e)=>e.currentTarget.style.transform = 'scale(1.0)'}  >
                    Welcome 
                </p>
              
                
            </div>
        </div>
       
        
    );
};

export default Navbar;