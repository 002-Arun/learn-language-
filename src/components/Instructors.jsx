'use client'
import { cn } from "@/utils/cn";
import { AnimatedTooltip } from "./ui/animated-tooltip";
import { Boxes } from "./ui/background-boxes";
;

const instructors = [
    {
        id: 1,
        name: 'Elena Briggs',
        designation: 'Vocal Coach',
        image:
            'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60',
    },
    {
        id: 2,
        name: 'Marcus Reid',
        designation: 'Guitar Instructor',
        image:
            'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80',
    },
    {
        id: 3,
        name: 'Julia Zhang',
        designation: 'Piano Teacher',
        image:
            'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60',
    },
    {
        id: 4,
        name: 'Andre Gomez',
        designation: 'Drumming Expert',
        image:
            'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60',
    },
];

function Instructors() {
    return (
        <div className="h-96 relative w-full overflow-hidden bg-slate-900 flex flex-col items-center justify-center rounded-lg">
            <div className="absolute inset-0 w-full h-full bg-slate-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />

            <Boxes />

            <h1 className={cn("md:text-6xl text-xl text-white relative z-20")}>

                Meet Our Expert Instructors
            </h1>
            <p className="text-center mt-2 text-neutral-300 relative z-20">
                Embark on a transformative learning experience guided by our expert instructors.
            </p>
            <div className="flex flex-row items-center justify-center mt-20 w-full">
                <AnimatedTooltip items={instructors} />
            </div>
        </div>

    )
}

export default Instructors