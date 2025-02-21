import { fetchAllCategories } from "../services/documentCategoryService.js";

export const getAllCategories = async (req, res) => {
    try {
        const categories = await fetchAllCategories();
        return categories;
    } catch (error) {
        throw new Error("Error fetching list of categories.");
    }
}