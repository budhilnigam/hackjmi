import React, { useContext ,useState} from "react";
import { DarkThemeContext } from "../App";
import img1 from "../images/PastWinner/winner1.jpg"
import img2 from "../images/PastWinner/winner2.jpg"
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const Winner=[
  {
   img:img1,
   teamName:"TEAM SIM4",
   projectName:"Acceleration Alert System",
   TeamMember:["OMAR","IFRA","MOHD.SUHAIL","RAZA AHMED"],
   Review:"The hackJMI was an inspiring event that fostered creativity and collaboration among participants. The diverse range of projects showcased innovative solutions, reflecting the talent and enthusiasm of the participants. The organizers' efforts in creating a supportive and inclusive environment were evident, contributing to the overall success of the hackathon. The organisers provided us with the extra needed equipment and helped us to stay motivated throughout the event. It was an enriching experience along with the exciting goodies and prizes that followed."

  },
  {
   img:img2,
   teamName:"TEAM PROMANIA CS",
   projectName:"GLUCOBOT",
   TeamMember:["FIZA MOIN","ASMAA NAZIR","ABDULLAH MAJID","AKRAM AFRIDI"],
   Review:"Participating in the Hack'JMI and winning the Best Healthcare project was an exhilarating journey that revolved around the creation of our innovative solution, Glucobot. Our team embarked on a mission to revolutionize glucose monitoring, utilizing advanced Near Infrared (NIR) technology and the Beer-Lambert Law to develop a non-invasive glucometer.The hackathon commenced with a buzz of excitement as teams gathered to address real-world challenges in the many sectors. Inspired by the opportunity to make a significant impact, our diverse team, comprising experts in technology, healthcare, and user experience, quickly coalesced around the idea of creating a cutting-edge solution for glucose monitoring.The conceptualization phase involved in-depth research into existing glucose monitoring technologies and an exploration of the challenges faced by individuals managing diabetes. We identified a critical need for a non-invasive glucometer that could provide accurate readings without the discomfort and risks associated with traditional methods.Our project harnessed the power of advanced NIR technology, coupled with the scientific principles of the Beer-Lambert Law, to create a glucometer that could deliver precise and reliable glucose level readings. The innovation lay not only in the technology but also in the user experience. Glucobot was accompanied by a user-friendly app, accessible remotely from any location with internet connectivity. One of the standout features of Glucobot was its non-invasive nature. By eliminating the need for skin breakage, our solution addressed several concerns prevalent in traditional glucose monitoring methods. Users no longer had to grapple with the fear of needles, potential infections, or repeated damage to skin cells from frequent testing. Glucobot's approach not only enhanced user comfort but also prioritized overall safety. Challenges were met with collaborative problem-solving, and each team member played a crucial role in bringing Glucobot to life. When it came time to present our project to the judges, the excitement and nerves were palpable. As we showcased the capabilities of Glucobot, highlighting its technological innovation, user benefits, and potential impact on diabetes management, the positive response from the judges further fueled our enthusiasm. Winning the best healthcare project at the Hack’JMI was a moment of triumph for our team. It validated the countless hours of research, development, and collaboration that went into creating Glucobot. Beyond the accolades, the victory opened doors to potential partnerships, funding opportunities, and the chance to further refine and implement our solution in the real world.The experience was a reminder that even in a short timeframe, a dedicated team can develop transformative solutions that have the potential to improve lives and make a lasting impact on healthcare practices"
  }

]

const PastWinners = () => {
	const { isDarkTheme } = useContext(DarkThemeContext);
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % Winner.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + Winner.length) % Winner.length);
  };

  

	return (
        <section className="relative" id="winners">
        <div className="max-w-3xl mx-auto text-center py-16 md:py-20" data-aos="zoom-out">
        <h1 className="dark:text-white h2 mb-4" data-aos="zoom-in">Past Winners</h1>
        <div className="relative">
      <div className="flex overflow-x-auto relative">
        
        {Winner.map((d, index) => (
          <div
            key={index}
            className={`flex flex-col lg:flex-row border border-gray-300 mx-2 max-w-screen-md w-90 m-2 dark:bg-gray-800 ${
              index === currentIndex ? '' : 'hidden'
            }`}
          >
            <div className="flex-1 overflow-hidden border-b border-r">
          
              <img
                src={d.img}
                alt=""
                className="w-full h-full border-b-2 border-r-2 border-gray-300 rounded-tr-2xl rounded-br-2xl md:rounded-none"
                         />
              
            </div>
            <div className="flex-1 p-5 dark:text-white">
              <p className="mb-5 text-center text-3xl font-bold">{d.teamName}</p>
              <p className="text-center ">Project name</p>
              <p className="text-center text-lg">{d.projectName}</p>
              <ul className="list-none list-inside">
                MEMBER:-
                {d.TeamMember.map((member, memberIndex) => (
                  <li key={memberIndex}>{member}</li>
                ))}
              </ul>
              <p className="italic text-gray text-2xl dark:text-gray-300">Review</p>
              <div className="italic text-gray-500 mt-15 h-60 overflow-auto scrollbar-thin scrollbar-thumb-blue-500 scrollbar-track-gray-300 dark:scrollbar-thumb-blue-300 dark:scrollbar-track-gray-700">
                <p>{d.Review}</p>
              </div>
              <div className="flex justify-between m-6">
  <div className="flex items-center cursor-pointer" onClick={prevSlide}>
    <FaArrowLeft style={{ fontSize: '2rem' }} className="text-gray-500 dark:text-gray-300" />
  </div>
  <div className="flex items-center cursor-pointer" onClick={nextSlide}>
    <FaArrowRight style={{ fontSize: '2rem' }} className="text-gray-500 dark:text-gray-300" />
  </div>
</div>

             


             
        </div>
            </div>
          
        ))}
        
      </div>
    </div>
        
      </div>
      <hr className="border border-gray-300 w-3/4 mx-auto my-2" />
    </section>
	);
}

export default PastWinners;

