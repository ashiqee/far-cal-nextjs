import ProjectsCard from "./ProjectsCard";


const AllProjects = () => {
    const projects = [
        {id:1},
        {id:2},
        {id:3},
        {id:4},
        {id:5},
    ]
    return (
        <div className="mt-10">
           

          <div className="grid grid-cols-2 2xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 gap-4">
          {
            projects.map((project)=> <ProjectsCard key={project.id} project={project}/>)
           }
          </div>
        </div>
    );
};

export default AllProjects;