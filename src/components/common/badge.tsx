import React from 'react'

interface BadgeProps {
    content?: string;
    className: string;
}

export const Badge = ({content="", className=""} : BadgeProps) => {
    return (
        <span 
         className={`px-3 py-1 bg-cyan-500/10 border border-white/40 rounded-full text-cyan-300 text-sm ${className}`}
        >
            {content}
        </span>
    )
}

export default Badge