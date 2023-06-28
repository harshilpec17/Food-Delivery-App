const shimmerMenuPage = () => {
  return (
    <>
      <div className="animate-pulse">
        <div className="shimmerInfo pt-12 pb-4 px-6 md:px-16 w-screen flex justify-between border-b-2 ">
          <div className="shimmerLeft flex flex-col gap-2 w-60">
            <div className=" w-40 h-8 bg-gray-400 rounded"></div>
            <div className=" w-32 h-6 bg-gray-400 rounded"></div>
            <div className=" w-24 h-6 bg-gray-400 rounded"></div>
          </div>
          <div className="bg-gray-400 animate-pulse rounded text-center p-1 w-16 h-20">
            <p className="border-b h-8"></p>
            <p className="pt-1"></p>
          </div>
        </div>

        <div className=" w-screen flex justify-between md:px-16 px-6 py-4 border-b-2 ">
          <div className=" w-32 h-8 bg-gray-400 animate-pulse rounded"></div>
          <div className=" w-28 h-8 bg-gray-400 animate-pulse rounded"></div>
        </div>

        <div className="md:px-14 flex flex-col md:flex-row items-left justify-between border-b-2 py-4">
          {Array(4)
            .fill("discountWrapper")
            .map((element, index) => (
              <div
                key={index}
                className="discountWrapper bg-gray-400 animate-pulse"
              >
                <div className="discount px-6 md:px-2 py-3 w-max">
                  <div className="px-24 py-10 card rounded"></div>
                </div>
              </div>
            ))}
        </div>
        {Array(3)
          .fill("shimmerMenuItems")
          .map((element, index) => (
            <div
              key={index}
              className="shimmerMenuItems pt-12 pb-4 px-6 md:px-16 w-screen flex justify-between border-b-2 "
            >
              <div className="shimmerLeft flex flex-col gap-2 w-screen">
                <div className="  w-72 h-8 bg-gray-400 rounded"></div>
                <div className="  w-20 h-6 bg-gray-400 rounded"></div>
                <div className=" w-44 h-6 bg-gray-400 rounded"></div>
              </div>
              <div className="bg-gray-400 animate-pulse rounded text-center p-1 w-24 h-24"></div>
            </div>
          ))}
      </div>
    </>
  );
};

export default shimmerMenuPage;
