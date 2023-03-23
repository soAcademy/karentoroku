import Navbar from "../components/navbar/Navbar";

const ErrorPage = () => {
  return (
    <>
      <Navbar />
      <div className="mt-5 w-full">
        <div className="">
          <div className="mx-5 flex flex-col gap-5">
            <h1 className="mt-10 text-3xl font-bold">Oops!</h1>
            <p>Sorry, an unexpected error has occurred.</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ErrorPage;
