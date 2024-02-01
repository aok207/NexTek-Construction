const ContactPage = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-28">
      <h1 className="text-5xl max-md:text-4xl max-sm:text-3xl">Contact</h1>
      <div className="flex gap-20 max-sm:p-7 max-[460px]:p-3 max-[460px]:gap-10 text-center text-white bg-[url('/images/servicesBg.jpg')] justify-between items-center shadow-md rounded-sm p-24 max-[460px]:flex-col">
        <div className="flex flex-col items-center gap-4">
          <svg
            width="40px"
            height="40px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 21C15.5 17.4 19 14.1764 19 10.2C19 6.22355 15.866 3 12 3C8.13401 3 5 6.22355 5 10.2C5 14.1764 8.5 17.4 12 21Z"
              stroke="#ffffff"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M12 12C13.1046 12 14 11.1046 14 10C14 8.89543 13.1046 8 12 8C10.8954 8 10 8.89543 10 10C10 11.1046 10.8954 12 12 12Z"
              stroke="#ffffff"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <div>
            <h1>Address</h1>
            <p className="max-w-40 max-[460px]:max-w-16">
              (N0.15/A), Bat Sone Road, Thingangyun Township, Yangon, Myanmar
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center gap-4">
          <svg
            width="40px"
            height="40px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14.3308 15.9402L15.6608 14.6101C15.8655 14.403 16.1092 14.2384 16.3778 14.1262C16.6465 14.014 16.9347 13.9563 17.2258 13.9563C17.517 13.9563 17.8052 14.014 18.0739 14.1262C18.3425 14.2384 18.5862 14.403 18.7908 14.6101L20.3508 16.1702C20.5579 16.3748 20.7224 16.6183 20.8346 16.887C20.9468 17.1556 21.0046 17.444 21.0046 17.7351C21.0046 18.0263 20.9468 18.3146 20.8346 18.5833C20.7224 18.8519 20.5579 19.0954 20.3508 19.3L19.6408 20.02C19.1516 20.514 18.5189 20.841 17.8329 20.9541C17.1469 21.0672 16.4427 20.9609 15.8208 20.6501C10.4691 17.8952 6.11008 13.5396 3.35083 8.19019C3.03976 7.56761 2.93414 6.86242 3.04914 6.17603C3.16414 5.48963 3.49384 4.85731 3.99085 4.37012L4.70081 3.65015C5.11674 3.23673 5.67937 3.00464 6.26581 3.00464C6.85225 3.00464 7.41488 3.23673 7.83081 3.65015L9.40082 5.22021C9.81424 5.63615 10.0463 6.19871 10.0463 6.78516C10.0463 7.3716 9.81424 7.93416 9.40082 8.3501L8.0708 9.68018C8.95021 10.8697 9.91617 11.9926 10.9608 13.04C11.9994 14.0804 13.116 15.04 14.3008 15.9102L14.3308 15.9402Z"
              stroke="#ffffff"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <div>
            <h1>Phone Number</h1>
            <p>(+95) 09 797877555</p>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-8 text-center max-[412px]:w-full">
        <h3 className="text-md">Say Hello</h3>
        <h1 className="text-4xl max-md:text-2xl">Contact Us</h1>
        <div className="p-36 max-[810px]:p-16 max-[500px]:p-10 bg-white shadow-lg flex flex-col gap-3 items-center">
          <h3 className="text-2xl font-semibold max-[640px]:text-xl">
            We would love to hear from you
          </h3>
          <h4 className="mb-4 max-[640px]:max-w-40">
            Please fill out the form below if you would like to contact us
          </h4>
          <hr />
          <form
            className="flex flex-col gap-3 text-left justify-start"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="flex max-[1370px]:flex-col gap-3">
              <div className="flex flex-col items-start gap-2">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="bg-gray-950/5 p-2 px-3 focus:bg-white focus:text-black rounded-md outline-none transition-[outline] duration-200 ease-linear focus:outline focus:outline-black max-[1370px]:w-full"
                />
              </div>
              <div className="flex flex-col items-start gap-2">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="bg-gray-950/5 p-2 px-3 focus:bg-white focus:text-black rounded-md outline-none transition-[outline] duration-200 ease-linear focus:outline focus:outline-black max-[1370px]:w-full"
                />
              </div>
              <div className="flex flex-col items-start gap-2">
                <label htmlFor="subject">Subject</label>
                <input
                  type="text"
                  name="subject"
                  id="subject"
                  className="bg-gray-950/5 p-2 px-3 focus:bg-white focus:text-black rounded-md outline-none transition-[outline] duration-200 ease-linear focus:outline focus:outline-black max-[1370px]:w-full"
                />
              </div>
            </div>
            <label htmlFor="message">Message</label>
            <textarea
              name="Message"
              id="message"
              rows="10"
              className="bg-gray-950/5 p-2 px-3 focus:bg-white focus:text-black rounded-md outline-none transition-[outline] duration-200 ease-linear focus:outline focus:outline-black max-[640px]:w-full"
            ></textarea>
            <button
              type="submit"
              className="py-3 mt-7 px-4 bg-gray-800 hover:-translate-y-2 transition-transform duration-200 text-white rounded-lg max-sm:w-full"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
