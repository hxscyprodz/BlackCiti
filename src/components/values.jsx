import { Lightbulb, Shield, UserCheck, Award } from "lucide-react";
import ValuesCard from "../ui/cards/values-card";

export default function Values() {
    return (
      <div>
        <div className="flex flex-col justify-center items-center gap-5">
          <h1 className="text-4xl font-bold">Our Core Value</h1>
          <p className="text-base">
            These principles guide everything we do at BlackCiti, from product
            decisions to wealth creation.
          </p>
        </div>
        <div className="grid grid-cols-4 gap-5 mt-10">
            <ValuesCard heading={'Integrity'} icon={Shield} 
                description={'We operate with the highest level of integrity, transparency, and honesty in all our interactions'}/>
            <ValuesCard heading={'Innovation'} icon={Lightbulb}
                description={'We stay ahead of the curve, embracing new ideas and technologies to drive better investment outcomes'}/>
            <ValuesCard heading={'Client-Centricity'} icon={UserCheck} 
                description={'We put our clients at the heart of everything we do, prioritizing their needs and goals above all else'}/>
            <ValuesCard heading={'Excellence'} icon={Award}
                description={'We strive for excellence in everything we do, from investment management to client service'}/>
        </div>
      </div>
    );
}