import React from 'react'

interface BadgeProps {
    content?: string;
    color?: string;
    className: string;
}

export const Badge = ({content, color="cyan", className} : BadgeProps) => {
    return (
        <span 
         className={`px-3 py-1 bg-${color}-500/10 border border-${color}-400/30 rounded-full text-${color}-300 text-sm ${className}`}
        >
            {content}
        </span>
    )
}

export default Badge