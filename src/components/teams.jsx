import { Element } from "react-scroll";
import TeamCard from "../ui/cards/TeamsCard";

export default function Teams() {
    return(
        <Element name="Teams" className="flex flex-col items-center justify-center gap-10 mt-10
            bg-blue-100 p-5">
            <div className="flex flex-col gap-5">
                <h1 className="text-center text-4xl font-bold">Meet the Team</h1>
                <p>
                    Meet our team of experienced proffessionals dedicated to 
                    delivering exceptional investment solutions
                </p>
            </div>
            <div className="grid grid-cols-4 space-y-3 gap-5">
                <TeamCard image={'/profile.jpg'} name={'Thabani Ndabambi'} role={'Founder & CEO'}/>
                <TeamCard image={'/profile.jpg'} name={'Thabani Ndabambi'} role={'Financial Advisor'}/>
                <TeamCard image={'/profile.jpg'} name={'Thabani Ndabambi'} role={'Investment Analyst'}/>
                <TeamCard image={'/profile.jpg'} name={'Thabani Ndabambi'} role={'Risk Manager'}/>
               
            </div>
        </Element>
    )
}