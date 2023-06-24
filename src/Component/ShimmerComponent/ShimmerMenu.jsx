const shimmerMenuPage = () => {
  return (
    <>
      <div className="shimmerInfo py-12 px-6 md:px-16 bg-slate-600 w-screen flex ">
        <div className="shimmerLeft  bg-white flex flex-col  ">
          <div className="w-[160px] bg-black inline-block"></div>
          <div className="w-[102px]"></div>
          <div className="w-[100px]"></div>
        </div>
        <div className="shimmerRight">
          <div></div>
          <div></div>
        </div>
      </div>
      <div className="basicInformation flex md:flex-row justify-between px-6 md:px-16 py-6 border-b-2 ">
        <div>
          <h1 className="font-bold md:text-[28px] bg-slate-600 "></h1>
          <p className="md:text-[16px]"></p>
        </div>
        <div>
          <div className="border-2 rounded text-center p-1">
            <p className="border-b-2 text-[#3D9B6D] gap-1 flex font-semibold justify-center py-1"></p>
            <p className="pt-1"></p>
          </div>
        </div>
      </div>
      <div className="time costForTwo border-b-2 flex justify-between px-6 md:px-16 py-4 gap-20">
        <p className="md:text-[16px] flex gap-1 items-center"></p>
        <p className="md:text-[16px]"></p>
      </div>
    </>
  );
};

export default shimmerMenuPage;
