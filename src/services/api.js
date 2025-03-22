
import { RESULTS } from '../Util/ResultsData.js';

// Simulated API delay
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

export const fetchResults = async () => {
    try {
        // Simulate API call delay
        await delay(1000);
        
        // In a real application, this would be an actual API call
        // For now, we're returning the data from ResultsData.js
        return RESULTS;
    } catch (error) {
        throw new Error('Failed to fetch results');
    }
}; 