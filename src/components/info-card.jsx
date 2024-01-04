import { Card } from "flowbite-react";

export default function Info() {
  return (
    <Card className="max-w-lg">
      <div className="flex justify-end px-4 pt-4"></div>
      <div className="flex flex-col items-center pb-2">
        <img
          alt="Bonnie Green"
          height="96"
          src="/images/logo.svg" // Adjust the path if needed
          width="96"
          className="mb-3 rounded-full shadow-lg"
        />
        <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
          Bonnie Green
        </h5>
        <span className="text-sm text-gray-500 dark:text-gray-400">
          Visual Designer
        </span>
        <p>
          Hey there! 👋 I'm a passionate explorer of life's wonders and a
          perpetual dreamer. By day, you'll find me immersed in the world of
          code, bringing digital ideas to life. By night, I transform into a
          cosmic thinker, stargazing and pondering the mysteries of the
          universe. My heart beats to the rhythm of creativity, fueled by coffee
          and the occasional bout of wanderlust. Whether I'm crafting lines of
          code or weaving tales with words, I believe in the magic of
          expression. On weekends, you might catch me with a camera in hand,
          chasing sunsets or capturing the essence of everyday moments. I'm a
          firm believer that laughter is the best medicine, and a good book has
          the power to transport you to different realms. In a world obsessed
          with plans, I thrive in the spontaneity of life, embracing the beauty
          of the unexpected. Let's embark on this journey together, where every
          day is a blank canvas waiting to be painted with the colors of
          curiosity and joy.
        </p>
        <div className="mt-4 flex space-x-3 lg:mt-6">
          <a
            href="https://www.linkedin.com/"
            className="inline-flex items-center rounded-lg bg-cyan-700 px-4 py-2 text-center text-sm font-medium text-white hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/eviehoang/"
            className="inline-flex items-center rounded-lg border border-gray-300 bg-white px-4 py-2 text-center text-sm font-medium text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:hover:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-700"
          >
            Github
          </a>
        </div>
      </div>
    </Card>
  );
}
