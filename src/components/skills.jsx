import { Card } from "flowbite-react";

export default function Component() {
  const htmlPercent = 83;
  const cssPercent = 91;
  const javaPercent = 82;
  const reactPercent = 84;

  return (
    <div className="flex flex-col sm:gap-y-8 w-80 justify-center m-auto">
    <img src="https://media.tenor.com/38XLJoF4zYcAAAAi/mongmong-cute.gif" alt="placeholder gif" className="w-28 flex mx-auto h-full"></img>
    <Card className="glassBox">
      <div className="items-center">
        {/* Heading */}
        <h1 className="mb-1 text-2xl font-medium text-center text-teal dark:text-white mb-3">
          Skills
        </h1>

        {/* Divider */}
        <hr className="w-5/6 h-0.5 mx-auto my-4 bg-teal"></hr>

        {/* Skill List */}
        <div className="flex justify-between mb-1 w-full gap-0">
          <span className="text-base font-medium text-teal dark:text-white">
            HTML
          </span>
          <span className="text-sm font-medium text-teal dark:text-white">
            {htmlPercent}%
          </span>
        </div>
        <div className="w-full bg-darkblue rounded-full h-2.5 dark:bg-blue mb-4">
          <div
            className="bg-pink h-2.5 rounded-full"
            style={{ width: `${htmlPercent}%` }}
          ></div>
        </div>

        <div className="flex justify-between mb-1">
          <span className="text-base font-medium text-teal dark:text-white">
            CSS
          </span>
          <span className="text-sm font-medium text-teal dark:text-white">
            {cssPercent}%
          </span>
        </div>
        <div className="w-full bg-darkblue rounded-full h-2.5 dark:bg-blue mb-4">
          <div
            className="bg-blue h-2.5 rounded-full"
            style={{ width: `${cssPercent}%` }}
          ></div>
        </div>

        <div className="flex justify-between mb-1">
          <span className="text-base font-medium text-teal dark:text-white">
            Javascript
          </span>
          <span className="text-sm font-medium text-teal dark:text-white">
            {javaPercent}%
          </span>
        </div>
        <div className="w-full bg-darkblue rounded-full h-2.5 dark:bg-blue mb-4">
          <div
            className="bg-pink h-2.5 rounded-full"
            style={{ width: `${javaPercent}%` }}
          ></div>
        </div>

        <div className="flex justify-between mb-1">
          <span className="text-base font-medium text-teal dark:text-white">
            React
          </span>
          <span className="text-sm font-medium text-teal dark:text-white">
            {reactPercent}%
          </span>
        </div>
        <div className="w-full bg-darkblue rounded-full h-2.5 dark:bg-blue mb-4">
          <div
            className="bg-blue h-2.5 rounded-full"
            style={{ width: `${reactPercent}%` }}
          ></div>
        </div>
      </div>
    </Card>
    </div>
  );
}
