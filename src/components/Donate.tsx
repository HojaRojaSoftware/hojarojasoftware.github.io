import React from 'react';
import './../styles/About.css';
import copy from 'clipboard-copy';

interface CopyButtonProps {
    walletName: string;
    addressToCopy: string;
}

const CopyButton: React.FC<CopyButtonProps> = (props) => {
    const handleCopy = () => {
        copy(props.addressToCopy);
        alert('Text copied to clipboard: ' + props.addressToCopy);
    };

    return (
        <div style={{ display: 'flex', flexDirection: "row", alignItems: 'center' }}>
            <p style={{ wordBreak: 'break-all' }}>{props.walletName}: {props.addressToCopy}</p>
            <button onClick={handleCopy} style={{}}>Copy {props.walletName}</button>
        </div>
    );
};

const Donate: React.FC = () => {
    return (
        <section>
            <h2>Donate to support</h2>
            <p>If you happen to like my apps and would like to express your gratitude and just to support my work overall, you can donate in the following ways:</p>

            <h3>TBA</h3>



        </section>
    );
};

export default Donate;