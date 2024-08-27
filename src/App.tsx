import React, { useState } from 'react';
import Project from './components/Project';
import Button from './components/Buttons';
import './App.css';

const App: React.FC = () => {

  const [selectedProjects, setSelectedProjects] = useState<number[]>([]);
  const PROJECTS = [
    {
      id: 1,
      name: 'Project 1',
      status: 'Finished'
      ,
    },
    {
      id: 2,
      name: 'Project 2',
      status: 'Not Started'
    },
    {
        id: 3,
        name: 'Project 3',
        status:'Launched'
    },
    {
        id: 4,
        name: 'Project 4',
        status:'Not Started'
    },
  ];
  const [projects, setProjects] = useState(PROJECTS);

  const [isHighlighed, setHighlight] = useState<number[]>([]);
  const [selectedState, setSelectedState] = useState<string>('');

  const OnProjectClick = (projectId: number, status: string, event: any)=>{
    
    if(status !== selectedState && selectedState !== ''){
      //do nothing if another state is selected
    }
    else {
    //unselect logic
    if(selectedProjects.some(item => item === projectId)){
      setSelectedProjects(prevSelected=> prevSelected.filter(id=> id!== projectId))
      setHighlight(prevSelected=> prevSelected.filter(id=> id!== projectId));
      selectedProjects.length >1 ? setSelectedState(status) : setSelectedState('');
    }

    else{
      setSelectedState(status);
      setHighlight(prevSelected => [...prevSelected, projectId]);
      setSelectedProjects(prevSelected => [...prevSelected, projectId]);
    }
  }
  };
  
  const ChangeProjectStateClick = (event: any) => {
    let changeTo= event.target.innerText;

    if(changeTo === "Finish Project"){
      selectedProjects.map(project=> (updateProjectState(project, 'Finished')));
    }

    if(changeTo === "Launch Project"){
      selectedProjects.map(project=> (updateProjectState(project, 'Launched')));
    }
    //unselect the highlighted projects
    setHighlight([]);
    setSelectedProjects([]);
    setSelectedState('');
  };

  const updateProjectState = (id: number, newState: string) => {
    setProjects(prevProjects =>
      prevProjects.map(project =>
        project.id === id ? { ...project, status: newState } : project
      )
    );
  };

  const buttonFinish = {label: "Finish Project", onClick: ChangeProjectStateClick};
  const buttonLaunch = {label: "Launch Project", onClick: ChangeProjectStateClick};

  return (
    <div className="App">
      <header className="App-header">
        <h1>Project Management App</h1>
      </header>
      <div className="landing">
      <div className="dashboard">
      {projects.map(project => (
        <Project OnProjectClick={OnProjectClick} {...project} stateClass={project.status.toLowerCase().replace(' ', '-')} isHighlighted= { isHighlighed.includes(project.id)} isClickable={(project.status=== selectedState || selectedState === '' ) && project.status !== 'Finished'} />
      ))}
    </div>
    <div className="controls">
        <Button {...buttonLaunch} disabled={selectedState==='Launched' || selectedState === ''}></Button>
        <Button {...buttonFinish} disabled={selectedState==='Not Started'|| selectedState === ''}></Button>
    </div>
      </div>
    </div>
  );
}

export default App;
