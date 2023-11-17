import { RiVuejsLine, RiAngularjsFill, RiReactjsFill } from 'react-icons/ri';

import { steps } from '../stores/steps';

type Props = {};
function ScreenTwo({}: Props) {
  const selectedFramework = steps.useState((s) => s.selectedFramework);

  return (
    <div>
      <div className="grid grid-cols-3 gap-4 mt-6"></div>
    </div>
  );
}

export default ScreenTwo;
