import axios from 'axios';
import { IProject } from "../types/interfaces";

const actions = {

    getData({ commit }: { commit: Function }) {
        return new Promise((resolve, reject) => {
            axios.get('/projects.json')
                .then((response) => {
                    commit('SET_DATA', response.data)
                    resolve(response)
                })
                .catch((error) => { reject(error) })
        });
    },

    createProject({ commit }: { commit: Function }, project: IProject) {
        commit('CREATE_PROJECT', project)
    },

    searchProject({ commit }: { commit: Function }, search: string) {
        commit('SEARCH_PROJECT', search)
    },

    deleteData({ commit }: { commit: Function }, name: string) {
        commit('DELETE_PROJECT', name);
    },
}

export default actions
