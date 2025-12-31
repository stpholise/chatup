import "./App.css";

function App() {
  return (
    <div className="bg-[#f0f1f2] w-full text-black">
      <div className="container mx-auto border-2 w-full h-screen border-gray-50">
        <div className="w-96 h-full bg-white ">
          <div className="py-4 px-4 ">
            <h2 className="text-black text-2xl leading-9 font-medium">Chats</h2>
            <div className=" w-full h-10 rounded-4xl bg-[#e4e6eb] mt-4">
              <input type="text" />
            </div>
          </div>
          <div className="chats">
            {dummyAvater.map((user) => (
              <div
                className=" border-t  border-[#e4e6eb] py-4 px-4 last:border-b hover:bg-gray-50 flex gap-4"
                key={user.id}
              >
                <div className="size-12 relative min-h-12 min-w-12 rounded-full bg-gray-100">
                  {user.active && (
                    <div className="size-3 rounded-full bg-blue-600 absolute right-0 bottom-0 border-2 border-white"></div>
                  )}{" "}
                </div>
                <div className="w-full">
                  <div className="relative">
                    <h4 className="text-black text-lg leading-6.75 capitalize font-medium">
                      {user.name}
                    </h4>
                    <p className="text-[#6a7282] text-sm leading-5">
                      {user.lastText}
                    </p>
                    <div className="absolute top-0 right-0 text-[#6a7282] text-xs">
                      {user.lastTextTime}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

const dummyAvater = [
  {
    id: "tyvuybiohoi",
    name: "Emma Wilson",
    lastText: "See you tommorow!👋",
    lastTextTime: "2m ago",
    active: true,
    avater: "",
  },
  {
    id: "waooeho",
    name: "James Chen",
    lastText: "That's a great idea!",
    lastTextTime: " 1hago",
    active: false,
    avater: "",
  },
  {
    id: ";ieoiha",
    name: "Sarah johnson",
    lastText: "Thanks for the help!",
    lastTextTime: "3h ago",
    actrive: false,
    avater: "",
  },
  {
    id: ";eioa8",
    name: "Michael Brown",
    lastText: "Lets Catchup",
    lastTextTime: "3h ago",
    active: false,
    avater: "",
  },
  {
    id: "iowien",
    name: "Lisa Anderson",
    lastText: "Thanks for the help!",
    lastTextTime: "3h ago",
    active: true,
    avater: "",
  },
];
