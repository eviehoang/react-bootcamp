import Mongmong from "../assets/mongmongLost.gif";

function Lost() {
  return (
    <section className="flex items-center justify-center m-32 z-40">
      <div className="text-center">
        <img src={Mongmong} alt="Mongmong Lost" className="w-44 mr-10" />
        <h1 className="text-xl mt-4 text-white" id="headerFont">Oh my, you're lost!!</h1>
      </div>
    </section>
  );
}

export default Lost;
