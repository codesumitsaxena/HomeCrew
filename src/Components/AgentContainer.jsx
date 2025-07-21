import React from 'react';
import Subcatergory from './Subcatergory';
import Agent from './Agent';

function AgentPage() {
  return (
    <div className="agent-layout row">
      <div className="left-panel col-lg-4">
        <Subcatergory />
      </div>
      <div className="right-panel col-lg-8">
        <Agent />
      </div>
    </div>
  );
}

export default AgentPage;
