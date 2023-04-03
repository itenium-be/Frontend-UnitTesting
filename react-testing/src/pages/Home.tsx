import { Loading } from "../components/Loading";

export function Home() {
  return (
    <>
      <div className="col-6">
        <h1>Welcome to React Testing</h1>
        <ul>
          <li>Over at <code>/src/date-holidays</code> we have an exercise on TDD & basic Jest</li>
          <li>At <code>confac</code> there are Jest exercises with Node, Express, TypeScript and Mongo</li>
        </ul>

        <br />
        <h2>This is Part 2</h2>
        React Component testing with <code>Jest</code> and <code>react-testing-library</code>

        <br />
        <br />
        <h3>Wired Elements</h3>
        See the <code>WiredInput</code> for type safety workaround.


      </div>
      <div className="col-6">
        <h1>Exercises 1</h1>
        <h3>The Loading Component</h3>
        <Loading />
      </div>
    </>
  );
}

