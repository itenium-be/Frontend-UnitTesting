import { SampleCard } from "../pages/SampleCard";
import { Home } from "./Home";


export type Exercises = 'home' | 'sample-card';


type AppFormFactoryProps = {
  page: Exercises;
};


export function AppFormFactory({ page }: AppFormFactoryProps) {
  return (
    <ComponentFactory page={page} />
  )
};




function ComponentFactory({ page }: AppFormFactoryProps) {
  switch (page) {
  case 'sample-card':
    return <SampleCard />;

  case 'home':
  default:
    return <Home />;
  }
}
