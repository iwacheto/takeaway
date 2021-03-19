import { IProject } from '../types/interfaces'

const mutations = {
    SET_DATA(state: any, value: IProject[]) {
        state.projects = value
    },

    CREATE_PROJECT(state: any, project: IProject) {
        const prevProjects = [...state.projects]
        prevProjects.unshift(project);
        state.projects = prevProjects;
    },

    SEARCH_PROJECT(state: any, search: string) {
        const projects = [...state.projects],
            query = search.toLowerCase(),
            filteredProjects = projects.filter(item => item.name.toLowerCase().indexOf(query) >= 0);
        state.projects = filteredProjects;
    },

    DELETE_PROJECT(state: any, name: string) {
        state.projects = state.projects.filter((project: any) => project.name !== name);
    }
}

export default mutations
