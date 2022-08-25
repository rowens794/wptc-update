import { MailIcon, PhoneIcon } from '@heroicons/react/outline'

export function Contact() {
  return (
    <div className="relative bg-gray-900" id="contact">
      <div className="absolute inset-0">
        <div className="absolute inset-y-0 left-0 w-1/2 bg-gray-900" />
      </div>
      <div className="relative mx-auto max-w-7xl lg:grid lg:grid-cols-5">
        <div className="bg-gray-900 py-16 px-4 sm:px-6 lg:col-span-2 lg:px-8 lg:py-24 xl:pr-12">
          <div className="mx-auto max-w-lg">
            <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl sm:tracking-tight">
              Get in touch
            </h2>
            <p className="mt-3 leading-6 text-gray-200">
              Feel free to reach out at any time. I'm always thrilled to talk
              about projects with folks. You can reach me by phone, email, or
              through the contact form right here.
            </p>
            <dl className="mt-8 text-base text-gray-200">
              <div>
                <dd>
                  <p>Ryan Owens</p>
                  <p>Charleston, WV</p>
                </dd>
              </div>
              <div className="mt-6">
                <dt className="sr-only">Phone number</dt>
                <dd className="flex">
                  <PhoneIcon
                    className="h-6 w-6 flex-shrink-0 text-gray-200"
                    aria-hidden="true"
                  />
                  <span className="ml-3">+1 (304) 231-7428</span>
                </dd>
              </div>
              <div className="mt-3">
                <dt className="sr-only">Email</dt>
                <dd className="flex">
                  <MailIcon
                    className="h-6 w-6 flex-shrink-0 text-gray-200"
                    aria-hidden="true"
                  />
                  <span className="ml-3">ryan@webpagesthatconvert.com</span>
                </dd>
              </div>
            </dl>
          </div>
        </div>
        <div className="bg-gray-900 py-16 px-4 sm:px-6 lg:col-span-3 lg:py-24 lg:px-8 xl:pl-12">
          <div className="mx-auto max-w-lg lg:max-w-none">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  )
}

const ContactForm = () => {
  return (
    <div className="w-full py-4">
      <div className="relative">
        <div>
          <form
            name="contact-us"
            method="POST"
            data-netlify="true"
            action="/submission-success"
            netlify-honeypot="age"
          >
            <input type="hidden" name="form-name" value="contact-us" />
            <div className="grid grid-cols-1 gap-6">
              <input
                name="name"
                className="focus:shadow-outline block w-full appearance-none rounded-md bg-gray-200 px-4 py-4 font-light leading-normal text-gray-700 placeholder-gray-500 focus:outline-none"
                type="text"
                placeholder="Name"
              />
              <input
                name="email"
                className="focus:shadow-outline block w-full appearance-none rounded-md bg-gray-200 px-4 py-4 font-light leading-normal text-gray-700 placeholder-gray-500 focus:outline-none"
                type="email"
                placeholder="Email"
              />
              <div className="col-span-1">
                <textarea
                  name="message"
                  rows={5}
                  id="comment"
                  className="focus:shadow-outline block w-full appearance-none rounded-md bg-gray-200 px-4 py-4 font-light leading-normal text-gray-700 placeholder-gray-500 focus:outline-none"
                  placeholder="Add your comment..."
                  defaultValue=""
                />
              </div>
              <div className="w-full">
                <button
                  type="submit"
                  className="focus:shadow-outline bg-primary-500 hover:bg-primary-600 float-right w-40 rounded-md border border-white px-8 py-4 font-bold text-white hover:cursor-pointer focus:outline-none"
                >
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
