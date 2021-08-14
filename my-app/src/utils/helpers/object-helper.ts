export const updateObjectInArray = (items: any, itemID: any, objPropName: any, newObjProps: any) => {
  // @ts-ignore
  return items.map(u => {
        if (u[objPropName] === itemID) {
          return {...u, ...newObjProps}
        }
        return u
      }
  )
}