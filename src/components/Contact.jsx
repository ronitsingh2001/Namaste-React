const Contact = () => {
  return (
    <div>
      <h1 className="p-4 m-4 font-bold text-2xl">Contact Us</h1>
      <form
        action=""
        className="w-4/12 mx-auto"
      >
        <div className="ps-4">
          <input
            type="text"
            placeholder="Name"
            className="border-black border rounded-md w-4/12 p-2"
          />
        </div>
        <div className="p-4">
          <textarea
            type="text"
            placeholder="Message"
            className="border-black border rounded-md p-2 w-full"
            rows="5"
          ></textarea>
        </div>
        <button className="ms-4 bg-[#eee] border-black border text-md font-bold px-2 py-1 rounded-md">
          Submit
        </button>
      </form>
    </div>
  );
};
export default Contact;
