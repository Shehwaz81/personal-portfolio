import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import pumpkin from '../../assets/pumpkin.png'
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
        lg: 'w-96 h-96'
    }
    return (
    <div className="relative group flex h-100 w-100 items-center transform translate-y-50">
        <div
            className="absolute -inset-2 rounded-full blur-xl opacity-0 group-hover:opacity-20 transition-all duration-700"
            style={{ backgroundColor: '#06b6d4' }}
        />
      <Avatar className={cn(
        sizeClasses[size],
        "ring-1 ring-slate-200/50",
        "group-hover:ring-2 group-hover:ring-white-400/30 group-hover:drop-shadow-[0_0_0.8rem_white]",
        "transition-all duration-500 ease-in-out rounded-full overflow-hidden",
        "group-hover:scale-102",
        className
      )}>
            <AvatarImage className="overflow-hidden" src={pumpkin} alt="Your Name" />
            <AvatarFallback className="w-124 h-124 bg-slate-100 text-slate-700 font-semibold">
            {alt}
            </AvatarFallback>
        </Avatar>
    </div>
    )
} 