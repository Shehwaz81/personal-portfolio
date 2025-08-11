import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import pumpkin from '../../../public/assets/pfp4.jpg'
import { cn } from "@/lib/utils";

interface AvatarProps {
    alt?: string;
    className?: string;
    size?: 'lg' | 'md' | 'sm';
}

export const ProfileAvatar = ({
    alt = "SS",
    className,
    size = "lg"
}: AvatarProps) => {
    const sizeClasses = {
        sm: 'w-16 h-16',
        md: 'w-24 h-24', 
        lg: 'w-88 h-88'
    }
    return (
    <div className="relative group flex h-105 w-105 justify-center items-center transform rounded-full">
        <div
            className="absolute -inset-2 rounded-full blur-xl opacity-0 opacity-15 transition-all duration-700"
            style={{ backgroundColor: '#06b6d4' }}
        />
      <Avatar className={cn(
        sizeClasses[size],
        "group-hover:drop-shadow-[0_0_0.5rem_cyan] border-1 border-cyan-400 ",
        "transition-all duration-500 ease-in-out rounded-full overflow-hidden",
        "group-hover:scale-102",
        className
      )}>
            <AvatarImage className="scale-100" src={pumpkin} alt="Your Name" />
            <AvatarFallback className="w-124 h-124 bg-slate-100 text-slate-700 font-semibold">
            {alt}
            </AvatarFallback>
        </Avatar>
    </div>
    )
} 