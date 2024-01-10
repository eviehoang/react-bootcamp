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
  const timeHeading = "text-darkblue font-medium";
  const timeBody = "text-darkblue text-sm";
  const timeTitle = "text-white font-medium underline text-2xl pb-1";
  const listStyle = "list-disc list-inside max-w-3/4";
  const timeSubtitle = "text-teal ";

  return (
    <section className="flex flex-col justify-center mx-40 gap-8 z-40">
      <h1 className="text-3xl text-white text-center underline">Resume</h1>

      <div className="max-w-full flex flex-wrap align-center justify-evenly gap-x-20">
      <div>
          {/* Education */}
          <h1 className={timeTitle}>Education</h1>
          <Timeline>
            <TimelineItem>
              <TimelinePoint />
              <TimelineContent>
                <TimelineTime className={timeHeading}>
                  December 2023
                </TimelineTime>
                <TimelineTitle className={timeSubtitle}>
                  MERN Fullstack Certification
                </TimelineTitle>
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
        </div>

        <div>
          {/* Skills */}
          <h1 className={timeTitle}>Skills</h1>
          <Timeline>
            <TimelineItem>
              <TimelinePoint />
              <TimelineContent>
                <TimelineBody className={timeBody}>
                <ul className={listStyle}>
                    <li>
                    JavaScript, GitHub, MySQL, UI/UX Design, Adobe Suite, Figma
                    </li>
                    <li>
HTML, CSS, Bootstrap, React, Node.js, Express.js, MongoDB
                    </li>
                    <li>
                    Handlebars.js, jQuery, APIs, Heroku, Git
                    </li>
                    <li>
                    Strong communication skills and ability to work effectively in a team.
                    </li>
                    <li>
                    Experience collaborating with back-end developers and designers.
                    </li>
                  </ul>
                </TimelineBody>
              </TimelineContent>
            </TimelineItem>
          </Timeline>
        </div>

        <div>
          {/* Work Experience */}
          <h1 className={timeTitle}>Experience</h1>
          <Timeline>
            <TimelineItem>
              <TimelinePoint />
              <TimelineContent>
                <TimelineTime className={timeHeading}>
                  April 2021-2023
                </TimelineTime>
                <TimelineTitle className={timeSubtitle}>
                  Production Designer @ MAGENTA INC.
                </TimelineTitle>
                <TimelineBody className={timeBody}>
                  <ul className={listStyle}>
                    <li>
                      Led branding and product development initiatives for
                      numerous collaborative projects with various licensing
                      partners at Magenta.
                    </li>
                    <li>
                      {" "}
                      Pioneered the successful launch of innovative
                      collaborative projects and seasonal merchandise offerings.{" "}
                    </li>
                    <li>
                      Performed comprehensive market and user research to gain
                      insights into consumer demographics, resulting in the
                      creation of impactful and unforgettable designs.{" "}
                    </li>
                    <li>
                      Crafted bespoke typography sets to drive branding
                      development efforts. Maintained product input, updates,
                      sample, and production management through the WFX PLM
                      system.
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
                <TimelineTitle className={timeSubtitle}>
                  Freelance Designer
                </TimelineTitle>
                <TimelineBody className={timeBody}>
                  <ul className={listStyle}>
                    <li>
                      Collaborated with diverse clients to develop visually
                      appealing designs that aligned with their brand identities
                      and objectives.
                    </li>
                    <li>
                      Utilized industry-leading software to create innovative
                      and captivating graphics, illustrations, and layouts.
                    </li>
                    <li>
                      Managed multiple projects simultaneously, prioritizing
                      tasks and ensuring timely completion of deliverables.
                    </li>
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
                <TimelineTime className={timeHeading}>
                  November 2018 - November 2019
                </TimelineTime>
                <TimelineTitle className={timeSubtitle}>
                  Workshop Instructor & Coordinator
                </TimelineTitle>
                <TimelineBody className={timeBody}>
                  <ul className={listStyle}>
                    <li>
                      Facilitated an interactive workshop tailored to industrial
                      design students, focusing on rapid visualization, product
                      ideation, and proficiency in Adobe Suite applications.
                    </li>
                    <li>
                      Curated comprehensive lesson plans to foster the growth of
                      participants' individual skill sets.
                    </li>
                    <li>
                      Customized instructional plans aligned with the student's
                      academic objectives, ensuring their progress toward their
                      specific goals.
                    </li>
                  </ul>
                </TimelineBody>
              </TimelineContent>
            </TimelineItem>
          </Timeline>
        </div>
      </div>
    </section>
  );
}
