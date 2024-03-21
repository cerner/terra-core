import React, { useEffect } from 'react';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import Signature from 'terra-signature';
import styles from './SignatureExample.module.scss';

const cx = classNames.bind(styles);

const ImageSignature = ({
}) => {
    const handleFileSelect = (event) => {
        const canvas = document.getElementById("upload");
        if (canvas) {
            const ctx = canvas.getContext("2d");
            ctx.clearRect(0, 0, 1000, 100);
            const imgFile = document.getElementById("file-select").files[0];
            var img = new Image;
            img.onload = function () {
                ctx.drawImage(img, 10, 0, 200, canvas.offsetHeight);
            };
            img.src = URL.createObjectURL(imgFile);
        }
    }

    const handleClear = () => {
        const canvas = document.getElementById("upload");
        if (canvas) {
            const ctx = canvas.getContext("2d");
            ctx.clearRect(0, 0, 1000, 100);
            document.getElementById('file-select').value = "";
        }
    }

    return <div>
        <div className={cx('signature-wrapper')}>
            <Signature id="upload"/>
        </div>
        <br />
        <button type="button" onClick={handleClear}>Clear</button>
        <input className={cx('input-image')} id="file-select" type="file" accept="image/*" onChange={handleFileSelect} />
    </div>
};

export default ImageSignature;
