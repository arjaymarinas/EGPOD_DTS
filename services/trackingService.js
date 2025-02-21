import { getTrackRecords } from "../model/trackingModel.js"

export const fetchAllTrackRecords = async () => {
    return await getTrackRecords();
}