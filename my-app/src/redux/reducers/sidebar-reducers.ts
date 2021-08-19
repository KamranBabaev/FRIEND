export type initStateSidebarType = {
  friend: friendType[]
}

type friendType = {
  id: number
  name: string
}


let initState: initStateSidebarType = {
  friend: [
    {id: 1, name: 'Николай'},
    {id: 2, name: 'Андрей'},
    {id: 3, name: 'Виктор'},
    {id: 4, name: 'Станислав'},
    {id: 5, name: 'Алексей'},
    {id: 6, name: 'Максим'},
  ]
}

export const sidebarReducer = (state: initStateSidebarType = initState, action: any) => {
  return state
}