import * as React from 'react';
import { withState } from '../../src/lib/withState';
import { all, fromRender } from '../../src/ChainableComponent';
import Step from '../Step';

export const WithStateDemo =
  fromRender((ap: (a: number) => React.ReactNode) => (
    function () {
      return <div>Applied: {ap(5)}</div>
    }
  ))
    .render(a => (
      <div>test: {a}</div>
    ));

export default () => (
  <Step title="FromAp Demo">
    <pre className='code-sample'>
      {`import { withState, all } from 'chainable-components';`}
    </pre>
    {WithStateDemo}
  </Step>
);


