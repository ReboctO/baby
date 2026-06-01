import { useEffect, useState } from "react";
import "./App.css";

const App = () => {
  const [loading, setLoading] = useState(true);

  const inviteeName = "Maam Cha";

  useEffect(() => {
    const loadingTimer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(loadingTimer);
  }, []);

  useEffect(() => {
    if (!loading) {
      const redirectTimer = setTimeout(() => {
        window.location.href = `https://tempt-nacy.vercel.app/calendar?inviteeName=${encodeURIComponent(
          inviteeName,
        )}&source=special`;
      }, 3500);

      return () => clearTimeout(redirectTimer);
    }
  }, [loading]);

  if (loading) {
    return (
      <div className="fixed inset-0 bg-black flex flex-col items-center justify-center gap-4">
        <div className="w-12 h-12 border-4 border-white/30 border-t-white rounded-full animate-spin" />
        <p className="text-white text-lg font-medium">loading...</p>
      </div>
    );
  }

  return (
    <main className="min-h-screen w-full bg-gray-100 flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-4 sm:p-6 flex flex-col items-center">
        <h1 className="text-xl sm:text-2xl font-bold text-center mb-4">
          Hello, {inviteeName}! <span className="wave-hand">👋</span>
        </h1>

        <video
          src="/vid/bbl.mp4"
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-auto rounded-xl object-cover"
        />
      </div>
    </main>
  );
};

export default App;
