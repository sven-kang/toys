import React from 'react';
import './HeaderLabel.css';

interface Props {
  label: string;
  subtitle: string;
}

const HeaderLabel: React.FC<Props> = ({label, subtitle}) => {
  return (
    <div className="HeaderLabel" data-testid="header-label">
      <h2 className="HeaderLabel__main" data-testid="header-label-main">
        {label},&nbsp; 
      </h2>
      <h4 className="HeaderLabel__subtitle" data-testid="header-label-subtitle">
        {subtitle}
      </h4>
    </div>
  );
}

export default HeaderLabel;
