import { Card } from "flowbite-react";

export default function Component() {
  return (
    <Card className="max-w-lg">
      <div className="flex justify-end px-4 pt-4"></div>
      <div className="flex flex-col items-center pb-2">
        <img
          alt="Nhi Hoang"
          src="/images/IMG_6901.jpg" 
          width="100"
          className="mb-3 rounded-full shadow-lg"
        />
        <h5 className="mb-1 text-2xl font-medium text-teal dark:text-white">
          Nhi Hoang
        </h5>
        <span className="text-sm text-gray-500 dark:text-gray-400">
          Front End Developer
        </span>
        <p className="text-sm mt-3 p-0"> 
          Hey there! 👋 I'm a passionate explorer of life's wonders and a
          perpetual dreamer. By day, you'll find me immersed in the world of
          code, bringing digital ideas to life. By night, I transform into a
          cosmic thinker, stargazing and pondering the mysteries of the
          universe. My heart beats to the rhythm of creativity, fueled by coffee
          and the occasional bout of wanderlust. 
        </p>
        <div className="mt-4 flex space-x-3 lg:mt-6">
          <a
            href="https://www.linkedin.com/"
            className="inline-flex items-center rounded-lg bg-yellow px-4 py-2 text-center text-sm font-medium text-white hover:bg-teal focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/eviehoang/"
            className="inline-flex items-center rounded-lg border bg-darkblue px-4 py-2 text-center text-sm font-medium text-white hover:bg-blue focus:outline-none focus:ring-4 focus:ring-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:hover:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-700"
          >
            Github
          </a>
        </div>
      </div>
    </Card>
  );
}
