"use client";
import { useState, useEffect } from "react";
import styled from "styled-components";

const WrapperDiv = styled.div`
    width: 80vw;
    padding: 16px;
    background-color: #b3e5fc;
    display: flex;
    flex-direction: column;
    margin-top: 5px;
    border-radius: 10px;
`;

export default function DisplaySingleLink({ alias }: { alias: string }) {
    const [currPath, setCurrPath] = useState('');

    useEffect(() => {
        setCurrPath(window.location.href);
    }, []);

    return (
        <WrapperDiv>
            <p 
            onClick={() => {
                navigator.clipboard.writeText(currPath+alias);
            }}
            style={{
                margin: "1px", 
                fontSize: "12px", 
                cursor: "pointer"
                }}>
                    Click to copy link
            </p>
            <p style={{margin: "1px"}}>{currPath + alias}</p>
        </WrapperDiv>
    )
}