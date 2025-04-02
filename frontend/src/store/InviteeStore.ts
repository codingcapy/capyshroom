import { create } from "zustand";

type inviteeStore = {
    invitee: any;
    setInvitee: (args: any) => void;
    dietaryContent: string;
    setDietaryContent: (args: any) => void;
    guests: number;
    setGuests: (args: any) => void;
    firstName1: string;
    setFirstName1: (args: any) => void;
    lastName1: string;
    setLastName1: (args: any) => void;
    dietary1: string;
    setDietary1: (args: any) => void;
    firstName2: string;
    setFirstName2: (args: any) => void;
    lastName2: string;
    setLastName2: (args: any) => void;
    dietary2: string;
    setDietary2: (args: any) => void;
    firstName3: string;
    setFirstName3: (args: any) => void;
    lastName3: string;
    setLastName3: (args: any) => void;
    dietary3: string;
    setDietary3: (args: any) => void;
    firstName4: string;
    setFirstName4: (args: any) => void;
    lastName4: string;
    setLastName4: (args: any) => void;
    dietary4: string;
    setDietary4: (args: any) => void;
};

const useInviteeStore = create<inviteeStore>((set, _) => ({
    invitee: null,
    setInvitee: (args: any) => set({ invitee: args }),
    dietaryContent: "",
    setDietaryContent: (args: any) => set({ dietaryContent: args }),
    guests: 0,
    setGuests: (args: any) => set({ guests: args }),
    firstName1: "",
    setFirstName1: (args: any) => set({ firstName1: args }),
    lastName1: "",
    setLastName1: (args: any) => set({ lastName1: args }),
    dietary1: "",
    setDietary1: (args: any) => set({ dietary1: args }),
    firstName2: "",
    setFirstName2: (args: any) => set({ firstName2: args }),
    lastName2: "",
    setLastName2: (args: any) => set({ lastName2: args }),
    dietary2: "",
    setDietary2: (args: any) => set({ dietary2: args }),
    firstName3: "",
    setFirstName3: (args: any) => set({ firstName3: args }),
    lastName3: "",
    setLastName3: (args: any) => set({ lastName3: args }),
    dietary3: "",
    setDietary3: (args: any) => set({ dietary3: args }),
    firstName4: "",
    setFirstName4: (args: any) => set({ firstName4: args }),
    lastName4: "",
    setLastName4: (args: any) => set({ lastName4: args }),
    dietary4: "",
    setDietary4: (args: any) => set({ dietary4: args }),
}));

export default useInviteeStore;
