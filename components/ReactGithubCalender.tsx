import dynamic from "next/dynamic";
import ReactGitHubCalendar from "react-ts-github-calendar";

const Calender = () => {
  const ReactGitHubCalendar = dynamic(
    () => import("react-ts-github-calendar"),
    {
      ssr: false,
    }
  );
  return (
    <div className="text-base lg:text-lg">
      <ReactGitHubCalendar responsive tooltips userName="emharsha1812" />
    </div>
  );
};

export default Calender;
