import { create } from 'zustand';



const useStore = create((set) => ({
    user: {
        username: undefined,
        preferredAttraction: undefined,
        preferredCity: undefined,
        startDate: undefined, 
        endDate: undefined
    },
    options: {
        tourAttractions: [],
        cities: [],
    },
    messages: [],
    flighets: [],
    searchBarAtBottom: false,
    setUser: (user) => set((state) => ({ ...state, user })),
    setUsername: (username) => set((state) => ({...state, user: { ...state.user, username }})),
    setPreferredAttraction: (preferredAttraction) => set((state) => ({...state, user: { ...state.user, preferredAttraction }})),
    setPreferredCity: (preferredCity) => set((state) => ({...state, user: { ...state.user, preferredCity }})),
    setUserStartDate: (startDate) => set((state) => ({...state, user: { ...state.user, startDate }})),
    setUserEndDate: (endDate) => set((state) => ({...state, user: { ...state.user, endDate }})),
    setOptions: (options) => set((state) => ({ ...state, options })),
    setOptionsTourAttraction: (tourAttractions) => set((state) => ({...state, options: { ...state.options, tourAttractions }})),
    setOptionsCities: (cities) => set((state) => ({ ...state, options: { ...state.options, cities }})),
    setSearchBarAtBottom: (searchBarAtBottom) => set((state) => ({...state, searchBarAtBottom  })),
    addMessage: (message, component) => set((state) => ({...state, messages: [ ...state.messages, { ...message, component }, ]})),
    setFlighets: (flighets) => set((state) => ({ ...state, flighets }))    
}));

export default useStore;

/*
    {
        header: 'asdsa'
        textContent: 'asdsadsadsaddsasa',
        image:  {
            src:'http:///asdkjsadk.com/ski',
            label: 'dsasd',
            onClick: () => {}
        }
        style: 
        {

        
        }
    }
          {
        header: ''
        textContent: '',
        image: 'http:///asdkjsadk.com/ski'
    }
          {
        header: ''
        textContent: '',
        image: 'http:///asdkjsadk.com/ski'
    }
*/





