const useFooter = () => {
  const linkedInUrl = "https://www.linkedin.com/in/anindyapramudita";
  const githubUrl = "https://www.github.com/anindyapramudita";

  const handleLinkClick = (url: string) => {
    window.open(url, "_blank");
  };

  return {
    linkedInUrl,
    githubUrl,
    handleLinkClick,
  };
};

export default useFooter;
