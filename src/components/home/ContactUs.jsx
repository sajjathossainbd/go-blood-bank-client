function ContactUs() {
  return (
    <>
      <section className="get-touch-section lg:pb-20 md:pb-16 pb-12">
        <div className="get-touch-section-content lg:px:0 md:px-0 px-8 mb-10 mt-4 text-center">
          <h2 className="lg:text-4xl md:text-3xl text-3xl font-extrabold mb-6 font-playfair">
            Get In Touch
          </h2>
        </div>

        <div className="get-touch-contact-info-form flex lg:flex-row flex-col gap-20 lg:px-0 md:px-0 px-10">
          <div className="flex flex-col gap-6 border-2 border-[#1313181A] rounded-2xl p-12">
            <div className="contact-info bg-[#BCED6D1A] rounded-xl">
              <div className="phone-call px-8 py-11">
                <img src="./assets/icons/phone_call.png" alt="" />
                <p className="mt-6 mb-2">Phone Number :</p>
                <h4 className="text-lg font-extrabold text-[#131318]">
                  (+62) 123-321-543
                </h4>
              </div>
            </div>

            <div className="email-info bg-[#FDDD5F1A] rounded-xl">
              <div className="phone-call px-8 py-11">
                <img src="./assets/icons/message.png" alt="" />
                <p className="mt-6 mb-2">Email :</p>
                <h4 className="text-lg font-extrabold text-[#131318]">
                  help@gobloodbank.com
                </h4>
              </div>
            </div>

            <div className="map-info bg-[#BCED6D1A] rounded-xl">
              <div className="phone-call px-8 py-11">
                <img src="./assets/icons/location.png" alt="" />
                <p className="mt-6 mb-2">Location :</p>
                <h4 className="text-lg font-extrabold text-[#131318]">
                  1 N Taylor, St Louis, 63108 - USA.
                </h4>
              </div>
            </div>
          </div>

          <div className="contact-form flex-1">
            <form className="grid lg:grid-cols-2 gap-8">
              <div className="name-box">
                <label className="text-xl font-bold" htmlFor="">
                  Name
                </label>
                <br />
                <input
                  type="text"
                  placeholder="Enter Your Full Name"
                  className="input input-bordered w-full mt-3"
                />
              </div>
              <div className="email-box">
                <label className="text-xl font-bold" htmlFor="">
                  Your Email
                </label>
                <br />
                <input
                  type="email"
                  placeholder="Enter Your Email"
                  className="input input-bordered w-full mt-3"
                />
              </div>
              <div className="subject-box">
                <label className="text-xl font-bold" htmlFor="">
                  Subject
                </label>
                <br />
                <input
                  type="text"
                  placeholder="Enter Your Subject"
                  className="input input-bordered w-full mt-3"
                />
              </div>
              <div className="number-box">
                <label className="text-xl font-bold" htmlFor="">
                  Mobile Number
                </label>
                <br />
                <input
                  type="number"
                  placeholder="Enter Your Mobile Number"
                  className="input input-bordered w-full mt-3"
                />
              </div>
              <div className="textarea-box col-span-full">
                <label className="text-xl font-bold" htmlFor="">
                  Message
                </label>
                <br />
                <textarea
                  className="mt-3 textarea textarea-bordered h-40 w-full"
                  placeholder="Write your message"
                ></textarea>
              </div>
              <button className="col-span-full text-xl btn bg-[#FF5364] hover:bg-[#d14654]   text-white mr-4 px-5 w-full">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

export default ContactUs;
