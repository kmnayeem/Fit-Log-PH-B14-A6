"use client";

import { IWOContext, IWorkout } from "@/Types/work.type";
import { createContext, ReactNode, useContext, useState } from "react";

const WOContexts = createContext<IWOContext | undefined>(undefined);

export function WOProvider({ children }: { children: ReactNode }) {
    const [buildList, setBuildList] = useState<IWorkout[]>([]);
    const [wishList, setWishList] = useState<IWorkout[]>([]);

    const value: IWOContext = {
        buildList,
        setBuildList,
        wishList,
        setWishList,
    };

    return (
        <WOContexts.Provider value={value}>
            {children}
        </WOContexts.Provider>
    );
}

export default WOContexts;

export function useWOContext() {
    const context = useContext(WOContexts);
    if(!context)
    {
        throw new Error ("useWOContext must be used within a WOProvider");
    }
    return context;
}