import React from "react";

const App = () => {
  const typograpies = [
    {
      title: "Lorem, ipsum dolor.",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat      veritatis rerum labore ipsa unde, molestiae nihil?",
    },
    {
      title: "Lorem, ipsum dolor.",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat      veritatis rerum labore ipsa unde, molestiae nihil?",
    },
    {
      title: "Lorem, ipsum dolor.",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat      veritatis rerum labore ipsa unde, molestiae nihil?",
    },
    {
      title: "Lorem, ipsum dolor.",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat      veritatis rerum labore ipsa unde, molestiae nihil?",
    },
    {
      title: "Lorem, ipsum dolor.",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat      veritatis rerum labore ipsa unde, molestiae nihil?",
    },
    {
      title: "Lorem, ipsum dolor.",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat      veritatis rerum labore ipsa unde, molestiae nihil?",
    },
    {
      title: "Lorem, ipsum dolor.",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat      veritatis rerum labore ipsa unde, molestiae nihil?",
    },
    {
      title: "Lorem, ipsum dolor.",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat      veritatis rerum labore ipsa unde, molestiae nihil?",
    },
  ];

  const cards = [
    {
      src: "img/img1.jpg",
      title: "Lorem",
      desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
    },
    {
      src: "img/img2.jpg",
      title: "Lorem",
      desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
    },
    {
      src: "img/img3.jpg",
      title: "Lorem",
      desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
    },
    {
      src: "img/img4.jpg",
      title: "Lorem",
      desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
    },
    {
      src: "img/img5.jpg",
      title: "Lorem",
      desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
    },
    {
      src: "img/img6.jpg",
      title: "Lorem",
      desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
    },
    {
      src: "img/img7.jpg",
      title: "Lorem",
      desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
    },
  ];

  return (
    <>
      {/* navbar */}
      <div className="navbar bg-base-100">
        <div className="flex-1">
          <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal p-0">
            <li>
              <a>Item 1</a>
            </li>
            <li tabIndex={0}>
              <a>
                Parent
                <svg
                  className="fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                >
                  <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                </svg>
              </a>
              <ul className="p-2 bg-base-100">
                <li>
                  <a>Submenu 1</a>
                </li>
                <li>
                  <a>Submenu 2</a>
                </li>
              </ul>
            </li>
            <li>
              <a>Item 3</a>
            </li>
          </ul>
        </div>
      </div>
      {/* coursel */}
      <div className="carousel w-full max-h-screen">
        <div id="slide1" className="carousel-item relative w-full">
          {/* hero */}
          <div
            className="hero min-h-screen"
            style={{
              backgroundImage: `url("img/img1.jpg")`,
            }}
          >
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
              <div className="max-w-md">
                <h1 className="mb-5 text-5xl font-bold">
                  Quality PhoneCase with Unlimited Edition
                </h1>
                <p className="mb-5">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Repellendus, tempore qui. Illum error atque sunt laboriosam
                  dolore excepturi, distinctio pariatur?
                </p>
                <button className="btn btn-primary">Get Now</button>
              </div>
            </div>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img src="img/img2.jpg" className="w-full object-cover" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <img src="img/img3.jpg" className="w-full object-cover" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide4" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
          <img src="img/img4.jpg" className="w-full object-cover" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
      {/* typhograpy */}
      <article class="prose-lg pt-2 bg-green-600">
        <h2 className="text-center">Why Choose Us?</h2>
        <ul className="grid grid-cols-2 gap-2">
          {typograpies.map((typograpy) => (
            <li>
              <h3>{typograpy.title}</h3>
              <p>{typograpy.desc}</p>
            </li>
          ))}
        </ul>
      </article>
      {/* card */}
      <h1 className="text-3xl text-center capitalize pb-6">Most Popular</h1>
      <div className="flex justify-center">
        {/* <h1>Most Popular </h1> */}
        <div className="grid md:grid-cols-2 md:gap-4 lg:grid-cols-4 lg:gap-2">
          {cards.map((card) => (
            <div className="card w-96 bg-base-100 shadow-xl">
              <figure>
                <img
                  src={card.src}
                  alt="img1"
                  className="w-full object-cover h-56"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{card.title}</h2>
                <p>{card.desc}</p>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary">Buy Now</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* article */}
      <div className="bg-purple-700 pb-6">
        <h1 className="text-center text-3xl capitalize  p-6 text-purple-100">
          News
        </h1>
        <div className="flex flex-row space-x-2">
          {cards.map((card) => (
            <div className="card w-96 bg-base-100 shadow-xl">
              <div className="card w-96 bg-base-100 shadow-xl">
                <figure>
                  <img
                    src={card.src}
                    alt="img1"
                    className="w-full object-cover h-56"
                  />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">{card.title}</h2>
                  <p>{card.desc}</p>
                  <div className="card-actions justify-end">
                    <button className="btn btn-primary">More...</button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* footer */}
      <footer className="footer p-10 bg-neutral text-neutral-content">
        <div>
          <span className="footer-title">Services</span>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </div>
        <div>
          <span className="footer-title">Company</span>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </div>
        <div>
          <span className="footer-title">Legal</span>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </div>
      </footer>
    </>
  );
};
export default App;
