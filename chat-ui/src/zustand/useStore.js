import { create } from 'zustand';


const useStore = create((set) => ({
    username: undefined,
    tourAttractions: [],
    countries: [],
    messages: [],
    flighets: [],
    searchBarAtBottom: false,
    setSearchBarAtBottom: (searchBarAtBottom) => set((state) => ({...state, searchBarAtBottom  })),
    addMessage: (message, component) => set((state) => ({...state, messages: [ ...state.messages, { ...message, component }, ]})),
    setUsername: (username) => set((state) => ({ ...state, username })),
    setTourAttractions: (tourAttractions) => set((state) => ({ ...state, tourAttractions })),
    setCountries: (countries) => set((state) => ({ ...state, countries })),
    setFlighets: (flighets) => set((state) => ({ ...state, flighets }))    
}));

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


export default useStore;


