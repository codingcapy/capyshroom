import { create } from "zustand";

type projectStore = {
    invitee: any;
    setInvitee: (args: any) => void;
    currentInviteeId: any;
    setCurrentInviteeId: (args: any) => void;
};

const useProjectStore = create<projectStore>((set, _) => ({
    invitee: null,
    setInvitee: (args: any) => set({ invitee: args }),
    currentInviteeId: null,
    setCurrentInviteeId: (args: any) => set({ currentInviteeId: args }),
}));

export default useProjectStore;
