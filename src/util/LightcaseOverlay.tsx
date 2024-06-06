import { Link } from 'react-router-dom';
import { getImagUrl } from '../helpers/getImage';

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

    return (
        <>
            <div id="lightcase-overlay" style={overlayStyle} onClick={onClose}></div>
            <div id="lightcase-loading" className="lightcase-icon-spin" style={loadingStyle}></div>

            <div id="lightcase-case" aria-hidden="false" role="dialog" style={caseStyle} className="">
                <div id="lightcase-content">
                    <div className="lightcase-contentInner" style={contentInnerStyle}>
                        <img src={getImagUrl(src)} style={imageStyle} alt={title} />
                    </div>
                </div>
                <div id="lightcase-info" style={infoStyle}>
                    <div id="lightcase-sequenceInfo" style={sequenceInfoStyle}></div>
                    <p id="lightcase-caption">{title}</p>
                </div>
            </div>
            <Link to="#" className="lightcase-icon-close" style={closeStyle} onClick={onClose}><span>Close</span></Link>
        </>
    );
};

export default LightcaseOverlay;