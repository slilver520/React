import React from 'react';

function Hello({color, name,value}){
    console.log({value})
    const userName = 'react';
    const style ={
        backgroundColor:'black',
        color:'aqua',
        fontSize:24,
        padding:'1rem'
    }
    return (
        <>
            <div style={style}>{userName} 안녕하세요</div>
            <div style={{
                color
                //= color:color
                }}>{name}
            </div>
        </>
    )
    //JSX, fragment
}

Hello.defaultProps ={
    name:'이것은 기본값 설정'
}

export default Hello;