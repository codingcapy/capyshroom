import { create } from "zustand";

type inviteeStore = {
    invitee: any;
    setInvitee: (args: any) => void;
    currentInviteeId: any;
    setCurrentInviteeId: (args: any) => void;
};

const useInviteeStore = create<inviteeStore>((set, _) => ({
    invitee: null,
    setInvitee: (args: any) => set({ invitee: args }),
    currentInviteeId: null,
    setCurrentInviteeId: (args: any) => set({ currentInviteeId: args }),
}));

export default useInviteeStore;
