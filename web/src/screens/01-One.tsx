import { RiVuejsLine, RiAngularjsFill, RiReactjsFill } from 'react-icons/ri';

import { steps } from '../stores/steps';

const list = [
  {
    id: 'react',
    title: 'React',
    description: 'JavaScript library for building user interfaces',
    icon: RiReactjsFill,
  },
  {
    id: 'angular',
    title: 'Angular',
    description: 'Deliver web apps with confidence',
    icon: RiAngularjsFill,
  },
  {
    id: 'vue',
    title: 'Vue',
    description: 'Progressive JavaScript Framework',
    icon: RiVuejsLine,
  },
];

type Props = {};
function ScreenOne({}: Props) {
  const selectedFramework = steps.useState((s) => s.selectedFramework);

  return (
    <div>
      <div className="grid grid-cols-3 gap-4 mt-6">
        {list.map((item) => (
          <div
            key={item.id}
            className={`flex flex-col gap-4 p-4 border-3 bg-content3 justify-center rounded-xl select-none ${
              selectedFramework === item.id
                ? 'border-primary'
                : 'border-default-300'
            }`}
            onClick={() => {
              steps.update((s) => {
                s.selectedFramework = item.id;
              });
            }}
          >
            <div className="">
              <item.icon size={40} />
            </div>
            <h1 className="text-2xl font-bold">{item.title}</h1>
            <p className="text-default-600 font-semibold">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ScreenOne;
