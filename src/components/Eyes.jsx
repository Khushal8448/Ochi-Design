import { useEffect, useState } from "react";

const Eyes = () => {
  const [rotate, setRotate] = useState(0);

  useEffect(() => {
    window.addEventListener("mousemove", (e) => {
      const mouseX = e.clientX;
      const mouseY = e.clientY;

      let deltaX = mouseX - window.innerWidth / 2;
      let deltaY = mouseY - window.innerHeight / 2;

      let angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
      setRotate(angle - 180);
    });
  });

  return (
    <div className="eyes h-screen w-full overflow-hidden">
      <div
        className={`relative h-full w-full bg-[url('https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-1440x921.jpg')] bg-cover bg-center`}
      >
        <div className="absolute left-1/2 top-1/2 flex -translate-x-[50%] -translate-y-[50%] justify-center gap-10">
          <div className="flex h-[14vw] w-[14vw] items-center justify-center rounded-full bg-zinc-100">
            <div className="relative h-[58%] w-[58%] rounded-full bg-[#212121]">
              <div
                style={{
                  transform: `translate(-50%, -50%) rotate(${rotate}deg)`,
                }}
                className="line absolute left-1/2 top-1/2 h-7 w-full -translate-x-1/2 -translate-y-1/2"
              >
                <div className="h-6 w-6 rounded-full bg-zinc-100"></div>
              </div>
            </div>
          </div>
          <div className="flex h-[14vw] w-[14vw] items-center justify-center rounded-full bg-zinc-100">
            <div className="relative h-[58%] w-[58%] rounded-full bg-[#212121]">
              <div
                style={{
                  transform: `translate(-50%, -50%) rotate(${rotate}deg)`,
                }}
                className="line absolute left-1/2 top-1/2 h-7 w-full -translate-x-1/2 -translate-y-1/2"
              >
                <div className="h-6 w-6 rounded-full bg-zinc-100"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Eyes;
