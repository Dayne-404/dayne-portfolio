import projectMeta from '../config/project-meta.json'
import ProjectCard from './ProjectCard';
import SectionHeader from './SectionHeader';
import { useState, useEffect } from 'react';

import '../styles/projects.css';

interface GitHubRepo {
	id: number;
	name: string;
	full_name: string;
	description: string | null;
	homepage: string | null;
	html_url: string;
	previewImage?: string;
	topics?: string[];
  }

function Projects() {
	const [projects, setProjects] = useState<GitHubRepo[]>([]);

	const fetchProjects = async () => {
			try {
				const response = await fetch('https://api.github.com/users/dayne-404/starred');
				const data: GitHubRepo[] = await response.json();
				
				const selectedProjects = data.map((repo) => {
					const meta = projectMeta.find(m => m.repo.toLowerCase() === repo.full_name.toLowerCase());
					return {
						...repo,
						previewImage: meta?.previewImage || '/default-project.jpg'
					};
				});
				
				console.log(selectedProjects)
				setProjects(selectedProjects);
			} catch (error) {
				console.error('Error fetching projects:', error);
			}
		};
	
		useEffect(() => {
			fetchProjects();
		}, []);
	
	return (
		<div id='projects' className="projects content-container">
			<SectionHeader number='02.' title='PROJECTS' />
			<div className="projects-container">
				{projects.map((project, index) => (
					<ProjectCard
						key={project.id}
						projectName={project.name}
						projectImg={project.previewImage || ''} // optional default or use a local map
						projectDescription={project.description || 'No description provided'}
						liveLink={project.homepage || `https://github.com/${project.full_name}`}
						gitHubLink={project.html_url}
						rightFormat={index % 2 === 1}
					/>
				))}
			</div>
		</div>
	);
}

export default Projects;
