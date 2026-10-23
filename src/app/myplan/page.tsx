
import React from 'react';
import MyPlan from '@/components/MyPlan';

const MyPlanCard: React.FC = () => {
    return (
        <main className="min-h-screen w-full bg-[#0C0D10]">
            <div className="mx-auto flex w-full max-w-7xl flex-col gap-6 px-4 py-6 sm:px-6 lg:px-8">
                <header className="flex flex-col gap-1">
                    <h1 className="font-oswald text-2xl font-bold leading-tight text-white sm:text-3xl">
                        MY PLAN
                    </h1>

                    <p className="font-inter text-xs text-[#8A92A0]">
                        Cap of five lifts for today. Finish them, then load more.
                    </p>
                </header>

                <MyPlan />
            </div>
        </main>
    );
};

export default MyPlanCard;
