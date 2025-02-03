import chat from "../assets/chat.png"
import map from "../assets/map1.png"
import phone from "../assets/phone.png"



function Contact() {
    return(

 <div>
   <div class="grid md:grid-cols-3 items-start gap-4 max-md:gap-12 max-w-6xl mx-auto py-6 bg-white font-[sans-serif]">
      <div class="px-4">
        <h2 class="text-gray-800 text-xl font-semibold">Contact Information</h2>

        <div class="space-y-8 mt-8">
          <div class="flex">
            <div class="w-8 h-8 flex items-center shrink-0 rounded border p-1.5">
              <img src={chat} alt="" />
            </div>

            <div class="ml-4">
              <h4 class="text-gray-800 text-base font-semibold">Chat to us</h4>
              <p class="text-xs mt-1 text-gray-500">Chat with our team to help.</p>
              <p class="text-sm mt-4">goalgetter@gmail.com</p>
            </div>
          </div>

          <div class="flex">
            <div class="w-8 h-8 flex items-center shrink-0 rounded border p-1.5">
              <img src={map} alt="" />
            </div>

            <div class="ml-4">
              <h4 class="text-gray-800 text-base font-semibold">Visit us</h4>
              <p class="text-xs mt-1 text-gray-500">Visit our office HQ.</p>
              <p class="text-sm mt-4">Goripalayam, Madurai</p>
            </div>
          </div>

          <div class="flex">
            <div class="w-8 h-8 flex items-center shrink-0 rounded border p-1.5">
              <img src={phone} alt="" />
            </div>

            <div class="ml-4">
              <h4 class="text-gray-800 text-base font-semibold">Call us</h4>
              <p class="text-xs mt-1 text-gray-500">Monday to Friday.</p>
              <p class="text-sm mt-4">+158 996 888</p>
            </div>
          </div>
        </div>
      </div>

      <div class="bg-gray-800 rounded-3xl md:col-span-2 p-8">
        <h2 class="text-xl text-yellow-300 font-semibold">Connect with Us</h2>
        <p class="text-sm text-gray-400 mt-2 leading-relaxed">Have some big idea or tool to develop regarding our app? Then reach out we'd love to hear about your project and more.</p>

        <form>
          <div class="space-y-4 mt-8">
            <input type="text" placeholder="Full Name"
              class="px-2 py-3 bg-transparent text-gray-200 font-medium w-full text-sm border-b border-gray-400 focus:border-yellow-300 outline-none" />
            <input type="text" placeholder="Street"
              class="px-2 py-3 bg-transparent text-gray-200 font-medium w-full text-sm border-b border-gray-400 focus:border-yellow-300 outline-none" />
            <input type="number" placeholder="Phone No."
              class="px-2 py-3 bg-transparent text-gray-200 font-medium w-full text-sm border-b border-gray-400 focus:border-yellow-300 outline-none" />

            <input type="email" placeholder="Email"
              class="px-2 py-3 bg-transparent text-gray-200 font-medium w-full text-sm border-b border-gray-400 focus:border-yellow-300 outline-none" />

            <textarea placeholder="Write Message"
              class="px-2 pt-3 bg-transparent text-gray-200 font-medium w-full text-sm border-b border-gray-400 focus:border-yellow-300 outline-none"></textarea>
          </div>

          <button type="button"
            class="mt-8 flex items-center justify-center text-sm rounded-md px-4 py-2.5 text-gray-800 bg-yellow-400 hover:bg-yellow-500">
            
            Send Message
          </button>
        </form>
      </div>
    </div>
 </div>
    )
}


export default Contact