import Image from "next/image";
import ReactMarkdown from "react-markdown";
const LeetCodeStats = () => {
  return (
    <div className="flex flex-col justify-center items-center py-10">
      <ReactMarkdown>
        [![emharsha_1812s LeetCode
        Stats](https://leetcode-stats.vercel.app/api?username=emharsha_1812&theme=Dark)](https://github.com/JeremyTsaii/leetcode-stats)
      </ReactMarkdown>
    </div>
  );
};

export default LeetCodeStats;
