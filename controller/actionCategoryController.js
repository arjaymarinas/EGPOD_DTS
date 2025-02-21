import { fetchAllActionCategories } from "../services/actionCategoryService.js";

export const getAllActionCategories = async (req, res) => {
    try {
        const actionCategories = await fetchAllActionCategories();
        return actionCategories;
    } catch (error) {
        throw new Error("Error fetching list of action categories.")
    }
}