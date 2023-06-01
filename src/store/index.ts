import { createStore } from 'vuex'
import type Note from '@/models/NoteModel'
import type ToDo from '@/models/ToDoModel'

export default createStore({
	state: {
		notes: [] as Note[],
		currentNote: {
			title: '',
			todos: [] as ToDo[],
			id: 0
		} as Note
	}

})
