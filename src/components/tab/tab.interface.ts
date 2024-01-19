export interface ITabProps {
  currentTab: number;
  onTabClick: (id: number) => void;
  tabOptions: Tab[];
}

type Tab = {
  id: number;
  title: string;
};
