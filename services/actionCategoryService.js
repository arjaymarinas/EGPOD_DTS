import { getActionCategories } from "../model/actionCategoryModel.js";

export const fetchAllActionCategories = async () => {
    return await getActionCategories();
} 