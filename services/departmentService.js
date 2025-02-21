import { getDepartments } from "../model/departmentModel.js";

export const fetchAllDepartments = async () => {
    return await getDepartments();
}