import { fetchAllTrackRecords } from '../services/trackingService.js';

export const getAllTrackRecords = async (req, res) => {
    try {
        const documentsInfo = await fetchAllTrackRecords();
        return documentsInfo;
    } catch (error) {
        throw new Error("Error occured while trying to get documents' tracking information.");
    }
}