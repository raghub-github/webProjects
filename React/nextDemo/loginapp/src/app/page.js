
export default function Home() {
  return (
    <>
      <div className="container max-w-10 flex gap-6 p-5 ">
        <button class="bg-blue-500 align-middle self-center hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
          <a href="/signup">Signup</a>
        </button>
        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
          <a href="/login">Login</a>
        </button>
      </div>
    </>
  );
}
