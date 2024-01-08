import {
  Timeline,
  TimelineBody,
  TimelineContent,
  TimelineItem,
  TimelinePoint,
  TimelineTime,
  TimelineTitle,
} from "flowbite-react";

export default function Component() {
  const timeHeading = "text-white";
  const timeBody = "text-darkblue";
  const timeTitle = "text-white font-medium underline text-2xl pb-1";
  const listStyle = "list-disc list-inside max-w-3/4";
  const timeSubtitle = "text-teal"

  return (
    <section className="flex items-center flex-col justify-center m-8 gap-8 z-40">
      <h1 className="text-2xl text-white underline">Resume</h1>
      {/* Education */}
      <div>
      <h1 className={timeTitle}>Education</h1>
      <Timeline>
        <TimelineItem>
          <TimelinePoint />
          <TimelineContent>
            <TimelineTime className={timeHeading}>December 2023</TimelineTime>
            <TimelineTitle className={timeSubtitle}>MERN Fullstack Certification</TimelineTitle>
            <TimelineBody className={timeBody}>
              Full-stack MERN Bootcamp through UC Berkeley Extension.
            </TimelineBody>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelinePoint />
          <TimelineContent>
            <TimelineTime className={timeHeading}>June 2019</TimelineTime>
            <TimelineTitle className={timeSubtitle}>
              San Francisco State University: <u>B.S Industrial Design</u>
            </TimelineTitle>
            <TimelineBody className={timeBody}>
              Graduated with a B.S in Industrial Design.
            </TimelineBody>
          </TimelineContent>
        </TimelineItem>
      </Timeline>

      {/* Work Experience */}
      <h1 className={timeTitle}>Experience</h1>
      <Timeline>
        <TimelineItem>
          <TimelinePoint />
          <TimelineContent>
            <TimelineTime className={timeHeading}>April 2021-2023</TimelineTime>
            <TimelineTitle className={timeSubtitle}>Production Designer @ MAGENTA INC.</TimelineTitle>
            <TimelineBody className={timeBody}>
              <ul className={listStyle}>
                <li>
                  Led branding and product development initiatives for numerous
                  collaborative projects with various licensing partners at
                  Magenta.
                </li>
                <li>
                  {" "}
                  Pioneered the successful launch of innovative collaborative
                  projects and seasonal merchandise offerings.{" "}
                </li>
                <li>
                  Performed comprehensive market and user research to gain
                  insights into consumer demographics, resulting in the creation
                  of impactful and unforgettable designs.{" "}
                </li>
                <li>
                  Crafted bespoke typography sets to drive branding development
                  efforts. Maintained product input, updates, sample, and
                  production management through the WFX PLM system.
                </li>
              </ul>
            </TimelineBody>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelinePoint />
          <TimelineContent>
            <TimelineTime className={timeHeading}>
              December 2019 - April 2021
            </TimelineTime>
            <TimelineTitle className={timeSubtitle}>Freelance Designer</TimelineTitle>
            <TimelineBody className={timeBody}>
              <ul className={listStyle}>
                <li>
                  Collaborated with diverse clients to develop visually
                  appealing designs that aligned with their brand identities and
                  objectives.
                </li>
                <li>
                  Utilized industry-leading software to create innovative and
                  captivating graphics, illustrations, and layouts. 
                </li>
                <li>Managed
                  multiple projects simultaneously, prioritizing tasks and
                  ensuring timely completion of deliverables.</li>
                <li>
                  Maintained effective communication with clients, gathering
                  feedback and incorporating revisions to meet their design
                  requirements.
                </li>
              </ul>
            </TimelineBody>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelinePoint />
          <TimelineContent>
            <TimelineTime className={timeHeading}>November 2018 - November 2019</TimelineTime>
            <TimelineTitle className={timeSubtitle}>Workshop Instructor & Coordinator</TimelineTitle>
            <TimelineBody className={timeBody}>
              <ul className={listStyle}>
                <li>Facilitated an interactive workshop tailored to industrial design students, focusing on rapid visualization, product ideation, and proficiency in Adobe Suite applications.</li>
                <li>Curated comprehensive lesson plans to foster the growth of participants' individual skill sets.</li>
                <li>Customized instructional plans aligned with the student's academic objectives, ensuring their progress toward their specific goals.</li>
              </ul>
            </TimelineBody>
          </TimelineContent>
        </TimelineItem>
      </Timeline>
      </div>
    </section>
  );
}
