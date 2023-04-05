import { createContext } from 'react'

export const helper = {
  addToCart: (itm, _action) => {
    _action(p => {
      return {
        ...p,
        [itm.id]: { ...itm, count: 1 },
      }
    })
  },

  removeFromCart: (_id, _action) => {
    _action(p => {
      const curr = { ...p };
      delete curr[_id];
      return curr;
    });
  },
  handleCounter: (_id, _action, _actionFunc) => {
    _actionFunc(p => {
      const currItem = p[_id];
      let currCount = currItem.count;
      if (_action === 'inc') {
        currCount += 1;
      } else {
        if (currCount > 0) {
          currCount -= 1;
        }
      }
      const newItemCount = { ...p, [_id]: { ...currItem, count: currCount } };
      return newItemCount;
    });
  }
}

export const TopLayer = createContext();
