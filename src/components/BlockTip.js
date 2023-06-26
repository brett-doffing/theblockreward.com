import React, { useState, useEffect } from 'react';
import './BlockTip.css';

const BlockTip = () => {
    const [blockData, setBlockData] = useState(null);
    const [tipHash, setTipHash] = useState('');

    const fetchTipHash = () => {
        fetch("https://blockstream.info/api/blocks/tip/hash")
            .then(response => {
                return response.text();
            })
            .then(data => {
                setTipHash(data);
            })
    }

    const fetchBlock = () => {
        fetch("https://blockstream.info/api/block/" + tipHash)
            .then(response => {
                return response.json();
            })
            .then(data => {
                setBlockData(data);
            })
    }

    useEffect(() => {
        fetchTipHash();
    }, []);

    useEffect(() => {
        if (tipHash != '') {
            fetchBlock();
        }
    }, [tipHash]);


    return (
        <>
        <div className='container'>
            <h1>BlockTip</h1>
            <ul>
            {blockData &&
                Object.entries(blockData)
                .map( ([key, value]) => {
                    return(
                        <li key={key}><h3>{key}</h3>
                        <p>{value}</p></li>
                    )
                })
            }
            </ul>
        </div>
        </>
    )
}

export default BlockTip