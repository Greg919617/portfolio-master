import React, {Component} from 'react';

//components
import ProjectCard from './projectCard';

//images
import find12Steps from '../pictures/find12steps.png';
import gameOfLife from '../pictures/gameoflife.png';
// import leaderboard from '../pictures/leaderboard.png';
import memory from '../pictures/memory.png';



class Projects extends Component {
    constructor(props){
        super(props);
        this.state = {
            projects: [
                {
                    name: "Beatpage",
                    label: "The responsive prototype and repo for this site... very meta.",
                    img: find12Steps,
                    github: "https://github.com/Greg919617/beatpage"
                    
                },
                {
                    name: "Build A Blog",
                    label: "Building a blog with user signup and login functionality",
                    img: find12Steps,
                    github: "https://github.com/Greg919617/blogz"
                },
                
                {
                    name: "JQuery Memory Game",
                    label: "Feel like a kid again.",
                    img: memory,
                    url: 'https://codepen.io/InfiniteSet/full/EmMjZR',
                    github: 'https://github.com/tony-molumby/Jquery-Memory-Game'
                },
                {
                    name: "Game of Life",
                    label: "Cellular automaton made in ReactJS.",
                    img: gameOfLife,
                    url: 'https://codepen.io/InfiniteSet/full/xXGvbx',
                    github: 'https://github.com/tony-molumby/Game-of-Life'
                }
            ]
        }
    }

    createDisplay = (project, i) => {
        let position = "right";
        if(i % 2) position = "left";
        return (
            <ProjectCard
                name={project.name}
                url={project.url}
                github={project.github}
                label={project.label} 
                img={project.img}
                position={position}
                number={i}
                duration={this.props.duration}
                key={"project" + i}  
                id={"project" + i} 
            />
        )
    }
    
    render() {
        let {projects} = this.state;
        let projectDisplay = projects.map(this.createDisplay);

        return (
            <div id={this.props.id}>
                <div 
                    id="projects-heading"
                    data-aos="zoom-in-right"
                    data-aos-duration={this.props.duration}
                    >
                    <h2 id="projects-subheading-1">Projects
                    </h2>
                    <hr />
                    <h3 id="projects-subheading-2">
                        These items were chosen from my most recent
                        coding projects.
                    </h3>
                </div>
                {projectDisplay}
            </div>
        )
    }
} 

export default Projects;