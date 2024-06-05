import React from 'react';
import { Link } from 'react-router-dom';

interface LightcaseOverlay_props {
    src: string;
    title: string;
    onClose: () => void;
}

const LightcaseOverlay = ({ src, title, onClose }: LightcaseOverlay_props) => {
    const overlayStyle = {
        opacity: "0.9",
        display: "block",
        cursor: "pointer"
    };

    const loadingStyle = {
        display: "none"
    };

    const caseStyle = {
        opacity: "1",
        display: "block",
        width: "335.969px",
        maxWidth: "100%",
        marginTop: "-240px",
        marginLeft: "-167px"
    };

    const contentInnerStyle = {
        opacity: "1",
        width: "335.984px",
        height: "481px",
        maxWidth: "100%"
    };

    const imageStyle = {
        maxWidth: "800px",
        maxHeight: "481px"
    };

    const infoStyle = {
        opacity: "1"
    };

    const sequenceInfoStyle = {
        display: "none"
    };

    const closeStyle = {
        opacity: "1",
        cursor: "pointer"
    };

    const navIconStyle = {
        display: "none"
    };

    return (
        <>
            <div id="lightcase-overlay" style={overlayStyle} onClick={onClose}></div>
            <div id="lightcase-loading" className="lightcase-icon-spin" style={loadingStyle}></div>

            <div id="lightcase-case" aria-hidden="false" role="dialog" style={caseStyle} className="">
                <div id="lightcase-content">
                    <div className="lightcase-contentInner" style={contentInnerStyle}>
                        <img src={src} style={imageStyle} alt={title} />
                    </div>
                </div>
                <div id="lightcase-info" style={infoStyle}>
                    <div id="lightcase-sequenceInfo" style={sequenceInfoStyle}></div>
                    <p id="lightcase-caption">{title}</p>
                </div>
            </div>
            <Link to="#" className="lightcase-icon-close" style={closeStyle} onClick={onClose}><span>Close</span></Link>
            <div id="lightcase-nav">
                <Link to="#" className="lightcase-icon-prev" style={navIconStyle}><span>Prev</span></Link>
                <Link to="#" className="lightcase-icon-next" style={navIconStyle}><span>Next</span></Link>
                <Link to="#" className="lightcase-icon-play" style={navIconStyle}><span>Play</span></Link>
                <Link to="#" className="lightcase-icon-pause" style={navIconStyle}><span>Pause</span></Link>
            </div>
        </>
    );
};

export default LightcaseOverlay;