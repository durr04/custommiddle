export const FETCH_STUDENT = (students) => {
    return {
        type: 'FETCH_STUDENT',
        payload: students
    }
}

export function GET_STUDENTS() {
    return (dispatch) => {
        return fetch('./actions/stud.json').then((response) => { return response.json() })
            .then((data) => {
                return dispatch(FETCH_STUDENT(data))
            })
    }
}

export const INSERT_STUDENT = (student) => {
    return {
        type: 'INSERT_STUDENT',
        payload: student
    }
}

export function ADD_STUDENTS(student) {
    return (dispatch) => {
        return dispatch(INSERT_STUDENT(student))
    }
}

export const UPDATE_STUDENT = (student) => {
    return {
        type: 'UPDATE_STUDENT',
        payload: student
    }
}

export function MODIFY_STUDENTS(student) {
    return (dispatch) => {
        return dispatch(UPDATE_STUDENT(student))
    }
}


export const DELETE_STUDENT = (student) => {
    return {
        type: 'DELETE_STUDENT',
        shouldConfirm:true,
        payload: student
    }
}



export function REMOVE_STUDENTS(student) {
    return (dispatch) => {
        return dispatch(DELETE_STUDENT(student))
    }
}


