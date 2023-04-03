import renderer from 'react-test-renderer';
import { Loading } from './Loading';

// Jest Snapshot Testing
// You may want to use Snapshot Testing sparsely
//
// https://jestjs.io/docs/snapshot-testing

// Update snapshot when the component changes
// jest --updateSnapshot
// npm test -- -u

// toMatchSnapshot() vs toMatchInlineSnapshot()
// --> Work with external files in __snapshots__
// --> vs put the snapshots inline in the same file

describe('Loading screen', () => {
  it('renders "Loading... by default', () => {
    const tree = renderer
      .create(<Loading />)
      .toJSON();

    expect(tree).toMatchSnapshot();

    // If you do not care about certain parts of the render:
    // expect(user).toMatchSnapshot({
    //   createdAt: expect.any(Date),
    //   id: expect.any(Number),
    // });

    // or replace manually before toMatchSnapshot:
    // tree = tree.replace(/\w{32}/, 'ID')
  })

  it('can change the spinner color', () => {
    // TODO: should probably have a wired color picker of sorts
    const component = renderer.create(<Loading />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();

    const testInstance = component.root;
    const colorInput = testInstance.findByProps({placeholder: "Pick a web color"})

    renderer.act(() => {
      colorInput.props.onChange({target: {value: 'green'}})
    })
    expect(colorInput.props.value).toEqual('green');

    tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  })

  it('can set a custom "Loading..." message', () => {})
})
