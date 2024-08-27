import React, { useState } from 'react';
import Project from './components/Project';
import Button from './components/Buttons';
import './App.css';

const BUTTON_LABEL_TEXTS = {
  launch: 'Launch Project',
  finish: 'Finish Project',
};

const PROJECT_STATES = {
  notStarted: 'Not Started',
  launched: 'Launched',
  finished: 'Finished',
  empty: '',
}

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
  const [selectedState, setSelectedState] = useState<string>(PROJECT_STATES.empty);

  const OnProjectClick = (projectId: number, status: string, event: any)=>{
    
    //do nothing if another state is selected
    if(status === selectedState || selectedState === PROJECT_STATES.empty){
      //unselect logic
    if(selectedProjects.some(item => item === projectId)){
      setSelectedProjects(prevSelected=> prevSelected.filter(id=> id!== projectId))
      setHighlight(prevSelected=> prevSelected.filter(id=> id!== projectId));
      selectedProjects.length >1 ? setSelectedState(status) : setSelectedState(PROJECT_STATES.empty);
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

    if(changeTo === BUTTON_LABEL_TEXTS.finish){
      selectedProjects.map(project=> (updateProjectState(project, PROJECT_STATES.finished)));
    }

    if(changeTo === BUTTON_LABEL_TEXTS.launch){
      selectedProjects.map(project=> (updateProjectState(project, PROJECT_STATES.launched)));
    }
    //unselect the highlighted projects
    setHighlight([]);
    setSelectedProjects([]);
    setSelectedState(PROJECT_STATES.empty);
  };

  const updateProjectState = (id: number, newState: string) => {
    setProjects(prevProjects =>
      prevProjects.map(project =>
        project.id === id ? { ...project, status: newState } : project
      )
    );
  };

  const buttonFinish = {label: BUTTON_LABEL_TEXTS.finish, onClick: ChangeProjectStateClick};
  const buttonLaunch = {label: BUTTON_LABEL_TEXTS.launch, onClick: ChangeProjectStateClick};

  return (
    <div className="App">
      <header className="App-header">
        <h1>Project Management App</h1>
      </header>
      <div className="landing">
      <div className="dashboard">
      {projects.map(project => (
        <Project OnProjectClick={OnProjectClick} {...project} stateClass={project.status.toLowerCase().replace(' ', '-')} isHighlighted= { isHighlighed.includes(project.id)} 
        isClickable={(project.status=== selectedState || selectedState === PROJECT_STATES.empty ) && project.status !== PROJECT_STATES.finished} />
      ))}
    </div>
    <div className="controls">
        <Button {...buttonLaunch} disabled={selectedState=== PROJECT_STATES.launched || selectedState === PROJECT_STATES.empty}></Button>
        <Button {...buttonFinish} disabled={selectedState=== PROJECT_STATES.notStarted || selectedState === PROJECT_STATES.empty}></Button>
    </div>
      </div>
    </div>
  );
}

export default App;
