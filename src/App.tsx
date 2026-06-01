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
      }, 1500);

      return () => clearTimeout(redirectTimer);
    }
  }, [loading]);

  if (loading) {
    return (
      <div className="fixed inset-0 bg-black flex items-center justify-center">
        <p className="text-white text-lg">Loading</p>
      </div>
    );
  }

  return (
    <main className="min-h-screen w-full bg-gray-100 flex items-center justify-center p-3 sm:p-6">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-4 flex flex-col items-center">
        <video
          src="/vid/bbl.mp4"
          autoPlay
          muted
          loop
          playsInline
          className="w-full rounded-xl"
        />
      </div>
    </main>
  );
};

export default App;
