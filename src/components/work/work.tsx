import { FC, useMemo } from "react";
import { IWorkProps } from "./work.interface";
import { StylesWrapper } from "./work.styles";
import { Tab } from "../tab";
import useWork from "./useWork";
import { WorkCard } from "../work-card";

export const Work: FC<IWorkProps> = () => {
  const work = useWork();

  const { currentTab, setCurrentTab, tabOptions, workInfo } = work;

  const handleClickTab = (id: number) => {
    setCurrentTab(id);
  };

  const renderMobileContent = useMemo(() => {
    return (
      <>
        {workInfo?.length > 0 &&
          workInfo.map((work) => (
            <WorkCard
              id={work.id}
              key={`${work.company}-${work.id}`}
              image={work.image}
              company={work.company}
              date={work.date}
              position={work.position}
              info={work.info}
              tags={work.tags}
              link={work.link}
              additionalInfo={work.additionalInfo}
            />
          ))}
      </>
    );
  }, [workInfo]);

  const renderDesktopContent = useMemo(() => {
    const {
      id,
      image,
      company,
      date,
      position,
      info,
      tags,
      link,
      additionalInfo,
    } = workInfo[currentTab];
    return (
      <WorkCard
        id={id}
        key={`${company}-${id}`}
        image={image}
        company={company}
        date={date}
        position={position}
        info={info}
        tags={tags}
        link={link}
        additionalInfo={additionalInfo}
      />
    );
  }, [currentTab, workInfo]);

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
