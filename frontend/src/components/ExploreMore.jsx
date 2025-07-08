const exploreMoreData = [
  { num: 1, title: "Top 10 BPO Companies in Chennai." },
  { num: 2, title: "Top 10 Coding Platforms to Learn Programming in 2025" },
];

function ExploreMore() {
  return (
    <div className="px-2 text-lg">
      <p className="font-semibold mb-5">ExploreMore</p>
      {exploreMoreData.map((item) => (
        <p
          className="mb-5 pb-3 font-medium border-b border-gray-300"
          key={item.num}
        >
          {item.title}
        </p>
      ))}
    </div>
  );
}

export default ExploreMore;
