import { TbBrandNextjs } from "react-icons/tb";
import { GrMysql, GrReactjs } from "react-icons/gr";
import { SiExpress } from "react-icons/si";

const SkillSection = () => {
  const skillList = [
    {
      Icon: <TbBrandNextjs />,
      name: "Next.js",
    },
    {
      Icon: <GrReactjs />,
      name: "React.js",
    },
    {
      Icon: <SiExpress />,
      name: "Express.js",
    },
    {
      Icon: <GrMysql />,
      name: "MySQL",
    },
  ];
  //   flex flex-col md:flex-row flex-wrap justify-between w-1/2
  return (
    <section className="py-8 xl:gap-16 sm:py-16">
      <div className="sm:border rounded-md sm:border-[#33353F] py-8 px-4 flex flex-col sm:flex-row items-center justify-between">
        {/* <div className=""> */}
        {skillList.map((skill, i) => (
          <div key={i} className="text-white flex flex-col items-center justify-center mx-4 xl:mx-24 my-2 sm:my-0">
            <div className="flex items-center justify-center text-4xl">{skill.Icon}</div>
            <h2 className="text-white text-base my-2">{skill.name}</h2>
          </div>
        ))}
        {/* </div> */}
      </div>
    </section>
  );
};

export default SkillSection;
