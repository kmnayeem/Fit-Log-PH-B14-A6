"use client";

import { IWOContext, IWorkout } from "@/Types/work.type";
import { createContext, ReactNode, useState } from "react";

const WOContexts = createContext<IWOContext | undefined>(undefined);

export function WOContext({ children }: { children: ReactNode }) {
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