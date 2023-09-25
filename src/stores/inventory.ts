import { defineStore } from 'pinia'

import GreenSquare from '@/components/icons/GreenSquare.vue'
import OrangeSquare from '@/components/icons/OrangeSquare.vue'
import PurpleSquare from '@/components/icons/PurpleSquare.vue'

export const useInventoryStore = defineStore('inventory', {
  state: () => ({
    list: [
      {
        id: '1',
        icon: PurpleSquare
      },
      {
        id: '2',
        icon: OrangeSquare
      },
      {
        id: '3',
        icon: GreenSquare
      },
      {
        id: '4',
        class: 'not-draggable'
      },
      {
        id: '5',
        class: 'not-draggable'
      },
      {
        id: '6',
        class: 'not-draggable'
      },
      {
        id: '7',
        class: 'not-draggable'
      },
      {
        id: '8',
        class: 'not-draggable'
      },
      {
        id: '9',
        class: 'not-draggable'
      },
      {
        id: '10',
        class: 'not-draggable'
      },
      {
        id: '11',
        class: 'not-draggable'
      },
      {
        id: '12',
        class: 'not-draggable'
      },
      {
        id: '13',
        class: 'not-draggable'
      },
      {
        id: '14',
        class: 'not-draggable'
      },
      {
        id: '15',
        class: 'not-draggable'
      },
      {
        id: '16',
        class: 'not-draggable'
      },
      {
        id: '17',
        class: 'not-draggable'
      },
      {
        id: '18',
        class: 'not-draggable'
      },
      {
        id: '19',
        class: 'not-draggable'
      },
      {
        id: '20',
        class: 'not-draggable'
      },
      {
        id: '21',
        class: 'not-draggable'
      },
      {
        id: '22',
        class: 'not-draggable'
      },
      {
        id: '23',
        class: 'not-draggable'
      },
      {
        id: '24',
        class: 'not-draggable'
      },
      {
        id: '25',
        class: 'not-draggable'
      }
    ]
  }),
  actions: {}
})
