import { useEffect, useState } from "react";

const App = () => {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowContent(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  // Black screen for 2 seconds
  if (!showContent) {
    return <div className="min-h-screen bg-black" />;
  }

  return (
    <main className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="w-full max-w-xl bg-white rounded-2xl shadow-xl overflow-hidden">
        {/* Video */}
        <div className="aspect-video bg-black">
          <video
            src="/vid/bbl.mp4"
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
          />
        </div>

        {/* Content */}
        <div className="p-6">
          <div className="text-center">
            <h2 className="text-xl font-semibold">Video Title</h2>

            <p className="mt-3 text-gray-600">
              This is a short description of the video.
            </p>
          </div>

          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <button className="flex-1 py-3 bg-green-600 text-white rounded-lg">
              OK
            </button>

            <button className="flex-1 py-3 bg-red-600 text-white rounded-lg">
              Cancel
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default App;
