import React from 'react';
import ProjectContainer from '../ProjectContainer';

export default function Projects() {
  return (
    <div>
      <h1>Here Are Some of My Projects</h1>
      <p>
          Coming Soon!
          <a>Project 1 </a>
          <ul>Description of project</ul>
          <a>Project 2 </a>
          <ul>Description of project</ul>
          <a>Project 3 </a>
          <ul>Description of project</ul>
          <a>Project 4 </a>
          <ul>Description of project</ul>
      </p>
      <div>
        <ProjectContainer />
      </div>
    </div>
     
  );
}