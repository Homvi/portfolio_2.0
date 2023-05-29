export default function Home() {
  let name = "ADAM HONVEDO";
  let title = "frontend developer";
  const arrayOfLettersOfName = name.split("");
  const arrayOfLettersOfTitle = title.split("");

  return (
    <>
      <section className="min-h-screen bg-gradient-to-br font-extralight from-[#071927]  to-[#181818] flex flex-col justify-center items-center">
        <div className="text-9xl  w-full flex justify-around  text-[#27465A]  mb-16 ">
          {arrayOfLettersOfName.map((letter, id) => {
            return <span key={id}>{letter}</span>;
          })}
        </div>
        <div className="text-5xl text-[#515151] w-[50%] flex justify-around">
          {arrayOfLettersOfTitle.map((letter, id) => {
            return <span key={id}>{letter}</span>;
          })}
        </div>
      </section>
      <section className="min-h-screen bg-gradient-to-br font-extralight from-[#071927]  to-[#181818] flex flex-col justify-center items-center">
        <div className="text-9xl  w-full flex justify-around  text-[#27465A]  mb-16 ">
          {arrayOfLettersOfName.map((letter, id) => {
            return <span key={id}>{letter}</span>;
          })}
        </div>
        <div className="text-5xl text-[#515151] w-[50%] flex justify-around">
          {arrayOfLettersOfTitle.map((letter, id) => {
            return <span key={id}>{letter}</span>;
          })}
        </div>
      </section>
    </>
  );
}
