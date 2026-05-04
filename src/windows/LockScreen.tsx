import { useState, useEffect } from "react";
import dayjs from "dayjs";
import useLockStore from "#store/lock";

const LockScreen = () => {
    const { isLocked, setIsLocked } = useLockStore();
    const [time, setTime] = useState(dayjs());
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    useEffect(() => {
        const timer = setInterval(() => {
            setTime(dayjs());
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    const handleUnlock = (e: React.FormEvent | React.KeyboardEvent) => {
        if (e.key === "Enter" || e.type === "click") {
            setIsLocked(false);
            localStorage.setItem("locked", "false");
        }
    };

    return (
        <div className="fixed inset-0 z-[100] flex flex-col items-center justify-between py-20 bg-transparent transition-opacity duration-700 font-sans">
            {/* Top: Date and Time */}
            <div className="flex flex-col items-center mt-4">
                <p className="text-2xl font-medium text-white/90 drop-shadow-md tracking-wide">
                    {time.format("ddd MMM D")}
                </p>
                <h1 className="text-[7.5rem] leading-[1.1] font-bold text-white/90 tracking-tighter drop-shadow-lg -mt-2">
                    {time.format("HH:mm")}
                </h1>
            </div>

            {/* Bottom: Login Section */}
            <div className="flex flex-col items-center mb-10 space-y-4">
                <div className="flex flex-col items-center">
                    {/* Guest Avatar */}
                    <div className="flex items-center justify-center w-14 h-14 rounded-full bg-white/20 backdrop-blur-md overflow-hidden shadow-sm">
                        <svg className="w-9 h-9 text-white/90 mt-2" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                        </svg>
                    </div>
                    <h2 className="text-[13px] font-semibold text-white drop-shadow-md mt-3 tracking-wide">Guest</h2>
                </div>

                <form onSubmit={handleUnlock} onKeyDownCapture={handleUnlock} className="flex flex-col items-center space-y-3 w-48">
                    <div className="w-full space-y-2">
                        <input
                            type="text"
                            placeholder="Username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            className="w-full px-4 py-1.5 text-[13px] text-center text-white placeholder-white/70 bg-white/20 border border-white/10 rounded-full outline-none focus:bg-white/30 focus:border-white/30 transition-all backdrop-blur-md shadow-sm"
                        />
                        <input
                            type="password"
                            placeholder="Enter Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full px-4 py-1.5 text-[13px] text-center text-white placeholder-white/70 bg-white/20 border border-white/10 rounded-full outline-none focus:bg-white/30 focus:border-white/30 transition-all backdrop-blur-md shadow-sm"
                        />
                    </div>
                    <p className="text-[11px] text-white/90 tracking-wide font-medium drop-shadow-md">Press Enter to unlock</p>
                    <button type="submit" className="hidden">Submit</button>
                </form>
            </div>
        </div>
    );
}

export default LockScreen;