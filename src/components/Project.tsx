import React, { useState } from 'react';

export interface ProjectState {
  name: string;
}

export interface ProjectProps {
  id: number;
  name: string;
  status: string;
  stateClass: string;
  isHighlighted: boolean;
  isClickable: boolean;
  OnProjectClick: (id: number, status: string, event: any)=> void;
}

const Project: React.FC<ProjectProps> = ({ id, name, status, OnProjectClick, stateClass, isHighlighted, isClickable }) => {
  const [currentSelection, setCurrentSelection] = useState<string>();

  const projClass = `project status-${stateClass} ${isClickable? 'can-select':''}`;

  const handleProjectClick = (event: any) => {
    //no need to perform any action if status === 'Finished'
    if(status !== 'Finished'){
      OnProjectClick(id, status, event);
      }
  };

  return (
    <div className= {`${isHighlighted? projClass + ' highlight': projClass}`} onClick={handleProjectClick}>
      <h2>{name}</h2>
      <p>{status}</p>
    </div>
  );
};

export default Project;
