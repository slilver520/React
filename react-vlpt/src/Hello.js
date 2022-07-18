import React from 'react';

function Hello({color, name, value, isSpecial}){
    // console.log({value})
    const userName = 'react';
    const style ={
        backgroundColor:'black',
        color:'aqua',
        fontSize:24,
        padding:'1rem',
        display: 'inline-flex',
    }
    return (
        <>
            <div style={style}>{userName} 안녕하세요</div>
            <div style={{
                color
                //= color:color
            }}>
                {isSpecial ? <b>* </b> : null}
                {/* <b> {isSpecial ? '스페셜' : '낫스페셜' </b>*/}

                {!isSpecial && <b>++ </b>}
                {/* 삼항 연산자, and 연산자*/}
                {name}
            </div>
        </>
    )
    //JSX, fragment
}

Hello.defaultProps ={
    name:'이것은 기본값 설정'
}

export default Hello;