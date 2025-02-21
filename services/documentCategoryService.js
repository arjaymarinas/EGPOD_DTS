import { getCategories } from "../model/documentCategoryModel.js";

export const fetchAllCategories = async () => {
    return await getCategories();
}