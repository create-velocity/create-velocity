import { useMemo, useState } from 'react';
import { Screens } from './screens';
import { Button } from '@nextui-org/react';
import { RiArrowLeftLine, RiArrowRightLine } from 'react-icons/ri';

function App() {
  const [currentScreen, setCurrentScreen] = useState(0);

  const Screen = useMemo(() => {
    return Screens[currentScreen];
  }, [currentScreen]);

  return (
    <div className="flex items-center justify-center pt-24">
      <div className="w-[800px]">
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-4 justify-between">
            <div>
              <h1 className="text-4xl font-bold">{Screen.title}</h1>
              <p className="text-default-500 font-semibold mt-1">
                {Screen.description}
              </p>
            </div>

            <div className="flex gap-2">
              {currentScreen > 0 && (
                <Button
                  color="primary"
                  disableRipple
                  onClick={() => {
                    if (currentScreen === Screens.length - 1) {
                      setCurrentScreen(0);
                    }
                    setCurrentScreen((prev) => prev - 1);
                  }}
                  startContent={<RiArrowLeftLine />}
                >
                  Previous
                </Button>
              )}

              <Button
                color="primary"
                disableRipple
                onClick={() => {
                  setCurrentScreen((prev) => prev + 1);
                }}
                endContent={<RiArrowRightLine />}
              >
                Next
              </Button>
            </div>
          </div>

          <div className="w-full">
            <Screen.component />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
