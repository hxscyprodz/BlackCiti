import { Shield, Lightbulb, UserCheck, Award } from 'lucide-react'

export default function ValuesCard({heading, description, icon}) {
    const Icon = icon;
    return (
      <div className="bg-blue-100 p-7 rounded-2xl flex flex-col gap-3 hover:border 
        hover:border-blue-400 hover:scale-100 cursor-pointer">
        <div
          className="bg-blue-50 w-14 rounded-2xl flex items-center justify-center p-3"
        >
          <Icon size={30} color="blue" />
        </div>
        <h2 className="text-xl font-semibold">{heading}</h2>
        <p className="text-sm">{description}</p>
      </div>
    );
}