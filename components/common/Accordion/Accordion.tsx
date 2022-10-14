import gsap from "gsap";
import { FC, useEffect, useRef, useState } from "react";
import { useInView } from "react-intersection-observer";
import { dateParser } from "utils/dateParser";
import Markdown from "../Markdown/Markdown";
import styles from "./Accordion.module.scss";

type AccordionProps = {
  title: string;
  body: string;
  delay: number;
  data: any;
};

const Accordion: FC<AccordionProps> = ({ title, body, delay, data }) => {
  const accordionContentRef = useRef<HTMLDivElement>(null);
  const [accordionContentHeight, setAccordionContentHeight] = useState(0);
  const [isAccordionOpen, setIsAccordionOpen] = useState(false);
  const labelRef = useRef<HTMLHeadingElement>(null);
  const crossRef = useRef<HTMLDivElement>(null);
  const barRef = useRef<HTMLHRElement>(null);
  const { ref, inView } = useInView({ triggerOnce: true });
  const [tl] = useState(() =>
    gsap.timeline({
      paused: true,
      defaults: { duration: 1, delay: 0, ease: "power3.inOut" },
    })
  );

  useEffect(() => {
    tl.to(gsap.utils.selector(labelRef.current)("span"), {
      translateY: 0,
      opacity: 1,
      delay: delay * 0.1,
      stagger: { amount: 0.1 },
    });
    tl.to(crossRef.current, {
      delay: -0.6,
      opacity: 1,
    });
    tl.to(barRef.current, {
      delay: -0.6,
      scaleX: 1,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (inView) {
      tl.play();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView]);

  const openAccordion = () => {
    setIsAccordionOpen(!isAccordionOpen);
  };

  const initAccordionHeight = () => {
    if (accordionContentRef.current) {
      setAccordionContentHeight(accordionContentRef.current?.clientHeight);
    }
  };

  useEffect(() => {
    initAccordionHeight();
    document.addEventListener("resize", initAccordionHeight);

    return () => {
      document.removeEventListener("resize", initAccordionHeight);
      setAccordionContentHeight(0);
    };
  }, []);

  return (
    <div ref={ref} className="relative w-full">
      <p
        ref={labelRef}
        onClick={openAccordion}
        className={`flex transition-colors items-center duration-300 select-none ${
          isAccordionOpen ? " text-red-300" : ""
        } cursor-pointer`}
      >
        {title}
      </p>
      <div
        className="relative overflow-hidden pb-4 md:pb-8"
        style={{
          height: isAccordionOpen ? accordionContentHeight : 0,
          transition: "height 0.35s cubic-bezier(0.9, 0, 0.25, 1)",
        }}
      >
        <div
          ref={accordionContentRef}
          className="absolute py-4 md:py-8 lg:pr-12"
        >
          <Markdown className="space-y-4">{body}</Markdown>
          <div className="my-5 text-xs">
            <span className=" underline">Details</span>
            <ul className="my-5 font-playfairDisplay border rounded-lg p-4 bg-slate-600">
              <li>
                <span>database user : </span>
                {data.database_user}
              </li>
              <li>
                <span>database query time : </span>
                {data.query_time} s
              </li>
              <li>
                <span>rows examined : </span>
                {data.rows_examined}
              </li>
              <li>
                <span>rows sent : </span>
                {data.rows_sent}
              </li>
            </ul>
          </div>
          <span className=" text-xs italic font-mono">
            {dateParser(data.date_hour)}
          </span>
        </div>
      </div>
      <div
        ref={barRef}
        className={`transform scale-x-0 origin-left bg-gradient-to-r from-white via-black to-white w-full h-[1px] opacity-70`}
      />
      <div
        ref={crossRef}
        onClick={openAccordion}
        className={`${
          styles.cross
        } flex items-center transition-colors duration-300 cursor-pointer bg-red-500 rounded-full ${
          isAccordionOpen ? styles.crossOpen : "!bg-blue-primary"
        } opacity-0`}
      >
        <span className={styles.crossTop} />
        <span className={styles.crossBottom} />
      </div>
    </div>
  );
};

export default Accordion;
