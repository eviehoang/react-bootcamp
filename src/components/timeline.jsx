import {
  Button,
  Timeline,
  TimelineBody,
  TimelineContent,
  TimelineItem,
  TimelinePoint,
  TimelineTime,
  TimelineTitle,
} from "flowbite-react";
import { HiArrowNarrowRight } from "react-icons/hi";

export default function Component() {
  const timeHeading = "text-white";
  const timeBody = "text-darkblue";

  return (
    <Timeline>
      <TimelineItem>
        <TimelinePoint />
        <TimelineContent>
          <TimelineTime className={timeHeading}>February 2022</TimelineTime>
          <TimelineTitle>Application UI code in Tailwind CSS</TimelineTitle>
          <TimelineBody className={timeBody}>
            Get access to over 20+ pages including a dashboard layout, charts,
            kanban board, calendar, and pre-order E-commerce & Marketing pages.
          </TimelineBody>
          <Button color="gray">
            Learn More
            <HiArrowNarrowRight className="ml-2 h-3 w-3" />
          </Button>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelinePoint />
        <TimelineContent>
          <TimelineTime className={timeHeading}>March 2022</TimelineTime>
          <TimelineTitle>Marketing UI design in Figma</TimelineTitle>
          <TimelineBody className={timeBody}>
            All of the pages and components are first designed in Figma and we
            keep a parity between the two versions even as we update the
            project.
          </TimelineBody>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelinePoint />
        <TimelineContent>
          <TimelineTime className={timeHeading}>April 2022</TimelineTime>
          <TimelineTitle>E-Commerce UI code in Tailwind CSS</TimelineTitle>
          <TimelineBody className={timeBody}>
            Get started with dozens of web components and interactive elements
            built on top of Tailwind CSS.
          </TimelineBody>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  );
}
