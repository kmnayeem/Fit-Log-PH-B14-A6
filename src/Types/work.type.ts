export interface IWorkout {
  id: number;
  name: string;
  image: string;
  muscleGroups: string[];
  equipment: string;
  difficulty: "Beginner" | "Intermediate" | "Advanced";
  duration: number;
  caloriesBurned: number;
  sets: number;
  reps: string;
  rating: number;
  description: string;
  instructions: string[];
}

export interface IWOContext {
  buildList: IWorkout[];
  wishList: IWorkout[];
  setBuildList: React.Dispatch<React.SetStateAction<IWorkout[]>>;
  setWishList: React.Dispatch<React.SetStateAction<IWorkout[]>>;
}