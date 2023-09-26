import { defineStore } from 'pinia'
import type { Component } from 'vue'
import GreenSquare from '@/components/icons/GreenSquare.vue'
import OrangeSquare from '@/components/icons/OrangeSquare.vue'
import PurpleSquare from '@/components/icons/PurpleSquare.vue'

type Inventory = {
  id: number
  icon?: Component | null
  count?: number
  class: string
}

type LSName = 'inventory-list' | 'original-list'

export const useInventoryStore = defineStore('inventory', {
  state: () => ({
    list: [
      {
        id: 1,
        icon: PurpleSquare,
        count: 5,
        class: ''
      },
      {
        id: 2,
        icon: OrangeSquare,
        count: 4,
        class: ''
      },
      {
        id: 3,
        count: 3,
        icon: GreenSquare,
        class: ''
      },
      // Остальные элементы с цифровыми id
      {
        id: 4,
        class: 'not-draggable'
      },
      {
        id: 5,
        class: 'not-draggable'
      },
      {
        id: 6,
        class: 'not-draggable'
      },
      {
        id: 7,
        class: 'not-draggable'
      },
      {
        id: 8,
        class: 'not-draggable'
      },
      {
        id: 9,
        class: 'not-draggable'
      },
      {
        id: 10,
        class: 'not-draggable'
      },
      {
        id: 11,
        class: 'not-draggable'
      },
      {
        id: 12,
        class: 'not-draggable'
      },
      {
        id: 13,
        class: 'not-draggable'
      },
      {
        id: 14,
        class: 'not-draggable'
      },
      {
        id: 15,
        class: 'not-draggable'
      },
      {
        id: 16,
        class: 'not-draggable'
      },
      {
        id: 17,
        class: 'not-draggable'
      },
      {
        id: 18,
        class: 'not-draggable'
      },
      {
        id: 19,
        class: 'not-draggable'
      },
      {
        id: 20,
        class: 'not-draggable'
      },
      {
        id: 21,
        class: 'not-draggable'
      },
      {
        id: 22,
        class: 'not-draggable'
      },
      {
        id: 23,
        class: 'not-draggable'
      },
      {
        id: 24,
        class: 'not-draggable'
      },
      {
        id: 25,
        class: 'not-draggable'
      }
    ] as Inventory[],
    defaultList: [
      {
        id: 1,
        icon: PurpleSquare,
        count: 5,
        class: ''
      },
      {
        id: 2,
        icon: OrangeSquare,
        count: 4,
        class: ''
      },
      {
        id: 3,
        count: 3,
        icon: GreenSquare,
        class: ''
      }
    ] as Inventory[]
  }),
  actions: {
    updateInventoryList(lsName: LSName) {
      const inventoryList = localStorage.getItem(lsName)
      if (inventoryList) {
        const list: Inventory[] = JSON.parse(inventoryList)

        this.list = list.map((item) => {
          const defaultItem = this.defaultList.find((elem) => elem.id === item.id)

          if (defaultItem) {
            item.icon = defaultItem.icon
          }

          return item
        })
      }
    }
  }
})
