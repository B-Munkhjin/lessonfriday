// import Image from "next/image";

export default function Home() {
  return (
    <div className=" flex justify-center min-h-screen items-center place-content-center  ">
      <Profile />
    </div>
  );
}
const Profile = () => {
  return (
    <div className="p-2 w-70 shadow-lg bg-gray-200 rounded-3xl">
      <div className="h-70 w-66">
        <img
          className=" h-full w-full rounded-3xl "
          src="https://i.namu.wiki/i/X9ccHYLp5F29iqnxomy-u8cM4osUzr6yERsfUKRUJrORgoIJAbF89p-WCRIjIP2nTra_xww_hz2uQtXyFc_byA.webp"
        ></img>
      </div>
      <div className="p-2 flex flex-col gap-2">
        <div className="flex gap-2 ">
          <h1 className="text-lg text-gray-950 ">Riki Nishimura</h1>
          <img src="/verify.png" alt="icon" className="w-[24px]"></img>
        </div>
        <p1 className="text-sm text-gray-700">
          K-POP IDOL who is under HYBE Entertainment and main dancer of boyband
          named ENHYPEN.
        </p1>
      </div>
      <div className="flex p-1 relative gap-6 justify-center items-center h-14 relative bottom-3">
        <div className="flex gap-2">
          <div className="flex">
            <img className="w-6 h-6" src="/person.png" alt="icon"></img>
            <p2>109</p2>
          </div>
          <div className="flex">
            <img className="w-6 h-6" src="/paper.png" alt="icon"></img>
            <p2>113</p2>
          </div>
        </div>
        <div className="flex justify-center items-center gap-2 rounded-2xl bg-[#efefef] w-[109px] h-[44px] ">
          <p3>Follow</p3>
          <img className="w-4 h-4" src="/plus.png"></img>
        </div>
      </div>
    </div>
  );
};
