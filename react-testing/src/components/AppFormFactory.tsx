import { Enquete } from "../pages/Enquete";
import { Home } from "../pages/Home";


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
    return <Enquete />;

  case 'home':
  default:
    return <Home />;
  }
}
