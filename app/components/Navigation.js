export default function Navigation({ children }) {
  return (
    <div className="flex flex-row items-center p-24">
      <div className="basis-1/4">
        <p className="font-bold">André Thiele</p>
        <p className="font-bold text-slate-500">Welcome</p>
      </div>

      <div className="basis-3/4 flex flex-row justify-end space-x-12">
        <div className="border-solid p-2 border-2 rounded-lg border-transparent hover:border-white transition ease-in-out">
          <a className="font-bold">blog</a>
        </div>
        <div className="border-solid p-2 border-2 rounded-lg border-transparent hover:border-white transition ease-in-out">
          <a className="font-bold">work</a>
        </div>
        <div className="border-solid p-2 border-2 rounded-lg border-transparent hover:border-white transition ease-in-out">
          <a className="font-bold">contact</a>
        </div>
      </div>
    </div>
  );
}
