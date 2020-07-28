import React from 'react';

import "./DisplayNumber.scss";

/**Number component prop types */

interface numberDisplayProps { 
value: number;
}

const Number: React.FC<numberDisplayProps> = ({value}) => { 
return <div className="DisplayNumber">{value.toString().padStart(3, "0")}</div>
}

export default Number
