import { fetchAllDepartments } from "../services/departmentService.js";

export const getAllDepartments = async (req, res) => {
    try {
        const departments = await fetchAllDepartments();
        return departments;
    } catch (error) {
        throw new Error("Error fetching list of departments.");
    }
}