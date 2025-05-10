import Image from "next/image";
import Link from "next/link";
import React from "react";
import data from "../../products.json";
const page = () => {
  return (
    <div className='lg:py-10 lg:px-16 flex items-center justify-center relative top-0 left-0 w-full min-h-[400px] lg:h-screen h-[calc(var(--vh,1vh)*100)] bg-[url("https://mschfplaysvenmo.com/img/textured-background.jpg")] bg-no-repeat bg-cover bg-center'>
      <div className="md:p-[15px] block relative h-full max-w-full w-[1312px] p-[5px]">
        <div className="lg:block hidden absolute top-0 left-0 w-full h-full rounded-[9px] shadow-[inset_#898887_1.77px_1.77px_1.33px_0,inset_var(--color-white)_0_0_0_4px] blur-[0.89px]"></div>
        <div className="grid items-center justify-center h-full w-full grid-rows-[100%] grid-cols-[365px] sm:grid-cols-[685px] md:items-stretch md:justify-stretch md:gap-[13px] md:grid-cols-[auto_685px_auto]">
          <div className="relative hidden md:block">
            <div className="absolute top-0 left-0 w-full h-full rounded-[9px] shadow-[inset_#898887_1.77px_1.77px_1.33px_0,inset_var(--color-white)_0_0_0_4px] blur-[0.89px]"></div>{" "}
            <div className="absolute w-full h-full p-[5px] blur-[0.6px]">
              <div
                className="side-panel__border--inner__top"
                style={{
                  position: "absolute",
                  top: "7px",
                  left: "50%",
                  transform: "translate3d(calc(-50% - 1px), 0, 0)",
                  height: "27px",
                  width: "calc(100% - 14px)",
                  backgroundImage: `
      url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAA2CAYAAADDGGkNAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAHqSURBVHgB7ZZLbsIwEIbHj8QJodQpD6ll0yP0CD1CbwBHoCeAVXl0UThB74Eq0R2nIq7tPMiEUIFAVRf+JWQ8cf5MEs+XAXBycjoqUg28z9/GCshIKZBwgZDxfDr90JERWkAIGk8VRyYUhjrTwogxBpxz8Dyu5/Qsc14XpJRawzAModFo2NHzPBtPb1KV07HzagQZ75JkRQkdGwNjFscxdDpduGndgPAFUEZxBgpq3tLeHGkxmy1FIAZSxrLf78P9wwNIKUEIkWVcdlM15nqiFDg5HQptlMlkIvW2eoErqDBeLBZPoHabS+GTa195avepryMZS5mQssHs9d83u1lr1uQcydcXxozxJ8MD3/czLjD9O49otRmLIPhuRtFzq3ULUTOyEDIlTKpVX2VQXYyUjKOo+dputze9Xk9jIraZm4zNI9kD4ZRxf61C2+32sdvtjjTVbg108udmmUYzsiUJJJCi1fwv4vZQkoHKyelPhfbxtbogZGy6IEJJbRdUVg6Z8rEyhHIVJa17hiHT4GGcZZxgkK4tn4C/9QR96THhCmNDtCAIis6HG8KRY+WJGYHxSnDGYRCuNHzGnU4bDOF84dvezWahDtoUhBySTVSeeZWJX+v1Unc+g/gulimEKJxFZOK6ICcnp3+iH5k6cvt1x0RZAAAAAElFTkSuQmCC),
      url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAA2CAYAAAD6f9hWAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAC5SURBVHgB7ZM9D8IgEIbvKEmnOtkBFmLt/7SLQf8nM07MJxRtoWmIcWvCSwgQHu7IfQBU/SR8PjSVAM4YgyLQdV0ZkFIGT37ue+KXYYh3uHwrg9Fau3lKu+CxhVrfpxLAG9bcikDbtkBEgIjLmgHnvs+CN8dvPkeYK6Vym1le/NYYQ5jcwWosss65Car+76xv4nxnnSAvdYA06FwIAUUX13H8JMab9GN9G9OKr9BZoUgo+ev2XHUMvQFkXDgQD2j5CQAAAABJRU5ErkJggg==),
      url(https://mschfplaysvenmo.com/_nuxt/img/side-top-center.2755ffe.png),
      url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAA2CAYAAAD6f9hWAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAC5SURBVHgB7ZM9D8IgEIbvKEmnOtkBFmLt/7SLQf8nM07MJxRtoWmIcWvCSwgQHu7IfQBU/SR8PjSVAM4YgyLQdV0ZkFIGT37ue+KXYYh3uHwrg9Fau3lKu+CxhVrfpxLAG9bcikDbtkBEgIjLmgHnvs+CN8dvPkeYK6Vym1le/NYYQ5jcwWosss65Car+76xv4nxnnSAvdYA06FwIAUUX13H8JMab9GN9G9OKr9BZoUgo+ev2XHUMvQFkXDgQD2j5CQAAAABJRU5ErkJggg==),
      url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAA2CAYAAADDGGkNAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAG5SURBVHgB7ZZRboJAEIZnKPHNxvimL1X0AO0RepP2BLUPTUN84Y2SvtQT2N7II3gBFSMGBFk6i0AXBGODafqwX0J2d3bn31mSmQyARCKpBK03M4IaIIKNAJ8vr/qzaFcIqPMhKi1AZfRuWYYorDabTbgEFPkTDUYm3O12uZm+qj9S3CtfR1HeX+1r2uEcVjmeQPDz/eArF85yuYyOT4sXYLUan0dg73x/0ul0DJBIToKmaT5ATSg5bESc6bo+z4TrFqEMKkb7Pbsfj8czvlQbjUYuHenmeM3HJJrTesl5+lpXSjQl010s3G63oS6MhFnIIAj829Sm3vR65Vl8Zk3i0ygiUd+HrbOdZcKaNoD8Mai4pXzkf4oLe97OXiwWj5m367pTxlhctI/fyIDREO+k+6mNr5M5+a8dx/mgQjQHieTvuUgRKuuGlOoOByvtxT2SblHZGllCN0Sd0DXkiwXAcWqDYEcx0rSy8eyDMAyzbkilNITfk68ZXDQIAnA9NzuhDobDtJzQiEKsBydM/Attyk+Ro2hDEt55HtjrVdYN4Yp3Qoc3QeGNcC4kbG82m0m/3zdAIpFI/gPfnq/U90DTd7wAAAAASUVORK5CYII=)
    `,
                  backgroundPosition:
                    "0 0, left 11px top, top, right 11px top, 100% 0",
                  backgroundRepeat:
                    "no-repeat, no-repeat, no-repeat, no-repeat, no-repeat",
                  backgroundSize:
                    "11px 27px, calc(50% - 45.5px) 27px, 69px 27px, calc(50% - 45.5px) 27px, 11px 27px",
                }}
              ></div>{" "}
              <div className="absolute right-2 top-[34px] h-[calc(100%-68px)] w-1 bg-[url('https://mschfplaysvenmo.com/_nuxt/img/left-right.1ee03a6.png')] bg-no-repeat bg-cover"></div>{" "}
              <div
                className="side-panel__border--inner__bottom"
                style={{
                  backgroundImage: `url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAA2CAYAAADDGGkNAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAHXSURBVHgB7VZRcoIwFHwJEQKKTdSO1frhEbyR9gbewL+i9qN6gt7D6YxHsBfCNAkQoFQcS6f9yc5kCMmwb5Ph7SyAhYWFxT8CFV9eNs8rAWgpBDBoCEO8iaJX+bZEKFnCGEMTkGyCHWeBMQJCiB6OHBjV6RGQ6xKVfUNMiAO+70MQBHq0Wi1VDBorDtrBnt2x1WBwD91uCK7raWJ0K2N6mNJ374fDbjQez3mPM08Soyv3fOkiLCz+GKX/OIqiqVxYyla+g4YwxNvtdgYiPmbOlpnRT2FaWpK+IYSZ8gzlbBirJ4LccHItQgizlsxriCXRzHVdoJTqQZQJIXxRuSLMhioiBJRMzxBT6n+EYWfGGIcwDMHzEhPCX4iFIT4nZIY830NFxe1O56nfHxyHD0PGeU9aKNXXoRQXj5uVOas1RZqqr15YAafTaSrVStWMqetwavw4jmOwsLgNlbb6rTRUIs7SkNksdF1xrhviikmRUhUMi6zJ1IcmFTmJMX1HVsxDF4mL6lxpQn7QVkFGJySiI1dGUdfASakScXw+76WjrZRCKmNWr8dBJaOw25Um5Wm3SysDiJqYIvcrp9iu1zvq0znnnD1OJjAajYEzBq5yu4YJ1MLCIsUnfylzO/E+ARQAAAAASUVORK5CYII=), 
                    url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAA2CAYAAAD6f9hWAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADNSURBVHgB7VMxDoMwDLSTDCyw0KXpAEj8sywV7T+ZEQur3YQ0EFSUTh1KsQS+mONi2TqAI34m8HFvOUZQUkqIErIsC45WDFdnddbalNBAd1OIJ4WqrJb/MBDyTfZ9z7iubfH2Hti2tyZGUFLIa5SQJMkEeB4bA1Gwizw/gR+qJRFTyAZVlMU0e1tj83IPgRWxdey6bhFnnrPHOI5j89YZkUuwl/jsLCEERAlpmm5+8F5RWl9gXsbKEc4tqq7rVze4bNFjk3EYhj8y0BfjCdXnUu7W1M8ZAAAAAElFTkSuQmCC), 
                    url(https://mschfplaysvenmo.com/_nuxt/img/side-bottom-center.51a1f7c.png), 
                    url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAA2CAYAAAD6f9hWAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADNSURBVHgB7VMxDoMwDLSTDCyw0KXpAEj8sywV7T+ZEQur3YQ0EFSUTh1KsQS+mONi2TqAI34m8HFvOUZQUkqIErIsC45WDFdnddbalNBAd1OIJ4WqrJb/MBDyTfZ9z7iubfH2Hti2tyZGUFLIa5SQJMkEeB4bA1Gwizw/gR+qJRFTyAZVlMU0e1tj83IPgRWxdey6bhFnnrPHOI5j89YZkUuwl/jsLCEERAlpmm5+8F5RWl9gXsbKEc4tqq7rVze4bNFjk3EYhj8y0BfjCdXnUu7W1M8ZAAAAAElFTkSuQmCC), 
                    url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAA2CAYAAADDGGkNAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAHVSURBVHgB7ZbBTsIwGMe/r8yEC0QyL+IBlvAg8ib6BOpBDeGyG0wPyhMob+Cj8AiePWARkm0yWtuxjjKGGVmil/6Spu239t9vhO+/AhgMBsM/gt5wwKEkiEAR4PX2vnejYqRSqUDZRkjlGJBce97AVcJWvV7XzpbJY6bPzVFbA8AYi1sURVdi6sbCp82meIxiGU+2bMZF4Fys5gy+wyX4gZ/GLaftbM5GLfEDWK1WEIQBzGZfYxXD6XTKsy9dVF/tEz8Dnc/nI8dxXDAY/h58GA5eoCSMw0z8n597vd77RtgblnY3iShsihHr3vX7Ezm3qtXqnqXrukIkSY9b8VRQeoVImXF+zI5WTyLUjYVt+yRXU5qR1JLCG9HcTIEJr1guIwjD4FzFrVa7lXgD7myQgoSshTF5ziHrJTw2oTAIQfjFJBVuC3fbfUHldmthyMZh27Flxr7v0+nnx2W6brFYXEAB5JciD5mtNHnRvzUaDQoGw15K34TybkESIgvg0KYqcj0m8S3o0fNcXdiq1Wq5meil+xtqnTgrvQXFws3mWVKbWRfQilyaEM8W/PZc3oa2Mu50Orub1Vh3NV145yCAZRSN9TlSSssaPRU+MbJt2wWDwVCMHxJOxURS6IRbAAAAAElFTkSuQmCC)`,
                  backgroundPosition:
                    "0 0, left 11px top, top, right 11px top, 100% 0",
                  backgroundRepeat:
                    "no-repeat, no-repeat, no-repeat, no-repeat, no-repeat",
                  backgroundSize:
                    "11px 27px, calc(50% - 45.5px) 27px, 69px 27px, calc(50% - 45.5px) 27px, 11px 27px",
                  position: "absolute",
                  bottom: 7,
                  left: "50%",
                  transform: "translate3d(calc(-50% - 1px), 0, 0)",
                  width: "calc(100% - 14px)",
                  height: 27,
                }}
              ></div>{" "}
              <div className="absolute left-2 top-[34px] h-[calc(100%-68px)] w-1 bg-[url('https://mschfplaysvenmo.com/_nuxt/img/left-right.1ee03a6.png')] bg-no-repeat bg-cover"></div>
            </div>{" "}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-row items-center justify-center h-[calc(100%-54px)] w-[calc(100%-24px)] overflow-hidden p-[5px]">
              <img
                src="https://mschfplaysvenmo.com/_nuxt/img/carved-left-lg.e794693.png"
                className="h-full w-auto object-cover max-w-full border-none"
              />
            </div>
          </div>
          {/* --secondary-screen-height: 75px; */}
          <div className=" h-full p-[40px_15px] relative w-full">
            <div
              className="absolute top-0 left-0 w-full h-full rounded-[9px]"
              style={{
                boxShadow:
                  "inset #898887 1.77px 1.77px 1.33px 0, inset var(--color-white) 0 0 0 4px",
                filter: "blur(0.89px)",
              }}
            ></div>
            <div
              className="absolute top-0 left-0 w-full h-full"
              style={{ filter: "blur(0.6px)" }}
            >
              <div
                className="absolute top-[9px] left-1/2 h-[24px] w-[calc(100%-14px)]"
                style={{
                  backgroundImage:
                    "url(https://mschfplaysvenmo.com/_nuxt/img/center-top-left.d78e17e.png), url(https://mschfplaysvenmo.com/_nuxt/img/center-top-right.ec8f631.png)",
                  backgroundPosition: "0 0, top right 3px",
                  backgroundRepeat: "no-repeat, no-repeat",
                  backgroundSize: "51px 24px, 51px 24px",
                  transform: "translate3d(calc(-50% + 1px), 0, 0)",
                }}
              ></div>
              <div
                className="absolute right-[8px] top-1/2 w-[4px]"
                style={{
                  height: "calc(100% - 66px)",
                  backgroundImage:
                    "url(https://mschfplaysvenmo.com/_nuxt/img/left-right.1ee03a6.png)",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "100% 100%",
                  transform: "translate3d(0, -50%, 0)",
                }}
              ></div>
              <div
                className="absolute bottom-[9px] left-1/2 h-[24px]"
                style={{
                  width: "calc(100% - 14px)",
                  backgroundImage:
                    "url(https://mschfplaysvenmo.com/_nuxt/img/center-bottom-left.a816eef.png), url(https://mschfplaysvenmo.com/_nuxt/img/center-bottom-right.dcec2cc.png)",
                  backgroundPosition: "0 100%, bottom right 3px",
                  backgroundSize: "59px 24px, 59px 24px",
                  backgroundRepeat: "no-repeat, no-repeat",
                  transform: "translate3d(calc(-50% + 1px), 0, 0)",
                }}
              ></div>
              <div
                className="absolute left-[8px] top-1/2 w-[4px]"
                style={{
                  height: "calc(100% - 66px)",
                  backgroundImage:
                    "url(https://mschfplaysvenmo.com/_nuxt/img/left-right.1ee03a6.png)",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "100% 100%",
                  transform: "translate3d(0, -50%, 0)",
                }}
              ></div>
            </div>

            <div
              className="absolute top-[9px] left-1/2 h-[25px] px-[6px] grid grid-cols-3 gap-[9px]"
              style={{
                width: "calc(100% - 120px)",
                transform: "translate3d(-50%, 0, 0)",
                gridTemplateRows: "100%",
              }}
            >
              <button
                className="flex flex-row items-center justify-center text-center text-[12px] font-bold rounded-[15px] outline-none border-none p-0 bg-transparent cursor-pointer relative text-black"
                style={{
                  WebkitTapHighlightColor: "transparent",
                  boxShadow:
                    "-5px -5px 13px -8px #efefef, 1.5px 1.5px 5px -2px var(--color-black)",
                }}
              >
                <div
                  className="absolute top-0 left-0 w-full h-full rounded-[15px] -z-10"
                  style={{
                    background:
                      "linear-gradient(145deg, #e8e8e8, #b1b0aa 57%, #969696 88%)",
                  }}
                ></div>
                <div
                  className="relative flex items-center justify-center rounded-[15px] text-center"
                  style={{
                    backgroundImage:
                      "url(https://mschfplaysvenmo.com/_nuxt/img/textured-background-button.e0203bc.png)",
                    backgroundPosition: "50%",
                    backgroundSize: "375px 369px",
                    height: "calc(100% - 4px)",
                    width: "calc(100% - 4px)",
                    flexDirection: "row",
                  }}
                >
                  <div className="stone-button__inner__hover"></div>
                  FAQ
                </div>
              </button>
              <button
                className="flex flex-row items-center justify-center text-center text-[12px] font-bold rounded-[15px] outline-none border-none p-0 bg-transparent cursor-pointer relative text-black"
                style={{
                  WebkitTapHighlightColor: "transparent",
                  boxShadow:
                    "-5px -5px 13px -8px #efefef, 1.5px 1.5px 5px -2px var(--color-black)",
                }}
              >
                <div
                  className="absolute top-0 left-0 w-full h-full rounded-[15px] -z-10"
                  style={{
                    background:
                      "linear-gradient(145deg, #e8e8e8, #b1b0aa 57%, #969696 88%)",
                  }}
                ></div>
                <div
                  className="relative flex items-center justify-center rounded-[15px] text-center"
                  style={{
                    backgroundImage:
                      "url(https://mschfplaysvenmo.com/_nuxt/img/textured-background-button.e0203bc.png)",
                    backgroundPosition: "50%",
                    backgroundSize: "375px 369px",
                    height: "calc(100% - 4px)",
                    width: "calc(100% - 4px)",
                    flexDirection: "row",
                  }}
                >
                  <div className="stone-button__inner__hover"></div>
                  ABOUT
                </div>
              </button>
              <button
                className="flex  flex-row items-center justify-center text-center text-[12px] font-bold rounded-[15px] outline-none border-none p-0 bg-transparent cursor-pointer relative text-black"
                style={{
                  WebkitTapHighlightColor: "transparent",
                  boxShadow:
                    "-5px -5px 13px -8px #efefef, 1.5px 1.5px 5px -2px var(--color-black)",
                }}
              >
                <div
                  className="absolute top-0 left-0 w-full h-full rounded-[15px] -z-10"
                  style={{
                    background:
                      "linear-gradient(145deg, #e8e8e8, #b1b0aa 57%, #969696 88%)",
                  }}
                ></div>
                <div
                  className="relative flex items-center justify-center rounded-[15px] text-center "
                  style={{
                    backgroundImage:
                      "url(https://mschfplaysvenmo.com/_nuxt/img/textured-background-button.e0203bc.png)",
                    backgroundPosition: "50%",
                    backgroundSize: "375px 369px",
                    height: "calc(100% - 4px)",
                    width: "calc(100% - 4px)",
                    flexDirection: "row",
                  }}
                >
                  <div className="stone-button__inner__hover"></div>
                  ACCOUNT
                </div>
              </button>
            </div>

            <div
              className="relative grid h-full gap-[15px] transition-[grid-template-rows] duration-300 ease-linear"
              style={{
                gridTemplateColumns: "100%",
                gridTemplateRows:
                  "calc(100% - 15px - var(--secondary-screen-height, 65px)) var(--secondary-screen-height, 65px)",
              }}
            >
              <div className="h-full w-full relative">
                <div
                  className="relative rounded-[15px] p-[2px] h-full w-full z-0"
                  style={{
                    background:
                      "linear-gradient(135deg, #e8e8e8, #b1b0aa 85%, #969696 88%)",
                    boxShadow:
                      "-5px -5px 13px -6px #f5f5f5, 5px 5px 13px -6px #453e25",
                  }}
                >
                  <div
                    className="h-full w-full rounded-[15px] p-[3px]"
                    style={{
                      background:
                        "linear-gradient(45deg, #c7c7c7, #ababab 100%)",
                    }}
                  >
                    <div
                      className="h-full w-full rounded-[15px] border overflow-hidden relative bg-[#7f9c68]"
                      style={{
                        borderColor: "#2c0d00",
                      }}
                    >
                      {/* style={{ '--marquee-duration': '15s' }} */}
                      {/* <div className="marquee-wrapper stats-marquee main-screen__inner__inner__marquee">
                        <div className="marquee-track">
                          <div className="item">
                            <div>
                              <span>PLAYERS REMAINING: 1</span>
                              <span className="divider">|</span>
                              <span>PRIZE POOL: $119,170</span>
                              <span className="divider">|</span>
                            </div>
                          </div>
                          
                        </div>
                      </div> */}
                      <div
                        className="w-full h-full overflow-auto z-[-1]"
                        style={{
                          msOverflowStyle: "none", // Hides scrollbar in IE/Edge
                          scrollbarWidth: "none", // Hides scrollbar in Firefox
                        }}
                      >
                        {/* Content goes here */}

                        <div className="grid grid-cols-2 gap-5 p-4 md:grid-cols-3 md:gap-2 md:p-8 py-16 mx-auto max-w-7xl">
                          {data.data.map((product) => (
                            <Link
                              key={product.slug}
                              href={`/product/${product.slug}`}
                              className="group"
                            >
                              <div className="relative aspect-[1/2] md:aspect-[2/3] xl:aspect-[1/2] w-full overflow-hidden">
                                <Image
                                  src={`${product.images[0].src}`}
                                  alt={`Product ${product.slug}`}
                                  fill
                                  className="object-cover"
                                  priority
                                />
                              </div>
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="absolute pointer-events-none z-[1000] rounded-[15px] block"
                  style={{
                    backgroundImage:
                      "url('https://mschfplaysvenmo.com/img/grid-tile.png')",
                    backgroundRepeat: "repeat",
                    backgroundSize: "2px 2px",
                    height: "calc(100% - 10px)",
                    width: "calc(100% - 10px)",
                    top: "5px",
                    left: "5px",
                    mixBlendMode: "difference",
                  }}
                ></div>
              </div>
              <div
                data-v-5c41515f=""
                data-v-3ea4f93a=""
                className=" h-full w-full relative"
              >
                <div
                  data-v-620fe251=""
                  data-v-5c41515f=""
                  className="relative rounded-[15px] p-[2px] shadow-[inset_-5px_-5px_13px_-6px_#f5f5f5,inset_5px_5px_13px_-6px_#453e25]"
                  style={{
                    background:
                      "linear-gradient(135deg, #e8e8e8, #b1b0aa 85%, #969696 88%)",
                  }}
                >
                  {" "}
                  <div
                    data-v-620fe251=""
                    className="w-full h-full rounded-[15px] p-[3px]"
                    style={{
                      background:
                        "linear-gradient(45deg, #c7c7c7, #ababab 100%)",
                    }}
                  >
                    <div
                      data-v-620fe251=""
                      className="h-full w-full rounded-[15px] border overflow-hidden relative bg-[#7f9c68]"
                      style={{
                        borderColor: "#2c0d00",
                      }}
                    >
                      <div
                        data-v-5c41515f=""
                        data-v-620fe251=""
                        className="h-full w-full relative p-2"
                      >
                        <button
                          className="bg-black text-xs text-white m-auto rounded-[15px] h-full w-full p-2 uppercase"
                          type="button"
                        >
                          CART : 0 PRODUCTS
                        </button>
                      </div>
                    </div>{" "}
                    <div
                      data-v-620fe251=""
                      className="absolute pointer-events-none z-[1000] rounded-[15px] block"
                      style={{
                        backgroundImage:
                          "url('https://mschfplaysvenmo.com/img/grid-tile.png')",
                        backgroundRepeat: "repeat",
                        backgroundSize: "2px 2px",
                        height: "calc(100% - 10px)",
                        width: "calc(100% - 10px)",
                        top: "5px",
                        left: "5px",
                        mixBlendMode: "difference",
                      }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute bottom-[8px] w-full">
              <button
                className=" mx-auto w-[215px] h-[25px] flex relative items-center justify-center text-center bg-transparent border-2 rounded-[15px] font-bold text-[12px] p-0 outline-none cursor-pointer"
                style={{
                  boxShadow:
                    "-5px -5px 13px -8px #efefef, 1.5px 1.5px 5px -2px var(--color-black)",
                }}
              >
                <div
                  data-v-3f5ef821=""
                  className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#e8e8e8] via-[#b1b0aa] to-[#969696] rounded-[15px] z-[-1]"
                ></div>{" "}
                <div data-v-3f5ef821="" className="stone-button__inner">
                  <div
                    data-v-3ea4f93a=""
                    data-v-3f5ef821=""
                    className="center-panel__outer-stone__scroll"
                  >
                    <img
                      data-v-3ea4f93a=""
                      data-v-3f5ef821=""
                      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAASCAYAAABB7B6eAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAACXSURBVHgBtdRbDcMwDIXh/2EABsFQCmEQMgaDYAhjsDEJlEAohF7UVqqqtokb95P86pPEVmAiQ7VDdY4lbKhjc2XH0+kWae61KzgEBDJi5emzmooAodD/QvMfBoJt4C2G0y/UEKBcMK5aKmheNNgjr4KAQKV40jzioMFhLXO+VK5lzvafGgcrONNVwIebJIxr+cDmjfFpepGdulDz3AxwAAAAAElFTkSuQmCC"
                    />
                  </div>
                </div>
              </button>
            </div>
          </div>
          <div className="relative hidden md:block">
            <div className="absolute top-0 left-0 w-full h-full rounded-[9px] shadow-[inset_#898887_1.77px_1.77px_1.33px_0,inset_var(--color-white)_0_0_0_4px] blur-[0.89px]"></div>{" "}
            <div className="absolute w-full h-full p-[5px] blur-[0.6px]">
              <div
                className="side-panel__border--inner__top"
                style={{
                  position: "absolute",
                  top: "7px",
                  left: "50%",
                  transform: "translate3d(calc(-50% - 1px), 0, 0)",
                  height: "27px",
                  width: "calc(100% - 14px)",
                  backgroundImage: `
      url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAA2CAYAAADDGGkNAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAHqSURBVHgB7ZZLbsIwEIbHj8QJodQpD6ll0yP0CD1CbwBHoCeAVXl0UThB74Eq0R2nIq7tPMiEUIFAVRf+JWQ8cf5MEs+XAXBycjoqUg28z9/GCshIKZBwgZDxfDr90JERWkAIGk8VRyYUhjrTwogxBpxz8Dyu5/Qsc14XpJRawzAModFo2NHzPBtPb1KV07HzagQZ75JkRQkdGwNjFscxdDpduGndgPAFUEZxBgpq3tLeHGkxmy1FIAZSxrLf78P9wwNIKUEIkWVcdlM15nqiFDg5HQptlMlkIvW2eoErqDBeLBZPoHabS+GTa195avepryMZS5mQssHs9d83u1lr1uQcydcXxozxJ8MD3/czLjD9O49otRmLIPhuRtFzq3ULUTOyEDIlTKpVX2VQXYyUjKOo+dputze9Xk9jIraZm4zNI9kD4ZRxf61C2+32sdvtjjTVbg108udmmUYzsiUJJJCi1fwv4vZQkoHKyelPhfbxtbogZGy6IEJJbRdUVg6Z8rEyhHIVJa17hiHT4GGcZZxgkK4tn4C/9QR96THhCmNDtCAIis6HG8KRY+WJGYHxSnDGYRCuNHzGnU4bDOF84dvezWahDtoUhBySTVSeeZWJX+v1Unc+g/gulimEKJxFZOK6ICcnp3+iH5k6cvt1x0RZAAAAAElFTkSuQmCC),
      url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAA2CAYAAAD6f9hWAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAC5SURBVHgB7ZM9D8IgEIbvKEmnOtkBFmLt/7SLQf8nM07MJxRtoWmIcWvCSwgQHu7IfQBU/SR8PjSVAM4YgyLQdV0ZkFIGT37ue+KXYYh3uHwrg9Fau3lKu+CxhVrfpxLAG9bcikDbtkBEgIjLmgHnvs+CN8dvPkeYK6Vym1le/NYYQ5jcwWosss65Car+76xv4nxnnSAvdYA06FwIAUUX13H8JMab9GN9G9OKr9BZoUgo+ev2XHUMvQFkXDgQD2j5CQAAAABJRU5ErkJggg==),
      url(https://mschfplaysvenmo.com/_nuxt/img/side-top-center.2755ffe.png),
      url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAA2CAYAAAD6f9hWAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAC5SURBVHgB7ZM9D8IgEIbvKEmnOtkBFmLt/7SLQf8nM07MJxRtoWmIcWvCSwgQHu7IfQBU/SR8PjSVAM4YgyLQdV0ZkFIGT37ue+KXYYh3uHwrg9Fau3lKu+CxhVrfpxLAG9bcikDbtkBEgIjLmgHnvs+CN8dvPkeYK6Vym1le/NYYQ5jcwWosss65Car+76xv4nxnnSAvdYA06FwIAUUX13H8JMab9GN9G9OKr9BZoUgo+ev2XHUMvQFkXDgQD2j5CQAAAABJRU5ErkJggg==),
      url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAA2CAYAAADDGGkNAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAG5SURBVHgB7ZZRboJAEIZnKPHNxvimL1X0AO0RepP2BLUPTUN84Y2SvtQT2N7II3gBFSMGBFk6i0AXBGODafqwX0J2d3bn31mSmQyARCKpBK03M4IaIIKNAJ8vr/qzaFcIqPMhKi1AZfRuWYYorDabTbgEFPkTDUYm3O12uZm+qj9S3CtfR1HeX+1r2uEcVjmeQPDz/eArF85yuYyOT4sXYLUan0dg73x/0ul0DJBIToKmaT5ATSg5bESc6bo+z4TrFqEMKkb7Pbsfj8czvlQbjUYuHenmeM3HJJrTesl5+lpXSjQl010s3G63oS6MhFnIIAj829Sm3vR65Vl8Zk3i0ygiUd+HrbOdZcKaNoD8Mai4pXzkf4oLe97OXiwWj5m367pTxlhctI/fyIDREO+k+6mNr5M5+a8dx/mgQjQHieTvuUgRKuuGlOoOByvtxT2SblHZGllCN0Sd0DXkiwXAcWqDYEcx0rSy8eyDMAyzbkilNITfk68ZXDQIAnA9NzuhDobDtJzQiEKsBydM/Attyk+Ro2hDEt55HtjrVdYN4Yp3Qoc3QeGNcC4kbG82m0m/3zdAIpFI/gPfnq/U90DTd7wAAAAASUVORK5CYII=)
    `,
                  backgroundPosition:
                    "0 0, left 11px top, top, right 11px top, 100% 0",
                  backgroundRepeat:
                    "no-repeat, no-repeat, no-repeat, no-repeat, no-repeat",
                  backgroundSize:
                    "11px 27px, calc(50% - 45.5px) 27px, 69px 27px, calc(50% - 45.5px) 27px, 11px 27px",
                }}
              ></div>{" "}
              <div className="absolute right-2 top-[34px] h-[calc(100%-68px)] w-1 bg-[url('https://mschfplaysvenmo.com/_nuxt/img/left-right.1ee03a6.png')] bg-no-repeat bg-cover"></div>{" "}
              <div
                className="side-panel__border--inner__bottom"
                style={{
                  backgroundImage: `url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAA2CAYAAADDGGkNAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAHXSURBVHgB7VZRcoIwFHwJEQKKTdSO1frhEbyR9gbewL+i9qN6gt7D6YxHsBfCNAkQoFQcS6f9yc5kCMmwb5Ph7SyAhYWFxT8CFV9eNs8rAWgpBDBoCEO8iaJX+bZEKFnCGEMTkGyCHWeBMQJCiB6OHBjV6RGQ6xKVfUNMiAO+70MQBHq0Wi1VDBorDtrBnt2x1WBwD91uCK7raWJ0K2N6mNJ374fDbjQez3mPM08Soyv3fOkiLCz+GKX/OIqiqVxYyla+g4YwxNvtdgYiPmbOlpnRT2FaWpK+IYSZ8gzlbBirJ4LccHItQgizlsxriCXRzHVdoJTqQZQJIXxRuSLMhioiBJRMzxBT6n+EYWfGGIcwDMHzEhPCX4iFIT4nZIY830NFxe1O56nfHxyHD0PGeU9aKNXXoRQXj5uVOas1RZqqr15YAafTaSrVStWMqetwavw4jmOwsLgNlbb6rTRUIs7SkNksdF1xrhviikmRUhUMi6zJ1IcmFTmJMX1HVsxDF4mL6lxpQn7QVkFGJySiI1dGUdfASakScXw+76WjrZRCKmNWr8dBJaOw25Um5Wm3SysDiJqYIvcrp9iu1zvq0znnnD1OJjAajYEzBq5yu4YJ1MLCIsUnfylzO/E+ARQAAAAASUVORK5CYII=), 
                    url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAA2CAYAAAD6f9hWAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADNSURBVHgB7VMxDoMwDLSTDCyw0KXpAEj8sywV7T+ZEQur3YQ0EFSUTh1KsQS+mONi2TqAI34m8HFvOUZQUkqIErIsC45WDFdnddbalNBAd1OIJ4WqrJb/MBDyTfZ9z7iubfH2Hti2tyZGUFLIa5SQJMkEeB4bA1Gwizw/gR+qJRFTyAZVlMU0e1tj83IPgRWxdey6bhFnnrPHOI5j89YZkUuwl/jsLCEERAlpmm5+8F5RWl9gXsbKEc4tqq7rVze4bNFjk3EYhj8y0BfjCdXnUu7W1M8ZAAAAAElFTkSuQmCC), 
                    url(https://mschfplaysvenmo.com/_nuxt/img/side-bottom-center.51a1f7c.png), 
                    url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAA2CAYAAAD6f9hWAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADNSURBVHgB7VMxDoMwDLSTDCyw0KXpAEj8sywV7T+ZEQur3YQ0EFSUTh1KsQS+mONi2TqAI34m8HFvOUZQUkqIErIsC45WDFdnddbalNBAd1OIJ4WqrJb/MBDyTfZ9z7iubfH2Hti2tyZGUFLIa5SQJMkEeB4bA1Gwizw/gR+qJRFTyAZVlMU0e1tj83IPgRWxdey6bhFnnrPHOI5j89YZkUuwl/jsLCEERAlpmm5+8F5RWl9gXsbKEc4tqq7rVze4bNFjk3EYhj8y0BfjCdXnUu7W1M8ZAAAAAElFTkSuQmCC), 
                    url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAA2CAYAAADDGGkNAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAHVSURBVHgB7ZbBTsIwGMe/r8yEC0QyL+IBlvAg8ib6BOpBDeGyG0wPyhMob+Cj8AiePWARkm0yWtuxjjKGGVmil/6Spu239t9vhO+/AhgMBsM/gt5wwKEkiEAR4PX2vnejYqRSqUDZRkjlGJBce97AVcJWvV7XzpbJY6bPzVFbA8AYi1sURVdi6sbCp82meIxiGU+2bMZF4Fys5gy+wyX4gZ/GLaftbM5GLfEDWK1WEIQBzGZfYxXD6XTKsy9dVF/tEz8Dnc/nI8dxXDAY/h58GA5eoCSMw0z8n597vd77RtgblnY3iShsihHr3vX7Ezm3qtXqnqXrukIkSY9b8VRQeoVImXF+zI5WTyLUjYVt+yRXU5qR1JLCG9HcTIEJr1guIwjD4FzFrVa7lXgD7myQgoSshTF5ziHrJTw2oTAIQfjFJBVuC3fbfUHldmthyMZh27Flxr7v0+nnx2W6brFYXEAB5JciD5mtNHnRvzUaDQoGw15K34TybkESIgvg0KYqcj0m8S3o0fNcXdiq1Wq5meil+xtqnTgrvQXFws3mWVKbWRfQilyaEM8W/PZc3oa2Mu50Orub1Vh3NV145yCAZRSN9TlSSssaPRU+MbJt2wWDwVCMHxJOxURS6IRbAAAAAElFTkSuQmCC)`,
                  backgroundPosition:
                    "0 0, left 11px top, top, right 11px top, 100% 0",
                  backgroundRepeat:
                    "no-repeat, no-repeat, no-repeat, no-repeat, no-repeat",
                  backgroundSize:
                    "11px 27px, calc(50% - 45.5px) 27px, 69px 27px, calc(50% - 45.5px) 27px, 11px 27px",
                  position: "absolute",
                  bottom: 7,
                  left: "50%",
                  transform: "translate3d(calc(-50% - 1px), 0, 0)",
                  width: "calc(100% - 14px)",
                  height: 27,
                }}
              ></div>{" "}
              <div className="absolute left-2 top-[34px] h-[calc(100%-68px)] w-1 bg-[url('https://mschfplaysvenmo.com/_nuxt/img/left-right.1ee03a6.png')] bg-no-repeat bg-cover"></div>
            </div>{" "}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-row items-center justify-center h-[calc(100%-54px)] w-[calc(100%-24px)] overflow-hidden p-[5px]">
              <img
                src="https://mschfplaysvenmo.com/_nuxt/img/carved-left-lg.e794693.png"
                className="h-full w-auto object-cover max-w-full border-none"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
