import DiscoverButton from "@/components/DiscoverButton";
import LoungeEnterButton from "@/components/LoungeEnter";
import React from "react";
const page = () => {
  return (
    <section>
      <div className="room-wrapper h-screen h-screen-ios">
        <div
          className="relative min-w-full h-full overflow-hidden  w-[1665.6]"
          id="room"
          style={{ height: "100vh" }}
        >
          {/* <img
            alt=""
            src="https://images.ctfassets.net/o2k19efe9565/2sBu6ImuBmK19uJffLro7n/e2bb2eec31c35b61ece359316c4e44d9/20250331_BEDROOM_SSS4U_V2.png?w=100"
            className="w-full h-full absolute top-0 left-0 pointer-events-none blur-xl  transition-opacity duration-200 ease-in-out z-10 opacity-0"
          /> */}
          {/* <picture>
         <source media="(min-width: 1024px)" srcset="https://images.ctfassets.net/o2k19efe9565/2sBu6ImuBmK19uJffLro7n/e2bb2eec31c35b61ece359316c4e44d9/20250331_BEDROOM_SSS4U_V2.png" />
         <source media="(min-height: 600px)" srcset="https://images.ctfassets.net/o2k19efe9565/2sBu6ImuBmK19uJffLro7n/e2bb2eec31c35b61ece359316c4e44d9/20250331_BEDROOM_SSS4U_V2.png?w=2560" />
         <source media="(min-height: 500px)" srcset="https://images.ctfassets.net/o2k19efe9565/2sBu6ImuBmK19uJffLro7n/e2bb2eec31c35b61ece359316c4e44d9/20250331_BEDROOM_SSS4U_V2.png?w=1920" />
         <img className="w-full pointer-events-none" src="https://images.ctfassets.net/o2k19efe9565/2sBu6ImuBmK19uJffLro7n/e2bb2eec31c35b61ece359316c4e44d9/20250331_BEDROOM_SSS4U_V2.png?w=900" srcset="https://images.ctfassets.net/o2k19efe9565/2sBu6ImuBmK19uJffLro7n/e2bb2eec31c35b61ece359316c4e44d9/20250331_BEDROOM_SSS4U_V2.png?w=1024" alt="" />
      </picture> */}

          <img
            className="w-full h-full pointer-events-none object-cover"
            src="https://images.ctfassets.net/o2k19efe9565/2sBu6ImuBmK19uJffLro7n/e2bb2eec31c35b61ece359316c4e44d9/20250331_BEDROOM_SSS4U_V2.png?w=900"
            srcSet="https://images.ctfassets.net/o2k19efe9565/2sBu6ImuBmK19uJffLro7n/e2bb2eec31c35b61ece359316c4e44d9/20250331_BEDROOM_SSS4U_V2.png?w=1024"
            alt=""
          />

          <div className="absolute top-0 left-0 w-full h-full">
            <DiscoverButton
              href="/products/williamsburg-sleepover"
              label="Williamsburg Sleepover"
              position={{ left: "27.7279%", top: "85.2608%" }}
            />

            <LoungeEnterButton />

            <a
              className="block z-20 w-[11px] h-[11px]"
              href="/rooms/bedroom-night"
              data-discover="true"
              style={{
                position: "absolute",
                left: "93.2916%",
                top: "42.5185%",
              }}
            >
              <span
                className="block p-4 md:p-0 absolute -top-4 -left-4 md:static before:block before:bg-white before:rounded-full before:w-[11px] before:h-[11px] before:shadow-[0_0_10px_5px_#00000040]"
                aria-disabled="false"
                style={{ transform: "none" }}
              ></span>
              <span
                className="block absolute bg-white/5 border border-white rounded-full pointer-events-none -top-[40px] -bottom-[40px] -left-[40px] -right-[40px]"
                style={{
                  opacity: "0",
                  transform: "none",
                }}
              ></span>
              <div
                className="transition duration-150 ease-in-out block absolute top-full bg-white font-bold text-base py-2 px-4 rounded-full left-1/2 -translate-x-1/2 opacity-0 pointer-events-none"
                style={{
                  whiteSpace: "nowrap",
                  lineHeight: "1",
                  boxShadow: "rgba(0, 0, 0, 0.25) 0px 0px 10px",
                  transform: "translateX(-50%) translateY(12px)",
                }}
              >
                <span className="block absolute -top-1 left-1/2 -translate-x-1/2 z-10 rotate-45 w-2 h-2 bg-white rounded-[2px_0_0] shadow-[0_0_10px_#0000001a]"></span>
                Lights Off
              </div>
            </a>

            <a
              href="/products/4u-tee"
              data-discover="true"
              style={{
                position: "absolute",
                left: "43.8719%",
                top: "51.2307%",
                zIndex: 20,
                width: "11px",
                height: "11px",
              }}
            >
              <span
                aria-disabled="false"
                style={{
                  position: "absolute",
                  top: "-4px",
                  left: "-4px",
                  padding: "4px",
                  width: "11px",
                  height: "11px",
                  backgroundColor: "white",
                  borderRadius: "50%",
                  boxShadow: "0 0 10px 5px rgba(0, 0, 0, 0.25)",
                  transform: "none",
                }}
              ></span>
              <span
                style={{
                  position: "absolute",
                  top: "-40px",
                  bottom: "-40px",
                  left: "-40px",
                  right: "-40px",
                  backgroundColor: "rgba(255, 255, 255, 0.05)",
                  border: "1px solid white",
                  borderRadius: "50%",
                  pointerEvents: "none",
                  opacity: 0,
                  transform: "none",
                }}
              ></span>
              <div
                style={{
                  position: "absolute",
                  top: "100%",
                  left: "50%",
                  transform: "translateX(-50%) translateY(12px)",
                  backgroundColor: "white",
                  fontWeight: "bold",
                  fontSize: "1rem",
                  padding: "0.5rem 1rem",
                  borderRadius: "9999px",
                  opacity: 0,
                  pointerEvents: "none",
                  whiteSpace: "nowrap",
                  lineHeight: 1,
                  boxShadow: "0 0 10px rgba(0, 0, 0, 0.25)",
                  transition: "opacity 0.15s ease-in-out",
                }}
              >
                <span
                  style={{
                    position: "absolute",
                    top: "-1px",
                    left: "50%",
                    transform: "translateX(-50%) rotate(45deg)",
                    width: "8px",
                    height: "8px",
                    backgroundColor: "white",
                    borderRadius: "2px 0 0 0",
                    boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
                  }}
                ></span>
                Someone in Toronto T-Shirt
              </div>
            </a>
            <DiscoverButton
              href="/products/4u-hoodie-black"
              label="Someone in Toronto Hoodie"
              position={{ left: "34.3007%", top: "66.0099%" }}
            />
            <DiscoverButton
              href="/collections/some-sexy-songs-4-u"
              label="$$$4U"
              position={{ left: "6.22424%", top: "73.7788%" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default page;
