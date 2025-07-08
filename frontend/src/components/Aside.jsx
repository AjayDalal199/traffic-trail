function Aside() {
  return (
    <aside className="sticky top-32 w-64 max-h-fit rounded-xl border border-gray-300 bg-white">
      <div
        className="flex items-center justify-between p-4 border-b
      border-gray-300"
      >
        <h2 className="text-xl font-bold">Table of Contents</h2>
      </div>
      <div className="overflow-y-visible">
        <ol className="list-decimal list-inside space-y-2 text-xl text-gray-800 p-4">
          <li>What is Social Bookmarking?</li>
          <li>What Are Social Bookmarking Sites?</li>
          <li>Uses of these link sharing sites</li>
          <li>How to Do Social Bookmarking?</li>
          <li>How Does Link Sharing Help with Your Website</li>
        </ol>
      </div>
    </aside>
  );
}

export default Aside;
