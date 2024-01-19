import { FC, useMemo } from "react";
import { Tab } from "../tab";
import { StylesWrapper } from "./projects.styles";
import useProjects from "./useProject";
import { WorkCard } from "../work-card";

export const Projects: FC = () => {
  const projects = useProjects();

  const { currentTab, setCurrentTab, tabOptions, projectInfo } = projects;

  const handleClickTab = (id: number) => {
    setCurrentTab(id);
  };

  const renderMobileContent = useMemo(() => {
    return (
      <>
        {projectInfo?.length > 0 &&
          projectInfo.map((project) => (
            <WorkCard
              id={project.id}
              key={`${project.project}-${project.id}`}
              image={project.image}
              company={project.project}
              date={project.date}
              position={project.category}
              info={project.info}
              tags={project.tags}
              link={project.link}
            />
          ))}
      </>
    );
  }, [projectInfo]);

  const renderDesktopContent = useMemo(() => {
    const { id, image, project, date, category, info, tags, link } =
      projectInfo[currentTab];
    return (
      <WorkCard
        id={id}
        key={`${project}-${id}`}
        image={image}
        company={project}
        date={date}
        position={category}
        info={info}
        tags={tags}
        link={link}
      />
    );
  }, [currentTab, projectInfo]);

  return (
    <StylesWrapper>
      <div className="tab-wrapper">
        <Tab
          currentTab={currentTab}
          onTabClick={handleClickTab}
          tabOptions={tabOptions}
        />
      </div>
      {currentTab < 0 ? (
        <div>no data available</div>
      ) : (
        <div className="card-wrapper">
          <div className="mobile-card-wrapper">{renderMobileContent}</div>
          <div className="desktop-card-wrapper">{renderDesktopContent}</div>
        </div>
      )}
    </StylesWrapper>
  );
};
