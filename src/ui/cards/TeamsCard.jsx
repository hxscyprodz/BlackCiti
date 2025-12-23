export default function TeamCard({image, name, role}) {
    return (
      <div className="flex flex-col gap-3">
        <div className="overflow-hidden">
          <img
            className="h-70 rounded-md hover:scale-105 transition-all hover:brightness-50
                    duration-700"
            src={image}
            alt={`${name} profile picture`}
          />
        </div>
        <div>
          <p className="text-center font-semibold text-lg">{name}</p>
          <p className="text-center text-[#999999] text-base">{role}</p>
        </div>
      </div>
    );
}