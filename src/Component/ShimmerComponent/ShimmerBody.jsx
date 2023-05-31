const Shimmer = () => {
  return (
    <>
      <div className="card w-[250px] rounded-md border bg-[#f0f0f0] m-4">
        <div className="h-[200px] w-full rounded-t-md object-cover"></div>

        <div className="p-4">
          <h1 className="inline-flex items-center text-lg font-semibold"></h1>
          <p className="mt-3 text-sm text-gray-600"></p>
          <div className="mt-4">
            <span className="mb-2 mr-2 inline-block rounded-full bg-[#ffffff] px-3 py-1  font-bold text-gray-900"></span>
            <span className="mb-2 mr-2 inline-block rounded-full bg-[#ffffff] px-3 py-1  font-semibold text-gray-900"></span>
            <span className="mb-2 mr-2 inline-block rounded-full bg-[#ffffff] px-3 py-1 font-semibold text-gray-900"></span>
          </div>
          <button type="button" className="mt-4 w-full bg-[#ffffff] "></button>
        </div>
      </div>
    </>
  );
};

export default Shimmer;
