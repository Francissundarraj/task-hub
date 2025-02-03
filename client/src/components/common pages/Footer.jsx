import facebook from "../../assets/facebook1.png"
import twitter from "../../assets/tw4.png"
import linkedin from "../../assets/linkedin1.png"


function Footer() {
    return (
        <div className="bg-[#1D1E1F] p-20">
            <div className="flex gap-80 section 1">

                <div className="mx-24 md:mx-10" >
                    <div className="  md:my-10 ">
                        <h1 className="text-4xl text-[#7C7B7B]">GoalGetter</h1>
                    </div>

                    <div className="flex my-10 gap-5">

<a href="https://www.facebook.com/" target="_blank"><img className="rounded-full transition-all duration-300 hover:bg-[#6C311A]  h-10" src={facebook} alt="" /></a>
<a href="https://x.com/?lang=en" target="_blank"><img className="h-10 rounded-full transition-all duration-300 hover:bg-[#6C311A]" src={twitter} alt="" /></a>
<a href="https://www.linkedin.com/" target="_blank"><img className="h-10 rounded-full transition-all duration-300 hover:bg-[#6C311A]" src={linkedin} alt="" /></a>

                   
                    </div>

                    <div className=" mx-10    md:my-10  md:mx-10 ">
                        <select name="Countries" className="p-2 rounded-lg bg-[#6e5454]">
                            <option value="English">English</option>
                            <option value="Spanish">Spanish</option>
                            <option value="French">French</option>
                            <option value="Tamil">Tamil</option>
                            <option value="German">German</option>
                        </select>

                    </div>

                </div>

                <div className="hidden md:flex gap-36  ">
                    <div className="flex flex-col gap-5">
                        <h1 className="text-xl font-bold text-[#6e6969]">Company</h1>
                        <a className="underline decoration-transparent cursor-finger3 hover:decoration-white underline-offset-4 transition-all
                         ease-in-out duration-500" href="About">About</a>

                        <a className="underline decoration-transparent cursor-finger3 hover:decoration-white underline-offset-4 transition-all
                         ease-in-out duration-500" href="Contact us">Contact us</a>
                        <a className="underline decoration-transparent cursor-finger3 hover:decoration-white underline-offset-4 transition-all
                         ease-in-out duration-500"  href="Press">Press</a>
                        <a className="underline decoration-transparent cursor-finger3 hover:decoration-white underline-offset-4 transition-all
                         ease-in-out duration-500" href="Careers">Careers</a>
                        <a className="underline decoration-transparent cursor-finger3 hover:decoration-white underline-offset-4 transition-all
                         ease-in-out duration-500"  href="Partner Program">Partner Program</a>
                        <a className="underline decoration-transparent cursor-finger3 hover:decoration-white underline-offset-4 transition-all
                         ease-in-out duration-500"  href="Accessibility">Accessibility</a>
                    </div>
                    <div className="flex flex-col gap-5">
                        <h1 className="text-xl font-bold text-[#6e6969]">Features</h1>
                        <a className="underline decoration-transparent cursor-finger3 hover:decoration-white underline-offset-4 transition-all
                         ease-in-out duration-500" href="Dashboards">Dashboards</a>
                        <a className="underline decoration-transparent cursor-finger3 hover:decoration-white underline-offset-4 transition-all
                         ease-in-out duration-500" href=" Due Management">Date Management</a>
                        <a className="underline decoration-transparent cursor-finger3 hover:decoration-white underline-offset-4 transition-all
                         ease-in-out duration-500"  href="Tasks Segregation">Tasks Segregation</a>
                        <a className="underline decoration-transparent cursor-finger3 hover:decoration-white underline-offset-4 transition-all
                         ease-in-out duration-500" href="Client Management">Client Management</a>
                        <a className="underline decoration-transparent cursor-finger3 hover:decoration-white underline-offset-4 transition-all
                         ease-in-out duration-500"  href="Notepad">Notepad</a>
                        <a className="underline decoration-transparent cursor-finger3 hover:decoration-white underline-offset-4 transition-all
                         ease-in-out duration-500"  href="Automations">Automations</a>
                    </div>











                    <div className="flex flex-col gap-5">
                        <h1 className="text-xl font-bold text-[#6e6969]">Resources</h1>
                        <a className="underline decoration-transparent cursor-finger3 hover:decoration-white underline-offset-4 transition-all
                         ease-in-out duration-500" href="   Product roadmap">   Product roadmap</a>

                        <a className="underline decoration-transparent cursor-finger3 hover:decoration-white underline-offset-4 transition-all
                         ease-in-out duration-500" href="Security overview">Security overview</a>
                        <a className="underline decoration-transparent cursor-finger3 hover:decoration-white underline-offset-4 transition-all
                         ease-in-out duration-500"  href="Blog">Blog</a>
                        <a className="underline decoration-transparent cursor-finger3 hover:decoration-white underline-offset-4 transition-all
                         ease-in-out duration-500" href="Google API policy">Google API policy</a>
                        <a className="underline decoration-transparent cursor-finger3 hover:decoration-white underline-offset-4 transition-all
                         ease-in-out duration-500"  href="Platform status">Platform status</a>
                        <a className="underline decoration-transparent cursor-finger3 hover:decoration-white underline-offset-4 transition-all
                         ease-in-out duration-500"  href=" Guide">Guide</a>
                    </div>


                </div>



            </div>


            <hr className="border-gray-600-bold my-10" />

            <div className="section 2">

                <div className="container mx-auto flex justify-between items-center">

                    <div className="flex space-x-6">
                        <a href="/terms" className="underline decoration-transparent cursor-finger3 hover:decoration-[#4ce6c4] underline-offset-4 transition-all
                         ease-in-out duration-500">Terms and Conditions</a>
                        <a href="/privacy" className="underline decoration-transparent cursor-finger3 hover:decoration-[#4ce6c4] underline-offset-4 transition-all
                         ease-in-out duration-500">Privacy Policy</a>
                        <a href="/cookies" className="underline decoration-transparent cursor-finger3 hover:decoration-[#4ce6c4] underline-offset-4 transition-all
                         ease-in-out duration-500">Cookie Policy</a>
                        <a href="/contact" className="underline decoration-transparent cursor-finger3 hover:decoration-[#4ce6c4] underline-offset-4 transition-all
                         ease-in-out duration-500">Contact</a>
                    </div>


                    <div className=" hidden md:block  text-sm">
                        <p className="text-[#837975]">© 2025 Your Company. All rights reserved.</p>
                    </div>
                </div>





            </div>

        </div>
    )
}

export default Footer