import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <div className="flex justify-around">
        <div id="chatbox">
            <div className="twitch-chat">
            	<div className="chat-line">
            	    <span className="badges"><img className="badge" /></span>
            	    <span className="username">peepeepoopoo</span>
            	    <span className="colon">:</span>
            	    <span className="message">amogus</span>
		</div>
	    </div>
        </div>
        <div className="flex flex-col">
            <div className="flex border border-black rounded-md">
            	<div><h1>Settings</h1></div>
	    </div>
	</div>
    </div>
  );
}
