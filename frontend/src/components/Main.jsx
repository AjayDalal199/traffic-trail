import Aside from "./Aside";
import ExploreMore from "./ExploreMore";
import PostContent from "./PostContent";

function Main() {
  return (
    <div className="grid grid-cols-[1fr_4fr_1fr] gap-14 py-18 px-4">
      <Aside />
      <PostContent />
      <ExploreMore />
    </div>
  );
}

export default Main;
