
import abanner1 from "../assets/3.png"
import abanner2 from "../assets/4.png"
import abanner3 from "../assets/7.png"


function About() {

    return (
        <div className="bg-[#1B1F2C]">
            <h1 className=" hidden md:block md:text-5xl my-10 text-center">We are on a mission to improve workplace productivity</h1>


            <div className=" flex my-16 section 1">
                <div>
                    <img className=" md:h-96" src={abanner1} alt="" />
                </div>

                <div className=" md:my-16  max-w-[700px] mx-auto" >
                    <h2 className="text-xl font-semibold mb-5 text-center">Welcome to the whimsical world of GoalGetter, where the story of productivity unfolds in chapters of collaboration and simplicity.</h2>
                    <p className="text-center">People are more productive and happier if they can work the way they want. Whether it’s about where they work (at home or in the office),
                        how they communicate with co-workers, or what tools they use to get their work done.</p>
                    <p className="text-center">That’s why Hive is the only project management platform designed by its users.</p>



                    <p className="my-2 text-center">Because you know what works.</p>
                </div>

            </div>

            <hr className="border-t-1 border-[#a84d4d] w-1/2 mx-auto my-10" />



            <div className="flex section 2">

                        <div className="my-16 max-w-[700px] mx-auto">
                    <h1 className="text-xl font-semibold mb-5 text-center">Master Your Time with  <span className="text-xl text-[#114850]">GoalGetter</span> </h1>
                    <p className="text-center">Effective time management is crucial to achieving your goals and staying productive.
                        Our app helps you manage your time by breaking down your tasks into manageable chunks, setting deadlines,
                        and keeping track of your progress. With the ability to prioritize tasks, you can focus on what matters most and ensure
                        that you're using your time wisely.
                        The app allows you to set due dates and reminders, helping you stay on track and avoid procrastination.
                         By organizing tasks and assigning time slots, you can plan your day efficiently, ensuring you're not 
                         overwhelmed by too many tasks at once. It also provides a clear overview of what needs to be done, 
                         helping you visualize your schedule and adjust when necessary.

                    </p>
                </div>

                <div><img className=" hidden md:block h-96" src={abanner3} alt="banner2" />
                </div>

            </div>



            <div className="flex section 3">

            <div><img className="h-96  hidden md:block" src={abanner2} alt="banner2" />
            </div>
                <div className="my-16 max-w-[700px] mx-auto">
                    <h1 className="text-xl font-semibold mb-5 text-center">Simplify Your Tasks with our App</h1>
                    <p className="text-center">A Task management app is a digital tool that helps you stay organized and on top of your
                        daily tasks. With this app, you can easily create, manage, and track tasks as you go
                        about your day. It allows you to add tasks, set priorities, and even mark them as
                        completed when done, providing a clear view of your progress.

                    </p>
                </div>

               

            </div>








        </div>
    )
}

export default About